// ============================================
// STUDENT DATA
// ============================================
const students = [
    {
        id: "101",
        passwordHash: "16dc368a89b428b2485484313ba67a3912ca03f2b2b42429174a4f8b3dc84e44",
        name: "Krushna Pawar",
        email: "krushna.pawar@example.com",
        course: "Information Technology",
        total: 50000,
        paid: 40000,
        status: "Pending",
        paymentDate: "2026-07-21",
        paymentMethod: "Cash",
        dueDate: "2026-08-20",
        installments: [
            { date: "2026-07-10", amount: 20000, method: "Cash" },
            { date: "2026-07-21", amount: 20000, method: "Cash" }
        ]
    },
    {
        id: "102",
        passwordHash: "37834f2f25762f23e1f74a531cbe445db73d6765ebe60878a7dfbecd7d4af6e1",
        name: "Prajwal Pawar",
        email: "prajwal.pawar@example.com",
        course: "Information Technology",
        total: 45000,
        paid: 45000,
        status: "Paid",
        paymentDate: "2026-07-20",
        paymentMethod: "Online",
        dueDate: "2026-08-15",
        installments: [
            { date: "2026-07-10", amount: 20000, method: "Online" },
            { date: "2026-07-21", amount: 25000, method: "Online" }
        ]
    },
    {
        id: "103",
        passwordHash: "454f63ac30c8322997ef025edff6abd23e0dbe7b8a3d5126a894e4a168c1b59b",
        name: "Pruthviraj Thakare",
        email: "pruthviraj.thakare@example.com",
        course: "Information Technology",
        total: 40000,
        paid: 25000,
        status: "Pending",
        paymentDate: "2026-07-15",
        paymentMethod: "Cheque",
        dueDate: "2026-08-25",
        installments: [
            { date: "2026-07-10", amount: 25000, method: "Cheque" }
        ]
    },
    {
        id: "104",
        passwordHash: "5ef6fdf32513aa7cd11f72beccf132b9224d33f271471fff402742887a171edf",
        name: "Harshal Sawant",
        email: "harshal.sawant@example.com",
        course: "Information Technology",
        total: 35000,
        paid: 35000,
        status: "Paid",
        paymentDate: "2026-07-18",
        paymentMethod: "Cash",
        dueDate: "2026-08-10",
        installments: [
            { date: "2026-07-10", amount: 35000, method: "Cash" }
        ]
    },
    {
        id: "105",
        passwordHash: "1253e9373e781b7500266caa55150e08e210bc8cd8cc70d89985e3600155e860",
        name: "Racheel Kolhe",
        email: "racheel.kolhe@example.com",
        course: "Information Technology",
        total: 45000,
        paid: 30000,
        status: "Pending",
        paymentDate: "2026-07-17",
        paymentMethod: "Online",
        dueDate: "2026-08-30",
        installments: [
            { date: "2026-07-10", amount: 20000, method: "Online" },
            { date: "2026-07-21", amount: 10000, method: "Online" }
        ]
    }
];

// ============================================
// STAFF ACCOUNTS
// ============================================
const staffAccounts = {
    principal: {
        id: "Prashant",
        passwordHash: "ca3680a223b5c22141715990ff31d551b35580dd22f9af8c4b1d885794a30ae3"
    },
    faculty: {
        id: "Shivam",
        passwordHash: "663509b68716c8b50dd20a564763a1b1b9248cc9e6210b739818586c63e71ea1"
    }
};

window.students = students;
window.staffAccounts = staffAccounts;

console.log("✅ Data loaded! Students:", students.length);