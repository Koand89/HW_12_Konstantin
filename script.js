

// Task 1
var printOut = document.getElementById('text1');
var inputText = document.getElementById('inpname');


function greeting(){
    printOut.textContent="Hello "+inputText.value;
}

// Task 2

var print2=document.getElementById('text2');
var Inp1= document.getElementById('str1');
var Inp2=document.getElementById('str2');

function compare(){
    if(Inp1.value===Inp2.value){
        print2.textContent="Equal";
    }else{
        print2.textContent="Not equal";
    }
}

// Task 3

var print3=document.getElementById('text3');

function randnum() {
    print3.textContent ="Random number is "+ Math.random();
}