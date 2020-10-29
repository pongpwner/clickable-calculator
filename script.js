var screen = document.querySelector(".input-screen");
var number= document.querySelector(".number");
var operator= document.querySelector(".operator");
var currentNumber;
var previousNumber=0;
var operate=0;
var keep=false;
var firstCase=true;
var eq=false;


function inputNumber(num){
    if(keep==false){
    let number=screen.innerHTML+num;
    currentNumber=parseInt(number);
    screen.innerHTML=currentNumber;
    } else{ //needed to clear screen after an operation is pressed
    screen.innerHTML='';
    let number=screen.innerHTML+num;
    currentNumber=parseInt(number);
    screen.innerHTML=currentNumber;
    keep=false;
    }
   
}

function clearScreen(){
    screen.innerHTML='';
    currentNumber=null;
    previousNumber=null;
    operate=0;
    keep=0;
    firstCase=true;

}
function solve(){
    if(operate==1){  //add
    previousNumber += currentNumber;
    currentNumber=null;
    screen.innerHTML=String(previousNumber);
    firstCase=false;
    } else if(operate==2){  //subtract
        if(firstCase==true){ //needed to prevent the screen from displaying a negative number on the first case
        
            previousNumber= currentNumber;
            currentNumber=null;
            screen.innerHTML=String(previousNumber);
            firstCase=false;
        }else{
           
        previousNumber-=currentNumber;
        currentNumber=null;
        screen.innerHTML=String(previousNumber);
        }

    } else if(operate==3){ //multiply
        if(firstCase==true){  // first case
            previousNumber= currentNumber;
            currentNumber=null;
            screen.innerHTML=String(previousNumber);
            firstCase=false;
        }else{
        
        previousNumber*= currentNumber;
        currentNumber=null;
        screen.innerHTML=String(previousNumber);
        }

    } else if(operate==4){ //division
        if(firstCase==true){  // 
            previousNumber= currentNumber;
            currentNumber=null;
            screen.innerHTML=String(previousNumber);
            firstCase=false;
        }else{
        
        previousNumber /= currentNumber;
        currentNumber=null;
        screen.innerHTML=String(previousNumber);
        }
    }

}

function add(){
    if(operate==0){
        operate=1;
    }
    solve();
    operate=1;
    keep=true;
    

}
function subtract(){
    if(operate==0){
        operate=2;
    }
    solve();
    operate=2;
    keep=true;
    
}
function multiply(){
    if(operate==0){
        operate=3;
    }
    solve()
    operate=3
    keep=true;
    
}
function divide(){
    if(operate==0){
        operate=4;
    }
    solve()
    operate=4
    keep=true;

}
function equate(){

    solve();
    currentNumber=previousNumber;
    previousNumber=null;
    firstCase=true;
    
}
