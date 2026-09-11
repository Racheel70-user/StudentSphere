/* =========================================================
   Stud - COMPLETE SCRIPT
   ========================================================= */

const initialPageRole =
    (document.body &&
        document.body.dataset &&
        document.body.dataset.pageRole) ||
    "faculty";

let currentUser = null;
let currentRole = initialPageRole;

function getStoredStudentSession() {
    try {
        const raw = sessionStorage.getItem("studSession") || localStorage.getItem("studSession");
        const session = raw ? JSON.parse(raw) : null;
        return session && session.role === "student" ? session : null;
    } catch (_) {
        return null;
    }
}

function feeRecordFromStudent(student) {
    const fees = student.fees || {};
    return {
        id: student.studentId || student.id || "-",
        name: student.fullName || student.name || "Student",
        email: student.email || "-",
        course: student.program || student.course || "-",
        total: Number(fees.total ?? student.total ?? 0),
        paid: Number(fees.paid ?? student.paid ?? 0),
        status: fees.status || student.status || "Pending",
        paymentDate: fees.paymentDate || student.paymentDate || "",
        paymentMethod: fees.paymentMethod || student.paymentMethod || "",
        installments: fees.installments || student.installments || []
    };
}


/* =========================================================
   PAGE LOAD
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    console.log("✅ Stud Ready!");

    const paymentDate =
        document.getElementById("paymentDate");

    if (paymentDate && !paymentDate.value) {
        paymentDate.value = getToday();
    }

    const password =
        document.getElementById("password");

    if (password) {

        password.addEventListener(
            "keypress",
            function (e) {

                if (e.key === "Enter") {
                    login();
                }

            }
        );

    }

    if (currentRole === "principal") {
        currentUser = {
            id: "principal",
            name: "Prashant",
            role: "Principal",
            email: "principal@Stud.com"
        };
    } else if (currentRole === "student") {
        currentUser = {
            id: "student",
            name: "Student",
            role: "Student",
            email: ""
        };
    } else {
        currentUser = {
            id: "faculty",
            name: "Shivam",
            role: "Faculty",
            email: "faculty@Stud.com"
        };
    }

    switchRole(currentRole);

});


/* =========================================================
   TODAY DATE
   ========================================================= */

function getToday() {

    const d = new Date();

    const yyyy = d.getFullYear();

    const mm =
        String(d.getMonth() + 1)
            .padStart(2, "0");

    const dd =
        String(d.getDate())
            .padStart(2, "0");

    return `${yyyy}-${mm}-${dd}`;

}


/* =========================================================
   SHA-256
   ========================================================= */

async function sha256(text) {

    const encoder =
        new TextEncoder();

    const data =
        encoder.encode(text);

    const hashBuffer =
        await crypto.subtle.digest(
            "SHA-256",
            data
        );

    const hashArray =
        Array.from(
            new Uint8Array(hashBuffer)
        );

    return hashArray
        .map(function (byte) {

            return byte
                .toString(16)
                .padStart(2, "0");

        })
        .join("");

}


/* =========================================================
   LOGIN
   ========================================================= */

async function login() {

    const roleElement =
        document.getElementById("role");

    const idElement =
        document.getElementById("loginId");

    const passwordElement =
        document.getElementById("password");


    if (
        !roleElement ||
        !idElement ||
        !passwordElement
    ) {
        return;
    }


    const role =
        roleElement.value.trim();

    const id =
        idElement.value.trim();

    const password =
        passwordElement.value;


    if (!role) {

        alert(
            "Please select your role."
        );

        return;

    }


    if (!id) {

        alert(
            "Please enter your ID."
        );

        idElement.focus();

        return;

    }


    if (!password) {

        alert(
            "Please enter your password."
        );

        passwordElement.focus();

        return;

    }


    try {

        const enteredHash =
            await sha256(password);

        let success = false;


        /* ============================
           PRINCIPAL
        ============================ */

        if (role === "principal") {

            success =
                handlePrincipalLogin(
                    id,
                    enteredHash
                );

        }


        /* ============================
           FACULTY
        ============================ */

        else if (role === "faculty") {

            success =
                handleFacultyLogin(
                    id,
                    enteredHash
                );

        }


        /* ============================
           STUDENT
        ============================ */

        else if (role === "student") {

            success =
                handleStudentLogin(
                    id,
                    enteredHash
                );

        }


        if (!success) {

            alert(
                "Invalid ID or Password.\n\n" +
                "Please check your login details."
            );

            passwordElement.value = "";

            passwordElement.focus();

        }

    }

    catch (error) {

        console.error(
            "Login Error:",
            error
        );

        alert(
            "Something went wrong while logging in."
        );

    }

}


/* =========================================================
   PRINCIPAL LOGIN
   ========================================================= */

function handlePrincipalLogin(
    id,
    enteredHash
) {

    if (
        typeof staffAccounts === "undefined" ||
        !staffAccounts.principal
    ) {

        console.error(
            "staffAccounts.principal not found!"
        );

        return false;

    }


    if (
        id === staffAccounts.principal.id &&
        enteredHash ===
        staffAccounts.principal.passwordHash
    ) {

        currentUser = {

            id: id,

            name: "Prashant",

            role: "Principal",

            email:
                "principal@Stud.com"

        };


        currentRole =
            "principal";


        openDashboard(
            "feesPage"
        );


        updateTopProfile(
            "P",
            "Principal",
            "principal",
            currentUser.email
        );


        loadDashboardData();

        loadFeesTable();


        return true;

    }


    return false;

}


/* =========================================================
   FACULTY LOGIN
   ========================================================= */

function handleFacultyLogin(
    id,
    enteredHash
) {

    if (
        typeof staffAccounts === "undefined" ||
        !staffAccounts.faculty
    ) {

        console.error(
            "staffAccounts.faculty not found!"
        );

        return false;

    }


    if (
        id === staffAccounts.faculty.id &&
        enteredHash ===
        staffAccounts.faculty.passwordHash
    ) {

        currentUser = {

            id: id,

            name: "Shivam",

            role: "Faculty",

            email:
                "faculty@Stud.com"

        };


        currentRole =
            "faculty";


        openDashboard(
            "feesPage"
        );


        updateTopProfile(
            "S",
            "Faculty",
            "faculty",
            currentUser.email
        );


        loadDashboardData();

        loadFeesTable();


        return true;

    }


    return false;

}


