let menu = document.querySelector(".menu");
let displayMenu = document.querySelector(".displayMenu");
let img = document.querySelector(".menu img");
let shadow = document.querySelector(".over");

menu.addEventListener("click", (e) => {
  if (displayMenu.classList.contains("displayy")) {
    displayMenu.style.display = "none";
    displayMenu.classList.remove("displayy");
    e.target.src = "../images/icon-hamburger.svg";
    shadow.style.display = "none";
    displayMenu.classList.remove(`animate__backInLeft`);

    console.log("remove");
  } else {
    displayMenu.style.display = "flex";
    displayMenu.classList.add("displayy");
    e.target.src = "../images/icon-close.svg";

    displayMenu.classList.add(`animate__animated`);

    displayMenu.classList.add(`animate__backInLeft`);
    console.log("add");
    shadow.style.display = "block";
  }
});

window.onresize = () => {
  if (window.innerWidth > 865) {
    displayMenu.style.display = "flex";
  } else {
    displayMenu.style.display = "none";
    displayMenu.classList.remove("displayy");
    img.src = "../images/icon-hamburger.svg";
    shadow.style.display = "none";
  }
};

let hh = document.getElementById("ttt");
let cards = document.querySelector(".content");

let pack = document.querySelector(".package");
let titl = document.querySelector(".articals h2");
window.onscroll = () => {
  if (scrollY + 500 >= hh.offsetTop) {
    hh.classList.remove("animate__fadeOutDown");

    hh.classList.add("animate__fadeInUp");
    hh.style.visibility = "visible";
  } else {
    hh.classList.remove("animate__fadeInUp");
    hh.classList.add("animate__fadeOutDown");
  }

  if (scrollY + 500 >= cards.offsetTop) {
    cards.classList.remove("animate__fadeOutDown");

    cards.classList.add("animate__fadeInUp");
    cards.style.visibility = "visible";
  } else {
    cards.classList.remove("animate__fadeInUp");
    cards.classList.add("animate__fadeOutDown");
  }

  // artical sec

  if (scrollY + 500 >= titl.offsetTop) {
    titl.classList.remove("animate__fadeOutDown");

    titl.classList.add("animate__fadeInUp");
    titl.style.visibility = "visible";
  } else {
    titl.classList.remove("animate__fadeInUp");
    titl.classList.add("animate__fadeOutDown");
  }

  if (scrollY + 500 >= pack.offsetTop) {
    pack.classList.remove("animate__fadeOutDown");

    pack.classList.add("animate__fadeInUp");
    pack.style.visibility = "visible";
  } else {
    pack.classList.remove("animate__fadeInUp");
    pack.classList.add("animate__fadeOutDown");
  }
};
