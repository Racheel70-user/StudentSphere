"use strict";

/* =========================================================
   STUD
   ATTENDANCE REPORT MANAGEMENT
========================================================= */


/* =========================================================
   REPORT DATA
========================================================= */

let reports = [

    {
        id: "RP101",
        name: "Aarav Sharma",
        roll: 101,
        department: "Information Technology",
        semester: "IV",
        type: "Attendance",
        status: "Ready",
        date: "29-Jul-2026",
        description:
            "Student attendance report showing monthly attendance details."
    },

    {
        id: "RP102",
        name: "Om Patil",
        roll: 102,
        department: "Computer",
        semester: "III",
        type: "Fees",
        status: "Ready",
        date: "28-Jul-2026",
        description:
            "Student fee collection and payment status report."
    },

    {
        id: "RP103",
        name: "Ved Kulkarni",
        roll: 103,
        department: "Mechanical",
        semester: "VI",
        type: "Result",
        status: "Pending",
        date: "27-Jul-2026",
        description:
            "Student result analysis report is currently pending."
    },

    {
        id: "RP104",
        name: "Krushna Jadhav",
        roll: 104,
        department: "Civil",
        semester: "II",
        type: "Merit",
        status: "Ready",
        date: "26-Jul-2026",
        description:
            "Student merit and academic performance report."
    },

    {
        id: "RP105",
        name: "Prithviraj More",
        roll: 105,
        department: "Electrical",
        semester: "I",
        type: "Attendance",
        status: "Ready",
        date: "25-Jul-2026",
        description:
            "Attendance report of the student."
    },

    {
        id: "RP106",
        name: "Rohan Shinde",
        roll: 106,
        department: "Information Technology",
        semester: "VI",
        type: "Performance",
        status: "Ready",
        date: "24-Jul-2026",
        description:
            "Overall student academic performance report."
    },

    {
        id: "RP107",
        name: "Aditya Pawar",
        roll: 107,
        department: "Computer",
        semester: "IV",
        type: "Absent",
        status: "Ready",
        date: "23-Jul-2026",
        description:
            "Student absent record and attendance analysis."
    },

    {
        id: "RP108",
        name: "Siddhant More",
        roll: 108,
        department: "Mechanical",
        semester: "V",
        type: "Result",
        status: "Ready",
        date: "22-Jul-2026",
        description:
            "Semester result report."
    },

    {
        id: "RP109",
        name: "Yash Patil",
        roll: 109,
        department: "Civil",
        semester: "III",
        type: "Scholarship",
        status: "Ready",
        date: "21-Jul-2026",
        description:
            "Scholarship eligibility and details."
    },

    {
        id: "RP110",
        name: "Rudra Deshmukh",
        roll: 110,
        department: "Electrical",
        semester: "II",
        type: "General",
        status: "Ready",
        date: "20-Jul-2026",
        description:
            "General student information report."
    },

    {
        id: "RP111",
        name: "Atharva Joshi",
        roll: 111,
        department: "Information Technology",
        semester: "V",
        type: "Attendance",
        status: "Ready",
        date: "19-Jul-2026",
        description:
            "Detailed student attendance report."
    },

    {
        id: "RP112",
        name: "Soham Wagh",
        roll: 112,
        department: "Computer",
        semester: "I",
        type: "Performance",
        status: "Pending",
        date: "18-Jul-2026",
        description:
            "Student performance report is under process."
    },

    {
        id: "RP113",
        name: "Manas Borse",
        roll: 113,
        department: "Mechanical",
        semester: "VI",
        type: "Merit",
        status: "Ready",
        date: "17-Jul-2026",
        description:
            "Merit list and academic performance report."
    },

    {
        id: "RP114",
        name: "Harsh Chavan",
        roll: 114,
        department: "Civil",
        semester: "IV",
        type: "Fees",
        status: "Ready",
        date: "16-Jul-2026",
        description:
            "Student fee payment report."
    }

];


/* =========================================================
   ATTENDANCE DATA
========================================================= */

const attendanceData = [

    {
        roll: 101,
        name: "Aarav Sharma",
        department: "Information Technology",
        present: 22,
        absent: 2,
        leave: 1,
        workingDays: 25
    },

    {
        roll: 102,
        name: "Om Patil",
        department: "Computer",
        present: 20,
        absent: 3,
        leave: 2,
        workingDays: 25
    },

    {
        roll: 103,
        name: "Ved Kulkarni",
        department: "Mechanical",
        present: 23,
        absent: 1,
        leave: 1,
        workingDays: 25
    },

    {
        roll: 104,
        name: "Krushna Jadhav",
        department: "Civil",
        present: 19,
        absent: 4,
        leave: 2,
        workingDays: 25
    },

    {
        roll: 105,
        name: "Prithviraj More",
        department: "Electrical",
        present: 24,
        absent: 1,
        leave: 0,
        workingDays: 25
    },

    {
        roll: 106,
        name: "Rohan Shinde",
        department: "Information Technology",
        present: 21,
        absent: 2,
        leave: 2,
        workingDays: 25
    },

    {
        roll: 107,
        name: "Aditya Pawar",
        department: "Computer",
        present: 18,
        absent: 5,
        leave: 2,
        workingDays: 25
    },

    {
        roll: 108,
        name: "Siddhant More",
        department: "Mechanical",
        present: 22,
        absent: 2,
        leave: 1,
        workingDays: 25
    },

    {
        roll: 109,
        name: "Yash Patil",
        department: "Civil",
        present: 20,
        absent: 3,
        leave: 2,
        workingDays: 25
    },

    {
        roll: 110,
        name: "Rudra Deshmukh",
        department: "Electrical",
        present: 23,
        absent: 1,
        leave: 1,
        workingDays: 25
    },

    {
        roll: 111,
        name: "Atharva Joshi",
        department: "Information Technology",
        present: 21,
        absent: 3,
        leave: 1,
        workingDays: 25
    },

    {
        roll: 112,
        name: "Soham Wagh",
        department: "Computer",
        present: 19,
        absent: 4,
        leave: 2,
        workingDays: 25
    },

    {
        roll: 113,
        name: "Manas Borse",
        department: "Mechanical",
        present: 24,
        absent: 1,
        leave: 0,
        workingDays: 25
    },

    {
        roll: 114,
        name: "Harsh Chavan",
        department: "Civil",
        present: 22,
        absent: 2,
        leave: 1,
        workingDays: 25
    }

];