/* =========================================================
   STUDENT LOGIN
   ========================================================= */

function handleStudentLogin(
    id,
    enteredHash
) {

    if (
        typeof students === "undefined"
    ) {

        console.error(
            "Students data not found!"
        );

        return false;

    }


    const student =
        students.find(function (s) {

            return (
                s.id === id &&
                s.passwordHash ===
                enteredHash
            );

        });


    if (!student) {
        return false;
    }


    currentUser = {

        id: student.id,

        name: student.name,

        role: "Student",

        email: student.email

    };


    currentRole =
        "student";


    openDashboard(
        "studentProfilePage"
    );


    updateTopProfile(
        student.name
            .charAt(0)
            .toUpperCase(),

        "Student",

        "student",

        student.email
    );


    showStudentProfilePage(
        student
    );


    return true;

}


/* =========================================================
   OPEN DASHBOARD
   ========================================================= */

function openDashboard(pageId) {
    const dashboard =
        document.getElementById(
            "dashboard"
        );

    if (dashboard) dashboard.style.display = "flex";


    updateRoleBasedUI();


    showPage(
        pageId || "feesPage"
    );

}


/* =========================================================
   ROLE BASED UI
   ========================================================= */

function updateRoleBasedUI() {

    const adminStats =
        document.getElementById(
            "adminStats"
        );

    const payFeeSection =
        document.getElementById(
            "payFeeSection"
        );

    const rolePages =
        document.querySelectorAll(".role-page");


    /* ============================
       PRINCIPAL
    ============================ */

    if (currentRole === "principal") {

        if (adminStats) {
            adminStats.style.display =
                "grid";
        }


        if (payFeeSection) {
            payFeeSection.style.display =
                "none";
        }

    }


    /* ============================
       FACULTY
    ============================ */

    else if (currentRole === "faculty") {

        if (adminStats) {
            adminStats.style.display =
                "grid";
        }


        if (payFeeSection) {
            payFeeSection.style.display =
                "block";
        }

    }


    /* ============================
       STUDENT
    ============================ */

    else {

        if (adminStats) {
            adminStats.style.display =
                "none";
        }


        if (payFeeSection) {
            payFeeSection.style.display =
                "none";
        }

    }

    rolePages.forEach(function (page) {
        page.classList.toggle(
            "active",
            page.getAttribute("data-role-page") === currentRole
        );
    });

}

function switchRole(role) {
    currentRole = role;

    document.querySelectorAll(".role-tab").forEach(function (tab) {
        tab.classList.toggle(
            "active",
            tab.getAttribute("data-role-tab") === role
        );
    });

    if (role === "principal") {
        currentUser = {
            id: "principal",
            name: "Prashant",
            role: "Principal",
            email: "principal@Stud.com"
        };
        updateTopProfile("P", "Principal", "principal", currentUser.email);
    } else if (role === "student") {
        const session = getStoredStudentSession();
        if (!session) {
            window.location.replace("/auth/index.html");
            return;
        }
        const localStudent = Array.isArray(students)
            ? students.find(student => student.id === session.id || student.name === session.name)
            : null;
        currentUser = {
            id: session.id,
            name: session.name,
            role: "Student",
            email: session.email || "",
            profile: session.profile || localStudent || session
        };
        updateTopProfile(session.initials || "S", "Student", "student", currentUser.email);
        showStudentProfilePage(feeRecordFromStudent(currentUser.profile || localStudent || session));
        fetch(`/api/students/student-id/${encodeURIComponent(session.id)}`)
            .then(response => response.ok ? response.json() : null)
            .then(profile => {
                if (!profile) return;
                currentUser.profile = profile;
                showStudentProfilePage(feeRecordFromStudent(profile));
            })
            .catch(() => {});
    } else {
        currentUser = {
            id: "faculty",
            name: "Shivam",
            role: "Faculty",
            email: "faculty@Stud.com"
        };
        updateTopProfile("S", "Faculty", "faculty", currentUser.email);
    }

    updateRoleBasedUI();
    loadDashboardData();
    loadFeesTable();
}


/* =========================================================
   TOP PROFILE
   ========================================================= */

function updateTopProfile(
    avatar,
    roleName,
    roleClass,
    email
) {

    const topAvatar =
        document.getElementById(
            "topAvatar"
        );

    const topName =
        document.getElementById(
            "topName"
        );

    const topRole =
        document.getElementById(
            "topRole"
        );


    if (topAvatar) {

        topAvatar.textContent =
            avatar || "U";

    }


    if (topName) {

        topName.textContent =
            currentUser
                ? currentUser.name
                : "User";

    }


    if (topRole) {

        topRole.textContent =
            roleName || "User";

    }

}


/* =========================================================
   SHOW PAGE
   ========================================================= */

function showPage(pageId) {

    const pages =
        document.querySelectorAll(
            ".page"
        );


    pages.forEach(function (page) {

        page.style.display =
            "none";

        page.classList.remove(
            "active"
        );

    });


    const selectedPage =
        document.getElementById(
            pageId
        );


    if (!selectedPage) {
        return;
    }


    selectedPage.style.display =
        "block";

    selectedPage.classList.add(
        "active"
    );


    const pageTitle =
        document.getElementById(
            "pageTitle"
        );

    const welcomeMessage =
        document.getElementById(
            "welcomeMessage"
        );


    if (pageId === "feesPage") {

        if (pageTitle) {

            pageTitle.innerHTML =
                '<i class="fas fa-money-bill-wave"></i> Fees Management';

        }


        if (
            welcomeMessage &&
            currentUser
        ) {

            welcomeMessage.textContent =
                "Welcome back, " +
                currentUser.name +
                "!";

        }

    }


    const navLinks =
        document.querySelectorAll(
            ".sidebar-nav a"
        );


    navLinks.forEach(function (link) {

        link.classList.remove(
            "active"
        );

    });


    const activeLink =
        document.querySelector(
            `.sidebar-nav a[data-page="${pageId}"]`
        );


    if (activeLink) {
        activeLink.classList.add(
            "active"
        );
    }

}


