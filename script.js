var screen = document.querySelector(".input-screen");
var number= document.querySelector(".number");
var operator= document.querySelector(".operator");
var currentNumber;


function inputNumber(num){
    screen.innerHTML= screen.innerHTML + num;
}

function clear(){
    alert("ss");
    screen.innerHTML='';
}


