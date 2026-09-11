const branchData = {
    all: {
        label: "All Branches",
        title: "Admin Dashboard",
        students: "18,642",
        teachers: "1,842",
        courses: "356",
        revenue: "₹7,45,78,650",
        pendingFees: "₹1,42,86,800",
        collection: 85,
        collected: "₹6.03 Cr",
        pending: "₹1.21 Cr",
        overdue: "₹18.65 L",
        exam: 79,
        highest: "96%",
        lowest: "48%",
        exams: "466",
        admissions: "642",
        applications: "184",
        activeStudents: "17,906",
        admissionRate: "8.4%",
        activities: [
            ["New Admission", "Nashik Branch", "Riya Patil admitted in Diploma in Information Technology", "10 min ago", "Admin"],
            ["Fee Payment", "Dhule Branch", "Payment of ₹20,000 received", "25 min ago", "System"],
            ["Teacher Added", "Pune Branch", "Prof. Sneha Patil added", "50 min ago", "Admin"],
            ["Exam Timetable Published", "Nashik Branch", "Semester examination timetable published", "1 hr ago", "Admin"]
        ],
        coursesList: [
            ["Diploma in Computer Engineering", "3,956"],
            ["Diploma in Information Technology", "3,245"],
            ["Diploma in Mechanical Engineering", "2,785"],
            ["Diploma in Civil Engineering", "2,145"],
            ["Diploma in Electrical Engineering", "1,865"]
        ],
        alerts: [
            "21 students have overdue fee payments",
            "Low attendance in Java Programming",
            "Internal exam marks not uploaded",
            "New admission applications received"
        ]
    },
    nashik: {
        label: "Nashik Branch",
        title: "Nashik Branch Dashboard",
        students: "6,521",
        teachers: "612",
        courses: "128",
        revenue: "₹2,68,45,600",
        pendingFees: "₹21,36,800",
        collection: 92,
        collected: "₹2.47 Cr",
        pending: "₹21.36 L",
        overdue: "₹5.21 L",
        exam: 81,
        highest: "94%",
        lowest: "51%",
        exams: "86",
        admissions: "228",
        applications: "61",
        activeStudents: "6,284",
        admissionRate: "9.1%",
        established: "2012",
        address: "Mumbai-Agra Road, Nashik",
        phone: "0253-xxxxxxx",
        email: "nashik@Stud.edu.in",
        activities: [
            ["New Admission", "Nashik Branch", "Aditi More admitted in Diploma in Computer Engineering", "10 min ago", "Admin"],
            ["Fee Payment", "Nashik Branch", "Payment of ₹18,000 received", "20 min ago", "System"],
            ["Teacher Added", "Nashik Branch", "Prof. Pooja Patil added", "35 min ago", "Admin"],
            ["Exam Timetable Published", "Nashik Branch", "Semester examination timetable published", "1 hr ago", "Admin"]
        ],
        coursesList: [
            ["Diploma in Computer Engineering", "1,234"],
            ["Diploma in Information Technology", "1,096"],
            ["Diploma in Mechanical Engineering", "890"],
            ["Diploma in Civil Engineering", "642"],
            ["Diploma in Electrical Engineering", "543"]
        ],
        alerts: [
            "Students have overdue fee payments",
            "Internal exam marks not uploaded",
            "New admission applications received"
        ]
    },
    dhule: {
        label: "Dhule Branch",
        title: "Dhule Branch Dashboard",
        students: "5,842",
        teachers: "582",
        courses: "112",
        revenue: "₹2,12,36,450",
        pendingFees: "₹37,25,600",
        collection: 84,
        collected: "₹1.93 Cr",
        pending: "₹37.25 L",
        overdue: "₹15.62 L",
        exam: 76,
        highest: "91%",
        lowest: "50%",
        exams: "72",
        admissions: "191",
        applications: "54",
        activeStudents: "5,611",
        admissionRate: "7.8%",
        established: "2014",
        address: "Station Nagar, Dhule",
        phone: "02562-xxxxxxx",
        email: "dhule@Stud.edu.in",
        activities: [
            ["New Admission", "Dhule Branch", "Rohit Jadhav admitted in Diploma in Mechanical Engineering", "10 min ago", "Admin"],
            ["Fee Payment", "Dhule Branch", "Payment of ₹20,000 received", "30 min ago", "System"],
            ["Teacher Added", "Dhule Branch", "Prof. Anand Patil added", "50 min ago", "Admin"],
            ["Exam Timetable Published", "Dhule Branch", "Semester examination timetable published", "1 hr ago", "Admin"]
        ],
        coursesList: [
            ["Diploma in Mechanical Engineering", "1,145"],
            ["Diploma in Computer Engineering", "944"],
            ["Diploma in Information Technology", "721"],
            ["Diploma in Civil Engineering", "602"],
            ["Diploma in Electrical Engineering", "489"]
        ],
        alerts: [
            "Students have overdue fee payments",
            "Lab maintenance scheduled",
            "Assignment submission pending",
            "Exam timetable published"
        ]
    },
    pune: {
        label: "Pune Branch",
        title: "Pune Branch Dashboard",
        students: "6,279",
        teachers: "648",
        courses: "116",
        revenue: "₹2,65,96,600",
        pendingFees: "₹84,24,400",
        collection: 76,
        collected: "₹1.73 Cr",
        pending: "₹84.24 L",
        overdue: "₹42.10 L",
        exam: 77,
        highest: "96%",
        lowest: "49%",
        exams: "98",
        admissions: "223",
        applications: "69",
        activeStudents: "6,011",
        admissionRate: "8.7%",
        established: "2016",
        address: "Pune, Maharashtra",
        phone: "020-xxxxxxx",
        email: "pune@Stud.edu.in",
        activities: [
            ["New Admission", "Pune Branch", "Kavya Joshi admitted in Diploma in Information Technology", "10 min ago", "Admin"],
            ["Fee Payment", "Pune Branch", "Payment of ₹15,000 received", "25 min ago", "System"],
            ["Teacher Added", "Pune Branch", "Prof. Neeraj Shah added", "45 min ago", "Admin"],
            ["Exam Timetable Published", "Pune Branch", "Semester examination timetable published", "1 hr ago", "Admin"]
        ],
        coursesList: [
            ["Diploma in Computer Engineering", "1,477"],
            ["Diploma in Information Technology", "1,071"],
            ["Diploma in Mechanical Engineering", "1,010"],
            ["Diploma in Civil Engineering", "815"],
            ["Diploma in Electrical Engineering", "712"]
        ],
        alerts: [
            "Students have overdue fee payments",
            "Practical examination schedule released",
            "New admission applications received"
        ]
    }
};