/* =========================================================
   VARIABLES
========================================================= */

let showAll = false;
let currentViewReport = null;
let attendanceReportResult = [];


/* =========================================================
   DOM
========================================================= */

const $ = (id) => document.getElementById(id);


/* =========================================================
   INITIALIZATION
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    initializePage();

});


function initializePage() {

    populateStudents();

    populateDepartments();

    populateReportDepartments();

    setDefaultMonth();

    updateScopeFields();

    updateDateFields();

    renderReports();

    setupEvents();

}


/* =========================================================
   EVENTS
========================================================= */

function setupEvents() {

    /* Scope radio buttons */

    document.querySelectorAll(
        'input[name="reportScope"]'
    ).forEach(function (radio) {

        radio.addEventListener(
            "change",
            updateScopeFields
        );

    });


    /* Date type */

    document.querySelectorAll(
        'input[name="dateType"]'
    ).forEach(function (radio) {

        radio.addEventListener(
            "change",
            updateDateFields
        );

    });


    /* Generate */

    $("generateReportBtn")?.addEventListener(
        "click",
        generateAttendanceReport
    );


    /* Reset */

    $("resetReportBtn")?.addEventListener(
        "click",
        resetReportForm
    );


    /* Search */

    $("searchInput")?.addEventListener(
        "input",
        function () {

            showAll = false;
            renderReports();

        }
    );


    /* Show More */

    $("showMoreBtn")?.addEventListener(
        "click",
        function () {

            showAll = !showAll;

            renderReports();

        }
    );


    /* Multi select */

    $("multiSelectButton")?.addEventListener(
        "click",
        function (event) {

            event.stopPropagation();

            $("multiSelectDropdown")?.classList.toggle(
                "show"
            );

        }
    );


    $("selectAllStudents")?.addEventListener(
        "change",
        function () {

            const checked =
                this.checked;

            document.querySelectorAll(
                ".student-checkbox input"
            ).forEach(function (checkbox) {

                checkbox.checked = checked;

            });

            updateSelectedStudentsText();

        }
    );


    /* PDF */

    $("overallPdfBtn")?.addEventListener(
        "click",
        downloadAttendancePDF
    );


    /* Excel */

    $("overallExcelBtn")?.addEventListener(
        "click",
        downloadAttendanceExcel
    );


    /* Profile */

    $("profileArea")?.addEventListener(
        "click",
        function (event) {

            event.stopPropagation();

            $("profileDropdown")?.classList.toggle(
                "show"
            );

        }
    );


    $("profileOption")?.addEventListener(
        "click",
        function (event) {

            event.stopPropagation();

            $("profileDropdown")?.classList.remove(
                "show"
            );

            $("profileModal")?.classList.add(
                "show"
            );

        }
    );


    $("logoutOption")?.addEventListener(
        "click",
        function (event) {

            event.stopPropagation();

            $("profileDropdown")?.classList.remove(
                "show"
            );

            if (
                confirm(
                    "Are you sure you want to logout?"
                )
            ) {
                window.location.href = "/auth/index.html";

            }

        }
    );


    $("closeProfileModal")?.addEventListener(
        "click",
        function () {

            $("profileModal")?.classList.remove(
                "show"
            );

        }
    );


    /* Create report button is generated below */

    createAddReportButton();


    /* Modal */

    $("closeModal")?.addEventListener(
        "click",
        closeReportModal
    );

    $("cancelModal")?.addEventListener(
        "click",
        closeReportModal
    );


    $("reportForm")?.addEventListener(
        "submit",
        saveReport
    );


    /* View modal */

    $("closeViewModal")?.addEventListener(
        "click",
        closeViewReport
    );

    $("closeViewBtn")?.addEventListener(
        "click",
        closeViewReport
    );


    $("viewPdfBtn")?.addEventListener(
        "click",
        function () {

            if (currentViewReport) {

                generatePrintableReport(
                    currentViewReport
                );

            }

        }
    );


    /* Outside click */

    document.addEventListener(
        "click",
        function () {

            $("profileDropdown")?.classList.remove(
                "show"
            );

            $("multiSelectDropdown")?.classList.remove(
                "show"
            );

        }
    );


    /* ESC */

    document.addEventListener(
        "keydown",
        function (event) {

            if (event.key !== "Escape") {
                return;
            }

            closeReportModal();
            closeViewReport();

            $("profileModal")?.classList.remove(
                "show"
            );

            $("profileDropdown")?.classList.remove(
                "show"
            );

            $("multiSelectDropdown")?.classList.remove(
                "show"
            );

        }
    );

}


