// alert("working");
var randomNumber1=Math.random()*6;
randomNumber1 = Math.floor(randomNumber1)+1;
var name = "dice" + randomNumber1 + ".png";
var imageName= "images/" + name;

var image1= document.querySelectorAll("img")[0];
image1.setAttribute("src",imageName);

var randomNumber2=Math.random()*6;
randomNumber2 = Math.floor(randomNumber2)+1;
var name2 = "images/dice"+ randomNumber2 + ".png";
 document.querySelectorAll("img")[1].setAttribute("src",name2);

 if(randomNumber1>randomNumber2)
 document.querySelector("h1").innerHTML="🎈Player 1 Wins!";
 else if(randomNumber1<randomNumber2)
document.querySelector("h1").innerHTML="🎈Player 2 Wins!";
else
document.querySelector("h1").innerHTML="🎈Draw!";
