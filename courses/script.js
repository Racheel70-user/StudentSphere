// ============================================================
// DATA
// ============================================================
const coursesData = {
    Java: {
        id: 'Java',
        icon: '☕',
        name: 'Java Programming',
        subtitle: 'Object-Oriented Programming',
        duration: '6 Months',
        seats: '60',
        faculty: '4',
        rating: '4.8',
        ratingsCount: 120,
        level: 'Beginner to Advanced',
        price: '₹15,000',
        description: 'Master Java programming from basics to advanced. Learn OOP concepts, multithreading, collections, and build real-world applications.',
        chapters: [
            { chapter: 1, title: 'Introduction to Java' },
            { chapter: 2, title: 'Variables & Data Types' },
            { chapter: 3, title: 'Operators & Expressions' },
            { chapter: 4, title: 'Control Statements' },
            { chapter: 5, title: 'Arrays & Strings' },
            { chapter: 6, title: 'OOP Concepts' }
        ],
        category: 'advanced',
        notesFile: 'java-notes.html'
    },
    HTML: {
        id: 'HTML',
        icon: '🌐',
        name: 'HTML5',
        subtitle: 'Web Structure & Semantics',
        duration: '3 Months',
        seats: '60',
        faculty: '3',
        rating: '4.9',
        ratingsCount: 95,
        level: 'Beginner',
        price: '₹8,000',
        description: 'Learn the fundamentals of HTML5. Build semantic, accessible, and SEO-friendly web pages from scratch.',
        chapters: [
            { chapter: 1, title: 'HTML Basics' },
            { chapter: 2, title: 'Text Formatting' },
            { chapter: 3, title: 'Links & Images' },
            { chapter: 4, title: 'Tables & Forms' }
        ],
        category: 'beginner',
        notesFile: 'html-notes.html'
    },
    CSS: {
        id: 'CSS',
        icon: '🎨',
        name: 'CSS3',
        subtitle: 'Styling & Responsive Design',
        duration: '3 Months',
        seats: '60',
        faculty: '3',
        rating: '4.7',
        ratingsCount: 80,
        level: 'Beginner',
        price: '₹8,000',
        description: 'Master CSS3 styling, flexbox, grid, animations, and responsive design for modern websites.',
        chapters: [
            { chapter: 1, title: 'CSS Basics' },
            { chapter: 2, title: 'Colors & Backgrounds' },
            { chapter: 3, title: 'Box Model' },
            { chapter: 4, title: 'Flexbox & Grid' }
        ],
        category: 'beginner',
        notesFile: 'css-notes.html'
    },
    JavaScript: {
        id: 'JavaScript',
        icon: '📜',
        name: 'JavaScript',
        subtitle: 'Interactive Web Development',
        duration: '4 Months',
        seats: '60',
        faculty: '4',
        rating: '4.8',
        ratingsCount: 150,
        level: 'Intermediate',
        price: '₹12,000',
        description: 'Learn JavaScript ES6+, DOM manipulation, async/await, APIs, and build interactive web applications.',
        chapters: [
            { chapter: 1, title: 'JS Basics' },
            { chapter: 2, title: 'Functions & Scope' },
            { chapter: 3, title: 'DOM Manipulation' },
            { chapter: 4, title: 'Events & Callbacks' },
            { chapter: 5, title: 'ES6+ Features' }
        ],
        category: 'intermediate',
        notesFile: 'js-notes.html'
    },
    Python: {
        id: 'Python',
        icon: '🐍',
        name: 'Python Programming',
        subtitle: 'Data Science & Automation',
        duration: '6 Months',
        seats: '60',
        faculty: '4',
        rating: '4.9',
        ratingsCount: 200,
        level: 'Beginner to Advanced',
        price: '₹15,000',
        description: 'Complete Python course covering basics, data structures, OOP, data analysis, and automation scripts.',
        chapters: [
            { chapter: 1, title: 'Python Basics' },
            { chapter: 2, title: 'Data Types' },
            { chapter: 3, title: 'Functions' },
            { chapter: 4, title: 'OOP in Python' }
        ],
        category: 'advanced',
        notesFile: 'python-notes.html'
    },
    Bootstrap: {
        id: 'Bootstrap',
        icon: '🅱️',
        name: 'Bootstrap 5',
        subtitle: 'Responsive UI Framework',
        duration: '2 Months',
        seats: '60',
        faculty: '2',
        rating: '4.6',
        ratingsCount: 60,
        level: 'Beginner',
        price: '₹6,000',
        description: 'Learn Bootstrap 5 grid system, components, utilities, and build responsive websites quickly.',
        chapters: [
            { chapter: 1, title: 'Bootstrap Basics' },
            { chapter: 2, title: 'Grid System' },
            { chapter: 3, title: 'Components' }
        ],
        category: 'beginner',
        notesFile: 'bootstrap-notes.html'
    },
    C: {
        id: 'C',
        icon: '⚙️',
        name: 'C Programming',
        subtitle: 'System Programming & Fundamentals',
        duration: '4 Months',
        seats: '60',
        faculty: '3',
        rating: '4.7',
        ratingsCount: 70,
        level: 'Beginner',
        price: '₹10,000',
        description: 'Learn C programming from basics to pointers, memory management, and system-level programming concepts.',
        chapters: [
            { chapter: 1, title: 'C Basics' },
            { chapter: 2, title: 'Functions' },
            { chapter: 3, title: 'Arrays & Pointers' },
            { chapter: 4, title: 'File Handling' }
        ],
        category: 'beginner',
        notesFile: 'c-notes.html'
    },
    Cpp: {
        id: 'Cpp',
        icon: '➕',
        name: 'C++ Programming',
        subtitle: 'Advanced OOP & Performance',
        duration: '5 Months',
        seats: '60',
        faculty: '3',
        rating: '4.6',
        ratingsCount: 85,
        level: 'Intermediate',
        price: '₹12,000',
        description: 'Master C++ with OOP, STL, templates, and performance optimization. Build high-performance applications.',
        chapters: [
            { chapter: 1, title: 'C++ Basics' },
            { chapter: 2, title: 'OOP Concepts' },
            { chapter: 3, title: 'STL Library' },
            { chapter: 4, title: 'Templates' }
        ],
        category: 'intermediate',
        notesFile: 'cpp-notes.html'
    }
};

