const links = document.querySelector(".nav__links");
const section1 = document.querySelector("#about");
const header = document.querySelector(".header");
const segment = document.querySelectorAll(".segment");
const tabContainer = document.querySelector(".operations__tab-container");
const tabContent = document.querySelectorAll(".operations__content");
const nav__link = document.querySelector(".nav__links");

const menuIcon = document.querySelector(".fa-bars");

document.querySelector(".nav__links").addEventListener("click", function (e) {
  e.preventDefault();
  console.log(e.target);
  if (e.target.classList.contains("nav__link")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({
      behavior: "smooth",
    });
  }
});

// menuIcon.addEventListener("click", function (e) {
//   nav__link.classList.toggle("hidden");c
//   console.log();
//   // nav__link.classList.add("hidden");
//   console.log(nav__link.style.display);
// });

const initialCoods = section1.getBoundingClientRect();

// console.log(clickOnMenu);
window.addEventListener("load", function () {
  menuIcon.addEventListener("click", function () {
    // clickOnMenu = true;
    let clickOnMenu = "";
    console.log(clickOnMenu);
    clickOnMenu = true;
    if (initialCoods.width > 840) {
      // nav__link.classList.add("hidden");
      // console.log(window.scrollY > initialCoods.top);

      console.log(initialCoods);
      nav__link.classList.remove("hidden");
      // header.classList.add("sticky");
    } else {
      nav__link.classList.add("hidden");

      // header.classList.remove("sticky");
    }
  });
});

window.addEventListener("scroll", function () {
  // e.preventDefault();
  // console.log(this);
  if (window.scrollY > initialCoods.top) {
    console.log(window.scrollY > initialCoods.top);
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
});
const operationButton = document.querySelectorAll(".operations__tab ");

// const callback = function (entries) {
//   const [entry] = entries;
//   console.log(entry);
//   if (!entry.isIntersecting) return;
// };

// const sectionObserver = new IntersectionObserver(callback, {
//   root: null,
//   threshold: 0,
// });

// operationButton.forEach(function (tab) {
//   sectionObserver.observe(tab);
//   segment.classList.add("hidden");
// });

tabContainer.addEventListener("click", function (e) {
  e.preventDefault();
  console.log("noooooo");

  const clicked = e.target.closest(".operations__tab");

  if (!clicked) return;

  operationButton.forEach((tab) => {
    tab.classList.remove("operations__tab--active");
    console.log(tab.classList);
  });

  tabContent.forEach(function (el) {
    el.classList.remove("operations__content--active");

    // console.log(el);

    // console.log(clicked);
    // clicked;
    // tab.addEventListener("click", () =>
    //   tab.classList.add("operations__content--active")
    // );
  });

  console.log(clicked.classList);

  clicked.classList.add("operations__tab--active");

  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add("operations__content--active");
});
