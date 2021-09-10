const SHOWCASE_INFO_LIST = [
  "1-Morbi eu sollicitudin sem. Suspendisse ultricies lacus et nisl molestie, laoreet lobortis erat molestie. Sed sapien tortor, interdum ut magna vitae, finibus fermentum mauris. Donec aliquet massa ac quam consectetur, nec porttitor justo herndrerierte.",
  "2-Morbi eu sollicitudin sem. Suspendisse ultricies lacus et nisl molestie, laoreet lobortis erat molestie. Sed sapien tortor, interdum ut magna vitae, finibus fermentum mauris. Donec aliquet massa ac quam consectetur, nec porttitor justo herndrerierte.",
  "3-Morbi eu sollicitudin sem. Suspendisse ultricies lacus et nisl molestie, laoreet lobortis erat molestie. Sed sapien tortor, interdum ut magna vitae, finibus fermentum mauris. Donec aliquet massa ac quam consectetur, nec porttitor justo herndrerierte.",
  "4-Morbi eu sollicitudin sem. Suspendisse ultricies lacus et nisl molestie, laoreet lobortis erat molestie. Sed sapien tortor, interdum ut magna vitae, finibus fermentum mauris. Donec aliquet massa ac quam consectetur, nec porttitor justo herndrerierte.",
  "5-Morbi eu sollicitudin sem. Suspendisse ultricies lacus et nisl molestie, laoreet lobortis erat molestie. Sed sapien tortor, interdum ut magna vitae, finibus fermentum mauris. Donec aliquet massa ac quam consectetur, nec porttitor justo herndrerierte.",
  "6-Morbi eu sollicitudin sem. Suspendisse ultricies lacus et nisl molestie, laoreet lobortis erat molestie. Sed sapien tortor, interdum ut magna vitae, finibus fermentum mauris. Donec aliquet massa ac quam consectetur, nec porttitor justo herndrerierte.",
  "7-Morbi eu sollicitudin sem. Suspendisse ultricies lacus et nisl molestie, laoreet lobortis erat molestie. Sed sapien tortor, interdum ut magna vitae, finibus fermentum mauris. Donec aliquet massa ac quam consectetur, nec porttitor justo herndrerierte.",
  "8-Morbi eu sollicitudin sem. Suspendisse ultricies lacus et nisl molestie, laoreet lobortis erat molestie. Sed sapien tortor, interdum ut magna vitae, finibus fermentum mauris. Donec aliquet massa ac quam consectetur, nec porttitor justo herndrerierte.",
  "9-Morbi eu sollicitudin sem. Suspendisse ultricies lacus et nisl molestie, laoreet lobortis erat molestie. Sed sapien tortor, interdum ut magna vitae, finibus fermentum mauris. Donec aliquet massa ac quam consectetur, nec porttitor justo herndrerierte.",
];

const showcaseNav = $(".sponsors__showcase-nav");
let switchTimer = undefined;

function infiniteSwitchShowcase() {
  return setInterval(() => {
    const currentShowcase = $(".sponsors__showcase-nav-selected-item");
    let currentShowcaseIndex = parseInt(currentShowcase.dataset.showcaseid);
    let nextSibling = currentShowcase.nextElementSibling;
    if (nextSibling) {
      switchShowcase(nextSibling, currentShowcaseIndex + 1);
    } else {
      switchShowcase(showcaseNav.firstElementChild, 0);
    }
  }, 3000);
}

function renderShowcaseNavBtn() {
  for (let index = 0; index < SHOWCASE_INFO_LIST.length; index++) {
    if (index === 0) {
      showcaseNav.innerHTML += `<div class="sponsors__showcase-nav-item sponsors__showcase-nav-selected-item" data-showcaseid="${index}"></div>`;
    } else {
      showcaseNav.innerHTML += `<div class="sponsors__showcase-nav-item" data-showcaseid="${index}"></div>`;
    }
  }
  showcaseNavBtnEventHandle();
  switchTimer = infiniteSwitchShowcase();
}

function switchShowcase(newShowcaseBtn, index) {
  const currentShowcaseBtn = $(".sponsors__showcase-nav-selected-item");
  const showcaseContent = $(".sponsors__showcase-content");
  let html = `<div class="sponsors__showcase-main">
    <p class="sponsors__showcase-desc desc">${SHOWCASE_INFO_LIST[index]}</p>
    <a href="" class="sponsors__showcase-links desc">Sponsor provided link ></a>
  </div>`;
  currentShowcaseBtn.classList.remove("sponsors__showcase-nav-selected-item");
  newShowcaseBtn.classList.add("sponsors__showcase-nav-selected-item");
  showcaseContent.removeChild(showcaseContent.lastElementChild);
  showcaseContent.innerHTML += html;
}

function showcaseNavBtnEventHandle() {
  const showcaseNavBtns = $$(".sponsors__showcase-nav-item");
  showcaseNavBtns.forEach((item, index) => {
    item.onclick = (event) => {
      let target = event.currentTarget;
      if (!target.classList.contains("sponsors__showcase-nav-selected-item")) {
        switchShowcase(target, index);
      }
      clearInterval(switchTimer);
      switchTimer = infiniteSwitchShowcase();
    };
  });
}

renderShowcaseNavBtn();
