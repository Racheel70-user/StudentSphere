const express = require("express");
const router = express.Router();

const {
    getFees,
    getStudentFees,
    recordPayment
} = require("../controllers/feeController");

router.get("/", getFees);
router.get("/student/:studentId", getStudentFees);
router.post("/student/:studentId/payment", recordPayment);

module.exports = router;
