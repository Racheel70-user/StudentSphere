function handleFacultyLogin(id, enteredHash) {
    if (id === staffAccounts.faculty.id && enteredHash === staffAccounts.faculty.passwordHash) {
        currentUser = { id: id, name: "Shivam", role: "Faculty", email: "faculty@Stud.com" };
        currentRole = "faculty";
        openDashboard("feesPage");
        updateTopProfile("S", "Faculty", "faculty", "faculty@Stud.com");
        loadDashboardData();
        loadFeesTable();
        return true;
    }
    return false;
}

// Inform Student
function informStudent(id) {
    let student = students.find(function(s) {
        return s.id === id;
    });
    
    if (!student) {
        alert("Student not found!");
        return;
    }

    if (student.status === "Pending") {
        alert(
            "Hello " + student.name +
            "\n\nYour fee is pending.\nPlease pay before the due date.\n\nPending Amount: ₹" + (student.total - student.paid)
        );
    } else {
        alert(
            "Hello " + student.name +
            "\n\nYour fee has already been paid.\n\nTotal Paid: ₹" + student.paid
        );
    }
}

console.log("✅ faculty.js loaded successfully!");
