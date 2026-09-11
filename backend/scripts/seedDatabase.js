require("dotenv").config();

const connectDB = require("../config/db");
const Student = require("../models/Student");
const Faculty = require("../models/Faculty");
const Admin = require("../models/Admin");
const Course = require("../models/Course");

const firstNames = [
    "Racheel", "Prajwal", "Harshal", "Krushna", "Pruthviraj", "Aditi",
    "Aarav", "Ananya", "Riya", "Rohan", "Sneha", "Ishaan",
    "Meera", "Vivaan", "Karan", "Tanvi", "Nikhil", "Pooja",
    "Aditya", "Priya", "Akash", "Sahil", "Rahul", "Neha",
    "Aryan", "Aaryan", "Sakshi", "Omkar", "Vedant", "Kavya"
];

const lastNames = [
    "Kolhe", "Pawar", "Sawant", "Thakare", "Jadhav", "Patil",
    "Joshi", "Kulkarni", "Deshmukh", "Sharma", "Gupta", "Singh",
    "Yadav", "More", "Kadam", "Shinde", "Chavan", "Kale",
    "Dighe", "Rane"
];

const courseTemplates = [
    {
        courseId: "CRS-JAVA",
        code: "CS601",
        name: "Java Programming",
        subtitle: "Object-Oriented Programming",
        duration: "6 Months",
        seats: 60,
        level: "Beginner to Advanced",
        price: 15000,
        description: "Master Java programming, OOP concepts, collections, and practical application building.",
        icon: "fa-brands fa-java",
        facultyId: "FAC-2016-047",
        batches: ["B1", "B2", "B3", "B4", "B5", "B6", "B7"]
    },
    {
        courseId: "CRS-DBMS",
        code: "CS602",
        name: "Database Management",
        subtitle: "Schema Design and Querying",
        duration: "4 Months",
        seats: 60,
        level: "Intermediate",
        price: 12000,
        description: "Learn database modeling, SQL foundations, normalization, indexing, and MongoDB basics.",
        icon: "fa-solid fa-database",
        facultyId: "FAC-2018-082",
        batches: ["B1", "B2", "B3", "B4", "B5", "B6", "B7"]
    },
    {
        courseId: "CRS-PYTHON",
        code: "CS603",
        name: "Python Programming",
        subtitle: "Automation and Data Basics",
        duration: "6 Months",
        seats: 60,
        level: "Beginner to Advanced",
        price: 15000,
        description: "Build a strong Python base with data structures, file handling, automation, and projects.",
        icon: "fa-brands fa-python",
        facultyId: "FAC-2019-116",
        batches: ["B1", "B2", "B3", "B4", "B5", "B6", "B7"]
    },
    {
        courseId: "CRS-WEB",
        code: "CS604",
        name: "Web Development",
        subtitle: "HTML, CSS, JavaScript",
        duration: "5 Months",
        seats: 60,
        level: "Beginner",
        price: 13000,
        description: "Create responsive interfaces and interactive browser experiences using web fundamentals.",
        icon: "fa-solid fa-globe",
        facultyId: "FAC-2020-154",
        batches: ["B1", "B2", "B3", "B4", "B5", "B6", "B7"]
    },
    {
        courseId: "CRS-NET",
        code: "CS605",
        name: "Data Communication",
        subtitle: "Networks and Communication",
        duration: "4 Months",
        seats: 60,
        level: "Intermediate",
        price: 11000,
        description: "Understand network topologies, protocols, addressing, routing, and campus network design.",
        icon: "fa-solid fa-network-wired",
        facultyId: "FAC-2021-188",
        batches: ["B1", "B2", "B3", "B4", "B5", "B6", "B7"]
    },
    {
        courseId: "CRS-CPP",
        code: "CS606",
        name: "C++ Programming",
        subtitle: "Advanced OOP and Performance",
        duration: "5 Months",
        seats: 60,
        level: "Intermediate",
        price: 12000,
        description: "Learn classes, memory, STL, templates, and performance-focused programming patterns.",
        icon: "fa-solid fa-code",
        facultyId: "FAC-2016-047",
        batches: ["B1", "B2", "B3", "B4", "B5", "B6", "B7"]
    }
];

