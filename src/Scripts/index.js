const menuButtons = document.querySelector(".menu-buttons");
const menu = document.querySelector(".menu");
const burger = document.querySelector(".burger");
const closed = document.querySelector(".close");

function init() {
  function toggleMenu() {
    menu.classList.toggle("scale");
    burger.classList.toggle("hide");
    closed.classList.toggle("show");
  }

  menuButtons.addEventListener("click", toggleMenu);
}

document.addEventListener("DOMContentLoaded", init);

gsap.from(".under-svg > *", {
  duration: 1,
  opacity: 0,
  delay: 9,
  stagger: 0.3,
  x: "-70px",
});

gsap.from(".menu-buttons", {
  duration: 1,
    delay: 10,
    x:-150,
    y:-150

});

gsap.from(".right", {
  duration: 2,
  y: 200,
  opacity: 0,
  stagger: 0.4,
  delay: 8,
});
gsap.from(".stripe1 img", {
  duration: 2,
  y: 200,
  opacity: 0,
  stagger: 0.4,
  delay: 4,
});

gsap.from(".stripe2 img", {
  duration: 2,
  y: -10,
  opacity: 0,
  stagger: 0.4,
  delay: 4,
});


