// const optionOne = document.querySelector(".option1");
// const dropDown = document.querySelector(".drop-down");
// const mobileBtn = document.querySelector(".mobile-btn");
// const scrollTopBtn = document.querySelector("#scroll-top");
// let sidenav = document.querySelector("#sidenav");

// optionOne.addEventListener("click", function() {
//   dropDown.classList.toggle("drop-down--active");
// });

// mobileBtn.addEventListener("click", function() {
//   if (sidenav.style.width === "250px") {
//     sidenav.style.width = "0px";
//   } else {
//     sidenav.style.width = "250px";
//   }
// });

// // scrollTopBtn.addEventListener("click", function() {
// //   window.scroll({ top: 0, left: 0, behavior: "smooth" });
// // });

// // window.addEventListener("scroll", function() {
// //   if (window.scrollY > 50) {
// //     scrollTopBtn.style.display = "block";
// //   } else {
// //     scrollTopBtn.style.display = "none";
// //   }
// // });
$(document).ready(function() {
  $("#carouselExampleCaptions").carousel();
});

const header = document.querySelector(".header-container");
const logo = document.querySelector(".website_logo");
const logo2 = document.getElementById("theImgId");
const logo3 = document.querySelector(".website_logotype");
const navigation = document.querySelector(".navigation-container");
const bar_lists = document.querySelector(".nav-bar__lists");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.style.height = "86px";
    logo.style.height = "86px";
    navigation.style.height = "86px";
    logo2.style.height = "86px";
    logo3.style.height = "86px";
    bar_lists.style.height = "86px";
  } else {
    header.style.height = "117px";
    logo.style.height = "117px";
    navigation.style.height = "117px";
    logo2.style.height = "117px";
    logo3.style.height = "117px";
    bar_lists.style.height = "117px";
  }
});