const chartLines = {
    nashik: {
        growth: [31, 37, 45, 52, 61, 72],
        revenue: [18, 23, 29, 34, 41, 47]
    },
    dhule: {
        growth: [19, 23, 28, 32, 37, 42],
        revenue: [14, 17, 21, 25, 29, 33]
    },
    pune: {
        growth: [24, 29, 34, 40, 46, 53],
        revenue: [16, 20, 24, 29, 34, 39]
    }
};

let currentBranch = "all";
let selectedFrom = "2026-05-01";
let selectedTo = "2026-05-31";
let toastTimer;

const $ = selector => document.querySelector(selector);

function showToast(message) {
    const toast = $("#toast");
    const text = $("#toastText");
    text.textContent = message;
    toast.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
        toast.classList.remove("show");
    }, 2500);
}

function sparkline(index) {
    const points = [
        "0,13 7,8 14,11 21,5 28,10 36,2 45,8 53,1",
        "0,14 8,11 16,4 25,8 32,3 40,7 48,1 53,4",
        "0,14 7,9 15,12 23,6 31,8 39,3 47,7 53,1"
    ];
    return `
        <svg class="spark" viewBox="0 0 54 16">
            <polyline points="${points[index % 3]}"></polyline>
        </svg>
    `;
}

function updateKPIs(data) {
    const items = [
        ["blue", "bi-people-fill", "Total Students", data.students, "7.8%"],
        ["purple", "bi-person-workspace", "Total Teachers", data.teachers, "6.3%"],
        ["green", "bi-book", "Total Courses", data.courses, "3.4%"],
        ["orange", "bi-currency-rupee", "Total Revenue", data.revenue, "10.8%"],
        ["red", "bi-receipt-cutoff", "Pending Fees", data.pendingFees, "8.4%"]
    ];
    $("#kpiGrid").innerHTML = items.map((item, index) => `
        <article class="panel kpi-card ${item[0]}">
            <span class="kpi-icon">
                <i class="bi ${item[1]}"></i>
            </span>
            <div>
                <h3>${item[2]}</h3>
                <strong>${item[3]}</strong>
            </div>
            <div class="kpi-footer">
                <div class="kpi-trend">
                    <b>↑ ${item[4]}</b>
                    <span>from last month</span>
                </div>
                ${sparkline(index)}
            </div>
        </article>
    `).join("");
}