/* =========================================================
   DASHBOARD DATA
   ========================================================= */

function loadDashboardData() {

    if (
        typeof students === "undefined" ||
        students.length === 0
    ) {
        return;
    }


    let totalCollected = 0;

    let totalPending = 0;


    students.forEach(
        function (student) {

            totalCollected +=
                Number(
                    student.paid || 0
                );


            totalPending +=
                Number(
                    student.total || 0
                ) -
                Number(
                    student.paid || 0
                );

        }
    );


    const totalStudents =
        students.length;


    const feeCollected =
        document.getElementById(
            "feeCollected"
        );

    const feePending =
        document.getElementById(
            "feePending"
        );

    const feeTotalStudents =
        document.getElementById(
            "feeTotalStudents"
        );
    const principalFeeCollected =
        document.getElementById("principalFeeCollected");
    const principalFeePending =
        document.getElementById("principalFeePending");
    const principalFeeTotalStudents =
        document.getElementById("principalFeeTotalStudents");


    if (feeCollected) {

        feeCollected.textContent =
            "₹" +
            totalCollected.toLocaleString(
                "en-IN"
            );

    }


    if (feePending) {

        feePending.textContent =
            "₹" +
            totalPending.toLocaleString(
                "en-IN"
            );

    }


    if (feeTotalStudents) {

        feeTotalStudents.textContent =
            totalStudents;

    }

    if (principalFeeCollected) {
        principalFeeCollected.textContent =
            "₹" + totalCollected.toLocaleString("en-IN");
    }

    if (principalFeePending) {
        principalFeePending.textContent =
            "₹" + totalPending.toLocaleString("en-IN");
    }

    if (principalFeeTotalStudents) {
        principalFeeTotalStudents.textContent =
            totalStudents;
    }


    const statTotalStudents =
        document.getElementById(
            "statTotalStudents"
        );

    const statCollected =
        document.getElementById(
            "statCollected"
        );

    const statPending =
        document.getElementById(
            "statPending"
        );


    if (statTotalStudents) {

        statTotalStudents.textContent =
            totalStudents;

    }


    if (statCollected) {

        statCollected.textContent =
            totalCollected.toLocaleString(
                "en-IN"
            );

    }


    if (statPending) {

        statPending.textContent =
            totalPending.toLocaleString(
                "en-IN"
            );

    }


    const feeBadge =
        document.getElementById(
            "feeBadge"
        );


    if (feeBadge) {

        feeBadge.textContent =
            "₹" +
            totalPending.toLocaleString(
                "en-IN"
            );

    }

}


/* =========================================================
   LOAD FEES TABLE
   ========================================================= */

function loadFeesTable() {

    const tableBody =
        document.getElementById(
            currentRole === "principal"
                ? "principalFeesTableBody"
                : "feesTableBody"
        );

    const tableHead =
        document.querySelector(
            currentRole === "principal"
                ? ".role-page[data-role-page='principal'] .fee-table thead"
                : ".role-page[data-role-page='faculty'] .fee-table thead"
        );


    if (
        !tableBody ||
        !tableHead
    ) {
        return;
    }


    /* =====================================================
       STUDENT
       ===================================================== */

    if (currentRole === "student") {

        tableHead.innerHTML = "";

        tableBody.innerHTML = "";

        return;

    }


    /* =====================================================
       PRINCIPAL
       VIEW ONLY
       ===================================================== */

    if (currentRole === "principal") {

        tableHead.innerHTML = `

            <tr>

                <th>
                    Student
                </th>

                <th>
                    Email
                </th>

                <th>
                    Total
                </th>

                <th>
                    Paid
                </th>

                <th>
                    Pending
                </th>

                <th>
                    Status
                </th>

                <th>
                    Actions
                </th>

            </tr>

        `;

    }


    /* =====================================================
       FACULTY
       VIEW + PRINT + MAIL
       ===================================================== */

    else if (
        currentRole === "faculty"
    ) {

        tableHead.innerHTML = `

            <tr>

                <th>
                    Student
                </th>

                <th>
                    Email
                </th>

                <th>
                    Total
                </th>

                <th>
                    Paid
                </th>

                <th>
                    Pending
                </th>

                <th>
                    Due Date
                </th>

                <th>
                    Status
                </th>

                <th>
                    Actions
                </th>

            </tr>

        `;

    }


    let tableHTML = "";


    students.forEach(
        function (student) {

            const total =
                Number(
                    student.total || 0
                );


            const paid =
                Number(
                    student.paid || 0
                );


            const pending =
                total - paid;


            const statusClass =
                student.status === "Paid"
                    ? "paid"
                    : "pending";


            /* =========================================
               PRINCIPAL ROW
               ========================================= */

            if (
                currentRole ===
                "principal"
            ) {

                tableHTML += `

                    <tr>

                        <td>

                            <strong>
                                ${escapeHTML(
                                    student.name
                                )}
                            </strong>

                            <br>

                            <small>
                                ID:
                                ${escapeHTML(
                                    student.id
                                )}
                            </small>

                        </td>


                        <td>
                            ${escapeHTML(
                                student.email
                            )}
                        </td>


                        <td>
                            ₹${total.toLocaleString(
                                "en-IN"
                            )}
                        </td>


                        <td>
                            ₹${paid.toLocaleString(
                                "en-IN"
                            )}
                        </td>


                        <td>
                            ₹${pending.toLocaleString(
                                "en-IN"
                            )}
                        </td>


                        <td class="${statusClass}">
                            ${escapeHTML(
                                student.status
                            )}
                        </td>


                        <td>

                            <div
                                class="action-group"
                            >

                                <button
                                    type="button"
                                    class="action-btn info"
                                    title="View Student"
                                    onclick="viewStudent('${escapeHTML(
                                        student.id
                                    )}')"
                                >

                                    <i
                                        class="fas fa-eye"
                                    ></i>

                                </button>

                            </div>

                        </td>

                    </tr>

                `;

            }


            /* =========================================
               FACULTY ROW
               ========================================= */

            else if (
                currentRole ===
                "faculty"
            ) {

                tableHTML += `

                    <tr>

                        <td>

                            <strong>
                                ${escapeHTML(
                                    student.name
                                )}
                            </strong>

                            <br>

                            <small>
                                ID:
                                ${escapeHTML(
                                    student.id
                                )}
                            </small>

                        </td>


                        <td>
                            ${escapeHTML(
                                student.email
                            )}
                        </td>


                        <td>
                            ₹${total.toLocaleString(
                                "en-IN"
                            )}
                        </td>


                        <td>
                            ₹${paid.toLocaleString(
                                "en-IN"
                            )}
                        </td>


                        <td>
                            ₹${pending.toLocaleString(
                                "en-IN"
                            )}
                        </td>


                        <td
                            class="due-date-column"
                        >

                            ${
                                student.dueDate
                                    ? escapeHTML(
                                        student.dueDate
                                    )
                                    : "-"
                            }

                        </td>


                        <td
                            class="${statusClass}"
                        >
                            ${escapeHTML(
                                student.status
                            )}
                        </td>


                        <td>

                            <div
                                class="action-group"
                            >


                                <!-- =====================
                                     VIEW STUDENT
                                ====================== -->

                                <button
                                    type="button"
                                    class="action-btn info"
                                    title="View Student"
                                    onclick="viewStudent('${escapeHTML(
                                        student.id
                                    )}')"
                                >

                                    <i
                                        class="fas fa-eye"
                                    ></i>

                                </button>


                                <!-- =====================
                                     PRINT RECEIPT
                                     FACULTY ONLY
                                ====================== -->

                                ${
                                    paid > 0
                                        ? `

                                        <button
                                            type="button"
                                            class="action-btn pay"
                                            title="Print Receipt"
                                            onclick="printReceipt('${escapeHTML(
                                                student.id
                                            )}')"
                                        >

                                            <i
                                                class="fas fa-print"
                                            ></i>

                                        </button>

                                        `
                                        : ""
                                }


                                <!-- =====================
                                     MAIL
                                ====================== -->

                                <button
                                    type="button"
                                    class="action-btn mail"
                                    title="Inform Student"
                                    onclick="informStudent('${escapeHTML(
                                        student.id
                                    )}')"
                                >

                                    <i
                                        class="fas fa-envelope"
                                    ></i>

                                </button>


                            </div>

                        </td>

                    </tr>

                `;

            }

        }
    );


    const colspan =
        currentRole === "faculty"
            ? 8
            : 7;


    tableBody.innerHTML =
        tableHTML ||

        `

            <tr>

                <td
                    colspan="${colspan}"
                    style="
                        text-align:center;
                        padding:30px;
                    "
                >

                    No fee records found.

                </td>

            </tr>

        `;


    loadDashboardData();

}


