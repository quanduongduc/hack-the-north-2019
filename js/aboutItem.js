// infinite change gear item image
const currentImgs = [2, 2, 2, 2];
function infiniteChangeIMG() {
  for (let i = 0; i <= 3; i++) {
    setTimeout(() => {
      setInterval(() => {
        const gearItem = $(`#item${i + 1}`);
        const currentItem = gearItem.firstElementChild;
        const newItem = document.createElement("div");
        let nextImg = currentImgs[i];
        const currentBGURL = currentItem.style.backgroundImage;
        const newBG =
          currentBGURL.substring(0, currentBGURL.length - 7) +
          nextImg +
          '.png")';
        newItem.classList.add("about__gear-item-img", "appearance-ani");
        newItem.style.backgroundImage = newBG;
        newItem.style.backgroundPosition = "center center";
        newItem.style.backgroundSize = "100%";
        gearItem.insertBefore(newItem, gearItem.firstChild);
        gearItem.removeChild(currentItem);

        currentImgs[i]++;
        if (currentImgs[i] > 4) {
          currentImgs[i] = 1;
        }
      }, 8000);
    }, i * 2000);
  }
}

function gearItemHover() {
  const gearItems = $$(".about__gear-item");
  const overItem = document.createElement("div");
  overItem.classList.add("about__gear-item-img", "overlay-item");
  overItem.style.backgroundPosition = "center center";
  overItem.style.backgroundSize = "100%";
  overItem.style.position = "absolute";
  overItem.style.top = "0px";
  overItem.style.left = "0px";
  const overlayIMGs = [
    "./assets/images/about-image/leader-title.png",
    "./assets/images/about-image/activity-title.png",
    "./assets/images/about-image/hacker-title.png",
    "./assets/images/about-image/hardware-title.png",
  ];
  gearItems.forEach((gearItem, index) => {
    gearItem.onmouseenter = (event) => {
      overItem.style.backgroundImage = `url(${overlayIMGs[index]})`;
      event.currentTarget.appendChild(overItem);
    };
    gearItem.onmouseleave = (event) => {
      event.currentTarget.removeChild(overItem);
    };
  });
}

infiniteChangeIMG();
gearItemHover();
