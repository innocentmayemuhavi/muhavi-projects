function movetoNext(current, nextFieldID) {  
if (current.value.length >= current.maxLength) {  
document.getElementById(nextFieldID).focus();  
}  
}  
 function checking (){
   window.location.href="shp.html"
 }

let qnEl=document.getElementById('qn-el')
let resultEl=document.getElementById('res-el');
let remarkEl=document.getElementById('rem-el')
    
    
    function getWord(){
     var x=document.getElementById('first').value;
     var m=document.getElementById('second').value;
     var o=document.getElementById('third').value;
           var a=x+m+o;
           let q=" "
           let lv=1
           let z="yyy"
           if(lv==1){
             q="THREE WISE.MEN"
             z="yyy"
             if(a==z)
             {
               resultEl.innerText="you passed"
             }
             else{
               resultEl.innerText="failed"
           }
           }


  
}