console.log("Up and running!");


if (inPlay.length === 2) {
	checkForMatch();

var cards = [
	{ 
		rank: "queen",
		suit: "hearts",
		cardIMG: "images/queen-of-hearts.png"
	},
	{
		rank: "queen",
		suit: "diamonds",
		cardIMG: "images/queen-of-diamonds.png"
	},
	{
		rank: "king",
		suit: "hearts",
		cardIMG: "images/king-of-hearts.png"
	},
	{
		rank: "king",
		suit: "diamonds",
		cardIMG: "images/king-of-diamonds.png"
	}
];
var cardsInPlay = [];

function checkForMatch() {
  //if (cardsInPlay.length == 2) {
  if (cardsInPlay[0] === cardsInPlay[1]) {
    alert("You found a match!");
    //setTimeout('location', 50000);
    //location.reload()
  } else {
    alert("Sorry, doomed to try again");
  }
}

function flipCard() {
  var cardId = this.getAttribute("data-id");
  //console.log("User flipped" + cards[cardId].rank);
  cardsInPlay.push(cards[cardId].rank);
  this.setAttribute("src", cards[cardId].cardImage);
  //console.log(cards[cardId].suit);
  if (cardsInPlay.length === 2) {
    checkForMatch();
    //cardsInPlay = [];
  }
}

console.log(cardsInPlay);

function createBoard() {
  const cardTable = document.getElementById("game-board");
  for (var i = 0; i < cards.length; i++) {
    var cardElement = document.createElement("img");
    cardElement.setAttribute("src", "images/back.png");
    cardElement.setAttribute("data-id", i);
    cardElement.addEventListener("click", flipCard);
    cardTable.appendChild(cardElement);
  }
}
function pageReset() {
  document.getElementById('reset-button');
}
	


createBoard();

pageReset();

