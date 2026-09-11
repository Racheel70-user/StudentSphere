const FACULTY = {
  'FAC-2016-047': { password: 'Ananya@2026', name: 'Dr. Ananya Sharma', initials: 'AS', department: 'Computer Science & Engineering' },
  'FAC-2018-082': { password: 'Rajiv@2026', name: 'Dr. Rajiv Kapoor', initials: 'RK', department: 'Information Technology' }
};
function facultyFromUrl() {
  const id = new URLSearchParams(location.search).get('faculty');
  return FACULTY[id] ? { id, name: FACULTY[id].name, initials: FACULTY[id].initials, department: FACULTY[id].department } : null;
}
function signedInFaculty() {
  try {
    const saved = sessionStorage.getItem('studSession') || localStorage.getItem('studSession') || localStorage.getItem('acadeFacultySession');
    if (saved) {
      const session = JSON.parse(saved);
      if (session.role === 'faculty') return session;
    }
  } catch (_) {}
  return facultyFromUrl();
}
function requireFaculty() { const faculty = signedInFaculty(); if (!faculty) location.replace('/auth/index.html'); return faculty; }
function fillFaculty() {
  const faculty = requireFaculty(); if (!faculty) return;
  document.querySelectorAll('[data-faculty-name]').forEach(x => x.textContent = faculty.name);
  document.querySelectorAll('[data-faculty-initials]').forEach(x => x.textContent = faculty.initials);
  document.querySelectorAll('[data-faculty-department]').forEach(x => x.textContent = faculty.department);
  document.querySelectorAll('a[href$="-secure.html"]').forEach(link => link.href += '?faculty=' + encodeURIComponent(faculty.id));
}
function signOut() {
  try {
    sessionStorage.removeItem('studSession');
    localStorage.removeItem('studSession');
    localStorage.removeItem('acadeFacultySession');
  } catch (_) {}
  location.replace('/auth/index.html');
}


document.addEventListener("DOMContentLoaded", function () {

    const btn = document.getElementById("profileMenuToggle");
    const menu = document.getElementById("profileDropdown");

    if (btn && menu) {
        btn.addEventListener("click", function (e) {
            e.stopPropagation();
            menu.classList.toggle("open");
        });

        document.addEventListener("click", function () {
            menu.classList.remove("open");
        });
    }

});
