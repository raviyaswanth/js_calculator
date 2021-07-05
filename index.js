$(document).ready(function(){

let Previous_element="";
var Current_element="";
const numberButtons = document.querySelectorAll('[data-number]');


numberButtons.forEach(button=>{
button.addEventListener('click',()=>{
Current_element = button.innerText;
console.log(Current_element);});
$(".current-element").text(Current_element);
});

$(".previous-element").text(Previous_element);





















});