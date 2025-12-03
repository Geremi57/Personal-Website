const links = document.querySelector(".nav__links");
const section1 = document.querySelector("#about");
const header = document.querySelector(".header");
const segment = document.querySelectorAll(".segment");
const tabContainer = document.querySelector(".operations__tab-container");
const tabContent = document.querySelectorAll(".operations__content");
const nav__link = document.querySelector(".nav__links");


var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  loop:true,
  autoplay: {
    delay: 4500,
    disableOnInteraction: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const initialCoods = section1.getBoundingClientRect();

// console.log(clickOnMenu);




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

// Reveal Sections
const allSections = document.querySelectorAll(".section");
const revealSection = function (entries, observer) {
  const [entry] = entries;

  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.classList.remove("section--hidden");
    observer.unobserve(entry.target);
  });
};
const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add("section--hidden");
});

let menu = document.querySelector("#menu-icon");

let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  console.log(menu.classList);
  navbar.classList.toggle("open");
};

const modal = document.getElementById("contactModal");
const openBtn = document.getElementById("openModalBtn");
const closeBtn = document.querySelector(".close-btn");

openBtn.onclick = () => {
  modal.style.display = "flex";
};

closeBtn.onclick = () => {
  modal.style.display = "none";
};

window.onclick = (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
};

document.getElementById("contactForm").querySelector(".send-button").addEventListener("click", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  const subject = encodeURIComponent("Contact from " + name);
  const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
  const mailtoLink = `mailto:wangageremi725@gmail.com?subject=${subject}&body=${body}`;

  window.location.href = mailtoLink;

  modal.style.display = "none";
}
);

