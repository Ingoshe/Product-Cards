const redColor = document.querySelector(".red");

const blackColor = document.querySelector(".black");

const imageCard = document.querySelector(".product-imageD");

const feedbackBtn = document.querySelector(".feedback");

const blueColor = document.getElementsByClassName("blue");

const cartButton = document.getElementById("button");

const itemTag = document.getElementsByTagName("h3")[0];

const newPrice = document.querySelector(".new-price");

redColor.addEventListener("click", function () {
  cartButton.style.backgroundColor = "red";
  itemTag.style.backgroundColor = "red";
  imageCard.style.backgroundImage = 'url("./red defender.webp")';
  newPrice.textContent = "$137,999";
});

blackColor.addEventListener("click", function () {
  cartButton.style.backgroundColor = "black";
  itemTag.style.backgroundColor = "black";
  imageCard.style.backgroundImage = 'url("./defender black.jpg")';
  newPrice.textContent = "$130,200";
});

blueColor.addEventListener("click", function () {
  cartButton.style.backgroundColor = "blue";
  itemTag.style.backgroundColor = "blue";
  imageCard.style.backgroundImage = 'url("./blue defender.jpg")';
  newPrice.textContent = "$135,000";
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
