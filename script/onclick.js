/* Событие клика на button 767px */

let elem = document.getElementsByClassName("display__none");
let btn = document.getElementById("btn");

btn.onclick = function() {
  for(let i=0; i<elem.length; i++)elem[i].style.display='block';
  btn.style.display = "none";
}