function getChartLabels() {
    const from = new Date(selectedFrom);
    const to = new Date(selectedTo);
    const labels = [];
    let current = new Date(from.getFullYear(), from.getMonth(), 1);
    const end = new Date(to.getFullYear(), to.getMonth(), 1);
    while (current <= end) {
        labels.push(current.toLocaleString("en-US", { month: "short" }));
        current.setMonth(current.getMonth() + 1);
    }
    while (labels.length < 6) {
        labels.unshift(labels[0] || "May");
    }
    return labels.slice(-6);
}

function getLines(type) {
    if (currentBranch === "all") {
        return ["nashik", "dhule", "pune"].map(branch => ({
            branch,
            values: chartLines[branch][type]
        }));
    }
    return [{
        branch: currentBranch,
        values: chartLines[currentBranch][type]
    }];
}

function niceNum(range, round) {
    const exponent = Math.floor(Math.log10(range));
    const fraction = range / Math.pow(10, exponent);
    let niceFraction;
    if (round) {
        if (fraction < 1.5) niceFraction = 1;
        else if (fraction < 3) niceFraction = 2;
        else if (fraction < 7) niceFraction = 5;
        else niceFraction = 10;
    } else {
        if (fraction <= 1) niceFraction = 1;
        else if (fraction <= 2) niceFraction = 2;
        else if (fraction <= 5) niceFraction = 5;
        else niceFraction = 10;
    }
    return niceFraction * Math.pow(10, exponent);
}

function niceScale(rawMin, rawMax, targetTicks) {
    if (rawMin === rawMax) {
        rawMin = 0;
        rawMax = rawMax || 10;
    }
    const range = niceNum(rawMax - rawMin, false);
    const step = niceNum(range / (targetTicks - 1), true);
    const min = Math.max(0, Math.floor(rawMin / step) * step);
    const max = Math.ceil(rawMax / step) * step;
    return { min, max, step };
}