/* =========================================================
   VIEW STUDENT
   ========================================================= */

function viewStudent(id) {

    if (!id) {

        alert(
            "Student ID not found!"
        );

        return;

    }


    const student =
        students.find(
            function (s) {

                return (
                    String(s.id) ===
                    String(id)
                );

            }
        );


    if (!student) {

        alert(
            "Student not found!"
        );

        return;

    }


    showStudentProfilePage(
        student
    );

}


/* =========================================================
   PAYMENT FORM
   ========================================================= */

function fillPaymentForm(id) {

    if (
        currentRole !== "faculty"
    ) {
        return;
    }


    const payId =
        document.getElementById(
            "payId"
        );


    if (payId) {

        payId.value = id;

        payId.focus();

    }


    const payFeeSection =
        document.getElementById(
            "payFeeSection"
        );


    if (payFeeSection) {

        payFeeSection.scrollIntoView({

            behavior: "smooth",

            block: "center"

        });

    }

}


/* =========================================================
   PAY FEE
   ========================================================= */

function payFeeForm() {

    if (
        currentRole !== "faculty"
    ) {

        alert(
            "Only Faculty can make fee payments."
        );

        return;

    }


    const payIdElement =
        document.getElementById(
            "payId"
        );

    const amountElement =
        document.getElementById(
            "payAmount"
        );

    const dateElement =
        document.getElementById(
            "paymentDate"
        );

    const methodElement =
        document.getElementById(
            "paymentMethod"
        );


    if (
        !payIdElement ||
        !amountElement ||
        !dateElement ||
        !methodElement
    ) {
        return;
    }


    const payId =
        payIdElement.value.trim();


    const payAmount =
        Number(
            amountElement.value
        );


    const paymentDate =
        dateElement.value;


    const paymentMethod =
        methodElement.value;


    if (!payId) {

        alert(
            "Please enter Student ID."
        );

        return;

    }


    if (
        !payAmount ||
        payAmount <= 0
    ) {

        alert(
            "Please enter a valid amount."
        );

        return;

    }


    if (!paymentDate) {

        alert(
            "Please select payment date."
        );

        return;

    }


    if (!paymentMethod) {

        alert(
            "Please select payment method."
        );

        return;

    }


    const student =
        students.find(
            function (s) {

                return s.id === payId;

            }
        );


    if (!student) {

        alert(
            "Student not found!"
        );

        return;

    }


    const pending =
        Number(student.total) -
        Number(student.paid);


    if (pending <= 0) {

        alert(
            "This student's fee is already fully paid."
        );

        return;

    }


    if (payAmount > pending) {

        alert(

            "Payment amount cannot be greater " +
            "than pending fee.\n\n" +

            "Pending Amount: ₹" +

            pending.toLocaleString(
                "en-IN"
            )

        );

        return;

    }


    /* =====================================================
       UPDATE PAYMENT
       ===================================================== */

    student.paid =
        Number(student.paid) +
        payAmount;


    student.paymentDate =
        paymentDate;


    student.paymentMethod =
        paymentMethod;


    if (
        !Array.isArray(
            student.installments
        )
    ) {

        student.installments = [];

    }


    student.installments.push({

        date:
            paymentDate,

        amount:
            payAmount,

        method:
            paymentMethod

    });


    if (
        Number(student.paid) >=
        Number(student.total)
    ) {

        student.paid =
            Number(student.total);

        student.status =
            "Paid";

    }

    else {

        student.status =
            "Pending";

    }


    /* =====================================================
       CLEAR FORM
       ===================================================== */

    payIdElement.value = "";

    amountElement.value = "";

    methodElement.value = "";


    /* =====================================================
       REFRESH
       ===================================================== */

    loadDashboardData();

    loadFeesTable();


    /* =====================================================
       SUCCESS MESSAGE
       ===================================================== */

    alert(

        "Fee payment successful!\n\n" +

        "Student: " +
        student.name +

        "\nAmount: ₹" +

        payAmount.toLocaleString(
            "en-IN"
        ) +

        "\n\n" +

        "Receipt print करण्यासाठी " +
        "Fees Table मधील 🖨️ button वापरा."

    );


    /* =====================================================
       IMPORTANT
       NO AUTOMATIC PRINT HERE
       ===================================================== */

}