let studentName = 'Student';
let enrolledCourses = [
    {
        courseId: 'Java',
        enrolledDate: '2026-07-10',
        chapters: [
            { chapter: 1, title: 'Introduction to Java', completed: true },
            { chapter: 2, title: 'Variables & Data Types', completed: true },
            { chapter: 3, title: 'Operators & Expressions', completed: false },
            { chapter: 4, title: 'Control Statements', completed: false },
            { chapter: 5, title: 'Arrays & Strings', completed: false },
            { chapter: 6, title: 'OOP Concepts', completed: false }
        ],
        completed: false,
        certificateIssued: false
    },
    {
        courseId: 'HTML',
        enrolledDate: '2026-08-13',
        chapters: [
            { chapter: 1, title: 'HTML Basics', completed: true },
            { chapter: 2, title: 'Text Formatting', completed: false },
            { chapter: 3, title: 'Links & Images', completed: false },
            { chapter: 4, title: 'Tables & Forms', completed: false }
        ],
        completed: false,
        certificateIssued: false
    }
];

let wishlist = [];
let currentFilter = 'all';
let searchQuery = '';
let pendingEnrollId = null;

// ============================================================
// TOAST
// ============================================================
function showToast(message, type) {
    type = type || 'success';
    const container = document.getElementById('toastContainer');
    const toast = document.createElement('div');
    const colors = {
        success: 'border-color:#4ade80; background:rgba(74,222,128,0.1);',
        error: 'border-color:#ef4444; background:rgba(239,68,68,0.1);',
        warning: 'border-color:#fbbf24; background:rgba(251,191,36,0.1);',
        info: 'border-color:#3b82f6; background:rgba(59,130,246,0.1);'
    };
    const icons = { success: '✅', error: '❌', warning: '⚠️', info: 'ℹ️' };
    toast.style.cssText =
        'padding: 12px 20px; border: 1px solid; border-radius: 12px; background: #1a2236; color: #f0f9ff; font-size: 14px; font-weight: 500; backdrop-filter: blur(10px); box-shadow: 0 8px 24px rgba(0,0,0,0.4); animation: slideIn 0.3s ease; min-width: 250px; ' +
        colors[type];
    toast.innerHTML = icons[type] + ' ' + message;
    container.appendChild(toast);
    setTimeout(function() {
        toast.style.animation = 'slideOut 0.3s ease';
        setTimeout(function() { toast.remove(); }, 300);
    }, 3000);
}

