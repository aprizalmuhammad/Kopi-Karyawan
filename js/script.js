//TOGGLE CLASS ACTIVE UNTUK HAMBURGER MENU

const navbarNav = document.querySelector(".navbar-nav");
//ketika hamburger di klik
document.querySelector("#hamburger-menu").onclick = () => {
    navbarNav.classList.toggle("active");
};

// TOGGLE CLASS ACTIVE UNTUK SEARCH FORM
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");

document.querySelector("#search-button").onclick = (event) => {
    searchForm.classList.toggle("active");
    searchBox.focus();
    event.preventDefault();
};

// TOGGLE CLASS ACTIVE UNTUK SHOPPING CART
const shoppingCart = document.querySelector(".shopping-cart");
document.querySelector("#shopping-cart-button").onclick = (event) => {
    shoppingCart.classList.toggle("active");
    event.preventDefault();
};

//KLIK DI LUAR ELEMEN
const hb = document.querySelector("#hamburger-menu");
const sb = document.querySelector("#search-button");
const sc = document.querySelector("#shopping-cart-button");

document.addEventListener("click", function(event) {
    if (!hb.contains(event.target) && !navbarNav.contains(event.target)) {
        navbarNav.classList.remove("active");
    }

    if (!sb.contains(event.target) && !searchForm.contains(event.target)) {
        searchForm.classList.remove("active");
    }

    if (!sc.contains(event.target) && !shoppingCart.contains(event.target)) {
        shoppingCart.classList.remove("active");
    }
});

// Modal box
const itemDetailModal = document.querySelector("#item-detail-modal");
const itemDetailButtons = document.querySelectorAll(".item-detail-button");

itemDetailButtons.forEach((btn) => {
    btn.onclick = (e) => {
        itemDetailModal.style.display = "flex";
        e.preventDefault();
    };
});

// Klik tombol close modal
document.querySelector(".modal .close-icon").onclick = (event) => {
    itemDetailModal.style.display = "none";
    event.preventDefault();
};

//klik diluar modal

window.onclick = (e) => {
    if (e.target === itemDetailModal) {
        itemDetailModal.style.display = "none";
    }
};