/* =========================================================
   ADD REPORT BUTTON
========================================================= */

function createAddReportButton() {

    const header =
        document.querySelector(".reports-header");

    if (!header) {
        return;
    }

    if ($("createReportBtn")) {
        return;
    }

    const button =
        document.createElement("button");

    button.type = "button";
    button.id = "createReportBtn";
    button.className = "generate-btn";

    button.innerHTML =
        '<i class="fa-solid fa-plus"></i> Create Report';

    button.addEventListener(
        "click",
        openCreateModal
    );

    header.appendChild(button);

}


/* =========================================================
   POPULATE STUDENTS
========================================================= */

function populateStudents() {

    const select =
        $("studentSelect");

    const checkboxList =
        $("studentCheckboxList");

    if (select) {

        select.innerHTML =
            '<option value="">Select Student</option>';

        attendanceData
            .slice()
            .sort(
                (a, b) => a.roll - b.roll
            )
            .forEach(function (student) {

                const option =
                    document.createElement("option");

                option.value =
                    String(student.roll);

                option.textContent =
                    `${student.name} - ${student.roll}`;

                select.appendChild(option);

            });

    }


    if (checkboxList) {

        checkboxList.innerHTML = "";

        attendanceData
            .slice()
            .sort(
                (a, b) => a.roll - b.roll
            )
            .forEach(function (student) {

                const label =
                    document.createElement("label");

                label.className =
                    "student-checkbox";

                label.innerHTML = `

                    <input
                        type="checkbox"
                        value="${student.roll}">

                    <span>
                        ${escapeHTML(student.name)}
                        - ${student.roll}
                    </span>

                `;

                const checkbox =
                    label.querySelector("input");

                checkbox.addEventListener(
                    "change",
                    updateSelectedStudentsText
                );

                checkboxList.appendChild(label);

            });

    }

}


/* =========================================================
   POPULATE DEPARTMENTS
========================================================= */

function populateDepartments() {

    const select =
        $("branchSelect");

    if (!select) {
        return;
    }

    select.innerHTML =
        '<option value="">Select Branch</option>';

    const departments =
        [
            ...new Set(
                attendanceData.map(
                    student => student.department
                )
            )
        ].sort();

    departments.forEach(function (department) {

        const option =
            document.createElement("option");

        option.value =
            department;

        option.textContent =
            department;

        select.appendChild(option);

    });

}


/* =========================================================
   REPORT DEPARTMENTS
========================================================= */

function populateReportDepartments() {

    const select =
        $("department");

    if (!select) {
        return;
    }

    select.innerHTML =
        '<option value="">Select Department</option>';

    const departments =
        [
            ...new Set(
                attendanceData.map(
                    student => student.department
                )
            )
        ].sort();

    departments.forEach(function (department) {

        const option =
            document.createElement("option");

        option.value =
            department;

        option.textContent =
            department;

        select.appendChild(option);

    });

}


/* =========================================================
   SCOPE
========================================================= */

function getScope() {

    const selected =
        document.querySelector(
            'input[name="reportScope"]:checked'
        );

    return selected
        ? selected.value
        : "student";

}


function updateScopeFields() {

    const scope =
        getScope();

    $("studentFilter")?.classList.add(
        "hidden"
    );

    $("selectiveFilter")?.classList.add(
        "hidden"
    );

    $("branchFilter")?.classList.add(
        "hidden"
    );

    $("overallInfo")?.classList.add(
        "hidden"
    );


    if (scope === "student") {

        $("studentFilter")?.classList.remove(
            "hidden"
        );

    }

    else if (scope === "selective") {

        $("selectiveFilter")?.classList.remove(
            "hidden"
        );

    }

    else if (scope === "branch") {

        $("branchFilter")?.classList.remove(
            "hidden"
        );

    }

    else if (
        scope === "all" ||
        scope === "overall"
    ) {

        $("overallInfo")?.classList.remove(
            "hidden"
        );

    }

}


/* =========================================================
   DATE FIELDS
========================================================= */

function getDateType() {

    const selected =
        document.querySelector(
            'input[name="dateType"]:checked'
        );

    return selected
        ? selected.value
        : "month";

}


function updateDateFields() {

    const type =
        getDateType();

    if (type === "month") {

        $("monthFields")?.classList.remove(
            "hidden"
        );

        $("rangeFields")?.classList.add(
            "hidden"
        );

    } else {

        $("monthFields")?.classList.add(
            "hidden"
        );

        $("rangeFields")?.classList.remove(
            "hidden"
        );

    }

}


function setDefaultMonth() {

    const month =
        $("monthSelect");

    if (!month) {
        return;
    }

    const now =
        new Date();

    const value =
        `${now.getFullYear()}-${String(
            now.getMonth() + 1
        ).padStart(2, "0")}`;

    month.value =
        value;

}


/* =========================================================
   SELECTIVE TEXT
========================================================= */