/* =========================================================
   INFORM STUDENT / MAIL
   ONLY FACULTY
   ========================================================= */

function informStudent(id) {

    if (
        currentRole !== "faculty"
    ) {
        return;
    }


    const student =
        students.find(
            function (s) {

                return s.id === id;

            }
        );


    if (!student) {

        alert(
            "Student not found!"
        );

        return;

    }


    const pending =
        Number(student.total) -
        Number(student.paid);


    if (
        student.status ===
        "Pending"
    ) {

        alert(

            "📧 Fee Reminder\n\n" +

            "Hello " +
            student.name +

            "\n\nYour fee is pending." +

            "\nPlease pay before the due date." +

            "\n\nPending Amount: ₹" +

            pending.toLocaleString(
                "en-IN"
            ) +

            "\nDue Date: " +

            (
                student.dueDate ||
                "-"
            )

        );

    }

    else {

        alert(

            "📧 Student Fee Information\n\n" +

            "Hello " +
            student.name +

            "\n\nYour fee has already been paid." +

            "\n\nTotal Paid: ₹" +

            Number(
                student.paid
            ).toLocaleString(
                "en-IN"
            )

        );

    }

}


/* =========================================================
   PROFILE POPUP
   ========================================================= */

function toggleProfilePopupRight() {

    const popup =
        document.getElementById(
            "profilePopupRight"
        );

    const arrow =
        document.getElementById(
            "profileArrowRight"
        );


    if (!popup) {
        return;
    }


    popup.classList.toggle(
        "show"
    );


    if (arrow) {

        arrow.classList.toggle(
            "rotate"
        );

    }

}


/* =========================================================
   PROFILE PAGE
   ========================================================= */

function showProfilePage() {

    const popup =
        document.getElementById(
            "profilePopupRight"
        );

    const arrow =
        document.getElementById(
            "profileArrowRight"
        );


    if (popup) {

        popup.classList.remove(
            "show"
        );

    }


    if (arrow) {

        arrow.classList.remove(
            "rotate"
        );

    }


    if (
        currentRole ===
        "student"
    ) {

        const student =
            students.find(
                function (s) {

                    return (
                        s.id ===
                        currentUser.id
                    );

                }
            );


        if (student) {

            showStudentProfilePage(
                student
            );

        }

        return;

    }


    if (
        currentRole ===
            "principal" ||
        currentRole ===
            "faculty"
    ) {

        showPage(
            "feesPage"
        );

        loadFeesTable();

    }

}


/* =========================================================
   STUDENT PROFILE
   ========================================================= */

function showStudentProfilePage(
    student
) {

    if (!student) {

        if (
            currentRole ===
                "student" &&
            currentUser
        ) {

            student =
                students.find(
                    function (s) {

                        return (
                            s.id ===
                            currentUser.id
                        );

                    }
                );

        }


        if (!student) {

            alert(
                "Student not found!"
            );

            return;

        }

    }


    const pending =
        Number(student.total) -
        Number(student.paid);


    let installmentsHTML = "";


    if (
        Array.isArray(
            student.installments
        ) &&
        student.installments.length > 0
    ) {

        installmentsHTML =
            student.installments
                .map(
                    function (item) {

                        return `

                            <tr>

                                <td>
                                    ${escapeHTML(
                                        item.date
                                    )}
                                </td>

                                <td>
                                    ₹${Number(
                                        item.amount
                                    ).toLocaleString(
                                        "en-IN"
                                    )}
                                </td>

                                <td>
                                    ${escapeHTML(
                                        item.method
                                    )}
                                </td>

                            </tr>

                        `;

                    }
                )
                .join("");

    }

    else {

        installmentsHTML = `

            <tr>

                <td
                    colspan="3"
                    style="
                        text-align:center;
                    "
                >

                    No payment history found.

                </td>

            </tr>

        `;

    }


    const details =
        document.getElementById(
            "studentDetails"
        );


    if (!details) {
        return;
    }


    details.innerHTML = `

        <div class="section-box">

            <h2>

                <i
                    class="fas fa-user-graduate"
                ></i>

                Student Details

            </h2>


            <table>

                <tr>

                    <th>
                        Student ID
                    </th>

                    <td>

                        <strong>
                            ${escapeHTML(
                                student.id
                            )}
                        </strong>

                    </td>

                </tr>


                <tr>

                    <th>
                        Name
                    </th>

                    <td>
                        ${escapeHTML(
                            student.name
                        )}
                    </td>

                </tr>


                <tr>

                    <th>
                        Email
                    </th>

                    <td>
                        ${escapeHTML(
                            student.email
                        )}
                    </td>

                </tr>


                <tr>

                    <th>
                        Course
                    </th>

                    <td>
                        ${escapeHTML(
                            student.course
                        )}
                    </td>

                </tr>


                <tr>

                    <th>
                        Total Fee
                    </th>

                    <td>
                        ₹${Number(
                            student.total
                        ).toLocaleString(
                            "en-IN"
                        )}
                    </td>

                </tr>


                <tr>

                    <th>
                        Paid Fee
                    </th>

                    <td>
                        ₹${Number(
                            student.paid
                        ).toLocaleString(
                            "en-IN"
                        )}
                    </td>

                </tr>


                <tr>

                    <th>
                        Pending Fee
                    </th>

                    <td>
                        ₹${pending.toLocaleString(
                            "en-IN"
                        )}
                    </td>

                </tr>


                <tr>

                    <th>
                        Payment Date
                    </th>

                    <td>
                        ${escapeHTML(
                            student.paymentDate ||
                            "-"
                        )}
                    </td>

                </tr>


                <tr>

                    <th>
                        Payment Method
                    </th>

                    <td>
                        ${escapeHTML(
                            student.paymentMethod ||
                            "-"
                        )}
                    </td>

                </tr>


                <tr>

                    <th>
                        Status
                    </th>

                    <td
                        class="${
                            student.status === "Paid"
                                ? "paid"
                                : "pending"
                        }"
                    >

                        ${escapeHTML(
                            student.status
                        )}

                    </td>

                </tr>

            </table>


            <h3>

                <i
                    class="fas fa-history"
                ></i>

                Payment History

            </h3>


            <div class="table-wrapper">

                <table>

                    <thead>

                        <tr>

                            <th>
                                Date
                            </th>

                            <th>
                                Amount
                            </th>

                            <th>
                                Method
                            </th>

                        </tr>

                    </thead>


                    <tbody>

                        ${installmentsHTML}

                    </tbody>

                </table>

            </div>

        </div>

    `;


    currentRole = "student";
    updateTopProfile(
        student.name.charAt(0),
        "Student",
        "student",
        student.email
    );
    updateRoleBasedUI();
    const studentSection =
        document.querySelector(
            ".role-page[data-role-page='student']"
        );
    if (studentSection) {
        studentSection.classList.add("active");
    }

}


