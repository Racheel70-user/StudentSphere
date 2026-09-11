const mongoose = require("mongoose");

const facultySchema = new mongoose.Schema({
    facultyId: { type: String, required: true, unique: true, trim: true, uppercase: true },
    password: { type: String, required: true },
    name: { type: String, required: true, trim: true },
    initials: { type: String, required: true, trim: true, uppercase: true },
    department: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    assignedBatches: [{ type: String, trim: true, uppercase: true }],
    assignedCourses: [{ type: String, trim: true }]
}, { timestamps: true });

module.exports = mongoose.model("Faculty", facultySchema);
