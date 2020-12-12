window.addEventListener("scroll", function () {
  const navbar = document.querySelector("nav");
  navbar.classList.toggle("sticky", window.scrollY > 25);
});

const colorSwitcherButton = document.querySelector(".colorSwitcherButton");

colorSwitcherButton.addEventListener("click", () => {
  const colorSwitcher = document.querySelector(".colorSwitcher");
  colorSwitcher.classList.toggle("openColorSwitcher");
});
