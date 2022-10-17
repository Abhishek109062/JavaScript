let num1 = document.getElementById("num1-el").value;
let num2 = document.getElementById("num2-el").value;


let ans = document.getElementById("sum-el")
function add(){
    ans.textContent ="Sum : " + (+num1 + +num2)
}

function subtract(){
    ans.textContent ="Subtract : " + (+num1 - +num2)
}

function multiply(){
    ans.textContent = "Multiply : " + (+num1 * +num2)
}

function divide(){
    ans.textContent = "Divide : " + (+num1 / num2)
}