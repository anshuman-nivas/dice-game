var randomNo1 = Math.floor(Math.random() * 6) + 1;
var randomSrc = "images/dice" + randomNo1 + ".png";
var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomSrc);

var randomNo2 = Math.floor(Math.random() * 6) + 1;
var randomSrc2 = "images/dice" + randomNo2 + ".png";
var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomSrc2);

if (randomNo1 > randomNo2) {
	document.querySelector("<h1>").innerhtml("🚩Player1 Wins");
} else if (randomNo1 < randomNo2) {
	document.querySelector("<h1>").innerhtml("🚩Player2 Wins");
} else {
	document.querySelector("<h1>").innerhtml("Draw !!");
}