function makeChart(id, type) {
    const chart = $(`#${id}`);
    if (!chart) return;
    const lines = getLines(type);
    const colors = {
        nashik: "#1683ff",
        dhule: "#9b5de5",
        pune: "#16d98b"
    };
    const months = getChartLabels();
    const width = 720;
    const height = 260;
    const left = 48;
    const right = 18;
    const top = 18;
    const bottom = 38;
    const plotWidth = width - left - right;
    const plotHeight = height - top - bottom;
    const allValues = lines.flatMap(line => line.values);
    const rawMax = Math.max(...allValues);
    const rawMin = Math.min(0, Math.min(...allValues));
    const { min, max, step } = niceScale(rawMin, rawMax, 6);
    const tickCount = Math.round((max - min) / step) + 1;

    function pointSet(values) {
        return values.map((value, index) => {
            const x = left + (plotWidth / Math.max(values.length - 1, 1)) * index;
            const y = top + plotHeight * (1 - ((value - min) / (max - min)));
            return { x: Number(x.toFixed(2)), y: Number(y.toFixed(2)), value };
        });
    }

    const grids = Array.from({ length: tickCount }, (_, index) => {
        const value = max - step * index;
        const ratio = (max - value) / (max - min);
        const y = top + plotHeight * ratio;
        return `
            <line class="grid-line" x1="${left}" x2="${width - right}" y1="${y}" y2="${y}" />
            <text class="axis-label" x="${left - 9}" y="${y + 3}" text-anchor="end">${Math.round(value)}</text>
        `;
    }).join("");

    const labels = months.map((month, index) => {
        const x = left + (plotWidth / Math.max(months.length - 1, 1)) * index;
        return `<text class="axis-label" x="${x}" y="${height - 10}" text-anchor="middle">${month}</text>`;
    }).join("");

    const lineDots = {};
    const linePoints = lines.map(line => {
        lineDots[line.branch] = pointSet(line.values);
        return { branch: line.branch, points: lineDots[line.branch] };
    });
    const pointCount = linePoints[0]?.points.length || 0;
    const labelOffsets = lines.map(() => []);
    for (let index = 0; index < pointCount; index++) {
        const column = linePoints.map((line, lineIndex) => ({
            lineIndex,
            y: line.points[index].y
        })).sort((a, b) => a.y - b.y);
        let lastLabelY = null;
        column.forEach(entry => {
            let labelY = entry.y - 10;
            if (lastLabelY !== null && lastLabelY - labelY < 11) {
                labelY = lastLabelY - 11;
            }
            lastLabelY = labelY;
            labelOffsets[entry.lineIndex][index] = labelY;
        });
    }

    const paths = lines.map((line, lineIndex) => {
        const points = linePoints[lineIndex].points;
        const color = colors[line.branch];
        const polyline = points.map(p => `${p.x},${p.y}`).join(" ");
        const dots = points.map(p => `
            <circle class="chart-dot" cx="${p.x}" cy="${p.y}" r="4" fill="${color}" />
            <circle class="chart-dot-halo" cx="${p.x}" cy="${p.y}" r="7" fill="transparent" stroke="${color}" />
        `).join("");
        const valueLabels = points.map((point, index) => `
            <text class="chart-value" style="fill:${color}" x="${point.x}" y="${labelOffsets[lineIndex][index]}" text-anchor="middle">${point.value}</text>
        `).join("");
        return `
            <polygon class="chart-area" points="${polyline}" />
            <polyline class="line-${line.branch}" points="${polyline}" />
            ${dots}
            ${valueLabels}
        `;
    }).join("");

    chart.innerHTML = `
        <svg viewBox="0 0 ${width} ${height}" preserveAspectRatio="none">
            ${grids}
            ${labels}
            ${paths}
        </svg>
    `;

    const legend = type === "growth" ? $("#growthLegend") : $("#revenueLegend");
    legend.innerHTML = lines.map(line => `
        <span>
            <i style="background:${colors[line.branch]}"></i>
            ${branchData[line.branch].label.replace(" Branch", "")}
        </span>
    `).join("");
}

function updateCharts(data) {
    const name = currentBranch === "all" ? "All Branches" : data.label;
    $("#growthTitle").textContent = `Student Growth (${name})`;
    $("#revenueTitle").textContent = `Revenue Overview (${name})`;
    makeChart("growthChart", "growth");
    makeChart("revenueChart", "revenue");
}

