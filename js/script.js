//TOGGLE CLASS ACTIVE

const navbarNav = document.querySelector(".navbar-nav");
//ketika hamburger di klik
document.querySelector("#hamburger-menu").onclick = () => {
    navbarNav.classList.toggle("active");
};

//KLIK DI LUAR SIDEBAR UNTUK MENGHILANGKAN NAV
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function(e) {
    if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove("active");
    }
});