// document.getElementById("count-el").innerText = 10;

// let count = 0

// console.log(count)

// let myAge = 22

// console.log(myAge)

// let clas = 12

// console.log(clas)

// let myAge = 2
// let humanDogRatio = 7;
// let dogAge = myAge * humanDogRatio

// console.log(dogAge)

// let count = 50
// count = count + 100
// count = count - 50

// console.log(count)

// let c = 3;
// function incre(){
//     c += 1;
// }


let incrementlap = 0
let save_el = document.getElementById("save-el")
let count = document.getElementById("count-el");

function increment() {
    incrementlap++;
    count.textContent = incrementlap
}

function save(){
    save_el.textContent += incrementlap + " - "
    count.textContent = 0
    incrementlap = 0
}
