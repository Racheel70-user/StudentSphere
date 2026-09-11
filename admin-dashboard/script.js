

const sidebar = document.getElementById("sidebar");
const menuToggle = document.getElementById("menuToggle");

const profileToggle = document.getElementById("profileToggle");
const profileMenu = document.getElementById("profileMenu");

const notificationButton =
    document.getElementById("notificationButton");

const toast =
    document.getElementById("toast");

const toastText =
    document.getElementById("toastText");

const yearSelect =
    document.getElementById("yearSelect");

let toastTimer;




function showToast(message) {

    if (!toast || !toastText) {
        return;
    }

    toastText.textContent = message;

    toast.classList.add("show");

    clearTimeout(toastTimer);

    toastTimer = setTimeout(() => {

        toast.classList.remove("show");

    }, 2600);
}




function closeProfileMenu() {

    if (!profileMenu || !profileToggle) {
        return;
    }

    profileMenu.classList.remove("open");

    profileToggle.setAttribute(
        "aria-expanded",
        "false"
    );
}




if (profileToggle && profileMenu) {

    profileToggle.addEventListener(
        "click",
        function (event) {

            event.stopPropagation();

            const opening =
                !profileMenu.classList.contains("open");

            closeProfileMenu();

            if (opening) {

                profileMenu.classList.add("open");

                profileToggle.setAttribute(
                    "aria-expanded",
                    "true"
                );
            }
        }
    );
}




if (menuToggle && sidebar) {

    menuToggle.addEventListener(
        "click",
        function (event) {

            event.stopPropagation();

            sidebar.classList.toggle("open");
        }
    );
}




const sideLinks =
    document.querySelectorAll(".side-link");


sideLinks.forEach(function (link) {

    link.addEventListener(
        "click",
        function (event) {

            

            event.preventDefault();

           

            sideLinks.forEach(function (item) {

                item.classList.remove("active");

            });


            

            link.classList.add("active");


         

            link.style.transform =
                "scale(.98)";


            setTimeout(function () {

                link.style.transform = "";

            }, 120);


            

            if (
                window.innerWidth <= 1040 &&
                sidebar
            ) {

                sidebar.classList.remove("open");
            }


            

            const label =
                link.querySelector("span");

            if (label) {

                showToast(
                    `${label.textContent.trim()} selected.`
                );
            }
        }
    );
});




if (notificationButton) {

    notificationButton.addEventListener(
        "click",
        function () {

            showToast(
                "You have 3 new notifications."
            );
        }
    );
}



if (profileMenu) {

    profileMenu
        .querySelectorAll("button")
        .forEach(function (button) {

            button.addEventListener(
                "click",
                function () {

                    const text =
                        button.textContent.trim();

                    closeProfileMenu();

                    if (/sign out/i.test(text)) {
                        window.location.href = "/auth/index.html";
                        return;
                    }

                    showToast(
                        `${text} selected.`
                    );
                }
            );

        });
}




document
    .querySelectorAll(
        ".text-action, .view-button, .table-link"
    )
    .forEach(function (button) {

        button.addEventListener(
            "click",
            function () {

                showToast(
                    "Opening detailed view..."
                );
            }
        );

    });




if (yearSelect) {

    yearSelect.addEventListener(
        "change",
        function (event) {

            showToast(
                `Admissions data updated for ${event.target.value}.`
            );
        }
    );
}




document.addEventListener(
    "click",
    function (event) {

      

        if (
            profileMenu &&
            profileToggle &&
            !profileMenu.contains(event.target) &&
            !profileToggle.contains(event.target)
        ) {

            closeProfileMenu();
        }


       

        if (
            window.innerWidth <= 1040 &&
            sidebar &&
            menuToggle &&
            !sidebar.contains(event.target) &&
            !menuToggle.contains(event.target)
        ) {

            sidebar.classList.remove("open");
        }
    }
);




document.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Escape") {

            closeProfileMenu();

            if (
                sidebar &&
                window.innerWidth <= 1040
            ) {

                sidebar.classList.remove("open");
            }
        }
    }
);




window.addEventListener(
    "resize",
    function () {

      

        if (
            window.innerWidth > 1040 &&
            sidebar
        ) {

            sidebar.classList.remove("open");
        }
    }
);




document
    .querySelectorAll(
        ".metric-card, .dashboard-card"
    )
    .forEach(function (card) {

        card.addEventListener(
            "mouseenter",
            function () {

                card.style.transition =
                    "transform .25s ease, border-color .25s ease, box-shadow .25s ease";
            }
        );
    });




document.addEventListener(
    "DOMContentLoaded",
    function () {

        

        const dashboardLink =
            document.querySelector(
                ".side-link:first-child"
            );

        if (dashboardLink) {

            sideLinks.forEach(function (link) {

                link.classList.remove("active");

            });

            dashboardLink.classList.add("active");
        }

    }
);
