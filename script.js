function add(val1,val2){return val1 + val2;}
function subtract(val1,val2){return val1 - val2;}
function multiply(val1,val2){return val1 * val2;}
function divide(val1,val2){return val1 / val2;}

const numberBtn = document.querySelectorAll(".number");
const funcBtn = document.querySelectorAll(".func");
const equalBtn = document.querySelectorAll(".equals");
const windowText = document.querySelector(".windowText");
const clearBtn = document.querySelector(".clear");

funcChars = ["÷","×","+","−"];

funcBtn.forEach(button => {
    button.addEventListener('click', () => {
        let func = button.textContent;
        if (funcChars.some(char => calculatorString.includes(char))){
            console.log("Function Already Contains Value");
        } 
        else{
            if (windowText.textContent.length <=11){
                calculatorString = calculatorString + func;
                windowText.textContent = calculatorString;
            }
        }
    });
});

numberBtn.forEach(button => {
    button.addEventListener('click', () => {
        let text = button.textContent;
        if (windowText.textContent.length <=12){
            calculatorString = calculatorString + text;
            windowText.textContent = calculatorString;
        }

    });
});

equalBtn.forEach(button => {
    button.addEventListener('click', () => {
        if (windowText.textContent.includes("+")){
            let parts = windowText.textContent.split('+');
            let num1 = Number(parts[0]);
            let num2 = Number(parts[1]);
            calculatorString = num1 + num2;
            windowText.textContent = calculatorString
            console.log("Plus");
        }
        if (windowText.textContent.includes("÷")){
            let parts = windowText.textContent.split('÷');
            let num1 = Number(parts[0]);
            let num2 = Number(parts[1]);
            calculatorString = num1 / num2;
            windowText.textContent = calculatorString
            console.log("Divide");
        }
        if (windowText.textContent.includes("×")){
            let parts = windowText.textContent.split('×');
            let num1 = Number(parts[0]);
            let num2 = Number(parts[1]);
            calculatorString = num1 * num2;
            windowText.textContent = calculatorString
            console.log("Multiply");
        }
        if (windowText.textContent.includes("−")){
            let parts = windowText.textContent.split('−');
            let num1 = Number(parts[0]);
            let num2 = Number(parts[1]);
            calculatorString = num1 - num2;
            windowText.textContent = calculatorString
            console.log("Minus");
        }
    });
});


clearBtn.addEventListener('click', () => {
    calculatorString = "";
    windowText.textContent = "";
})
calculatorString = "";
