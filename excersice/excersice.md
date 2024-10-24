"use strict";
//get html elements into variables
let statesSelect = document.getElementById("statesSelect");

let option1 = document.createElement("option");
option1.value = "1";
option1.innerText = "New York";
statesSelect.appendChild(option1);

let option2 = document.createElement("option");
option2.value = "2";
option2.innerText = "New Jersey";
statesSelect.appendChild(option2);