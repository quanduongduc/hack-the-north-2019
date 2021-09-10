const personImages = $$(".stories__image");
const mainPerson = $(".main-image");
let autoSwitchTimer = randomSwitchPerson();

function randomSwitchPerson() {
  return setInterval(() => {
    let newRandomPerson = Math.floor(
      1 + Math.random() * (personImages.length - 1)
    );
    swapPerson(mainPerson, personImages[newRandomPerson]);
    renderQuote();
  }, 6000);
}

function renderQuote(quote) {
  const currentQuote = $(".stories__quote-content");
  currentQuote.classList.add("zoom-out-ani");
  setTimeout(() => {
    const quoteContainer = $(".stories__quote");
    const newQuote =
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga molestiae sint repellendus, deserunt ipsum adipisci reprehenderit omnis! Architecto error ratione quisquam veritatis, necessitatibus libero adipisci. Quas expedita debitis eveniet suscipit?";
    let html = `<div class="stories__quote-content">
  <p class="person-quote">
      ${newQuote}
      <br>
  </p>
  <span>Justin Trudeau <a style="text-decoration:underline" href="http://">Hack the North
          2018 Experienced Hacker</a></span>
</div>`;
    quoteContainer.innerHTML = html;
  }, 500);
}

function swapPerson(person1, person2) {
  let oldImage1 = person1.firstElementChild;
  let oldImage2 = person2.firstElementChild;
  let newImage1 = person2.firstElementChild.style.backgroundImage;
  let newImage2 = person1.firstElementChild.style.backgroundImage;
  let newPerson1 = document.createElement("div");
  let newPerson2 = document.createElement("div");
  newPerson1.classList.add("stories__image-item");
  newPerson1.style.backgroundImage = newImage1;
  newPerson2.classList.add("stories__image-item");
  newPerson2.style.backgroundImage = newImage2;
  oldImage1.style.opacity = 0;
  oldImage2.style.opacity = 0;
  oldImage1.style.transition = "opacity 0.5s ease";
  oldImage2.style.transition = "opacity 0.5s ease";
  person1.insertBefore(newPerson1, person1.firstChild);
  person1.removeChild(person1.lastElementChild);
  person2.insertBefore(newPerson2, person2.firstChild);
  person2.removeChild(person2.lastElementChild);
}

personImages.forEach((person, index) => {
  if (index !== 0) {
    person.onclick = () => {
      swapPerson(mainPerson, person);
      renderQuote();
      clearInterval(autoSwitchTimer);
      autoSwitchTimer = randomSwitchPerson();
    };
  }
});
