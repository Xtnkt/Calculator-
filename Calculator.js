let buttonPlus = document.getElementById('buttonPlus');
let buttonMinus = document.getElementById('buttonMinus');
let buttonMultiply = document.getElementById('buttonMultiply');
let buttonDevide = document.getElementById('buttonDevide');

let input1 = document.getElementById('number1');
let input2 = document.getElementById('number2');

function makeOperation(operationCode){
    var number1 = Number(input1.value);
    var number2 = Number(input2.value);
    
    var result;
    switch (operationCode) {
        case '+':
            result = number1 + number2;
            window.alert(result);
            break;
        case '-':
            result = number1 - number2;
            window.alert(result);
            break;
        case '*':
            result = number1 * number2;
            window.alert(result);
            break;
        case '/':
            result = number1 / number2;
            window.alert(result);
            break;
    }
}

function onOperationButtonClick(evt) {
    let clickedElement = evt.target;
    let operation = clickedElement.innerHTML;
    makeOperation(operation);
}

buttonPlus.addEventListener('click', onOperationButtonClick);
buttonMinus.addEventListener('click', onOperationButtonClick);
buttonMultiply.addEventListener('click', onOperationButtonClick);
buttonDevide.addEventListener('click', onOperationButtonClick);