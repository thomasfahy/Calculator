function add(val1,val2){return val1 + val2;}
function subtract(val1,val2){return val1 - val2;}
function multiply(val1,val2){return val1 * val2;}
function divide(val1,val2){return val1 / val2;}

const numberBtn = document.querySelectorAll(".number");
const funcBtn = document.querySelectorAll(".func");

numberBtn.forEach(button => {
    button.addEventListener('click', () => {
        let text = button.textContent;
        console.log(text);
    });
});

numberBtn.forEach(button => {
    button.addEventListener('click', () => {
        let text = button.textContent;
        console.log(text);
    });
});

calculatorString = "";
