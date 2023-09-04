function createCard() {
  const cardContainer = document.createElement("div");
  cardContainer.className = "card m-1";
  cardContainer.style.width = "13rem";

  const cardBody = document.createElement("div");
  cardBody.className = "card-body";

  const cardTitle = document.createElement("h5");
  cardTitle.className = "card-title";
  cardTitle.textContent = "product.name";

  cardBody.appendChild(cardTitle);

  cardContainer.appendChild(cardBody);

  const cardContainerElement = document.getElementById("card-container");
  cardContainerElement.appendChild(cardContainer);
}
