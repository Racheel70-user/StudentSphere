const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
    courseId: { type: String, required: true, unique: true, trim: true, uppercase: true },
    code: { type: String, required: true, trim: true, uppercase: true },
    name: { type: String, required: true, trim: true },
    subtitle: { type: String, required: true, trim: true },
    duration: { type: String, required: true, trim: true },
    seats: { type: Number, required: true, default: 60 },
    level: { type: String, required: true, trim: true },
    price: { type: Number, required: true },
    description: { type: String, required: true, trim: true },
    icon: { type: String, required: true, trim: true },
    facultyId: { type: String, trim: true, uppercase: true },
    batches: [{ type: String, trim: true, uppercase: true }]
}, { timestamps: true });

module.exports = mongoose.model("Course", courseSchema);
