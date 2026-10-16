/* ========================================
   MOBILE MENU
======================================== */

const menuButton =
    document.querySelector(".menu-toggle");

const navbar =
    document.querySelector(".navbar");


menuButton.addEventListener("click", () => {

    const isOpen =
        navbar.classList.toggle(
            "menu-open"
        );

    menuButton.setAttribute(
        "aria-expanded",
        isOpen
    );

});


/* ========================================
   CLOSE MENU AFTER CLICKING A LINK
======================================== */

document
    .querySelectorAll(".desktop-nav a")
    .forEach(link => {

        link.addEventListener(
            "click",
            () => {

                navbar.classList.remove(
                    "menu-open"
                );

                menuButton.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }
        );

    });