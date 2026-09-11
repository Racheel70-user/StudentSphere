(() => {
  const readSession = () => {
    try {
      const raw = sessionStorage.getItem('studSession') || localStorage.getItem('studSession');
      return raw ? JSON.parse(raw) : null;
    } catch (_) {
      return null;
    }
  };

  const getInitials = (name = '') => name.trim().split(/\s+/).filter(Boolean)
    .slice(0, 2).map(part => part.charAt(0).toUpperCase()).join('');

  const requireStudent = () => {
    const session = readSession();
    if (!session || session.role !== 'student') {
      window.location.replace('/auth/index.html');
      return null;
    }
    const profile = session.profile || {
      studentId: session.id,
      fullName: session.name,
      email: session.email || '',
      batch: session.batch || '',
      program: session.program || 'Student'
    };
    return { ...session, profile };
  };

  const loadCurrentStudent = async () => {
    const session = requireStudent();
    if (!session) return null;

    try {
      const response = await fetch(`/api/students/student-id/${encodeURIComponent(session.id)}`);
      if (!response.ok) throw new Error('Student profile unavailable');
      const profile = await response.json();
      const nextSession = { ...session, profile };
      sessionStorage.setItem('studSession', JSON.stringify(nextSession));
      return profile;
    } catch (_) {
      return session.profile || session;
    }
  };

  window.Stud = {
    requireStudent,
    loadCurrentStudent,
    getInitials,
    signOut() {
      sessionStorage.removeItem('studSession');
      localStorage.removeItem('studSession');
      window.location.href = '/auth/index.html';
    }
  };
})();
