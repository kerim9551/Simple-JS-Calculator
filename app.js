"use strict";

var input = document.getElementById('input');
var number = document.querySelectorAll('.numbers div');
var operator = document.querySelectorAll('.operators div');
var result = document.getElementById('result');
var clear = document.getElementById('clear');
var resultDisplayed = false;


for (var i = 0; i < number.length; i++) {
    number[i].addEventListener("click", function(e) {
        var currentString = input.innerHTML;
        var lastChar = currentString[currentString.length - 1];

        if (resultDisplayed === false) {
            input.innerHTML += e.target.innerHTML;
        } else if (resultDisplayed === true && lastChar === "+" || lastChar === "-" || lastChar === "×" || lastChar === "÷") {
            resultDisplayed = false;
            input.innerHTML += e.target.innerHTML;
        } else {
            resultDisplayed = false;
            input.innerHTML = "";
            input.innerHTML += e.target.innerHTML;
        }

    });
}