window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");
  loader.className += " hidden";
});

const navbar = document.querySelector("nav");
window.addEventListener("scroll", function () {
  navbar.classList.toggle("sticky", window.scrollY > 25);
});

const colorSwitcherButton = document.querySelector(".colorSwitcherButton");

colorSwitcherButton.addEventListener("click", () => {
  const colorSwitcher = document.querySelector(".colorSwitcher");
  colorSwitcher.classList.toggle("openColorSwitcher");
});

const burgerButton = document.querySelector(".burgermenuButton");
burgerButton.addEventListener("click", () => {
  const repsonsiveNavbar = document.querySelector(".responsiveNavLinks");
  repsonsiveNavbar.classList.toggle("openResposiveNav");
  navbar.classList.toggle("sticky");
});

// Set Active Link Class
const navLinks = document.querySelector(".navLinks"),
  navLinksLi = document.querySelectorAll("li");
for (let i = 0; i < navLinksLi.length; i++) {
  const aLinks = navLinksLi[i].querySelector("a");
  aLinks.addEventListener("click", () => {
    for (let j = 0; j < navLinksLi.length; j++) {
      let link = navLinksLi[j].querySelector("a");
      link.classList.remove("active");
    }
    aLinks.classList.add("active");
  });
}
