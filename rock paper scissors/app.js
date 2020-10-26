// Getting a random dice number
var randomNumber1 = Math.floor(Math.random() * 3) + 1;


// Getting the dice image
var randomDiceImage = "img" + randomNumber1 + ".png";
var randomImageSource = "images/" + randomDiceImage;

//Changing the image of the dice
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);

//Getting the second random dice number
var randomNumber2 = Math.floor(Math.random() * 3) + 1;
var randomImageSource2 = "images/img" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


//Congratulating the winner

if (randomNumber1 === 1 && randomNumber2 === 2) {
    document.querySelectorAll("h1")[1].innerHTML = "Congrats! Player 1 is the winner!"
}else if (randomNumber1 === 1 && randomNumber2 === 3) {
    document.querySelectorAll("h1")[1].innerHTML = "Congrats! Player 2 is the winner!"
}else if (randomNumber1 === 2 && randomNumber2 === 1) {
    document.querySelectorAll("h1")[1].innerHTML = "Congrats! Player 2 is the winner!"
}else if (randomNumber1 === 2 && randomNumber2 === 2) {
    document.querySelectorAll("h1")[1].innerHTML = "It is a Tie, Try Again!"
}else if (randomNumber1 === 2 && randomNumber2 === 3) {
    document.querySelectorAll("h1")[1].innerHTML = "Congrats! Player 1 is the winner!"
}else if (randomNumber1 === 3 && randomNumber2 === 1) {
    document.querySelectorAll("h1")[1].innerHTML = "Congrats! Player 1 is the winner!"
}else if (randomNumber1 === 3 && randomNumber2 === 2) {
    document.querySelectorAll("h1")[1].innerHTML = "Congrats! Player 2 is the winner!"
}else if (randomNumber1 === 3 && randomNumber2 === 3) {
    document.querySelectorAll("h1")[1].innerHTML = "It is a Tie, Try Again!"
}else if (randomNumber1 === 1 && randomNumber2 === 1) {
    document.querySelectorAll("h1")[1].innerHTML = "Congrats! Player 2 is the winner!"
}




//Play Again
var playAgain = document.getElementById("playAgain");
playAgain.onclick = function(){location.reload()
}