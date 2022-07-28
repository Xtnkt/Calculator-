let operationButtons = document.getElementsByClassName('operation-button');
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

for (let i = 0; i < operationButtons.length; i++) {
    operationButtons[i].addEventListener('click', onOperationButtonClick );
}