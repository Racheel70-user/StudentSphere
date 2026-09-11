const express = require("express");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const connectDB = require("./config/db");

const studentRoutes = require("./routes/studentRoutes");
const authRoutes = require("./routes/authRoutes");
const courseRoutes = require("./routes/courseRoutes");
const feeRoutes = require("./routes/feeRoutes");

const app = express();

connectDB();

app.use(cors());

app.use(express.json());

app.get("/api/health", (req, res) => {
    res.json({ status: "ok", database: "MongoDB" });
});

app.use("/api/auth", authRoutes);
app.use("/api/students", studentRoutes);
app.use("/api/courses", courseRoutes);
app.use("/api/fees", feeRoutes);

const rootDir = path.join(__dirname, "..");

[
    ["auth", "auth"],
    ["student-dashboard", "student-dashboard"],
    ["admin-dashboard", "admin-dashboard"],
    ["super-admin", "super-admin"],
    ["faculty", "faculty"],
    ["courses", "courses"],
    ["fees", "fees"],
    ["reports", "reports"],
    ["shared", "shared"]
].forEach(([routePath, folderName]) => {
    app.use(`/${routePath}`, express.static(path.join(rootDir, folderName)));
});

app.get("/", (req, res) => {
    res.sendFile(path.join(rootDir, "auth", "index.html"));
});

const PORT = process.env.PORT || 3000;

app.listen(PORT,()=>{

    console.log(`Server Running on http://localhost:${PORT}`);

});