function updateSelectedStudentsText() {

    const selected =
        Array.from(
            document.querySelectorAll(
                ".student-checkbox input:checked"
            )
        );

    const text =
        $("selectedStudentsText");

    if (!text) {
        return;
    }

    if (selected.length === 0) {

        text.textContent =
            "Select Students";

    }

    else if (
        selected.length === attendanceData.length
    ) {

        text.textContent =
            "All Students Selected";

    }

    else {

        text.textContent =
            `${selected.length} Student${
                selected.length === 1 ? "" : "s"
            } Selected`;

    }

}


/* =========================================================
   GET SELECTED STUDENTS
========================================================= */

function getSelectedStudents() {

    const scope =
        getScope();


    if (scope === "student") {

        const roll =
            $("studentSelect")?.value;

        if (!roll) {
            return [];
        }

        return attendanceData.filter(
            student =>
                String(student.roll) ===
                String(roll)
        );

    }


    if (scope === "selective") {

        const rolls =
            Array.from(
                document.querySelectorAll(
                    ".student-checkbox input:checked"
                )
            ).map(
                checkbox => String(
                    checkbox.value
                )
            );

        return attendanceData.filter(
            student =>
                rolls.includes(
                    String(student.roll)
                )
        );

    }


    if (scope === "branch") {

        const branch =
            $("branchSelect")?.value;

        if (!branch) {
            return [];
        }

        return attendanceData.filter(
            student =>
                student.department === branch
        );

    }


    if (
        scope === "all" ||
        scope === "overall"
    ) {

        return attendanceData.slice();

    }


    return [];

}


/* =========================================================
   VALIDATE DATE
========================================================= */

function validateDate() {

    const type =
        getDateType();


    if (type === "month") {

        if (!$("monthSelect")?.value) {

            alert(
                "Please select an attendance month."
            );

            return false;

        }

        return true;

    }


    const from =
        $("fromDate")?.value;

    const to =
        $("toDate")?.value;


    if (!from || !to) {

        alert(
            "Please select both From Date and To Date."
        );

        return false;

    }


    if (from > to) {

        alert(
            "From Date cannot be after To Date."
        );

        return false;

    }


    return true;

}


/* =========================================================
   ATTENDANCE CALCULATION
========================================================= */

function calculateAttendancePercentage(student) {

    if (
        !student ||
        !student.workingDays
    ) {

        return 0;

    }

    return Math.round(
        (
            student.present /
            student.workingDays
        ) * 100
    );

}


function getAttendanceStatus(percentage) {

    if (percentage >= 75) {
        return "Good";
    }

    if (percentage >= 60) {
        return "Warning";
    }

    return "Low";

}


function statusClass(status) {

    if (status === "Good") {
        return "status-good";
    }

    if (status === "Warning") {
        return "status-warning";
    }

    return "status-low";

}


function percentageClass(percentage) {

    if (percentage >= 75) {
        return "percentage-good";
    }

    if (percentage >= 60) {
        return "percentage-warning";
    }

    return "percentage-low";

}


/* =========================================================
   GENERATE ATTENDANCE
========================================================= */

function generateAttendanceReport() {

    if (!validateDate()) {
        return;
    }


    const students =
        getSelectedStudents();


    if (!students.length) {

        alert(
            "Please select at least one student, student group, or branch."
        );

        return;

    }


    attendanceReportResult =
        students.map(function (student) {

            const percentage =
                calculateAttendancePercentage(
                    student
                );

            const status =
                getAttendanceStatus(
                    percentage
                );

            return {

                roll:
                    student.roll,

                name:
                    student.name,

                department:
                    student.department,

                workingDays:
                    student.workingDays,

                present:
                    student.present,

                absent:
                    student.absent,

                leave:
                    student.leave,

                percentage:
                    percentage,

                status:
                    status

            };

        });


    renderAttendanceResult(
        attendanceReportResult
    );

}


/* =========================================================
   RENDER ATTENDANCE
========================================================= */

function renderAttendanceResult(data) {

    const container =
        $("generatedReport");

    const tbody =
        $("attendanceTableBody");


    if (!container || !tbody) {
        return;
    }


    if (!data.length) {

        container.classList.add(
            "hidden"
        );

        return;

    }


    tbody.innerHTML = "";


    data.forEach(function (student) {

        const row =
            document.createElement("tr");

        row.innerHTML = `

            <td>${student.roll}</td>

            <td>
                <strong>
                    ${escapeHTML(student.name)}
                </strong>
            </td>

            <td>
                ${escapeHTML(student.department)}
            </td>

            <td>${student.present}</td>

            <td>${student.absent}</td>

            <td>${student.leave}</td>

            <td>${student.workingDays}</td>

            <td>
                <span class="${percentageClass(
                    student.percentage
                )}">
                    ${student.percentage}%
                </span>
            </td>

            <td>
                <span class="status-badge ${statusClass(
                    student.status
                )}">
                    ${escapeHTML(student.status)}
                </span>
            </td>

        `;

        tbody.appendChild(row);

    });


    const totalStudents =
        data.length;


    const totalWorkingDays =
        data.reduce(
            (sum, student) =>
                sum + student.workingDays,
            0
        );


    const totalPresent =
        data.reduce(
            (sum, student) =>
                sum + student.present,
            0
        );


    const totalAbsent =
        data.reduce(
            (sum, student) =>
                sum + student.absent,
            0
        );


    const average =
        Math.round(
            data.reduce(
                (sum, student) =>
                    sum + student.percentage,
                0
            ) / data.length
        );


    $("resultStudents").textContent =
        totalStudents;

    $("resultWorkingDays").textContent =
        totalWorkingDays;

    $("resultPresent").textContent =
        totalPresent;

    $("resultAbsent").textContent =
        totalAbsent;

    $("resultAverage").textContent =
        `${average}%`;


    const scope =
        getScope();

    const dateText =
        getReportPeriodText();


    let title =
        "Attendance Report";


    if (scope === "student") {

        title =
            `${data[0].name} - Attendance Report`;

    }

    else if (scope === "branch") {

        title =
            `${data[0].department} - Attendance Report`;

    }

    else if (scope === "selective") {

        title =
            "Selective Students - Attendance Report";

    }

    else if (scope === "all") {

        title =
            "All Students - Attendance Report";

    }

    else if (scope === "overall") {

        title =
            "Overall Attendance Report";

    }


    $("generatedTitle").textContent =
        title;

    $("generatedSubtitle").textContent =
        `${dateText} • ${data.length} student${
            data.length === 1 ? "" : "s"
        }`;


    container.classList.remove(
        "hidden"
    );


    container.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

}


