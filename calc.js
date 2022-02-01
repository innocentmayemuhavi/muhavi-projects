//document.getElementById("count-el").innerText = 5
//let firstbatch=5;
//let secondbatch=7
//console.log(firstbatch+secondbatch)
let countEl = document.getElementById("count-el");
//console.log(countEl);



let count=0;
function increment()  {
  count=count+1;
  countEl.innerText=count;

}
function save(){
  console.log(count)
}
