"use strict";

// const
const header = document.querySelector(".header"),
    burgerMenu = header.querySelector(".burger"),
    navMenu = header.querySelector(".nav"),
    logoMark = header.querySelector(".header-logo"),
    navMarks = header.querySelectorAll("[data-scroll]"),
    tabsBtn = document.querySelectorAll(".click-item"),
    tabsItems = document.querySelectorAll(".item-wrapper");


const submitTop = document.querySelectorAll("#submitTop"),
    submitBottom = document.querySelectorAll("#submitBottom"),
    registrationtTab = document.querySelector(".intro-form_bottom"),
    sendTab = document.querySelector(".send-message"),
    modalTop = document.querySelector(".modal-registration"),
    modalBottom = document.querySelector(".modal-send"),
    closeTab = document.querySelectorAll(".close");

// loading page
document.addEventListener("DOMContentLoaded", () => {

    // f(checkScroll)
    document.addEventListener("scroll", checkScroll);
    function checkScroll() {
        const scrollPos = window.scrollY;

        if (scrollPos > 0) {
            header.classList.add("header-active");
        } else {
            header.classList.remove("header-active");
        }
    }

    // e(for logoMark)
    logoMark.addEventListener("click", (e) => {
        e.preventDefault();

        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // f(onClickMenu)
    burgerMenu.addEventListener("click", onClickMenu);
    function onClickMenu() {
        burgerMenu.classList.toggle("burger-active");
        navMenu.classList.toggle("nav-active");
    }

    // f(for navMarks)
    navMarks.forEach(scrollLink);
    function scrollLink(link) {
        link.addEventListener("click", function (e) {
            e.preventDefault();

            const currentLink = this.getAttribute('data-scroll').substring(1);
            const scrollTarget = document.getElementById(currentLink);

            const topOffset = header.offsetHeight;
            const elementPosition = scrollTarget.getBoundingClientRect().top;
            const offsetPosition = elementPosition - topOffset;

            window.scrollBy({
                top: offsetPosition,
                behavior: 'smooth'
            });
        });
    }

    // f(onTabClick)
    tabsBtn.forEach(onTabClick);
    function onTabClick(item) {
        item.addEventListener("click", function (e) {
            e.preventDefault();

            const currentBtn = item;
            const tabId = currentBtn.getAttribute("data-tab");
            const currentTab = document.querySelector(tabId);

            if (!currentTab.classList.contains("item-active")) {
                tabsBtn.forEach(function (item) {
                    item.classList.remove("tab-active");
                });

                tabsItems.forEach(function (item) {
                    item.classList.remove("item-active");
                });

                currentBtn.classList.add("tab-active");
                currentTab.classList.add("item-active");
            }
        });
    }
    document.querySelector(".click-item").click();

    // 1
    // f(checkFormTop)
    function checkFormTop() {
        for (let submit of submitTop) {
            if (submit.value === "") {
                registrationtTab.setAttribute("disabled", "");
                return;
            }
        }
        registrationtTab.removeAttribute("disabled");
    }

    for (let submit of submitTop) {
        submit.onkeydown = submit.onkeyup = submit.onkeypress = submit.change = checkFormTop;
    }

    // e/f(for modalTop)
    registrationtTab.addEventListener("click", () => {
        modalTop.classList.add("modal-active");

        registrationtTab.style.color = "#000";
        registrationtTab.disabled = true;
    });

    closeTab[0].addEventListener("click", () => {
        modalTop.style.display = "none";
    });

    window.addEventListener("click", (e) => {
        if (e.target == modalTop) {
            modalTop.style.display = "none";
        }
    });

    // 2
    // f(checkFormBottom)
    function checkFormBottom() {
        for (let submit of submitBottom) {
            if (submit.value === "") {
                sendTab.setAttribute("disabled", "");
                return;
            }
        }
        sendTab.removeAttribute("disabled");
    }

    for (let submit of submitBottom) {
        submit.onkeydown = submit.onkeyup = submit.onkeypress = submit.change = checkFormBottom;
    }

    // e/f(for modalBottom)
    sendTab.addEventListener("click", () => {
        modalBottom.classList.add("modal-active");

        sendTab.style.backgroundColor = "#333333";
        sendTab.disabled = true;
    });

    closeTab[1].addEventListener("click", () => {
        modalBottom.style.display = "none";
    });

    window.addEventListener("click", (e) => {
        if (e.target == modalBottom) {
            modalBottom.style.display = "none";
        }
    });
});