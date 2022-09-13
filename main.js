// Triangle Perimeter Assignment Start Code

//Variables to store HTML elements
let calcBtn = document.getElementById("calc");
let finalP = document.getElementById("sum");
let ABresultE1 = document.getElementById("sumAB");
let ACresultE1 = document.getElementById("sumAC");
let BCresultE1 = document.getElementById("sumBC");


//Event Listener
calcBtn.addEventListener("click", calcPerimeter);

//Function to Calculate perimeter 
function calcPerimeter (){
//Input
let lengthxA = +document.getElementById("xA").value;
let lengthyA = +document.getElementById("yA").value;
let lengthxB = +document.getElementById("xB").value;
let lengthyB = +document.getElementById("yB").value;
let lengthxC = +document.getElementById("xC").value;
let lengthyC = +document.getElementById("yC").value;
    //Process
let AB = Math.sqrt((lengthxB-lengthxA)*(lengthxB-lengthxA) + (lengthyB-lengthyA)*(lengthyB-lengthyA));
let AC =  Math.sqrt((lengthxC-lengthxA)*(lengthxC-lengthxA) + (lengthyC-lengthyA)*(lengthyC-lengthyA));
let BC =  Math.sqrt((lengthxC-lengthxB)*(lengthxC-lengthxB) + (lengthyC-lengthyB)*(lengthyC-lengthyB));
let perimeter = AB + AC + BC;
//Output
ABresultE1.innerHTML = AB;
ACresultE1.innerHTML = AC;
BCresultE1.innerHTML = BC;
finalP.innerHTML = perimeter;
}

//function dist(x1value, y1value, x2value, y2value){
//Math.sqrt((x2value-x1value)*(x2value-x1value) + (y2value-y1value)*(y2value-y1value));
//}