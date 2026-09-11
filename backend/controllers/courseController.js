const Course = require("../models/Course");
const Student = require("../models/Student");

exports.getCourses = async (req, res) => {
    try {
        const studentId = String(req.query.studentId || "").trim().toUpperCase();
        const student = studentId ? await Student.findOne({ studentId }) : null;

        const query = student ? { batches: student.batch } : {};
        const courses = await Course.find(query).sort({ code: 1 });

        res.json({
            student: student ? {
                studentId: student.studentId,
                name: student.fullName,
                batch: student.batch,
                program: student.program
            } : null,
            courses
        });
    } catch (err) {
        res.status(500).json({ message: "Failed to load courses" });
    }
};
