
var x = prompt("Enter the first value ", "0"); 
var y = prompt("Thanks.....Enter the second value", "0"); 
var num1r = parseInt(x);
var num2u = parseInt(y);
let num1=num1r
let num2=num2u
document.getElementById("num1-el").textContent=num1
document.getElementById("num2-el").textContent=num2
let sumEl=document.getElementById("sum-el")
function add(){
  console.log("add clicked")
  let result=num1+num2;
  sumEl.textContent="Sum : " +result;
}function sub(){
  console.log("add clicked")
  let result=num1-num2;
  sumEl.textContent="Difference : " +result;
}
function mut(){
  console.log("add clicked")
  let result=num1*num2;
  sumEl.textContent="Product : " +result;
}
function div(){
  console.log("add clicked")
  let result=num1/num2;
  sumEl.textContent="Quotient: " +result;
}
