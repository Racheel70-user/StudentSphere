const Student = require("../models/Student");

const feeRecord = (student) => {
    const fees = student.fees || {};
    const total = fees.total || 0;
    const paid = fees.paid || 0;

    return {
        id: student.studentId,
        studentId: student.studentId,
        name: student.fullName,
        email: student.email,
        course: student.program,
        batch: student.batch,
        total,
        paid,
        pending: Math.max(total - paid, 0),
        status: fees.status || (paid >= total ? "Paid" : "Pending"),
        paymentDate: fees.paymentDate || "",
        paymentMethod: fees.paymentMethod || "",
        installments: fees.installments || []
    };
};

exports.getStudentFees = async (req, res) => {
    try {
        const studentId = String(req.params.studentId || "").toUpperCase();
        const student = await Student.findOne({ studentId });

        if (!student) {
            return res.status(404).json({ message: "Student not found" });
        }

        res.json(feeRecord(student));
    } catch (err) {
        res.status(500).json({ message: "Failed to load fee record" });
    }
};

exports.getFees = async (req, res) => {
    try {
        const studentId = String(req.query.studentId || "").trim().toUpperCase();
        const query = studentId ? { studentId } : {};
        const students = await Student.find(query).sort({ batch: 1, studentId: 1 });
        res.json(students.map(feeRecord));
    } catch (err) {
        res.status(500).json({ message: "Failed to load fee records" });
    }
};

exports.recordPayment = async (req, res) => {
    try {
        const studentId = String(req.params.studentId || req.body.studentId || "").toUpperCase();
        const amount = Number(req.body.amount);
        const method = String(req.body.method || "").trim();
        const date = String(req.body.date || new Date().toISOString().slice(0, 10)).trim();

        if (!studentId || !amount || amount <= 0 || !method) {
            return res.status(400).json({ message: "Student ID, amount, and method are required." });
        }

        const student = await Student.findOne({ studentId });
        if (!student) {
            return res.status(404).json({ message: "Student not found" });
        }

        const remaining = Math.max(student.fees.total - student.fees.paid, 0);
        const appliedAmount = Math.min(amount, remaining);

        if (appliedAmount <= 0) {
            return res.status(400).json({ message: "Full fee is already paid." });
        }

        student.fees.paid += appliedAmount;
        student.fees.paymentDate = date;
        student.fees.paymentMethod = method;
        student.fees.installments.push({ date, amount: appliedAmount, method });
        student.fees.status = student.fees.paid >= student.fees.total ? "Paid" : "Pending";

        await student.save();

        res.json(feeRecord(student));
    } catch (err) {
        res.status(500).json({ message: "Failed to record payment" });
    }
};
