//Alfa Romeo Giulia 2022

const redColor = document.querySelector(".red");

const blueColor = document.querySelector(".blue");

const imageCard = document.querySelector(".product-imageR");

const feedbackBtn = document.querySelector(".feedback");

const goldColor = document.querySelector(".gold");

const cartButton = document.getElementById("button");

const itemTag = document.querySelector(".tag");

const newPrice = document.querySelector(".new-price");

const blackColor2 = document.querySelector(".black2");

const imageCard2 = document.querySelector(".product-imageM");

const feedbackBtn2 = document.querySelector(".feedback2");

const blueColor2 = document.querySelector(".blue2");

const greyColor2 = document.querySelector(".grey2");

const cartButton2 = document.getElementById("button2");

const itemTag2 = document.querySelector(".tag2");

const newPrice2 = document.querySelector(".new-price2");

const redColor3 = document.querySelector(".red3");

const blackColor3 = document.querySelector(".black3");

const imageCard3 = document.querySelector(".product-imageD");

const feedbackBtn3 = document.querySelector(".feedback3");

const blueColor3 = document.querySelector(".blue3");

const cartButton3 = document.getElementById("button3");

const itemTag3 = document.querySelector(".tag3");

const newPrice3 = document.querySelector(".new-price3");

redColor.addEventListener("click", function () {
  cartButton.style.backgroundColor = "red";
  itemTag.style.backgroundColor = "red";
  imageCard.style.backgroundImage = 'url("./red giulia.jpg")';
  newPrice.textContent = "$150,999";
});

blueColor.addEventListener("click", function () {
  cartButton.style.backgroundColor = "blue";
  itemTag.style.backgroundColor = "blue";
  imageCard.style.backgroundImage = 'url("./blue giulia.jpg")';
  newPrice.textContent = "$155,200";
});

goldColor.addEventListener("click", function () {
  cartButton.style.backgroundColor = "gold";
  itemTag.style.backgroundColor = "gold";
  imageCard.style.backgroundImage = 'url("./gold giulia.jpeg")';
  newPrice.textContent = "$159,000";
});

blackColor2.addEventListener("click", function () {
  cartButton2.style.backgroundColor = "black";
  itemTag2.style.backgroundColor = "black";
  imageCard2.style.backgroundImage = 'url("./c black benz.jpg")';
  newPrice2.textContent = "$139,200";
});

greyColor2.addEventListener("click", function () {
  cartButton2.style.backgroundColor = "grey";
  itemTag2.style.backgroundColor = "grey";
  imageCard2.style.backgroundImage = 'url("./c grey benz.jpg")';
  newPrice2.textContent = "$140,000";
});

blueColor2.addEventListener("click", function () {
  cartButton2.style.backgroundColor = "blue";
  itemTag2.style.backgroundColor = "blue";
  imageCard2.style.backgroundImage = 'url("./c blue benz.jpg")';
  newPrice2.textContent = "$137,500";
});

redColor3.addEventListener("click", function () {
  cartButton3.style.backgroundColor = "red";
  itemTag3.style.backgroundColor = "red";
  imageCard3.style.backgroundImage = 'url("./red defender.webp")';
  newPrice3.textContent = "$137,999";
});

blackColor3.addEventListener("click", function () {
  cartButton3.style.backgroundColor = "black";
  itemTag3.style.backgroundColor = "black";
  imageCard3.style.backgroundImage = 'url("./defender black.jpg")';
  newPrice3.textContent = "$130,200";
});

blueColor3.addEventListener("click", function () {
  cartButton3.style.backgroundColor = "blue";
  itemTag3.style.backgroundColor = "blue";
  imageCard3.style.backgroundImage = 'url("./blue defender.jpg")';
  newPrice3.textContent = "$135,000";
});

const cart = () => {
  cartButton.style.display = "none";
  feedbackBtn.style.display = "block";
};
cartButton.addEventListener("click", cart);

const feedback = () => {
  cartButton.style.display = "block";
  feedbackBtn.style.display = "none";
};
feedbackBtn.addEventListener("click", feedback);

const cart2 = () => {
  cartButton2.style.display = "none";
  feedbackBtn2.style.display = "block";
};
cartButton2.addEventListener("click", cart2);

const feedback2 = () => {
  cartButton2.style.display = "block";
  feedbackBtn2.style.display = "none";
};
feedbackBtn2.addEventListener("click", feedback2);

const cart3 = () => {
  cartButton3.style.display = "none";
  feedbackBtn3.style.display = "block";
};
cartButton3.addEventListener("click", cart3);

const feedback3 = () => {
  cartButton3.style.display = "block";
  feedbackBtn3.style.display = "none";
};
feedbackBtn3.addEventListener("click", feedback3);