/* =========================================================
   PERIOD TEXT
========================================================= */

function getReportPeriodText() {

    const type =
        getDateType();


    if (type === "month") {

        const value =
            $("monthSelect")?.value;

        if (!value) {
            return "Attendance Period";
        }

        const parts =
            value.split("-");

        const year =
            parts[0];

        const month =
            Number(parts[1]);

        const monthNames = [

            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December"

        ];

        return `${monthNames[month - 1]} ${year}`;

    }


    const from =
        $("fromDate")?.value;

    const to =
        $("toDate")?.value;

    return `${from} to ${to}`;

}


/* =========================================================
   RESET
========================================================= */

function resetReportForm() {

    document.querySelector(
        'input[name="reportScope"][value="student"]'
    ).checked = true;


    document.querySelector(
        'input[name="dateType"][value="month"]'
    ).checked = true;


    $("studentSelect").value =
        "";

    $("branchSelect").value =
        "";

    $("fromDate").value =
        "";

    $("toDate").value =
        "";

    setDefaultMonth();


    document.querySelectorAll(
        ".student-checkbox input"
    ).forEach(
        checkbox => checkbox.checked = false
    );


    $("selectAllStudents").checked =
        false;


    updateSelectedStudentsText();

    updateScopeFields();

    updateDateFields();


    attendanceReportResult =
        [];


    $("generatedReport")?.classList.add(
        "hidden"
    );

}


/* =========================================================
   REPORT TABLE
========================================================= */

function renderReports() {

    const table =
        $("reportTable");

    if (!table) {
        return;
    }


    const search =
        (
            $("searchInput")?.value ||
            ""
        )
        .toLowerCase()
        .trim();


    let filtered =
        reports.filter(
            function (report) {

                return (

                    report.id
                        .toLowerCase()
                        .includes(search)

                    ||

                    report.name
                        .toLowerCase()
                        .includes(search)

                    ||

                    String(report.roll)
                        .includes(search)

                    ||

                    report.department
                        .toLowerCase()
                        .includes(search)

                    ||

                    report.type
                        .toLowerCase()
                        .includes(search)

                    ||

                    report.status
                        .toLowerCase()
                        .includes(search)

                );

            }
        );


    filtered.sort(
        (a, b) =>
            a.roll - b.roll
    );


    const visible =
        showAll
            ? filtered
            : filtered.slice(0, 6);


    table.innerHTML =
        "";


    if (!visible.length) {

        table.innerHTML = `

            <tr>

                <td colspan="9"
                    class="empty-report">

                    <i class="fa-solid fa-file-circle-xmark"></i>

                    No reports found.

                </td>

            </tr>

        `;

    }


    visible.forEach(function (report) {

        const row =
            document.createElement("tr");


        const status =
            report.status === "Ready"
                ? "ready"
                : "pending";


        row.innerHTML = `

            <td>
                <span class="report-id">
                    ${escapeHTML(report.id)}
                </span>
            </td>

            <td>
                <strong>
                    ${escapeHTML(report.name)}
                </strong>
            </td>

            <td>${report.roll}</td>

            <td>
                ${escapeHTML(report.department)}
            </td>

            <td>
                ${escapeHTML(report.semester)}
            </td>

            <td>
                ${escapeHTML(report.type)}
            </td>

            <td>

                <span class="status ${status}">

                    <i class="fa-solid ${
                        report.status === "Ready"
                            ? "fa-check"
                            : "fa-clock"
                    }"></i>

                    ${escapeHTML(report.status)}

                </span>

            </td>

            <td>
                ${escapeHTML(report.date)}
            </td>

            <td>

                <div class="action-buttons">

                    <button
                        type="button"
                        class="action-btn view"
                        title="View"
                        data-action="view"
                        data-id="${escapeHTML(report.id)}">

                        <i class="fa-regular fa-eye"></i>

                    </button>

                    <button
                        type="button"
                        class="action-btn edit"
                        title="Edit"
                        data-action="edit"
                        data-id="${escapeHTML(report.id)}">

                        <i class="fa-solid fa-pen"></i>

                    </button>

                    <button
                        type="button"
                        class="action-btn pdf"
                        title="PDF"
                        data-action="pdf"
                        data-id="${escapeHTML(report.id)}">

                        <i class="fa-solid fa-file-pdf"></i>

                    </button>

                    <button
                        type="button"
                        class="action-btn excel"
                        title="Excel"
                        data-action="excel"
                        data-id="${escapeHTML(report.id)}">

                        <i class="fa-solid fa-file-excel"></i>

                    </button>

                </div>

            </td>

        `;


        table.appendChild(row);

    });


    table.querySelectorAll(
        "button[data-action]"
    ).forEach(function (button) {

        button.addEventListener(
            "click",
            function () {

                const action =
                    this.dataset.action;

                const id =
                    this.dataset.id;


                if (action === "view") {
                    viewReport(id);
                }

                else if (action === "edit") {
                    editReport(id);
                }

                else if (action === "pdf") {
                    downloadPDF(id);
                }

                else if (action === "excel") {
                    downloadExcel(id);
                }

            }
        );

    });


    updateStatistics(filtered);

    updateShowMoreButton(
        filtered.length
    );

}