// ============================================================
// RENDER
// ============================================================
function renderAll() {
    renderEnrolledCourses();
    renderAvailableCourses();
    renderWishlist();
    updateStats();
}

function renderEnrolledCourses() {
    const container = document.getElementById('enrolledCoursesList');
    if (enrolledCourses.length === 0) {
        container.innerHTML =
            '<div style="grid-column:1/-1; background:rgba(22,34,54,0.5); border-radius:16px; padding:40px; text-align:center; border:1px dashed #2a3650;"><i class="fas fa-book-open" style="font-size:48px; color:#64748b;"></i><p style="color:#94a3b8; margin-top:12px;">You haven\'t enrolled in any courses yet.</p><p style="color:#64748b; font-size:14px;">Browse available courses below and enroll now!</p></div>';
        return;
    }
    let html = '';
    for (let e = 0; e < enrolledCourses.length; e++) {
        const enrolled = enrolledCourses[e];
        const course = coursesData[enrolled.courseId];
        if (!course) continue;
        let completed = 0;
        for (let c = 0; c < enrolled.chapters.length; c++) {
            if (enrolled.chapters[c].completed) completed++;
        }
        const total = enrolled.chapters.length;
        const progress = Math.round((completed / total) * 100);
        const isComplete = progress === 100;
        const daysSince = Math.floor((new Date() - new Date(enrolled.enrolledDate)) / (1000 * 60 * 60 * 24));
        const isNew = daysSince <= 2;
        html += '<div class="course-card enrolled-card' + (isComplete ? ' completed-card' : '') + '">';
        if (isNew) {
            html +=
                '<span style="position:absolute; top:12px; right:12px; background:#ef4444; color:white; padding:2px 12px; border-radius:20px; font-size:0.6rem; font-weight:700; animation:pulse 1.5s infinite;">NEW</span>';
        }
        html += '<div style="display:flex; justify-content:space-between; align-items:start;"><div><div class="icon">' +
            course.icon + '</div><h3>' + course.name + '</h3><div class="subtitle">' + course.subtitle +
            '</div></div><span style="background:' + (isComplete ? 'rgba(251,191,36,0.12)' :
                'rgba(74,222,128,0.12)') + '; color:' + (isComplete ? '#fbbf24' : '#4ade80') +
            '; padding:3px 14px; border-radius:30px; font-size:0.65rem; font-weight:600;">' + (isComplete ?
                '🎓 Completed' : '📖 Enrolled') + '</span></div>';
        html += '<div style="margin:8px 0;"><div style="display:flex; justify-content:space-between; font-size:13px; color:#94a3b8;"><span><i class="fas fa-calendar"></i> Enrolled: ' +
            enrolled.enrolledDate + '</span><span>' + completed + '/' + total + ' chapters</span></div>';
        html += '<div style="margin-top:6px; width:100%; height:6px; background:#2a3650; border-radius:10px; overflow:hidden;"><div style="width:' +
            progress + '%; height:100%; background:' + (isComplete ?
                'linear-gradient(90deg,#fbbf24,#f59e0b)' :
                'linear-gradient(90deg,#4ade80,#22c55e)') +
            '; border-radius:10px;"></div></div>';
        html += '<div style="text-align:right; font-size:12px; color:' + (isComplete ? '#fbbf24' : '#4ade80') +
            '; margin-top:2px;">' + progress + '% Complete</div></div>';
        html +=
            '<div class="btn-group"><button class="btn btn-notes" onclick="openNotes(\'' + course.id +
            '\')"><i class="fas fa-book"></i> Notes</button>';
        html += '<button class="btn btn-details" onclick="viewCourseDetail(\'' + course.id +
            '\')"><i class="fas fa-info-circle"></i> Details</button>';
        if (isComplete && !enrolled.certificateIssued) {
            html += '<button class="btn btn-certificate" onclick="showCertificate(\'' + course.id +
                '\')"><i class="fas fa-certificate"></i> Certificate</button>';
        }
        html += '<button class="btn btn-unenroll" onclick="unenrollCourse(\'' + course.id +
            '\')"><i class="fas fa-times"></i></button></div></div>';
    }
    container.innerHTML = html;
}

