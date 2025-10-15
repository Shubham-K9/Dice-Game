var no1=Math.floor(Math.random()*6)+1;
var no2=Math.floor(Math.random()*6)+1;
var DiceNo="dice"+no1+".png";
var imgran="./utils/"+DiceNo;
var sel=document.querySelectorAll("img")[0];
sel.setAttribute("src",imgran);
var DiceNo="dice"+no2+".png";
var imgran="./utils/"+DiceNo;
var sel=document.querySelectorAll("img")[1];
sel.setAttribute("src",imgran);

if(no1>no2){
    document.querySelector("h1").innerHTML="Player 1 Wins";
    document.querySelector("h1").style.color="orange";

}
else if(no2>no1){
    document.querySelector("h1").innerHTML="player 2 Wins";
    document.querySelector("h1").style.color="orange";
    
}
else{
    document.querySelector("h1").innerHTML="Tied!!";
    document.querySelector("h1").style.color="orange";

}
