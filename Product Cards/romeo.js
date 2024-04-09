const redColor = document.querySelector(".red");

const blueColor = document.querySelector(".blue");

const imageCard = document.querySelector(".product-imageR");

const feedbackBtn = document.querySelector(".feedback");

const goldColor = document.querySelector(".gold");

const cartButton = document.getElementById("button");

const itemTag = document.getElementsByTagName("h3")[0];

const newPrice = document.querySelector(".new-price");

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

const cart = () => {
  cartButton.style.display = "none";
  feedbackBtn.style.display = "block";
};
cartButton.addEventListener("click", cart)

const feedback = () => {
  cartButton.style.display = "block";
  feedbackBtn.style.display = "none";
};
feedbackBtn.addEventListener("click", feedback);