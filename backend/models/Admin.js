const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
    adminId: { type: String, required: true, unique: true, trim: true, uppercase: true },
    password: { type: String, required: true },
    name: { type: String, required: true, trim: true },
    role: { type: String, required: true, trim: true, default: "Admin" },
    email: { type: String, required: true, trim: true, lowercase: true }
}, { timestamps: true });

module.exports = mongoose.model("Admin", adminSchema);