function updateBranchPanel(data) {
    const panel = $("#branchPanel");
    if (currentBranch !== "all") {
        panel.innerHTML = `
            <div class="panel-title">
                <h2>Branch Info</h2>
            </div>
            <div class="branch-info">
                <div class="branch-icon">
                    <i class="bi bi-building"></i>
                </div>
                <div class="branch-details">
                    <h2>${data.label}</h2>
                    <div class="branch-status">
                        <i class="bi bi-circle-fill"></i>
                        Active Branch
                    </div>
                    <div class="branch-contact-grid">
                        <div class="branch-contact-item">
                            <span>Established</span>
                            <b>${data.established}</b>
                        </div>
                        <div class="branch-contact-item">
                            <span>Location</span>
                            <b>${data.address}</b>
                        </div>
                        <div class="branch-contact-item">
                            <span>Phone</span>
                            <b>${data.phone}</b>
                        </div>
                        <div class="branch-contact-item">
                            <span>Email</span>
                            <b>${data.email}</b>
                        </div>
                    </div>
                    <div class="branch-mini-stats">
                        <div class="branch-mini-stat">
                            <span>Students</span>
                            <b>${data.students}</b>
                        </div>
                        <div class="branch-mini-stat">
                            <span>Teachers</span>
                            <b>${data.teachers}</b>
                        </div>
                        <div class="branch-mini-stat">
                            <span>Courses</span>
                            <b>${data.courses}</b>
                        </div>
                    </div>
                </div>
            </div>
        `;
        return;
    }

    const rows = ["nashik", "dhule", "pune"].map(key => {
        const branch = branchData[key];
        const revenue = key === "nashik" ? "₹2.68 Cr" : key === "dhule" ? "₹2.12 Cr" : "₹2.65 Cr";
        return `
            <tr>
                <td>
                    <span class="branch-badge branch-${key}">${branch.label[0]}</span>
                    ${branch.label.replace(" Branch", "")}
                </td>
                <td>${branch.students}</td>
                <td>${branch.teachers}</td>
                <td>${revenue}</td>
                <td>${branch.collection}%</td>
            </tr>
        `;
    }).join("");

    panel.innerHTML = `
        <div class="panel-title">
            <h2>Branch Comparison</h2>
        </div>
        <table class="branch-compare">
            <thead>
                <tr>
                    <th>Branch</th>
                    <th>Students</th>
                    <th>Teachers</th>
                    <th>Revenue</th>
                    <th>Collection %</th>
                </tr>
            </thead>
            <tbody>
                ${rows}
                <tr>
                    <td><b>Total</b></td>
                    <td><b>18,642</b></td>
                    <td><b>1,842</b></td>
                    <td><b>₹7.45 Cr</b></td>
                    <td><b>85%</b></td>
                </tr>
            </tbody>
        </table>
        <div class="branch-insight">
            <div class="insight-item">
                <span>Highest Collection</span>
                <b>Nashik · 92%</b>
            </div>
            <div class="insight-item">
                <span>Largest Student Base</span>
                <b>Nashik · 6,521</b>
            </div>
            <div class="insight-item">
                <span>Total Branches</span>
                <b>3 Active</b>
            </div>
        </div>
    `;
}

function updateSnapshot(data) {
    const applications = Number(String(data.applications).replace(/,/g, "")) || 0;
    const admissions = Number(String(data.admissions).replace(/,/g, "")) || 0;
    const pipeline = admissions + applications;
    const admittedShare = pipeline ? Math.round((admissions / pipeline) * 100) : 0;

    $("#snapshotPanel").innerHTML = `
        <div class="panel-title">
            <h2>Admissions Snapshot</h2>
        </div>
        <div class="snapshot-grid">
            <div class="snapshot-item">
                <span>New Admissions</span>
                <b>${data.admissions}</b>
                <small>↑ 6.4%</small>
            </div>
            <div class="snapshot-item">
                <span>Active Students</span>
                <b>${data.activeStudents}</b>
                <small>↑ 3.8%</small>
            </div>
            <div class="snapshot-item">
                <span>Applications</span>
                <b>${data.applications}</b>
                <small>Current</small>
            </div>
            <div class="snapshot-item">
                <span>Admission Rate</span>
                <b>${data.admissionRate}</b>
                <small>This period</small>
            </div>
        </div>
        <div class="snapshot-conversion">
            <div class="snapshot-conversion-head">
                <span>Admissions Pipeline This Period</span>
                <b>${admittedShare}% admitted</b>
            </div>
            <div class="snapshot-conversion-bar">
                <i style="width:${admittedShare}%"></i>
            </div>
            <div class="snapshot-conversion-foot">
                <span><i class="bi bi-person-check"></i> ${data.admissions} admitted</span>
                <span><i class="bi bi-file-earmark-text"></i> ${data.applications} applications pending</span>
            </div>
        </div>
    `;
}

