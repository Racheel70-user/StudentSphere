const express = require("express");
const router = express.Router();

const {
    studentLogin,
    facultyLogin,
    adminLogin,
    mainAdminLogin,
    studentSignup,
    forgotPasswordCheck
} = require("../controllers/authController");

router.post("/student-login", studentLogin);
router.post("/faculty-login", facultyLogin);
router.post("/admin-login", adminLogin);
router.post("/main-admin-login", mainAdminLogin);
router.post("/student-signup", studentSignup);
router.post("/forgot-password", forgotPasswordCheck);

module.exports = router;
