var x = prompt("Enter the first Starting value🙂 ", "0"); 
var y = prompt("Thanks.....Enter the second Starting value", "0"); 
var z=prompt("Thanks enter the terminating value of game🙂","0");
var g=prompt("Enter the card interval you wish🙂","0");
var num1r = parseInt(x);
var num2u = parseInt(y);
var ghh=parseInt(z);
var yyu=parseInt(g);

let firstcard=num1r;
let secondcard=num2u;
let card=[firstcard,secondcard]
let cards=[firstcard,secondcard]
let sum=firstcard+secondcard;
let hasblackjack=false;
let isalive=true;
let message= ""
let messageEl=document.getElementById("message-el");
let sumEl=document.getElementById("sum-el");
let cardsEl=document.getElementById("cards-el");
function StartGame(){
  renderGame()
}
 function renderGame(){
sumEl.textContent="sum:"+sum
cardsEl.textContent="cards: "+card[0]+" "+card[1];
let b=ghh
if(sum<=b)
{
  message="Do you want to draw another card?"
  
}
else if(sum===b)
{
  message="whoooh!! you've got a Black Jack"
  hasblackjack=true;
}

else if (sum>b)
{
  message="You are out of the game"
  isalive=false;
}
else{
  console.log(restart);
}
  

messageEl.textContent=message;
}

function newcard(){
  console.log("Drawing New Card From The Deck")
  let j=yyu;
  let card=yyu;
  sum+=card
cards.push(card)
console.log(cards)
renderGame()
}