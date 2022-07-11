function VCT(){
var value1=document.getElementById("ptn").value;
var value2=document.getElementById("date").value;
var value3=document.getElementById("rev").value
var queryString = "?Patient_number1=" + value1 + "&Time=" + value2 + "&Doctor_review=" + value3;
window.location.href = "new.html" + queryString;
}
function display_ct5() {
var x = new Date()
var ampm = x.getHours( ) >= 12 ? ' PM' : ' AM';

var x1=x.getMonth() + 1+ "/" + x.getDate() + "/" + x.getFullYear(); 
x1 = x1 + " - " +  x.getHours( )+ ":" +  x.getMinutes() + ":" +  x.getSeconds() + ":" + ampm;
document.getElementById('ct5').innerHTML = x1;
display_c5();
 }
 function display_c5(){
var refresh=1000; // Refresh rate in milli seconds
mytime=setTimeout('display_ct5()',refresh)
}
display_c5()

function read(){
  var a= getElementById("dpts");
  if (a.style.display==="block" ) {
    a.style.display=== "none";
  }
  else {
    a.style.display==="block";
  }
}
