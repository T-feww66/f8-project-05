var navItems = document.querySelectorAll(".navbar__item");
console.log(navItems);

navItems.forEach((item) => {
    item.onclick = function () {
        document
            .querySelector(".navbar__item.navbar__item--active")
            .classList.remove("navbar__item--active");
        this.classList.add("navbar__item--active");
    };
});