/* =========================================================
   STATISTICS
========================================================= */

function updateStatistics(data) {

    $("totalReports").textContent =
        data.length;


    $("readyReports").textContent =
        data.filter(
            report =>
                report.status === "Ready"
        ).length;


    $("pendingReports").textContent =
        data.filter(
            report =>
                report.status === "Pending"
        ).length;


    $("studentsCovered").textContent =
        new Set(
            data.map(
                report => report.roll
            )
        ).size;


    $("reportCount").textContent =
        `Showing ${data.length} report${
            data.length === 1 ? "" : "s"
        }`;

}


/* =========================================================
   SHOW MORE
========================================================= */

function updateShowMoreButton(total) {

    const button =
        $("showMoreBtn");

    if (!button) {
        return;
    }


    if (total <= 6) {

        button.style.display =
            "none";

        return;

    }


    button.style.display =
        "flex";


    if (showAll) {

        button.innerHTML =
            'Show Less <i class="fa-solid fa-chevron-up"></i>';

    }

    else {

        button.innerHTML =
            'Show More <i class="fa-solid fa-chevron-down"></i>';

    }

}


/* =========================================================
   CREATE MODAL
========================================================= */

function openCreateModal() {

    $("reportForm")?.reset();

    $("editReportId").value =
        "";

    $("modalTitle").textContent =
        "Create Student Report";

    $("reportModal")?.classList.add(
        "show"
    );

}


/* =========================================================
   CLOSE MODAL
========================================================= */

function closeReportModal() {

    $("reportModal")?.classList.remove(
        "show"
    );

}


/* =========================================================
   SAVE REPORT
========================================================= */

function saveReport(event) {

    event.preventDefault();


    const name =
        $("studentName").value.trim();


    const roll =
        Number(
            $("rollNumber").value
        );


    const department =
        $("department").value;


    const semester =
        $("semester").value;


    const type =
        $("reportType").value;


    const status =
        $("reportStatus").value;


    const description =
        $("reportDescription").value.trim();


    if (
        !name ||
        !roll ||
        !department ||
        !semester ||
        !type
    ) {

        alert(
            "Please fill all required fields."
        );

        return;

    }


    const editId =
        $("editReportId").value;


    if (editId) {

        const report =
            reports.find(
                report =>
                    report.id === editId
            );


        if (report) {

            report.name =
                name;

            report.roll =
                roll;

            report.department =
                department;

            report.semester =
                semester;

            report.type =
                type;

            report.status =
                status;

            report.description =
                description ||
                "Student report.";

        }


        alert(
            "Report updated successfully."
        );

    }

    else {

        reports.push({

            id:
                generateReportId(),

            name:
                name,

            roll:
                roll,

            department:
                department,

            semester:
                semester,

            type:
                type,

            status:
                status,

            date:
                getTodayDate(),

            description:
                description ||
                "Student report generated successfully."

        });


        alert(
            "New report created successfully."
        );

    }


    closeReportModal();

    showAll = true;

    renderReports();

}


/* =========================================================
   EDIT REPORT
========================================================= */

function editReport(id) {

    const report =
        reports.find(
            report =>
                report.id === id
        );


    if (!report) {
        return;
    }


    $("editReportId").value =
        report.id;

    $("studentName").value =
        report.name;

    $("rollNumber").value =
        report.roll;

    $("department").value =
        report.department;

    $("semester").value =
        report.semester;

    $("reportType").value =
        report.type;

    $("reportStatus").value =
        report.status;

    $("reportDescription").value =
        report.description || "";


    $("modalTitle").textContent =
        "Edit Student Report";


    $("reportModal")?.classList.add(
        "show"
    );

}


/* =========================================================
   VIEW REPORT
========================================================= */

