
function handlePrincipalLogin(id, enteredHash) {
    if (id === staffAccounts.principal.id && enteredHash === staffAccounts.principal.passwordHash) {
        currentUser = { id: id, name: "Prashant", role: "Principal", email: "principal@Stud.com" };
        currentRole = "principal";
        openDashboard("feesPage");
        updateTopProfile("P", "Principal", "principal", "principal@Stud.com");
        loadDashboardData();
        loadFeesTable();
        return true;
    }
    return false;
}

console.log("✅ principal.js loaded successfully!");