function renderAvailableCourses() {
    const container = document.getElementById('availableCoursesList');
    const enrolledIds = [];
    for (let i = 0; i < enrolledCourses.length; i++) {
        enrolledIds.push(enrolledCourses[i].courseId);
    }
    let html = '';
    const keys = Object.keys(coursesData);
    const filteredCourses = [];
    for (let k = 0; k < keys.length; k++) {
        const key = keys[k];
        const course = coursesData[key];
        const matchFilter = currentFilter === 'all' ||
            (currentFilter === 'beginner' && course.level.indexOf('Beginner') !== -1) ||
            (currentFilter === 'intermediate' && course.level.indexOf('Intermediate') !== -1) ||
            (currentFilter === 'advanced' && course.level.indexOf('Advanced') !== -1);
        const matchSearch = course.name.toLowerCase().indexOf(searchQuery.toLowerCase()) !== -1 ||
            course.subtitle.toLowerCase().indexOf(searchQuery.toLowerCase()) !== -1;
        if (matchFilter && matchSearch) {
            filteredCourses.push(key);
        }
    }
    if (filteredCourses.length === 0) {
        container.innerHTML =
            '<div style="grid-column:1/-1; background:rgba(22,34,54,0.5); border-radius:16px; padding:40px; text-align:center; border:1px dashed #2a3650;"><i class="fas fa-search" style="font-size:48px; color:#64748b;"></i><p style="color:#94a3b8; margin-top:12px;">No courses found matching your search.</p></div>';
        return;
    }
    for (let f = 0; f < filteredCourses.length; f++) {
        const key2 = filteredCourses[f];
        const course2 = coursesData[key2];
        const isEnrolled = enrolledIds.indexOf(key2) !== -1;
        const isWishlisted = wishlist.indexOf(key2) !== -1;
        html += '<div class="course-card" style="' + (isEnrolled ? 'opacity:0.6;' : '') + '">';
        html += '<div class="icon">' + course2.icon + '</div>';
        html += '<h3>' + course2.name + '</h3>';
        html += '<div class="subtitle">' + course2.subtitle + '</div>';
        html += '<div class="info"><i class="fas fa-clock"></i> ' + course2.duration + ' &nbsp;|&nbsp; <i class="fas fa-users"></i> ' +
            course2.seats + ' Seats</div>';
        const badgeClass = course2.level.indexOf('Intermediate') !== -1 ? 'intermediate' :
            course2.level.indexOf('Advanced') !== -1 ? 'advanced' : 'beginner';
        html += '<div style="display:flex; align-items:center; gap:8px; margin-bottom:6px;"><span class="badge ' +
            badgeClass + '">' + course2.level + '</span>';
        html += '<span style="color:#fbbf24; font-size:0.8rem;">⭐ ' + course2.rating + '</span>';
        html += '<span style="color:#64748b; font-size:0.7rem;">(' + course2.ratingsCount + ')</span></div>';
        html += '<div style="display:flex; gap:6px; margin-bottom:8px;">';
        html +=
            '<button onclick="toggleWishlist(\'' + course2.id +
            '\')" style="background:none; border:none; color:' + (isWishlisted ? '#f472b6' : '#64748b') +
            '; font-size:1.2rem; cursor:pointer;"><i class="fas fa-heart"></i></button>';
        if (!isEnrolled) {
            html += '<button class="btn" onclick="viewCourseDetail(\'' + course2.id +
                '\')" style="flex:1;"><i class="fas fa-info-circle"></i> View Details</button>';
        } else {
            html +=
                '<button class="btn" onclick="openNotes(\'' + course2.id +
                '\')" style="flex:1; background:linear-gradient(135deg,#4ade80,#22c55e);"><i class="fas fa-book-open"></i> Continue</button>';
        }
        html += '</div></div>';
    }
    container.innerHTML = html;
}

