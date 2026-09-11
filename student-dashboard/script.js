const loggedInStudent = (() => {
    try {
        const saved = sessionStorage.getItem("studSession") || localStorage.getItem("studSession");
        return saved ? JSON.parse(saved) : { name: "Student" };
    } catch (_) {
        return { name: "Student" };
    }
})();

const sidebar = document.getElementById("sidebar");
const menuToggle = document.getElementById("menuToggle");
const profileToggle = document.getElementById("profileMenuToggle");
const profileDropdown = document.getElementById("profileDropdown");
const toast = document.getElementById("toast");

function getInitials(name) {
    return name
        .trim()
        .split(/\s+/)
        .filter(Boolean)
        .slice(0, 2)
        .map(part => part.charAt(0).toUpperCase())
        .join("");
}

function syncStudentProfile() {
    const studentName = loggedInStudent.name;
    const studentInitials = getInitials(studentName);

    const greetingName =
        document.getElementById("loggedInStudentName");

    const profileName =
        document.getElementById("profileStudentName");

    const profileAvatar =
        document.getElementById("profileAvatar");

    if (greetingName) {
        greetingName.textContent = studentName;
    }

    if (profileName) {
        profileName.textContent = studentName;
    }

    if (profileAvatar) {
        profileAvatar.textContent = studentInitials;
    }
}

syncStudentProfile();

let toastTimer;

function showToast(
    message,
    title = "Stud"
) {
    if (!toast) {
        return;
    }

    const toastTitle =
        document.getElementById("toastTitle");

    const toastText =
        document.getElementById("toastText");

    if (toastTitle) {
        toastTitle.textContent = title;
    }

    if (toastText) {
        toastText.textContent = message;
    }

    toast.classList.add("show");

    clearTimeout(toastTimer);

    toastTimer = setTimeout(() => {
        toast.classList.remove("show");
    }, 2600);
}

document
    .querySelectorAll("[data-toast]")
    .forEach(element => {
        element.addEventListener(
            "click",
            event => {
                if (element.tagName === "A") {
                    event.preventDefault();
                }

                showToast(
                    element.dataset.toast
                );
            }
        );
    });

if (menuToggle) {
    menuToggle.addEventListener(
        "click",
        event => {
            event.stopPropagation();

            if (sidebar) {
                sidebar.classList.toggle("open");
            }
        }
    );
}

function closeProfileDropdown() {
    if (!profileDropdown) {
        return;
    }

    profileDropdown.classList.remove("open");

    if (profileToggle) {
        profileToggle.setAttribute(
            "aria-expanded",
            "false"
        );
    }
}

if (profileToggle && profileDropdown) {
    profileToggle.addEventListener(
        "click",
        event => {
            event.stopPropagation();

            const isOpen =
                profileDropdown.classList.contains("open");

            closeProfileDropdown();

            if (!isOpen) {
                profileDropdown.classList.add("open");

                profileToggle.setAttribute(
                    "aria-expanded",
                    "true"
                );
            }
        }
    );
}

const notificationButton =
    document.getElementById("notificationBtn");

if (notificationButton) {
    notificationButton.addEventListener(
        "click",
        event => {
            event.stopPropagation();

            showToast(
                "You have 3 new notifications",
                "Notifications"
            );
        }
    );
}

const myProfile =
    document.getElementById("myProfile");

if (myProfile) {
    myProfile.addEventListener(
        "click",
        () => {
            closeProfileDropdown();

            showToast(
                `Opening ${loggedInStudent.name}'s profile`,
                "Profile"
            );
        }
    );
}

const profileLogout =
    document.getElementById("profileLogout");

if (profileLogout) {
    profileLogout.addEventListener(
        "click",
        () => {
            closeProfileDropdown();

            window.location.href = "/auth/index.html";

            showToast(
                "Your session is ready to sign out",
                "Logout"
            );
        }
    );
}

document
    .querySelectorAll(".nav-link")
    .forEach(link => {
        link.addEventListener(
            "click",
            event => {
                event.stopPropagation();

                document
                    .querySelectorAll(".nav-link")
                    .forEach(item => {
                        item.classList.remove(
                            "active"
                        );
                    });

                link.classList.add("active");

                const pageName =
                    link.querySelector("span")
                        ?.textContent
                        .trim()
                    ||
                    link.textContent.trim();

                if (
                    window.innerWidth <= 780 &&
                    sidebar
                ) {
                    sidebar.classList.remove(
                        "open"
                    );
                }
            }
        );
    });

if (window.location.hash) {
    history.replaceState(
        null,
        "",
        window.location.pathname +
        window.location.search
    );
}

window.addEventListener(
    "load",
    () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "auto"
        });
    }
);

window.addEventListener(
    "pageshow",
    () => {
        if (window.location.hash) {
            history.replaceState(
                null,
                "",
                window.location.pathname +
                window.location.search
            );
        }

        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "auto"
        });
    }
);

document
    .querySelectorAll(".assignment-filter")
    .forEach(filter => {
        filter.addEventListener(
            "click",
            () => {
                const selectedStatus =
                    filter.dataset.filter;

                document
                    .querySelectorAll(
                        ".assignment-filter"
                    )
                    .forEach(button => {
                        button.classList.toggle(
                            "active",
                            button === filter
                        );
                    });

                document
                    .querySelectorAll(
                        ".assignment-table tbody tr"
                    )
                    .forEach(row => {
                        if (
                            selectedStatus === "all"
                        ) {
                            row.hidden = false;
                        } else {
                            row.hidden =
                                row.dataset.status !==
                                selectedStatus;
                        }
                    });
            }
        );
    });

document.addEventListener(
    "click",
    event => {
        if (
            profileDropdown &&
            profileToggle &&
            !profileDropdown.contains(
                event.target
            ) &&
            !profileToggle.contains(
                event.target
            )
        ) {
            closeProfileDropdown();
        }

        if (
            window.innerWidth <= 780 &&
            sidebar &&
            menuToggle &&
            !sidebar.contains(
                event.target
            ) &&
            !menuToggle.contains(
                event.target
            )
        ) {
            sidebar.classList.remove(
                "open"
            );
        }
    }
);

document.addEventListener(
    "keydown",
    event => {
        if (event.key === "Escape") {
            closeProfileDropdown();

            if (
                sidebar &&
                window.innerWidth <= 780
            ) {
                sidebar.classList.remove(
                    "open"
                );
            }
        }
    }
);
