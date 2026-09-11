const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    studentId: { type: String, required: true, unique: true, trim: true, uppercase: true },
    password: { type: String, required: true },
    fullName: { type: String, required: true, trim: true },
    dob: { type: String, required: true, trim: true },
    birthYear: { type: Number, required: true },
    collegeName: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    phoneNumber: { type: String, required: true, trim: true },
    batch: { type: String, required: true, trim: true, uppercase: true },
    program: { type: String, required: true, trim: true, default: "Diploma in Information Technology" },
    address: { type: String, required: true, trim: true },
    courses: [{ type: String, trim: true }],
    assignedFaculty: [{ type: String, trim: true, uppercase: true }],
    fees: {
        total: { type: Number, required: true, default: 50000 },
        paid: { type: Number, required: true, default: 0 },
        status: { type: String, enum: ["Paid", "Pending"], default: "Pending" },
        paymentDate: { type: String, trim: true, default: "" },
        paymentMethod: { type: String, trim: true, default: "" },
        installments: [{
            date: { type: String, trim: true },
            amount: { type: Number, default: 0 },
            method: { type: String, trim: true }
        }]
    },
    attendance: {
        overall: { type: Number, default: 0 },
        required: { type: Number, default: 75 }
    },
    achievements: [{ type: String, trim: true }]
}, { timestamps: true });

module.exports = mongoose.model("Student",studentSchema);
