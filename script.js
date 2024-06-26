function add(val1,val2){return val1 + val2;}
function subtract(val1,val2){return val1 - val2;}
function multiply(val1,val2){return val1 * val2;}
function divide(val1,val2){return val1 / val2;}

const numberBtn = document.querySelectorAll(".number");
const funcBtn = document.querySelectorAll(".func");
const windowText = document.querySelector(".windowText");
const clearBtn = document.querySelector(".clear");

funcBtn.forEach(button => {
    button.addEventListener('click', () => {
        let func = button.textContent;
        console.log(func);
    });
});

numberBtn.forEach(button => {
    button.addEventListener('click', () => {
        let text = button.textContent;
        calculatorString = calculatorString + text;
        windowText.textContent = calculatorString;
    });
});

clearBtn.addEventListener('click', () => {
    calculatorString = "";
    windowText.textContent = "";
})
calculatorString = "";