/* =========================================================
   PRINT RECEIPT
   FACULTY ONLY
   ========================================================= */

function printReceipt(id) {

    /* =====================================================
       SECURITY CHECK
       ===================================================== */

    if (
        currentRole !== "faculty"
    ) {

        alert(
            "Only Faculty can print fee receipts."
        );

        return;

    }


    const student =
        students.find(
            function (s) {

                return s.id === id;

            }
        );


    if (!student) {

        alert(
            "Student not found!"
        );

        return;

    }


    const total =
        Number(
            student.total || 0
        );


    const paid =
        Number(
            student.paid || 0
        );


    const pending =
        total - paid;


    /* =====================================================
       CHECK PAYMENT
       ===================================================== */

    if (paid <= 0) {

        alert(
            "No payment found for this student."
        );

        return;

    }


    const receiptNo =
        "REC" +
        student.id +
        Date.now()
            .toString()
            .slice(-6);


    const today =
        getToday();


    const installments =
        Array.isArray(
            student.installments
        )
            ? student.installments
            : [];


    const latestPayment =
        installments.length > 0
            ? installments[
                installments.length - 1
            ]
            : null;


    const paymentAmount =
        latestPayment
            ? Number(
                latestPayment.amount
            )
            : paid;


    const paymentDate =
        latestPayment
            ? latestPayment.date
            : student.paymentDate;


    const paymentMethod =
        latestPayment
            ? latestPayment.method
            : student.paymentMethod;


    /* =====================================================
       PAYMENT HISTORY
       ===================================================== */

    const historyHTML =
        installments.length > 0

            ? `

                <div
                    class="history-title"
                >
                    📋 Payment History
                </div>


                <div
                    class="table-wrap"
                >

                    <table>

                        <thead>

                            <tr>

                                <th
                                    style="width:35%;"
                                >
                                    Date
                                </th>

                                <th
                                    style="
                                        width:35%;
                                        text-align:right;
                                    "
                                >
                                    Amount
                                </th>

                                <th
                                    style="width:30%;"
                                >
                                    Method
                                </th>

                            </tr>

                        </thead>


                        <tbody>

                            ${
                                installments
                                    .map(
                                        function (i) {

                                            return `

                                                <tr>

                                                    <td>
                                                        ${escapeHTML(
                                                            i.date
                                                        )}
                                                    </td>

                                                    <td
                                                        style="
                                                            text-align:right;
                                                            font-weight:600;
                                                        "
                                                    >

                                                        ₹${Number(
                                                            i.amount
                                                        ).toLocaleString(
                                                            "en-IN"
                                                        )}

                                                    </td>

                                                    <td>
                                                        ${escapeHTML(
                                                            i.method
                                                        )}
                                                    </td>

                                                </tr>

                                            `;

                                        }
                                    )
                                    .join("")
                            }

                        </tbody>

                    </table>

                </div>

            `

            : "";


    /* =====================================================
       RECEIPT HTML
       ===================================================== */

    const receiptHTML = `

<!DOCTYPE html>

<html>

<head>

    <meta charset="UTF-8">

    <title>
        Fee Receipt
    </title>


    <style>

        * {

            margin:0;

            padding:0;

            box-sizing:border-box;

        }


        body {

            font-family:
                Arial,
                sans-serif;

            background:#f0f2f5;

            display:flex;

            justify-content:center;

            align-items:flex-start;

            min-height:100vh;

            padding:20px;

        }


        .receipt {

            width:210mm;

            min-height:297mm;

            max-width:100%;

            background:#ffffff;

            padding:
                12mm 15mm;

            margin:0 auto;

            box-shadow:
                0 4px 20px
                rgba(
                    0,
                    0,
                    0,
                    0.1
                );

            border-radius:4px;

        }


        .header {

            text-align:center;

            border-bottom:
                3px solid
                #1a1a2e;

            padding-bottom:10px;

            margin-bottom:15px;

        }


        .header h1 {

            font-size:24px;

            color:#1a1a2e;

            letter-spacing:2px;

            font-weight:700;

        }


        .header p {

            color:#666;

            font-size:13px;

            margin:4px 0 0;

            letter-spacing:1px;

        }


        .receipt-title {

            text-align:center;

            font-size:18px;

            font-weight:700;

            color:#1a1a2e;

            margin:
                8px 0 18px;

            letter-spacing:3px;

            text-transform:uppercase;

            border-bottom:
                1px dashed #ddd;

            padding-bottom:10px;

        }


        .receipt-no {

            text-align:right;

            font-size:13px;

            color:#666;

            margin-bottom:12px;

        }


        .receipt-no strong {

            color:#1a1a2e;

        }


        .info-grid {

            display:grid;

            grid-template-columns:
                1fr 1fr;

            gap:
                4px 30px;

            margin-bottom:15px;

            padding:10px 0;

            border-bottom:
                1px dashed #ddd;

        }


        .info-item {

            display:flex;

            justify-content:space-between;

            padding:4px 0;

            font-size:13px;

            border-bottom:
                1px dotted #f0f0f0;

        }


        .info-item .label {

            color:#666;

            font-weight:500;

        }


        .info-item .value {

            color:#1a1a2e;

            font-weight:600;

        }


        .table-wrap {

            margin:
                12px 0;

            border:
                1px solid #e2e8f0;

            border-radius:6px;

            overflow:hidden;

        }


        table {

            width:100%;

            border-collapse:collapse;

            font-size:13px;

        }


        table thead th {

            background:#f8f9fa;

            padding:
                8px 12px;

            text-align:left;

            font-size:11px;

            text-transform:uppercase;

            letter-spacing:.5px;

            color:#666;

            font-weight:600;

            border-bottom:
                2px solid #e2e8f0;

        }


        table tbody td {

            padding:
                7px 12px;

            border-bottom:
                1px solid #f0f0f0;

            color:#1a1a2e;

        }


        table tbody tr:last-child td {

            border-bottom:none;

        }


        .status-paid {

            color:#16a34a;

            font-weight:700;

        }


        .status-pending {

            color:#f59e0b;

            font-weight:700;

        }


        .history-title {

            font-size:13px;

            font-weight:600;

            color:#1a1a2e;

            margin:
                14px 0 6px;

        }


        .footer {

            margin-top:18px;

            display:flex;

            justify-content:space-between;

            padding-top:15px;

            border-top:
                2px solid #1a1a2e;

        }


        .signature {

            text-align:center;

            flex:1;

        }


        .signature .line {

            margin-top:30px;

            width:140px;

            border-top:
                1px solid #1a1a2e;

            margin-left:auto;

            margin-right:auto;

        }


        .signature p {

            color:#666;

            font-size:11px;

            margin-top:4px;

        }


        .footer-text {

            text-align:center;

            margin-top:15px;

            color:#999;

            font-size:11px;

            border-top:
                1px solid #eee;

            padding-top:12px;

        }


        .print-btn {

            display:block;

            margin:
                20px auto 0;

            padding:
                10px 35px;

            background:#1a1a2e;

            color:#fff;

            border:none;

            border-radius:6px;

            font-size:14px;

            cursor:pointer;

        }


        .print-btn:hover {

            background:#2d2d44;

        }


        @media print {

            body {

                background:#fff;

                padding:0;

                margin:0;

            }


            .receipt {

                width:100%;

                min-height:100vh;

                box-shadow:none;

                border-radius:0;

                padding:
                    10mm 12mm;

                margin:0;

            }


            .print-btn {

                display:none;

            }

        }


        @media screen
        and (max-width:600px) {

            .receipt {

                padding:
                    8mm 6mm;

            }


            .info-grid {

                grid-template-columns:
                    1fr;

                gap:2px;

            }


            .info-item {

                font-size:12px;

            }


            .header h1 {

                font-size:20px;

            }


            table {

                font-size:12px;

            }


            table thead th,
            table tbody td {

                padding:
                    5px 8px;

            }

        }

    </style>

</head>


<body>


    <div class="receipt">


        <div class="header">

            <h1>
                🏫 Stud
            </h1>

            <p>
                Education ERP System
            </p>

        </div>


        <div class="receipt-title">

            Fee Receipt

        </div>


        <div class="receipt-no">

            <strong>
                Receipt No:
            </strong>

            ${escapeHTML(
                receiptNo
            )}

        </div>


        <div class="info-grid">


            <div class="info-item">

                <span class="label">
                    Student ID
                </span>

                <span class="value">

                    ${escapeHTML(
                        student.id
                    )}

                </span>

            </div>


            <div class="info-item">

                <span class="label">
                    Student Name
                </span>

                <span class="value">

                    ${escapeHTML(
                        student.name
                    )}

                </span>

            </div>


            <div class="info-item">

                <span class="label">
                    Email
                </span>

                <span class="value">

                    ${escapeHTML(
                        student.email
                    )}

                </span>

            </div>


            <div class="info-item">

                <span class="label">
                    Course
                </span>

                <span class="value">

                    ${escapeHTML(
                        student.course
                    )}

                </span>

            </div>


            <div class="info-item">

                <span class="label">
                    Payment Date
                </span>

                <span class="value">

                    ${escapeHTML(
                        paymentDate ||
                        today
                    )}

                </span>

            </div>


            <div class="info-item">

                <span class="label">
                    Payment Mode
                </span>

                <span class="value">

                    ${escapeHTML(
                        paymentMethod ||
                        "Cash"
                    )}

                </span>

            </div>


        </div>


        <div class="table-wrap">

            <table>

                <thead>

                    <tr>

                        <th
                            style="width:60%;"
                        >
                            Description
                        </th>

                        <th
                            style="
                                width:40%;
                                text-align:right;
                            "
                        >
                            Amount
                        </th>

                    </tr>

                </thead>


                <tbody>


                    <tr>

                        <td>
                            Total Fee
                        </td>

                        <td
                            style="
                                text-align:right;
                                font-weight:700;
                            "
                        >

                            ₹${total.toLocaleString(
                                "en-IN"
                            )}

                        </td>

                    </tr>


                    <tr>

                        <td>
                            Amount Paid
                        </td>

                        <td
                            style="
                                text-align:right;
                                font-weight:700;
                                color:#16a34a;
                            "
                        >

                            ₹${paid.toLocaleString(
                                "en-IN"
                            )}

                        </td>

                    </tr>


                    <tr>

                        <td>
                            This Payment
                        </td>

                        <td
                            style="
                                text-align:right;
                                font-weight:700;
                                color:#38bdf8;
                            "
                        >

                            ₹${paymentAmount.toLocaleString(
                                "en-IN"
                            )}

                        </td>

                    </tr>


                    <tr>

                        <td>
                            Pending Amount
                        </td>

                        <td
                            style="
                                text-align:right;
                                font-weight:700;
                                color:${
                                    pending > 0
                                        ? "#f59e0b"
                                        : "#16a34a"
                                };
                            "
                        >

                            ₹${pending.toLocaleString(
                                "en-IN"
                            )}

                        </td>

                    </tr>


                    <tr>

                        <td>
                            Status
                        </td>

                        <td
                            style="
                                text-align:right;
                                font-weight:700;
                            "
                            class="${
                                student.status === "Paid"
                                    ? "status-paid"
                                    : "status-pending"
                            }"
                        >

                            ${escapeHTML(
                                student.status
                            )}

                        </td>

                    </tr>


                </tbody>

            </table>

        </div>


        ${historyHTML}


        <div class="footer">


            <div class="signature">

                <div class="line"></div>

                <p>
                    Student Signature
                </p>

            </div>


            <div class="signature">

                <div class="line"></div>

                <p>
                    Authorized Signature
                </p>

            </div>


        </div>


        <div class="footer-text">

            This is a system-generated receipt.
            Thank you for your payment.

        </div>


        <!-- =========================================
             MANUAL PRINT BUTTON
        ========================================== -->

        <button
            class="print-btn"
            onclick="window.print()"
        >

            🖨️ Print Receipt

        </button>


    </div>


</body>

</html>

    `;


    /* =====================================================
       OPEN RECEIPT WINDOW
       ===================================================== */

    const win =
        window.open(
            "",
            "_blank",
            "width=900,height=900,scrollbars=yes"
        );


    if (!win) {

        alert(

            "⚠️ Please allow popups!\n\n" +

            "Browser address bar मधून " +
            "'Allow popups' करा."

        );

        return;

    }


    win.document.open();

    win.document.write(
        receiptHTML
    );

    win.document.close();


    /* =====================================================
       NO AUTO PRINT
       Faculty manually clicks print button.
       ===================================================== */

}


