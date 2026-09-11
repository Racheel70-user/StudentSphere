
function showStudentProfilePage(student) {
    if (!student) {
        if (currentRole === "student") {
            student = students.find(s => s.id === currentUser.id);
        }
        if (!student) {
            alert("Student not found!");
            return;
        }
    }

    let pending = student.total - student.paid;

    let installmentsHtml = student.installments.map(function(i) {
        return `
            <tr>
                <td>${escapeHTML(i.date)}</td>
                <td>₹${i.amount}</td>
                <td>${escapeHTML(i.method)}</td>
            </tr>
        `;
    }).join("");

    document.getElementById("studentDetails").innerHTML = `
        <div class="section-box">
            <h2><i class="fas fa-user-graduate"></i> My Profile</h2>
            <table>
                <tr><th>Student ID</th><td><strong>${escapeHTML(student.id)}</strong></td></tr>
                <tr><th>Name</th><td>${escapeHTML(student.name)}</td></tr>
                <tr><th>Email</th><td>${escapeHTML(student.email)}</td></tr>
                <tr><th>Course</th><td>${escapeHTML(student.course)}</td></tr>
                <tr><th>Total Fee</th><td>₹${student.total}</td></tr>
                <tr><th>Paid Fee</th><td>₹${student.paid}</td></tr>
                <tr><th>Pending Fee</th><td>₹${pending}</td></tr>
                <tr><th>Payment Date</th><td>${escapeHTML(student.paymentDate) || "-"}</td></tr>
                <tr><th>Payment Method</th><td>${escapeHTML(student.paymentMethod) || "-"}</td></tr>
                <tr><th>Status</th><td class="${student.status === "Paid" ? "paid" : "pending"}">${escapeHTML(student.status)}</td></tr>
            </table>

            <h3><i class="fas fa-history"></i> Payment History</h3>
            <div class="table-wrapper">
                <table>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Amount</th>
                            <th>Method</th>
                        </tr>
                    </thead>
                    <tbody>${installmentsHtml}</tbody>
                </table>
            </div>
        </div>
    `;

    showPage('studentProfilePage');
}

function showProfilePage() {
    let popup = document.getElementById("profilePopupRight");
    let arrow = document.getElementById("profileArrowRight");
    popup.classList.remove("show");
    if (arrow) {
        arrow.classList.remove("rotate");
    }
    
    if (currentRole === "student") {
        let student = students.find(s => s.id === currentUser.id);
        if (student) {
            showStudentProfilePage(student);
        }
    } else if (currentRole === "principal" || currentRole === "faculty") {
        alert("👤 " + currentUser.name + "\nRole: " + currentUser.role + "\nEmail: " + currentUser.email);
        showPage('feesPage');
        loadFeesTable();
    }
}

function handleStudentLogin(id, enteredHash) {
    let student = students.find(s => s.id === id && s.passwordHash === enteredHash);
    if (student) {
        currentUser = { id: student.id, name: student.name, role: "Student", email: student.email };
        currentRole = "student";
        openDashboard("studentProfilePage");
        updateTopProfile(student.name.charAt(0), "Student", "student", student.email);
        showStudentProfilePage(student);
        loadDashboardData();
        return true;
    }
    return false;
}

console.log("✅ student.js loaded successfully!");