function renderWishlist() {
    const container = document.getElementById('wishlistContainer');
    const section = document.getElementById('wishlistSection');
    if (wishlist.length === 0) {
        section.style.display = 'none';
        return;
    }
    section.style.display = 'block';
    let html = '';
    for (let w = 0; w < wishlist.length; w++) {
        const id = wishlist[w];
        const course = coursesData[id];
        if (!course) continue;
        html += '<div class="course-card" style="border-left:4px solid #f472b6;">';
        html += '<div class="icon">' + course.icon + '</div>';
        html += '<h3>' + course.name + '</h3>';
        html += '<div class="subtitle">' + course.subtitle + '</div>';
        html +=
            '<div style="display:flex; gap:8px; margin-top:8px;"><button class="btn" onclick="viewCourseDetail(\'' +
            course.id + '\')" style="flex:1; background:linear-gradient(135deg,#22d3ee,#3b82f6);"><i class="fas fa-info-circle"></i> View</button>';
        html +=
            '<button onclick="toggleWishlist(\'' + course.id +
            '\')" style="background:rgba(239,68,68,0.1); border:1px solid rgba(239,68,68,0.2); color:#ef4444; padding:8px 14px; border-radius:30px; cursor:pointer;"><i class="fas fa-times"></i></button></div></div>';
    }
    container.innerHTML = html;
}

function updateStats() {
    const total = Object.keys(coursesData).length;
    const enrolled = enrolledCourses.length;
    let totalChapters = 0;
    let completedChapters = 0;
    for (let i = 0; i < enrolledCourses.length; i++) {
        const enrolled = enrolledCourses[i];
        const course = coursesData[enrolled.courseId];
        if (course) {
            let completed = 0;
            for (let c = 0; c < enrolled.chapters.length; c++) {
                if (enrolled.chapters[c].completed) completed++;
            }
            completedChapters += completed;
            totalChapters += enrolled.chapters.length;
        }
    }
    const overallProgress = totalChapters > 0 ? Math.round((completedChapters / totalChapters) * 100) : 0;
    document.getElementById('totalCourses').textContent = total;
    document.getElementById('enrolledCount').textContent = enrolled;
    document.getElementById('progressPercent').textContent = overallProgress + '%';
    document.getElementById('completedChapters').textContent = completedChapters + '/' + totalChapters;
}

// ============================================================
// SEARCH & FILTER
// ============================================================
function filterCourses(filter) {
    if (filter) {
        currentFilter = filter;
        const btns = document.querySelectorAll('.filter-btn');
        for (let i = 0; i < btns.length; i++) {
            const btn = btns[i];
            btn.classList.toggle('active', btn.dataset.filter === filter);
        }
    }
    searchQuery = document.getElementById('searchInput').value;
    renderAvailableCourses();
}

