const img1 = document.getElementById("img1");
const img2 = document.getElementById("img2");
const img3 = document.getElementById("img3");
const block1 = document.getElementById("block1");
const block2 = document.getElementById("block2");
const block3 = document.getElementById("block3");
const cite1 = document.getElementById("cite1");
const cite2 = document.getElementById("cite2");
const cite3 = document.getElementById("cite3");
// const img = document.querySelector(".img");
const pictures = [img1, img2, img3];
for (let h = 0; h < pictures.length; h++) {
  pictures[h].addEventListener("dblclick", function () {
    pictures[h].style.width = "40vh";
    pictures[h].style.height = "40vh";
  });
}
for (let h = 0; h < pictures.length; h++) {
  pictures[h].addEventListener("click", function () {
    pictures[h].style.width = "5em";
    pictures[h].style.height = "5em";
  });
}
const phrase = "Check the Atmospheric condition of your city";
const container = document.getElementById("letter-container");

function displayLetters() {
  container.innerHTML = "";
  let index = 0;
  const interval = setInterval(() => {
    if (index >= phrase.length) {
      clearInterval(interval);
      setTimeout(displayLetters, 2000); // Wait for 2 seconds before starting again
      return;
    }

    if (phrase[index] === " ") {
      const space = document.createElement("span");
      space.className = "space";
      container.appendChild(space);
    } else {
      const letter = document.createElement("span");
      letter.className = "letter";
      letter.textContent = phrase[index];
      container.appendChild(letter);
    }

    index++;
  }, 100);
}
displayLetters();

const BlockQuotes = [
  "For the man sound of body and serene of mind there is no such thing as bad weather; every day has its beauty, and storms which whip the blood do but make it pulse more vigorously.",
  "After three days men grow weary, of a wench, a guest, and weather rainy.",
  "The trouble with weather forecasting is that its right too often for us to ignore it and wrong too often for us to rely on it.",
  "A lot of people like snow. I find it to be an unnecessary freezing of water.",
  "There is no such thing as bad weather, only inappropriate clothing",
  "There is no such thing as bad weather, only different kinds of good weather.",
  "I have found that it is of some help to think of a persons moods and feelings about the world as being similar to weather.",
  "  From where we stand the rain seems random. If we could stand somewhere else, we would see the order in it.",
  "From where we stand the rain seems random. If we could stand somewhere else, we would see the order in it.",
];
const cite = [
  "George Gissing",
  "Benjamin Franklin",
  "Patrick Young",
  "Carl Reiner",
  "Ranulph Fiennes",
  "John Ruskin",
  "Orji Dominion",
  "Orji Dominion",
  "Orji Dominion",
];

const images = [
  { url: "images/Amarachi.jpg" },
  { url: "images/background.jpg" },
  { url: "images/brethren.jpg" },
  { url: "images/cloudy.jpg" },
  { url: "images/dominant.jpg" },
  { url: "images/dominate.jpg" },
  { url: "images/mySelf.jpg" },
  { url: "images/uche.jpg" },
  { url: "images/oy.png" },
];

window.addEventListener("load", function () {
  let flipBlock;
  let flipCite;
  let flipImg;
  let index = 0;
  let newQuote = [];
  let newCite = [];
  let newImg = [];

  for (let i = 0; i < BlockQuotes.length; i++) {
    RandomDist = Math.floor(Math.random() * BlockQuotes.length);
    RandomQuote = BlockQuotes[RandomDist];
    newQuote.push(RandomQuote);
  }
  for (let j = 0; j < cite.length; j++) {
    RandomIndex = Math.floor(Math.random() * cite.length);
    RandomCite = cite[RandomIndex];
    newCite.push(RandomCite);
  }
  for (let k = 0; k < images.length; k++) {
    RandomPro = Math.floor(Math.round() * images.length);
    RandomImages = images[RandomPro];
    newImg.push(RandomImages);
  }

  clearInterval(flipBlock);
  flipBlock = setInterval(() => {
    block1.textContent = newQuote[(index + 0) % newQuote.length];
    block2.textContent = newQuote[(index + 1) % newQuote.length];
    block3.textContent = newQuote[(index + 2) % newQuote.length];
    index = (index + 8) % newQuote.length;
  }, 3000);

  clearInterval(flipCite);
  flipCite = setInterval(() => {
    cite1.textContent = newCite[(index + 0) % newQuote.length];
    cite2.textContent = newCite[(index + 1) % newQuote.length];
    cite3.textContent = newCite[(index + 2) % newQuote.length];
    index = (index + 8) % newCite.length;
  }, 3000);

  clearInterval(flipImg);
  flipImg = setInterval(() => {
    img1.src = newImg[(index + 0) % newImg.length].url;
    img2.src = newImg[(index + 1) % newImg.length].url;
    img3.src = newImg[(index + 2) % newImg.length].url;
    index = (index + 8) % newImg.length;
  }, 3000);
});