function updateExam(data) {
    const panel = $("#examPanel");
    if (currentBranch === "all") {
        panel.innerHTML = `
            <div class="panel-title">
                <h2>Branch Operations</h2>
                <span class="panel-chip blue-chip">
                    <i class="bi bi-activity"></i>
                    Live Overview
                </span>
            </div>
            <div class="operations-highlight">
                <div class="operations-icon">
                    <i class="bi bi-buildings"></i>
                </div>
                <div>
                    <strong>3 Active Branches</strong>
                    <span>Nashik • Dhule • Pune</span>
                </div>
            </div>
            <div class="operations-grid">
                <div class="operation-stat">
                    <i class="bi bi-people-fill"></i>
                    <span>Students</span>
                    <b>${data.students}</b>
                </div>
                <div class="operation-stat">
                    <i class="bi bi-person-workspace"></i>
                    <span>Teachers</span>
                    <b>${data.teachers}</b>
                </div>
                <div class="operation-stat">
                    <i class="bi bi-book"></i>
                    <span>Courses</span>
                    <b>${data.courses}</b>
                </div>
                <div class="operation-stat">
                    <i class="bi bi-wallet2"></i>
                    <span>Collection</span>
                    <b>${data.collection}%</b>
                </div>
            </div>
            <div class="operation-extra">
                <div class="operation-extra-item">
                    <span>New Admissions</span>
                    <b>${data.admissions}</b>
                </div>
                <div class="operation-extra-item">
                    <span>Applications</span>
                    <b>${data.applications}</b>
                </div>
                <div class="operation-extra-item">
                    <span>Pending Fees</span>
                    <b>${data.pendingFees}</b>
                </div>
            </div>
        `;
        return;
    }

    const score = Number(data.exam);
    const performanceText = score >= 85 ? "Excellent performance" : score >= 75 ? "Good performance" : "Needs attention";

    panel.innerHTML = `
        <div class="panel-title">
            <h2>Exam Performance</h2>
            <span class="panel-chip orange-chip">
                <i class="bi bi-mortarboard-fill"></i>
                ${performanceText}
            </span>
        </div>
        <div class="exam-hero">
            <div class="exam-ring" style="--score:${score * 3.6}deg">
                <div class="exam-ring-inner">
                    <strong>${score}%</strong>
                    <span>Average</span>
                </div>
            </div>
            <div class="exam-summary">
                <b>Overall Performance</b>
                <span>Latest examination performance</span>
                <div class="exam-mini-bar">
                    <i style="width:${score}%"></i>
                </div>
                <small><i class="bi bi-arrow-up-right"></i> Performance is being tracked</small>
            </div>
        </div>
        <div class="exam-stats">
            <div class="exam-stat green-stat">
                <i class="bi bi-trophy-fill"></i>
                <div>
                    <span>Highest Score</span>
                    <b>${data.highest}</b>
                </div>
            </div>
            <div class="exam-stat red-stat">
                <i class="bi bi-graph-down-arrow"></i>
                <div>
                    <span>Lowest Score</span>
                    <b>${data.lowest}</b>
                </div>
            </div>
            <div class="exam-stat blue-stat">
                <i class="bi bi-journal-check"></i>
                <div>
                    <span>Total Exams</span>
                    <b>${data.exams}</b>
                </div>
            </div>
        </div>
    `;
}

function updateAlerts(data) {
    const panel = $("#alertsPanel");
    const icons = ["bi-exclamation-triangle-fill", "bi-clock-history", "bi-file-earmark-x-fill", "bi-person-plus-fill"];
    const classes = ["alert-danger", "alert-warning", "alert-info", "alert-success"];

    panel.innerHTML = `
        <div class="panel-title">
            <h2>Recent Alerts</h2>
            <span class="alert-count">${data.alerts.length} Active</span>
        </div>
        <div class="alerts-list">
            ${data.alerts.map((alert, index) => `
                <div class="alert-item ${classes[index % classes.length]}">
                    <span class="alert-icon">
                        <i class="bi ${icons[index % icons.length]}"></i>
                    </span>
                    <div class="alert-content">
                        <b>${alert}</b>
                        <small><i class="bi bi-clock"></i> Requires administrative attention</small>
                    </div>
                    <i class="bi bi-chevron-right alert-arrow"></i>
                </div>
            `).join("")}
        </div>
        <div class="alert-summary">
            <span>${data.alerts.length} active alerts</span>
            <span>Administrative review required</span>
        </div>
    `;
}

