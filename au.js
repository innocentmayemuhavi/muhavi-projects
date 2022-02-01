let firstcard=11;
let secondcard=10;
let sum=firstcard+secondcard;
let hasblackjack=false;
let isalive=true;
let message= ""
if(sum<21)
{
  message="Do you want to draw another card?"
  
}
else if(sum===21)
{
  message="whoooh!! you've got a Black Jack"
  hasblackjack=true;
}
else (sum>21)
{
  message="You are out of the game"
  isalive=false;
}

console.log(message);