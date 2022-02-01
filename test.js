//document.getElementById("count-el").innerText = 5
//let firstbatch=5;
//let secondbatch=7
//console.log(firstbatch+secondbatch)
let saveEl=document.getElementById("save-el");
let countEl = document.getElementById("count-el");
//console.log(countEl);

console.log("saveEl");

let count=0;
function increment()  {
  count+=1;
  countEl.textContent=count;

}
function save(){
  let countstr=count+" - ";
  saveEl.textContent+=countstr;
  countEl.textContent=0;
  count=0;
}