// ============================================================
// OPEN NOTES
// ============================================================
function openNotes(courseId) {
    const course = coursesData[courseId];
    if (!course) return;
    
    let enrolled = false;
    for (let i = 0; i < enrolledCourses.length; i++) {
        if (enrolledCourses[i].courseId === courseId) {
            enrolled = true;
            break;
        }
    }
    
    if (!enrolled) {
        showToast('❌ You are not enrolled in this course!', 'error');
        return;
    }
    
    window.open(course.notesFile, '_blank');
}

// ============================================================
// COURSE DETAIL VIEW
// ============================================================
function viewCourseDetail(courseKey) {
    const course = coursesData[courseKey];
    if (!course) return;
    document.getElementById('coursesWrapper').style.display = 'none';
    document.getElementById('detailView').classList.add('active');
    let isEnrolled = false;
    for (let i = 0; i < enrolledCourses.length; i++) {
        if (enrolledCourses[i].courseId === courseKey) {
            isEnrolled = true;
            break;
        }
    }
    const isWishlisted = wishlist.indexOf(courseKey) !== -1;
    let html = '<div class="detail-card"><div class="icon-big">' + course.icon + '</div><h2>' + course.name +
        '</h2><div class="subtitle">' + course.subtitle +
        '</div><div style="display:flex; gap:12px; align-items:center; margin-bottom:8px;"><span style="color:#fbbf24;">⭐ ' +
        course.rating + '</span><span style="color:#64748b; font-size:0.8rem;">(' + course.ratingsCount +
        ' reviews)</span><button onclick="toggleWishlist(\'' + course.id +
        '\')" style="background:none; border:none; color:' + (isWishlisted ? '#f472b6' : '#64748b') +
        '; font-size:1.2rem; cursor:pointer;"><i class="fas fa-heart"></i></button></div>';
    html +=
        '<div class="detail-grid"><div class="detail-item"><div class="label"><i class="fas fa-clock"></i> Duration</div><div class="value">' +
        course.duration + '</div></div>';
    html +=
        '<div class="detail-item"><div class="label"><i class="fas fa-users"></i> Seats</div><div class="value">' +
        course.seats + '</div></div>';
    html +=
        '<div class="detail-item"><div class="label"><i class="fas fa-chalkboard"></i> Faculty</div><div class="value">' +
        course.faculty + '</div></div>';
    html +=
        '<div class="detail-item"><div class="label"><i class="fas fa-signal"></i> Level</div><div class="value">' +
        course.level + '</div></div>';
    html +=
        '<div class="detail-item"><div class="label"><i class="fas fa-tag"></i> Price</div><div class="value" style="color:#4ade80;">' +
        course.price + '</div></div>';
    html +=
        '<div class="detail-item"><div class="label"><i class="fas fa-star"></i> Rating</div><div class="value">⭐ ' +
        course.rating + '</div></div></div>';
    html += '<div class="description"><strong>📖 About this course:</strong><br />' + course.description +
        '</div>';
    html +=
        '<div style="margin:16px 0;"><strong style="color:#94a3b8;">📚 Chapters (' + course.chapters.length +
        '):</strong><div style="display:flex; flex-wrap:wrap; gap:8px; margin-top:8px;">';
    for (let ch = 0; ch < course.chapters.length; ch++) {
        html +=
            '<span style="background:rgba(56,189,248,0.06); padding:4px 14px; border-radius:20px; font-size:12px; color:#94a3b8; border:1px solid rgba(56,189,248,0.08);">Ch ' +
            course.chapters[ch].chapter + ': ' + course.chapters[ch].title + '</span>';
    }
    html += '</div></div><div class="enroll-section"><div class="price">' + course.price +
        ' <small>one-time fee</small></div>';
    if (isEnrolled) {
        html +=
            '<button class="btn-enroll" style="background:linear-gradient(135deg,#4ade80,#22c55e);" onclick="openNotes(\'' +
            course.id + '\')"><i class="fas fa-book-open"></i> Continue Learning</button>';
    } else {
        html +=
            '<button class="btn-enroll" onclick="showEnrollConfirm(\'' + course.id +
            '\')"><i class="fas fa-check-circle"></i> Enroll Now</button>';
    }
    html += '</div></div>';
    document.getElementById('detailContent').innerHTML = html;
}