const faculty = [
    {
        facultyId: "FAC-2016-047",
        password: "Ananya@2026",
        name: "Dr. Ananya Sharma",
        initials: "AS",
        department: "Computer Science & Engineering",
        email: "ananya.sharma@Stud.edu",
        assignedBatches: ["B1", "B2"],
        assignedCourses: ["Java Programming", "C++ Programming"]
    },
    {
        facultyId: "FAC-2018-082",
        password: "Rajiv@2026",
        name: "Dr. Rajiv Kapoor",
        initials: "RK",
        department: "Information Technology",
        email: "rajiv.kapoor@Stud.edu",
        assignedBatches: ["B3", "B4"],
        assignedCourses: ["Database Management"]
    },
    {
        facultyId: "FAC-2019-116",
        password: "Meera@2026",
        name: "Prof. Meera Gawale",
        initials: "MG",
        department: "Computer Science & Engineering",
        email: "meera.gawale@Stud.edu",
        assignedBatches: ["B5"],
        assignedCourses: ["Python Programming"]
    },
    {
        facultyId: "FAC-2020-154",
        password: "Sanjay@2026",
        name: "Prof. Sanjay Jadhav",
        initials: "SJ",
        department: "Information Technology",
        email: "sanjay.jadhav@Stud.edu",
        assignedBatches: ["B6"],
        assignedCourses: ["Web Development"]
    },
    {
        facultyId: "FAC-2021-188",
        password: "Madhuri@2026",
        name: "Mrs. Madhuri Patil",
        initials: "MP",
        department: "Computer Science & Engineering",
        email: "madhuri.patil@Stud.edu",
        assignedBatches: ["B7"],
        assignedCourses: ["Data Communication"]
    }
];

const admins = [
    {
        adminId: "ADM-0001",
        password: "Admin@2026",
        name: "Super Admin",
        role: "Super Admin",
        email: "admin@Stud.edu"
    },
    {
        adminId: "ADM-0002",
        password: "Desk@2026",
        name: "Admin Desk",
        role: "Admin",
        email: "desk@Stud.edu"
    }
];

const passwordFor = (name, birthYear) => {
    const prefix = name.replace(/[^a-z]/gi, "").slice(0, 3).toUpperCase();
    return `${prefix}${birthYear}`;
};

const pad = (value) => String(value).padStart(2, "0");

const assignedFacultyForBatch = (batch) => {
    return faculty
        .filter((member) => member.assignedBatches.includes(batch))
        .map((member) => member.facultyId);
};

const buildStudents = () => {
    const students = [];

    for (let index = 0; index < 210; index += 1) {
        const studentId = `ST${1001 + index}`;
        const batch = `B${Math.floor(index / 30) + 1}`;
        const firstName = index === 0 ? "Racheel" : firstNames[index % firstNames.length];
        const lastName = index === 0 ? "Kolhe" : lastNames[(index * 3) % lastNames.length];
        const fullName = `${firstName} ${lastName}`;
        const birthYear = index === 0 ? 2008 : 2005 + (index % 5);
        const dob = `${pad((index % 27) + 1)}/${pad((index % 12) + 1)}/${birthYear}`;
        const total = 50000 + ((index % 4) * 5000);
        const paid = index % 5 === 0 ? total : Math.max(15000, total - ((index % 3) + 1) * 10000);
        const status = paid >= total ? "Paid" : "Pending";
        const courseNames = courseTemplates
            .slice(index % 2, (index % 2) + 4)
            .map((course) => course.name);

        students.push({
            studentId,
            password: passwordFor(fullName, birthYear),
            fullName,
            dob,
            birthYear,
            collegeName: "Stud Institute of Technology",
            email: `${firstName.toLowerCase()}.${lastName.toLowerCase()}${studentId.toLowerCase()}@gmail.com`,
            phoneNumber: `9${String(100000000 + index).slice(0, 9)}`,
            batch,
            program: "Diploma in Information Technology",
            address: `${100 + index} MG Road, Nashik, Maharashtra`,
            courses: courseNames,
            assignedFaculty: assignedFacultyForBatch(batch),
            fees: {
                total,
                paid,
                status,
                paymentDate: paid > 0 ? "2026-07-21" : "",
                paymentMethod: paid > 0 ? (index % 2 === 0 ? "Online" : "Cash") : "",
                installments: paid > 0 ? [
                    {
                        date: "2026-07-10",
                        amount: Math.min(paid, 25000),
                        method: index % 2 === 0 ? "Online" : "Cash"
                    },
                    ...(paid > 25000 ? [{
                        date: "2026-07-21",
                        amount: paid - 25000,
                        method: "Online"
                    }] : [])
                ] : []
            },
            attendance: {
                overall: 82 + (index % 15),
                required: 75
            },
            achievements: index % 6 === 0 ? ["Perfect Attendance"] : []
        });
    }

    return students;
};

const run = async () => {
    try {
        await connectDB();

        await Promise.all([
            Student.deleteMany({}),
            Faculty.deleteMany({}),
            Admin.deleteMany({}),
            Course.deleteMany({})
        ]);

        const students = buildStudents();

        await Promise.all([
            Student.insertMany(students),
            Faculty.insertMany(faculty),
            Admin.insertMany(admins),
            Course.insertMany(courseTemplates)
        ]);

        console.log("Seed complete.");
        console.log(`Students: ${students.length}`);
        console.log("Batches: B1-B7, 30 students each");
        console.log("Sample student login: ST1001 / RAC2008");
        console.log("Sample faculty login: FAC-2016-047 / Ananya@2026");
    } catch (err) {
        console.error("Seed failed:", err.message);
        process.exitCode = 1;
    } finally {
        process.exit();
    }
};

run();