function activityIcon(activity) {
    if (activity.includes("Admission")) return "bi-person-plus-fill success";
    if (activity.includes("Payment")) return "bi-currency-rupee warning";
    if (activity.includes("Teacher")) return "bi-person-workspace info";
    return "bi-calendar-event purple-text";
}

function updateActivities(data) {
    const allBranches = currentBranch === "all";
    $("#activitiesHead").innerHTML = `
        <tr>
            <th>Activity</th>
            ${allBranches ? "<th>Branch</th>" : ""}
            <th>Details</th>
            <th>Time</th>
            <th>User</th>
        </tr>
    `;
    $("#activitiesBody").innerHTML = data.activities.map(row => `
        <tr>
            <td><i class="bi ${activityIcon(row[0])} activity-icon"></i> ${row[0]}</td>
            ${allBranches ? `<td>${row[1]}</td>` : ""}
            <td>${row[2]}</td>
            <td>${row[3]}</td>
            <td>${row[4]}</td>
        </tr>
    `).join("");

    $("#activitiesFooter").innerHTML = `
        <span><i class="bi bi-clock-history"></i> Last activity ${data.activities[0][3]}</span>
        <span>${data.activities.length} of ${data.activities.length} shown · <a href="javascript:void(0)" id="footerViewAll">view all</a></span>
    `;
    const footerLink = document.getElementById("footerViewAll");
    if (footerLink) {
        footerLink.addEventListener("click", openActivitiesModal);
    }
}

function updateCourses(data) {
    $("#coursesTitle").textContent = currentBranch === "all" ? "Top Courses" : `Top Courses (${data.label})`;
    $("#coursesList").innerHTML = data.coursesList.map(course => `
        <div class="course">
            <span>${course[0]}</span>
            <b>${course[1]}</b>
        </div>
    `).join("");
}

function formatDate(value) {
    const date = new Date(`${value}T00:00:00`);
    return date.toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" });
}

const dateRangeButton = $("#dateRangeButton");
const dateRangeMenu = $("#dateRangeMenu");
const dateFrom = $("#dateFrom");
const dateTo = $("#dateTo");

function closeDateMenu() {
    dateRangeMenu.classList.remove("open");
    dateRangeButton.setAttribute("aria-expanded", "false");
}

dateRangeButton.addEventListener("click", event => {
    event.stopPropagation();
    const open = !dateRangeMenu.classList.contains("open");
    closeDateMenu();
    if (open) {
        dateRangeMenu.classList.add("open");
        dateRangeButton.setAttribute("aria-expanded", "true");
    }
});

$("#dateApply").addEventListener("click", () => {
    if (!dateFrom.value || !dateTo.value) {
        showToast("Please select both dates.");
        return;
    }
    if (dateFrom.value > dateTo.value) {
        showToast("From date cannot be after To date.");
        return;
    }
    selectedFrom = dateFrom.value;
    selectedTo = dateTo.value;
    $("#dateRangeText").textContent = `${formatDate(selectedFrom)} – ${formatDate(selectedTo)}`;
    closeDateMenu();
    updateCharts(branchData[currentBranch]);
    showToast("Date range updated");
});

$("#dateCancel").addEventListener("click", closeDateMenu);

const branchSelectButton = $("#branchSelectButton");
const branchMenu = $("#branchMenu");

function closeBranchMenu() {
    branchMenu.classList.remove("open");
    branchSelectButton.classList.remove("open");
    branchSelectButton.setAttribute("aria-expanded", "false");
}

branchSelectButton.addEventListener("click", event => {
    event.stopPropagation();
    const open = !branchMenu.classList.contains("open");
    closeBranchMenu();
    if (open) {
        branchMenu.classList.add("open");
        branchSelectButton.classList.add("open");
        branchSelectButton.setAttribute("aria-expanded", "true");
    }
});

document.querySelectorAll(".branch-option").forEach(option => {
    option.addEventListener("click", () => {
        const branch = option.dataset.branch;
        document.querySelectorAll(".branch-option").forEach(item => item.classList.remove("selected"));
        option.classList.add("selected");
        $("#selectedBranchText").textContent = option.textContent.trim();
        closeBranchMenu();
        updateDashboard(branch);
    });
});

