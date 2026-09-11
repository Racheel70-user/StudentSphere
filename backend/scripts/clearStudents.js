const connectDB = require("../config/db");
const Student = require("../models/Student");

const run = async () => {
    try {
        await connectDB();
        await Student.deleteMany({});
        console.log("All student records deleted.");
    } catch (err) {
        console.error("Failed to delete student records:", err.message);
        process.exitCode = 1;
    } finally {
        process.exit();
    }
};

run();
