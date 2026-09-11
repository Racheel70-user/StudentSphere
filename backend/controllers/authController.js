const Student = require("../models/Student");
const Faculty = require("../models/Faculty");
const Admin = require("../models/Admin");
const { publicStudent } = require("./studentController");

const cleanId = (value) => String(value || "").trim().toUpperCase();
const cleanPassword = (value) => String(value || "").trim();
const cleanRole = (value) => String(value || "").trim().toLowerCase();
const cleanText = (value) => String(value || "").trim();

const facultySession = (faculty) => ({
    role: "faculty",
    id: faculty.facultyId,
    name: faculty.name,
    initials: faculty.initials,
    department: faculty.department,
    assignedBatches: faculty.assignedBatches,
    assignedCourses: faculty.assignedCourses
});

const adminSession = (admin, role) => ({
    role,
    id: admin.adminId,
    name: admin.name,
    adminRole: admin.role,
    email: admin.email
});

const studentInitials = (name) =>
    cleanText(name)
        .split(/\s+/)
        .filter(Boolean)
        .slice(0, 2)
        .map((part) => part.charAt(0).toUpperCase())
        .join("");

const nextStudentId = async () => {
    const latest = await Student.findOne({ studentId: /^ST\d+$/ })
        .sort({ studentId: -1 })
        .lean();
    const current = latest ? Number(latest.studentId.replace(/^ST/, "")) : 1000;
    return `ST${String(current + 1)}`;
};

const nextBatch = async () => {
    for (let index = 1; index <= 20; index += 1) {
        const batch = `B${index}`;
        const count = await Student.countDocuments({ batch });

        if (count < 60) {
            return batch;
        }
    }

    return `B21`;
};

exports.studentLogin = async (req, res) => {
    try {
        const studentId = cleanId(req.body.studentId || req.body.id || req.body.username);
        const password = cleanPassword(req.body.password);

        const student = await Student.findOne({ studentId });

        if (!student || student.password !== password) {
            return res.status(401).json({ message: "Incorrect student ID or password." });
        }

        res.json({
            session: {
                role: "student",
                id: student.studentId,
                name: student.fullName,
                initials: student.fullName
                    .split(/\s+/)
                    .slice(0, 2)
                    .map((part) => part.charAt(0).toUpperCase())
                    .join(""),
                batch: student.batch,
                email: student.email
            },
            student: publicStudent(student)
        });
    } catch (err) {
        res.status(500).json({ message: "Student login failed" });
    }
};

exports.facultyLogin = async (req, res) => {
    try {
        const facultyId = cleanId(req.body.facultyId || req.body.id || req.body.username);
        const password = cleanPassword(req.body.password);

        const faculty = await Faculty.findOne({ facultyId });

        if (!faculty || faculty.password !== password) {
            return res.status(401).json({ message: "Incorrect faculty ID or password." });
        }

        res.json({
            session: facultySession(faculty),
            faculty: facultySession(faculty)
        });
    } catch (err) {
        res.status(500).json({ message: "Faculty login failed" });
    }
};

exports.adminLogin = async (req, res) => {
    try {
        const adminId = cleanId(req.body.adminId || req.body.id || req.body.username);
        const password = cleanPassword(req.body.password);

        const admin = await Admin.findOne({ adminId });

        if (!admin || admin.password !== password || cleanRole(admin.role) !== "admin") {
            return res.status(401).json({ message: "Incorrect admin ID or password." });
        }

        res.json({
            session: adminSession(admin, "admin")
        });
    } catch (err) {
        res.status(500).json({ message: "Admin login failed" });
    }
};

exports.mainAdminLogin = async (req, res) => {
    try {
        const adminId = cleanId(req.body.adminId || req.body.id || req.body.username);
        const password = cleanPassword(req.body.password);

        const admin = await Admin.findOne({ adminId });

        if (!admin || admin.password !== password || !["super admin", "main admin"].includes(cleanRole(admin.role))) {
            return res.status(401).json({ message: "Incorrect main admin ID or password." });
        }

        res.json({
            session: adminSession(admin, "main-admin")
        });
    } catch (err) {
        res.status(500).json({ message: "Main admin login failed" });
    }
};

exports.studentSignup = async (req, res) => {
    try {
        const fullName = cleanText(req.body.fullName || req.body.name);
        const email = cleanText(req.body.email).toLowerCase();
        const phoneNumber = cleanText(req.body.phoneNumber);
        const dob = cleanText(req.body.dob);
        const collegeName = cleanText(req.body.collegeName);
        const address = cleanText(req.body.address);
        const password = cleanPassword(req.body.password);
        const batch = await nextBatch();

        if (!fullName || !email || !phoneNumber || !dob || !collegeName || !address || !password) {
            return res.status(400).json({ message: "All signup fields are required." });
        }

        if (!/^[A-Za-z ]+$/.test(fullName)) {
            return res.status(400).json({ message: "Name can contain letters and spaces only." });
        }

        if (!/^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(email)) {
            return res.status(400).json({ message: "Please use a valid Gmail address." });
        }

        if (!/^\d{10}$/.test(phoneNumber)) {
            return res.status(400).json({ message: "Phone number must be exactly 10 digits." });
        }

        if (!/^\d{2}\/\d{2}\/\d{4}$/.test(dob)) {
            return res.status(400).json({ message: "DOB must be in DD/MM/YYYY format." });
        }

        if (password.length < 8) {
            return res.status(400).json({ message: "Password must be at least 8 characters." });
        }

        const existingEmail = await Student.findOne({ email });
        if (existingEmail) {
            return res.status(400).json({ message: "That email is already registered." });
        }

        const studentId = await nextStudentId();
        const birthYear = Number(dob.split("/")[2]);
        const student = await Student.create({
            studentId,
            password,
            fullName,
            dob,
            birthYear,
            collegeName,
            email,
            phoneNumber,
            batch,
            program: cleanText(req.body.program) || "Diploma in Information Technology",
            address,
            courses: [],
            assignedFaculty: [],
            fees: {
                total: 50000,
                paid: 0,
                status: "Pending",
                paymentDate: "",
                paymentMethod: "",
                installments: []
            },
            attendance: { overall: 0, required: 75 },
            achievements: []
        });

        res.status(201).json({
            message: "Signup successful.",
            studentId: student.studentId,
            initials: studentInitials(student.fullName)
        });
    } catch (err) {
        res.status(500).json({ message: "Signup failed." });
    }
};

exports.forgotPasswordCheck = async (req, res) => {
    try {
        const email = cleanText(req.body.email).toLowerCase();

        if (!email) {
            return res.status(400).json({ message: "Email is required." });
        }

        const student = await Student.findOne({ email });
        const faculty = await Faculty.findOne({ email });
        const admin = await Admin.findOne({ email });

        if (!student && !faculty && !admin) {
            return res.status(404).json({ message: "User not registered." });
        }

        res.json({
            message: "Reset link sent to registered email.",
            registered: true
        });
    } catch (err) {
        res.status(500).json({ message: "Unable to process reset request." });
    }
};