function viewReport(id) {

    const report =
        reports.find(
            report =>
                report.id === id
        );


    if (!report) {
        return;
    }


    currentViewReport =
        report;


    const firstLetter =
        report.name
            .charAt(0)
            .toUpperCase();


    $("reportPreview").innerHTML = `

        <div class="preview-header">

            <div class="preview-avatar">
                ${escapeHTML(firstLetter)}
            </div>

            <div>

                <h3>
                    ${escapeHTML(report.name)}
                </h3>

                <p>
                    Report ID:
                    ${escapeHTML(report.id)}
                </p>

            </div>

        </div>


        <div class="preview-grid">

            <div class="preview-item">
                <span>Roll Number</span>
                <strong>${report.roll}</strong>
            </div>

            <div class="preview-item">
                <span>Department</span>
                <strong>${escapeHTML(report.department)}</strong>
            </div>

            <div class="preview-item">
                <span>Semester</span>
                <strong>${escapeHTML(report.semester)}</strong>
            </div>

            <div class="preview-item">
                <span>Report Type</span>
                <strong>${escapeHTML(report.type)}</strong>
            </div>

            <div class="preview-item">
                <span>Status</span>
                <strong>${escapeHTML(report.status)}</strong>
            </div>

            <div class="preview-item">
                <span>Generated Date</span>
                <strong>${escapeHTML(report.date)}</strong>
            </div>

        </div>


        <div class="preview-description">

            <span>Report Description</span>

            <p>
                ${escapeHTML(
                    report.description ||
                    "No description available."
                )}
            </p>

        </div>

    `;


    $("viewModal")?.classList.add(
        "show"
    );

}


/* =========================================================
   CLOSE VIEW
========================================================= */

function closeViewReport() {

    $("viewModal")?.classList.remove(
        "show"
    );

}


/* =========================================================
   REPORT PDF
========================================================= */

function downloadPDF(id) {

    const report =
        reports.find(
            report =>
                report.id === id
        );


    if (!report) {
        return;
    }


    generatePrintableReport(
        report
    );

}


/* =========================================================
   PRINT REPORT
========================================================= */

function generatePrintableReport(report) {

    const printWindow =
        window.open(
            "",
            "_blank",
            "width=900,height=700"
        );


    if (!printWindow) {

        alert(
            "Please allow pop-ups to generate the PDF."
        );

        return;

    }


    printWindow.document.write(`

        <!DOCTYPE html>

        <html>

        <head>

            <title>
                Stud - ${escapeHTML(report.name)}
            </title>

            <style>

                body {
                    font-family: Arial, sans-serif;
                    padding: 40px;
                    color: #17243a;
                }

                .header {
                    text-align: center;
                    border-bottom: 2px solid #173e69;
                    padding-bottom: 20px;
                    margin-bottom: 25px;
                }

                .header h1 {
                    color: #173e69;
                }

                .grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 12px;
                }

                .item {
                    border: 1px solid #dbe3ec;
                    padding: 14px;
                    border-radius: 7px;
                }

                .item span {
                    display: block;
                    font-size: 11px;
                    color: #64748b;
                    margin-bottom: 5px;
                }

                .description {
                    margin-top: 20px;
                    border: 1px solid #dbe3ec;
                    padding: 15px;
                }

                .footer {
                    margin-top: 40px;
                    text-align: center;
                    color: #64748b;
                    font-size: 11px;
                }

            </style>

        </head>

        <body>

            <div class="header">

                <h1>
                    Stud
                </h1>

                <p>
                    Student Report
                </p>

            </div>

            <div class="grid">

                ${printItem("Report ID", report.id)}

                ${printItem("Student Name", report.name)}

                ${printItem("Roll Number", report.roll)}

                ${printItem("Department", report.department)}

                ${printItem("Semester", report.semester)}

                ${printItem("Report Type", report.type)}

                ${printItem("Status", report.status)}

                ${printItem("Date", report.date)}

            </div>

            <div class="description">

                <strong>
                    Description
                </strong>

                <p>
                    ${escapeHTML(
                        report.description ||
                        "No description available."
                    )}
                </p>

            </div>

            <div class="footer">
                Stud | Student Reports
            </div>

            <script>

                window.onload = function () {
                    window.print();
                };

            <\/script>

        </body>

        </html>

    `);

    printWindow.document.close();

}


function printItem(label, value) {

    return `

        <div class="item">

            <span>
                ${escapeHTML(label)}
            </span>

            <strong>
                ${escapeHTML(value)}
            </strong>

        </div>

    `;

}


/* =========================================================
   ATTENDANCE PDF
========================================================= */

