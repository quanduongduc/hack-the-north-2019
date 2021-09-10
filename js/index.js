const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const header = $(".header");
const headerLogo = $(".header__logo");
const openMenuBtn = $(".open-menu");
const closeMenuBtn = $(".close-menu");
const mobileMenu = $(".mobile-table-nav");
const mobileMenuOverlay = $(".header__mobile-menu-overlay");
const questionBtn = $$(".FAQ__question-title");

function openMobileMenu() {
  mobileMenu.style.visibility = "visible";
  mobileMenu.style.opacity = 1;
  mobileMenuOverlay.style.transform = "scale(1)";
}

function closeMobileMenu() {
  mobileMenu.style.visibility = "hidden";
  mobileMenu.style.opacity = 0;
  mobileMenuOverlay.style.transform = "scale(0)";
}

//this function do open and close as well
function FaqQuestionDisplay() {
  let isDisplay = false;
  return function (questionBtn, questionContent) {
    if (isDisplay) {
      questionBtn.firstElementChild.classList.remove(
        "FAQ__question-title-arrow-up"
      );
      isDisplay = false;
      questionContent.style.maxHeight = 0;
    } else {
      questionBtn.firstElementChild.classList.add(
        "FAQ__question-title-arrow-up"
      );
      isDisplay = true;
      questionContent.style.maxHeight = "250px";
    }
  };
}

function studentSlideShow() {
  setInterval(() => {
    studentList.forEach((student) => {
      let currentTranslate = student.style.transform.replace(/\D/g, "");
      student.style.transform = `translateX(${nextTranslate}px)`;
    });
  }, 1000);
}

openMenuBtn.onclick = () => {
  openMobileMenu();
};
closeMenuBtn.onclick = () => {
  closeMobileMenu();
};

window.onscroll = () => {
  const lightestGrey = "#eff8fa";
  const darkestGrey = "#183249"; // it's also backgroundColor when scroll
  window.onwheel = (e) => {
    if (e.deltaY > 0) {
      header.style.transform = "translateY(-85px)";
    } else {
      header.style.transform = null;
    }
  };
  if (window.scrollY > 0) {
    header.style.backgroundColor = darkestGrey;
    header.style.color = lightestGrey;
    headerLogo.classList.add("header__logo-light");
    headerLogo.classList.remove("header__logo-dark");
  } else {
    header.style.color = darkestGrey;
    header.style.backgroundColor = null;
    headerLogo.classList.remove("header__logo-light");
    headerLogo.classList.add("header__logo-dark");
  }
};
