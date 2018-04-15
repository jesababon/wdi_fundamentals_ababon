console.log("Up and running!");

var cards = [ "queen" , "queen" , "king" , "king"]

var cardsInPlay = [];

var cardOne = [0];
cardsInPlay.push("cardOne");
console.log("User flipped queen.");

var cardTwo = [2];
cardsInPlay.push("cardTwo");
console.log("User flipped king.");


if (cardOne === cardTwo) {
alert("It's a match!");
} else {
	alert("Sorry. Try Again.");
}