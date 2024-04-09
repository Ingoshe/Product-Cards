const blackColor = document.querySelector(".black");

const imageCard = document.querySelector(".product-imageM");

const feedbackBtn = document.querySelector(".feedback");

const blueColor = document.getElementsByClassName("blue");

const greyColor = document.querySelector(".grey");

const cartButton = document.getElementById("button");

const itemTag = document.getElementsByTagName("h3")[0];

const newPrice = document.querySelector(".new-price");

blackColor.addEventListener("click", function () {
  cartButton.style.backgroundColor = "black";
  itemTag.style.backgroundColor = "black";
  imageCard.style.backgroundImage = 'url("./c black benz.jpg")';
  newPrice.textContent = "$139,200";
});

greyColor.addEventListener("click", function () {
  cartButton.style.backgroundColor = "grey";
  itemTag.style.backgroundColor = "grey";
  imageCard.style.backgroundImage = 'url("./c grey benz.jpg")';
  newPrice.textContent = "$140,000";
});

blueColor.addEventListener("click", function () {
  cartButton.style.backgroundColor = "blue";
  itemTag.style.backgroundColor = "blue";
  imageCard.style.backgroundImage = 'url("./c blue benz.jpg")';
  newPrice.textContent = "$137,500";
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
