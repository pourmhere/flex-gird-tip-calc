let input_box = document.querySelector('#amount');
let button = document.querySelector('button');
let output = document.querySelector('.message');


// events: any way that user try to interact with the web
//click,submit,keypress(keyup, keydown),

//addEvenListener:

button.addEventListener("click", calculateTip)//logic

function calculateTip(){
//console.log("Button Clicked");
let amount = input_box.value;
let tip = amount * 5/100;
//console.log(tip);
output.innerText="Please pay tip of Rs." + tip;
}