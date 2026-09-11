const express = require("express");

const router = express.Router();

const {
    getStudents,
    getStudentByStudentId,
    updateStudentProfile,
    createStudent,
    deleteStudent,
    deleteAllStudents
} = require("../controllers/studentController");

router.get("/", getStudents);
router.get("/student-id/:studentId", getStudentByStudentId);
router.put("/student-id/:studentId", updateStudentProfile);
router.post("/", createStudent);
router.delete("/", deleteAllStudents);
router.delete("/:id", deleteStudent);

module.exports = router;
