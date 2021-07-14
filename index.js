$(document).ready(function(){

const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete]');
const allclearButton = document.querySelector('[data-allclear]');
const previousText = document.querySelector('[data-previousOperand]')
const currentText = document.querySelector('[data-currentOperand]')


console.log(currentText.innerText)



class Calculator{

constructor(previousText,currentText){
this.previousText = previousText;
this.currentText = currentText;
this.clear();
}

clear(){
this.previousOperand = '';
this.currentOperand = '0';

}
delete(){
this.currentOperand = this.currentOperand.slice(0,-1);

}
appendNumber(number){
if(number==="." && this.currentOperand.includes('.')){
return}
if(this.currentOperand == "0"){
this.currentOperand = " ";
}
this.currentOperand = this.currentOperand + number;


}
chooseOperation(operation){
this.operation = operation
if(this.currentOperand!==" "){
this.previousOperand = this.currentOperand + operation;
this.currentOperand = "";
}
else{
this.currentOperand = 0;
}



}
compute(){

if(this.previousOperand == " "){
return;
}
else{
if(this.operation == "+"){
this.currentOperand = parseFloat(this.currentOperand)+parseFloat(this.previousOperand);
this.previousOperand = " ";}
else if(this.operation == "-"){
this.currentOperand = parseFloat(this.previousOperand)-parseFloat(this.currentOperand);
this.previousOperand = " ";}
else if(this.operation == "*"){
this.currentOperand = parseFloat(this.currentOperand)*parseFloat(this.previousOperand);
this.previousOperand = " ";}
else if(this.operation == "÷"){
this.currentOperand = parseFloat(this.previousOperand)/parseFloat(this.currentOperand);
this.previousOperand = " ";}
}
}

updateDisplay(){
this.previousText.innerText = this.previousOperand;
this.currentText.innerText = this.currentOperand;


}




}

let calculator = new Calculator(previousText,currentText)

allclearButton.addEventListener('click',()=>{
calculator.clear();
calculator.updateDisplay();
})

numberButtons.forEach(button=>{
button.addEventListener('click',()=>{
calculator.appendNumber(button.innerText);
calculator.updateDisplay();
});
});


operationButtons.forEach(button=>{
button.addEventListener('click',()=>{
calculator.chooseOperation(button.innerText);
calculator.updateDisplay();
});
});

deleteButton.addEventListener('click',()=>{
calculator.delete();
calculator.updateDisplay();
})
equalButton.addEventListener('click',()=>{
calculator.compute();
calculator.updateDisplay();
})

calculator.compute();





});