function showListView() {
    document.getElementById('detailView').classList.remove('active');
    document.getElementById('coursesWrapper').style.display = 'block';
    renderAll();
}

// ============================================================
// ENROLLMENT
// ============================================================
const MAX_ENROLLMENTS = 5;

function showEnrollConfirm(courseId) {
    const course = coursesData[courseId];
    if (!course) return;
    for (let i = 0; i < enrolledCourses.length; i++) {
        if (enrolledCourses[i].courseId === courseId) {
            showToast('Already enrolled in ' + course.name, 'warning');
            return;
        }
    }
    if (enrolledCourses.length >= MAX_ENROLLMENTS) {
        showToast('Enrollment limit reached! Max ' + MAX_ENROLLMENTS + ' courses.', 'error');
        return;
    }
    pendingEnrollId = courseId;
    document.getElementById('confirmEnrollName').textContent = course.name;
    document.getElementById('confirmDuration').textContent = course.duration;
    document.getElementById('confirmPrice').textContent = course.price;
    document.getElementById('enrollConfirmModal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeEnrollConfirm() {
    document.getElementById('enrollConfirmModal').classList.remove('active');
    document.body.style.overflow = 'auto';
    pendingEnrollId = null;
}

function confirmEnrollSubmit() {
    if (!pendingEnrollId) return;
    const course = coursesData[pendingEnrollId];
    if (!course) return;
    const chapters = [];
    for (let i = 0; i < course.chapters.length; i++) {
        chapters.push({ chapter: course.chapters[i].chapter, title: course.chapters[i].title, completed: false });
    }
    enrolledCourses.push({
        courseId: pendingEnrollId,
        enrolledDate: new Date().toISOString().split('T')[0],
        chapters: chapters,
        completed: false,
        certificateIssued: false
    });
    closeEnrollConfirm();
    
    // Show Beautiful Success Popup
    document.getElementById('successCourseName').textContent = course.name;
    document.getElementById('successStartDate').textContent = new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
    document.getElementById('enrollSuccessModal').classList.add('active');
    document.body.style.overflow = 'hidden';
    showToast('✅ Enrolled in ' + course.name + ' successfully!', 'success');
    renderAll();
}

function closeSuccessModal() {
    document.getElementById('enrollSuccessModal').classList.remove('active');
    document.body.style.overflow = 'auto';
}

function closeSuccessModalAndView() {
    const name = document.getElementById('successCourseName').textContent;
    let courseId = null;
    const keys = Object.keys(coursesData);
    for (let i = 0; i < keys.length; i++) {
        if (coursesData[keys[i]].name === name) {
            courseId = keys[i];
            break;
        }
    }
    closeSuccessModal();
    if (courseId) {
        openNotes(courseId);
    }
}

// ============================================================
// UN-ENROLL
// ============================================================
function unenrollCourse(courseId) {
    const course = coursesData[courseId];
    if (!course) return;
    if (confirm('Are you sure you want to un-enroll from "' + course.name +
            '"?\n\nThis action cannot be undone.')) {
        let index = -1;
        for (let i = 0; i < enrolledCourses.length; i++) {
            if (enrolledCourses[i].courseId === courseId) {
                index = i;
                break;
            }
        }
        if (index !== -1) {
            enrolledCourses.splice(index, 1);
            showToast('❌ Un-enrolled from ' + course.name, 'error');
            renderAll();
        }
    }
}

// ============================================================
// WISHLIST
// ============================================================
function toggleWishlist(courseId) {
    const index = wishlist.indexOf(courseId);
    if (index === -1) {
        wishlist.push(courseId);
        showToast('⭐ Added to wishlist!', 'info');
    } else {
        wishlist.splice(index, 1);
        showToast('Removed from wishlist', 'warning');
    }
    renderAll();
    if (document.getElementById('detailView').classList.contains('active')) {
        viewCourseDetail(courseId);
    }
}

// ============================================================
// CERTIFICATE - SUPER BEAUTIFUL
// ============================================================
function showCertificate(courseId) {
    const course = coursesData[courseId];
    if (!course) return;
    
    // Update cert popup data
    document.getElementById('certCourseName').textContent = course.icon + ' ' + course.name;
    document.getElementById('certStudentName').textContent = studentName;
    document.getElementById('certDate').textContent = new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
    document.getElementById('certDuration').textContent = course.duration;
    
    // Show the modal
    document.getElementById('certModal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

// ============================================================
// CLOSE CERTIFICATE POPUP
// ============================================================
function closeCertPopup() {
    document.getElementById('certModal').classList.remove('active');
    document.body.style.overflow = 'auto';
}

// ============================================================
// DOWNLOAD CERTIFICATE
// ============================================================
function downloadCert() {
    showToast('📄 Certificate downloaded successfully!', 'success');
    setTimeout(() => {
        closeCertPopup();
        // Mark certificate as issued
        const courseName = document.getElementById('certCourseName').textContent;
        let courseId = null;
        const keys = Object.keys(coursesData);
        for (let i = 0; i < keys.length; i++) {
            if ((coursesData[keys[i]].icon + ' ' + coursesData[keys[i]].name) === courseName) {
                courseId = keys[i];
                break;
            }
        }
        if (courseId) {
            for (let i = 0; i < enrolledCourses.length; i++) {
                if (enrolledCourses[i].courseId === courseId) {
                    enrolledCourses[i].certificateIssued = true;
                    break;
                }
            }
            renderAll();
        }
    }, 800);
}

// ============================================================
// TOGGLE CHAPTER COMPLETE (Called from Notes Page)
// ============================================================
function toggleChapterCompleteFromNotes(courseId, chapterIndex) {
    let enrollment = null;
    for (let i = 0; i < enrolledCourses.length; i++) {
        if (enrolledCourses[i].courseId === courseId) {
            enrollment = enrolledCourses[i];
            break;
        }
    }
    if (!enrollment) return false;
    if (enrollment.chapters[chapterIndex]) {
        enrollment.chapters[chapterIndex].completed = !enrollment.chapters[chapterIndex].completed;
        let allCompleted = true;
        for (let c = 0; c < enrollment.chapters.length; c++) {
            if (!enrollment.chapters[c].completed) {
                allCompleted = false;
                break;
            }
        }
        if (allCompleted) {
            enrollment.completed = true;
            showToast('🎉 Course completed! Get your certificate!', 'success');
        } else {
            enrollment.completed = false;
        }
        renderAll();
        return true;
    }
    return false;
}

// ============================================================
// PROFILE
// ============================================================
function toggleProfilePopup() {
    const popup = document.getElementById('profilePopup');
    const arrow = document.getElementById('profileArrow');
    popup.classList.toggle('show');
    if (arrow) arrow.classList.toggle('rotate');
}

document.addEventListener('click', function(e) {
    const popup = document.getElementById('profilePopup');
    const profile = document.querySelector('.student-profile-top');
    if (popup && profile && !profile.contains(e.target) && !popup.contains(e.target)) {
        popup.classList.remove('show');
        const arrow = document.getElementById('profileArrow');
        if (arrow) arrow.classList.remove('rotate');
    }
});

function showProfile() {
    document.getElementById('profilePopup').classList.remove('show');
    alert('👤 ' + studentName + '\nRole: Student');
}

function logout() {
    document.getElementById('profilePopup').classList.remove('show');
    if (confirm('Are you sure you want to logout?')) {
        showToast('✅ Logged out successfully!', 'success');
    }
}

// ============================================================
// INIT
// ============================================================
renderAll();
console.log('✅ Courses page loaded!');
