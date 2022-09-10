// Triangle Perimeter Assignment Start Code

//Variables to store HTML elements
let calcBtn = document.getElementById("calc");
let lengthxA = +document.getElementById("xA").value;
let lengthyA = +document.getElementById("yA").value;
let lengthxB = +document.getElementById("xB").value;
let lengthyB = +document.getElementById("yB").value;
let lengthxC = +document.getElementById("xC").value;
let lengthyC = +document.getElementById("yB").value;
let finalP = document.getElementById("sum");
let ABresultE1 = document.getElementById("sumAB");
let ACresultE1 = document.getElementById("sumAC");
let BCresultE1 = document.getElementById("sumBC");


//Event Listener
calcBtn.addEventListener("click", calcPerimeter);

//Function to Calculate perimeter 
function calcPerimeter (){
//Process

let final= lengthxA + lengthyA;
finalP.innerHTML = final ; 

}

// function dist(x1value, y1value, x2value, y2value){

// }