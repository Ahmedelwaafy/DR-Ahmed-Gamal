//Toggle Menu

const menuButtons = document.querySelector(".menu-buttons");
const menu = document.querySelector(".menu");
const burger = document.querySelector(".burger");
const closed = document.querySelector(".close");
const navItems = document.querySelectorAll(".nav-items li");

function init() {
  function toggleMenu() {
    menu.classList.toggle("scale");
    burger.classList.toggle("hide");
    closed.classList.toggle("show");
  }

  menuButtons.addEventListener("click", toggleMenu);
  navItems.forEach((item) =>
    item.addEventListener("click", () => menu.classList.toggle("scale"))
  );
}

document.addEventListener("DOMContentLoaded", init);

//GSAP

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
  x: -150,
  y: -150,
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

//Slick Slider For Lectures

$(".slider-lectures").slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 2,
  speed: 1500,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 1100,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 680,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
      },
    },
  ],
});