function downloadAttendancePDF() {

    if (
        !attendanceReportResult.length
    ) {

        alert(
            "Generate an attendance report first."
        );

        return;

    }


    const printWindow =
        window.open(
            "",
            "_blank",
            "width=1200,height=800"
        );


    if (!printWindow) {

        alert(
            "Please allow pop-ups."
        );

        return;

    }


    let rows = "";


    attendanceReportResult.forEach(
        function (student) {

            rows += `

                <tr>

                    <td>${student.roll}</td>

                    <td>
                        ${escapeHTML(student.name)}
                    </td>

                    <td>
                        ${escapeHTML(student.department)}
                    </td>

                    <td>${student.present}</td>

                    <td>${student.absent}</td>

                    <td>${student.leave}</td>

                    <td>${student.workingDays}</td>

                    <td>${student.percentage}%</td>

                    <td>${escapeHTML(student.status)}</td>

                </tr>

            `;

        }
    );


    printWindow.document.write(`

        <!DOCTYPE html>

        <html>

        <head>

            <title>
                Stud Attendance Report
            </title>

            <style>

                body {
                    font-family: Arial, sans-serif;
                    padding: 30px;
                    color: #17243a;
                }

                .header {
                    text-align: center;
                    border-bottom: 2px solid #173e69;
                    margin-bottom: 25px;
                    padding-bottom: 15px;
                }

                h1 {
                    color: #173e69;
                }

                table {
                    width: 100%;
                    border-collapse: collapse;
                }

                th,
                td {
                    border: 1px solid #dbe3ec;
                    padding: 9px;
                    font-size: 12px;
                }

                th {
                    background: #173e69;
                    color: white;
                }

                .footer {
                    text-align: center;
                    margin-top: 30px;
                    color: #64748b;
                    font-size: 11px;
                }

            </style>

        </head>

        <body>

            <div class="header">

                <h1>
                    Stud
                </h1>

                <p>
                    Attendance Report
                </p>

                <p>
                    ${escapeHTML(
                        getReportPeriodText()
                    )}
                </p>

            </div>

            <table>

                <thead>

                    <tr>

                        <th>Roll No.</th>
                        <th>Student</th>
                        <th>Department</th>
                        <th>Present</th>
                        <th>Absent</th>
                        <th>Leave</th>
                        <th>Working Days</th>
                        <th>Attendance %</th>
                        <th>Status</th>

                    </tr>

                </thead>

                <tbody>

                    ${rows}

                </tbody>

            </table>

            <div class="footer">
                Stud | Attendance Reports
            </div>

            <script>

                window.onload = function () {
                    window.print();
                };

            <\/script>

        </body>

        </html>

    `);


    printWindow.document.close();

}


/* =========================================================
   EXCEL / CSV
========================================================= */

function downloadExcel(id) {

    const report =
        reports.find(
            report =>
                report.id === id
        );


    if (!report) {
        return;
    }


    const headers = [

        "Report ID",
        "Student Name",
        "Roll Number",
        "Department",
        "Semester",
        "Report Type",
        "Status",
        "Date",
        "Description"

    ];


    const values = [

        report.id,
        report.name,
        report.roll,
        report.department,
        report.semester,
        report.type,
        report.status,
        report.date,
        report.description

    ];


    const csv =
        headers.map(csvEscape).join(",")
        +
        "\n"
        +
        values.map(csvEscape).join(",");


    downloadCSV(
        csv,
        `${report.id}_${report.name.replace(
            /\s+/g,
            "_"
        )}.csv`
    );

}


/* =========================================================
   ATTENDANCE EXCEL
========================================================= */

function downloadAttendanceExcel() {

    if (
        !attendanceReportResult.length
    ) {

        alert(
            "Generate an attendance report first."
        );

        return;

    }


    const headers = [

        "Roll Number",
        "Student Name",
        "Department",
        "Working Days",
        "Present",
        "Absent",
        "Leave",
        "Attendance Percentage",
        "Status"

    ];


    const rows =
        attendanceReportResult.map(
            function (student) {

                return [

                    student.roll,
                    student.name,
                    student.department,
                    student.workingDays,
                    student.present,
                    student.absent,
                    student.leave,
                    `${student.percentage}%`,
                    student.status

                ];

            }
        );


    const csv =
        headers.map(csvEscape).join(",")
        +
        "\n"
        +
        rows.map(
            row =>
                row.map(csvEscape).join(",")
        ).join("\n");


    downloadCSV(
        csv,
        "Stud_Attendance_Report.csv"
    );

}


/* =========================================================
   CSV
========================================================= */

function downloadCSV(csv, filename) {

    const blob =
        new Blob(
            [csv],
            {
                type:
                    "text/csv;charset=utf-8;"
            }
        );


    const url =
        URL.createObjectURL(blob);


    const link =
        document.createElement("a");


    link.href =
        url;

    link.download =
        filename;


    document.body.appendChild(
        link
    );


    link.click();


    link.remove();


    URL.revokeObjectURL(
        url
    );

}


function csvEscape(value) {

    const text =
        String(
            value ?? ""
        );


    return `"${text.replace(
        /"/g,
        '""'
    )}"`;

}


/* =========================================================
   REPORT ID
========================================================= */

function generateReportId() {

    let highest =
        100;


    reports.forEach(
        function (report) {

            const number =
                parseInt(
                    report.id.replace(
                        "RP",
                        ""
                    ),
                    10
                );


            if (
                !Number.isNaN(number) &&
                number > highest
            ) {

                highest =
                    number;

            }

        }
    );


    return `RP${highest + 1}`;

}


/* =========================================================
   DATE
========================================================= */

function getTodayDate() {

    const date =
        new Date();


    const months = [

        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"

    ];


    return (

        String(
            date.getDate()
        ).padStart(2, "0")

        +

        "-"

        +

        months[
            date.getMonth()
        ]

        +

        "-"

        +

        date.getFullYear()

    );

}


/* =========================================================
   SECURITY
========================================================= */

function escapeHTML(value) {

    return String(
        value ?? ""
    )

    .replace(
        /&/g,
        "&amp;"
    )

    .replace(
        /</g,
        "&lt;"
    )

    .replace(
        />/g,
        "&gt;"
    )

    .replace(
        /"/g,
        "&quot;"
    )

    .replace(
        /'/g,
        "&#039;"
    );

}