/* =========================================================
   GENERAL POPUP
   ========================================================= */

function showPopup(content) {

    const popup =
        document.getElementById(
            "popup"
        );

    const popupData =
        document.getElementById(
            "popupData"
        );


    if (
        !popup ||
        !popupData
    ) {
        return;
    }


    popupData.innerHTML =
        content;


    popup.style.display =
        "flex";


    popup.classList.add(
        "show"
    );

}


function closePopup() {

    const popup =
        document.getElementById(
            "popup"
        );


    if (popup) {

        popup.style.display =
            "none";

        popup.classList.remove(
            "show"
        );

    }

}


/* =========================================================
   DISABLED MESSAGE
   ========================================================= */

function showDisabledMessage(
    name
) {

    if (
        typeof event !==
            "undefined" &&
        event
    ) {

        event.preventDefault();

    }


    alert(
        name +
        " is currently unavailable."
    );

}


/* =========================================================
   LOGOUT
   ========================================================= */

function logout() {

    console.log(
        "Logging out..."
    );


    const popup =
        document.getElementById(
            "profilePopupRight"
        );

    const arrow =
        document.getElementById(
            "profileArrowRight"
        );


    if (popup) {

        popup.classList.remove(
            "show"
        );

    }


    if (arrow) {

        arrow.classList.remove(
            "rotate"
        );

    }


    /* ============================
       RESET USER
    ============================ */

    currentUser = null;

    currentRole = null;


    /* ============================
       DASHBOARD / LOGIN
    ============================ */

    const dashboard =
        document.getElementById(
            "dashboard"
        );

    const loginPage =
        document.getElementById(
            "loginPage"
        );


    if (dashboard) {

        dashboard.style.display =
            "none";

    }


    if (loginPage) {

        loginPage.style.display =
            "block";

    }


    /* ============================
       CLEAR LOGIN FIELDS
    ============================ */

    const loginId =
        document.getElementById(
            "loginId"
        );

    const password =
        document.getElementById(
            "password"
        );

    const role =
        document.getElementById(
            "role"
        );


    if (loginId) {
        loginId.value = "";
    }


    if (password) {
        password.value = "";
    }


    if (role) {
        role.value = "";
    }

    if (!loginPage && currentRole) {
        const fallback =
            window.location.pathname.toLowerCase();

        if (fallback.includes("principal")) {
            window.location.href = "principal-fee.html";
            return;
        }
        if (fallback.includes("student")) {
            window.location.href = "student-fee.html";
            return;
        }
        window.location.href = "faculty-fee.html";
        return;
    }


    /* ============================
       RESET TOP PROFILE
    ============================ */

    const topAvatar =
        document.getElementById(
            "topAvatar"
        );

    const topName =
        document.getElementById(
            "topName"
        );

    const topRole =
        document.getElementById(
            "topRole"
        );


    if (topAvatar) {

        topAvatar.textContent =
            "U";

    }


    if (topName) {

        topName.textContent =
            "User";

    }


    if (topRole) {

        topRole.textContent =
            "Student";

    }


    /* ============================
       RESET SECTIONS
    ============================ */

    const adminStats =
        document.getElementById(
            "adminStats"
        );

    const payFeeSection =
        document.getElementById(
            "payFeeSection"
        );


    if (adminStats) {

        adminStats.style.display =
            "none";

    }


    if (payFeeSection) {

        payFeeSection.style.display =
            "none";

    }


    console.log(
        "✅ Logout successful!"
    );

}


/* =========================================================
   ESCAPE HTML
   ========================================================= */

function escapeHTML(value) {

    if (
        value === null ||
        value === undefined
    ) {

        return "";

    }


    return String(value)

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


/* =========================================================
   CLOSE PROFILE WHEN CLICK OUTSIDE
   ========================================================= */

document.addEventListener(
    "click",
    function (e) {

        const profile =
            document.querySelector(
                ".top-profile"
            );

        const popup =
            document.getElementById(
                "profilePopupRight"
            );


        if (
            popup &&
            profile &&
            !profile.contains(
                e.target
            )
        ) {

            popup.classList.remove(
                "show"
            );


            const arrow =
                document.getElementById(
                    "profileArrowRight"
                );


            if (arrow) {

                arrow.classList.remove(
                    "rotate"
                );

            }

        }

    }
);


/* =========================================================
   CONSOLE
   ========================================================= */

console.log(
    "✅ script.js loaded successfully!"
);

console.log(
    "Principal = View Student ONLY"
);

console.log(
    "Faculty = View + Print Receipt + Mail"
);

console.log(
    "Student = Student Profile ONLY"
);

console.log(
    "Receipt = Manual Print ONLY"
);

