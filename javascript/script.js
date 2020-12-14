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
  navLinksLi = navLinks.querySelectorAll("li");
for (let i = 0; i < navLinksLi.length; i++) {
  const aLinks = navLinksLi[i].querySelector("a");
  aLinks.addEventListener("click", () => {
    for (let j = 0; j < navLinksLi.length; j++) {
      let link = navLinksLi[j].querySelector("a");
      console.log(link);
      link.classList.remove("active");
    }
    aLinks.classList.add("active");
  });
}

// Disable Ana
const styles = document.querySelectorAll(".style");
const changeColorButtons = document.querySelectorAll(".color");

for (let i = 0; i < styles.length; i++) {
  let colorSelected = styles[i].className.split(" ")[1];
  for (let j = 0; j < changeColorButtons.length; j++) {
    changeColorButtons[j].addEventListener("click", () => {
      let buttonSwithcer = changeColorButtons[j].className.split(" ")[0];
      if (buttonSwithcer === colorSelected) {
        styles[i].removeAttribute("disabled");
      } else {
        styles[i].setAttribute("disabled", true);
      }
    });
  }
}