const profileToggle = $("#profileToggle");
const profileMenu = $("#profileMenu");

function closeProfileMenu() {
    profileMenu.classList.remove("open");
    profileToggle.setAttribute("aria-expanded", "false");
}

profileToggle.addEventListener("click", event => {
    event.stopPropagation();
    const open = !profileMenu.classList.contains("open");
    closeProfileMenu();
    if (open) {
        profileMenu.classList.add("open");
        profileToggle.setAttribute("aria-expanded", "true");
    }
});

$("#myProfile").addEventListener("click", () => {
    closeProfileMenu();
    showToast("My Profile selected");
});

$("#profileLogout").addEventListener("click", () => {
    closeProfileMenu();
    window.location.href = "/auth/index.html";
});

document.addEventListener("click", event => {
    if (!branchMenu.contains(event.target) && !branchSelectButton.contains(event.target)) {
        closeBranchMenu();
    }
    if (!dateRangeMenu.contains(event.target) && !dateRangeButton.contains(event.target)) {
        closeDateMenu();
    }
    if (!profileMenu.contains(event.target) && !profileToggle.contains(event.target)) {
        closeProfileMenu();
    }
    const action = event.target.closest("[data-toast]");
    if (action) {
        showToast(action.dataset.toast);
    }
});

$("#navList").addEventListener("click", event => {
    const link = event.target.closest(".nav-item");
    if (!link) return;
    event.preventDefault();
    document.querySelectorAll(".nav-item").forEach(item => item.classList.remove("active"));
    link.classList.add("active");
    if (link.dataset.module !== "Dashboard") {
        showToast(`${link.dataset.module} module selected`);
    }
    $("#sidebar").classList.remove("open");
});

$("#mobileMenu").addEventListener("click", () => {
    $("#sidebar").classList.toggle("open");
});

$("#brandLink").addEventListener("click", event => {
    event.preventDefault();
    document.querySelectorAll(".nav-item").forEach(item => item.classList.remove("active"));
    document.querySelector('[data-module="Dashboard"]').classList.add("active");
    updateDashboard("all");
});

const activitiesModal = $("#activitiesModal");

function fillActivitiesModal() {
    const allBranches = currentBranch === "all";
    $("#modalActivitiesHead").innerHTML = `
        <tr>
            <th>Activity</th>
            ${allBranches ? "<th>Branch</th>" : ""}
            <th>Details</th>
            <th>Time</th>
            <th>User</th>
        </tr>
    `;
    $("#modalActivitiesBody").innerHTML = branchData[currentBranch].activities.map(row => `
        <tr>
            <td><i class="bi ${activityIcon(row[0])} activity-icon"></i> ${row[0]}</td>
            ${allBranches ? `<td>${row[1]}</td>` : ""}
            <td>${row[2]}</td>
            <td>${row[3]}</td>
            <td>${row[4]}</td>
        </tr>
    `).join("");
}

function openActivitiesModal() {
    fillActivitiesModal();
    activitiesModal.classList.add("open");
    document.body.style.overflow = "hidden";
}

function closeActivitiesModal() {
    activitiesModal.classList.remove("open");
    document.body.style.overflow = "";
}

$("#viewAllActivities").addEventListener("click", openActivitiesModal);
$("#activitiesModalClose").addEventListener("click", closeActivitiesModal);
$("#activitiesModalExit").addEventListener("click", closeActivitiesModal);

activitiesModal.addEventListener("click", event => {
    if (event.target === activitiesModal) {
        closeActivitiesModal();
    }
});

document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
        closeActivitiesModal();
    }
});

function updateDashboard(branch) {
    currentBranch = branch;
    const data = branchData[branch];
    const content = $("#dashboardContent");
    content.classList.add("updating");
    $("#dashboardTitle").textContent = data.title;
    updateKPIs(data);
    updateCharts(data);
    updateBranchPanel(data);
    updateSnapshot(data);
    updateExam(data);
    updateAlerts(data);
    updateActivities(data);
    updateCourses(data);
    requestAnimationFrame(() => {
        content.classList.remove("updating");
    });
}

updateDashboard("all");

