const Student = require("../models/Student");

const studentIdRegex = /^ST\d{4,}$/i;
const batchRegex = /^B\d+$/i;
const dobRegex = /^(0[1-9]|[12]\d|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/i;
const phoneRegex = /^\d{10}$/;

const normalizeText = (value) => String(value || "").trim();

const getBirthYear = (dob) => Number(dob.split("/")[2]);

const defaultPasswordFor = (fullName, birthYear) => {
    const letters = fullName.replace(/[^a-z]/gi, "").slice(0, 3).toUpperCase();
    return `${letters}${birthYear}`;
};

const publicStudent = (student) => {
    const data = student.toObject ? student.toObject() : student;
    delete data.password;
    return data;
};

const validateStudent = (body) => {
    const studentId = normalizeText(body.studentId).toUpperCase();
    const fullName = normalizeText(body.fullName);
    const dob = normalizeText(body.dob);
    const collegeName = normalizeText(body.collegeName);
    const email = normalizeText(body.email).toLowerCase();
    const phoneNumber = normalizeText(body.phoneNumber);
    const batch = normalizeText(body.batch).toUpperCase();
    const program = normalizeText(body.program) || "Diploma in Information Technology";
    const address = normalizeText(body.address);
    const courses = Array.isArray(body.courses) ? body.courses.map(normalizeText).filter(Boolean) : [];
    const assignedFaculty = Array.isArray(body.assignedFaculty)
        ? body.assignedFaculty.map((id) => normalizeText(id).toUpperCase()).filter(Boolean)
        : [];

    if (!studentIdRegex.test(studentId)) {
        return { message: "Student ID must look like ST1001." };
    }

    if (!fullName || !dob || !collegeName || !email || !phoneNumber || !batch || !address) {
        return { message: "All student fields are required." };
    }

    if (!batchRegex.test(batch)) {
        return { message: "Batch must look like B1, B2, and so on." };
    }

    if (!dobRegex.test(dob)) {
        return { message: "DOB must be in DD/MM/YYYY format." };
    }

    if (!emailRegex.test(email)) {
        return { message: "Email must be a Gmail address." };
    }

    if (!phoneRegex.test(phoneNumber)) {
        return { message: "Phone number must be exactly 10 digits." };
    }

    const birthYear = getBirthYear(dob);
    const password = normalizeText(body.password) || defaultPasswordFor(fullName, birthYear);

    return {
        data: {
            studentId,
            password,
            fullName,
            dob,
            birthYear,
            collegeName,
            email,
            phoneNumber,
            batch,
            program,
            address,
            courses,
            assignedFaculty,
            fees: body.fees,
            attendance: body.attendance,
            achievements: Array.isArray(body.achievements) ? body.achievements : []
        }
    };
};

exports.getStudents = async (req, res) => {
    try {
        const students = await Student.find().sort({ batch: 1, studentId: 1, fullName: 1 });
        res.json(students.map(publicStudent));
    } catch (err) {
        res.status(500).json({ message: "Failed to load students" });
    }
};

exports.getStudentByStudentId = async (req, res) => {
    try {
        const student = await Student.findOne({
            studentId: String(req.params.studentId || "").toUpperCase()
        });

        if (!student) {
            return res.status(404).json({ message: "Student not found" });
        }

        res.json(publicStudent(student));
    } catch (err) {
        res.status(500).json({ message: "Failed to load student" });
    }
};

exports.updateStudentProfile = async (req, res) => {
    try {
        const allowedFields = ["fullName", "dob", "email", "phoneNumber", "address", "program"];
        const updates = {};

        allowedFields.forEach((field) => {
            if (Object.prototype.hasOwnProperty.call(req.body, field)) {
                updates[field] = normalizeText(req.body[field]);
            }
        });

        if (updates.fullName && !/^[A-Za-z ]+$/.test(updates.fullName)) {
            return res.status(400).json({ message: "Name can contain letters and spaces only." });
        }
        if (updates.email && !emailRegex.test(updates.email)) {
            return res.status(400).json({ message: "Please use a valid Gmail address." });
        }
        if (updates.phoneNumber && !phoneRegex.test(updates.phoneNumber)) {
            return res.status(400).json({ message: "Phone number must be exactly 10 digits." });
        }
        if (updates.dob && !dobRegex.test(updates.dob)) {
            return res.status(400).json({ message: "DOB must be in DD/MM/YYYY format." });
        }

        const student = await Student.findOneAndUpdate(
            { studentId: String(req.params.studentId || "").toUpperCase() },
            { $set: updates },
            { new: true, runValidators: true }
        );

        if (!student) return res.status(404).json({ message: "Student not found" });
        res.json(publicStudent(student));
    } catch (err) {
        res.status(500).json({ message: "Failed to update student profile" });
    }
};

exports.createStudent = async (req, res) => {
    try {
        const validated = validateStudent(req.body);

        if (validated.message) {
            return res.status(400).json({ message: validated.message });
        }

        const { studentId } = validated.data;
        const existingStudent = await Student.findOne({ studentId });

        if (existingStudent) {
            return res.status(400).json({
                message: "That student ID already exists."
            });
        }

        const student = await Student.create(validated.data);
        res.status(201).json(publicStudent(student));
    } catch (err) {
        res.status(500).json({ message: "Failed to create student" });
    }
};

exports.deleteStudent = async (req, res) => {
    try {
        const student = await Student.findByIdAndDelete(req.params.id);

        if (!student) {
            return res.status(404).json({ message: "Student not found" });
        }

        res.json({ message: "Student deleted" });
    } catch (err) {
        res.status(500).json({ message: "Failed to delete student" });
    }
};

exports.deleteAllStudents = async (req, res) => {
    try {
        await Student.deleteMany({});
        res.json({ message: "All students deleted" });
    } catch (err) {
        res.status(500).json({ message: "Failed to delete all students" });
    }
};

exports.publicStudent = publicStudent;
