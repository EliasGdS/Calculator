const inputView = document.querySelector('#result');

// document.querySelectorAll(".num_btn").forEach(element => {
//     element.addEventListener('click', function () {
//         if (inputView.value.length < 8) {
//             if (inputView.value !== '0')
//                 inputView.value = inputView.value + element.innerText;
//             else
//                 inputView.value = element.innerText;
//         }
//         // inputView.value = inputView.value !== '0' ? inputView.value + element.innerText : element.innerText
//     });
// })

var lastBtn;
var inputNumber = '0';
const buffer = [];
var fpt = false;
const operationValues = [undefined, undefined, undefined];

function pressNum(num) {
    if (inputNumber.length < 8) {
        if (inputNumber !== '0' && num.innerText !== '.')
            inputNumber = inputNumber.concat(num.innerText);
        else if (num.innerText == '.' && fpt == false) {
            inputNumber = inputNumber.concat(num.innerText);
            fpt = true;
        }
        else if (inputNumber == 0)
            inputNumber = num.innerText;
    }
    inputView.value = inputNumber;
}

function reverseSignal(num) {
    if(operationValues[1] == undefined && operationValues[2] == undefined)
        operationValues[0] = inputNumber * (-1);
    inputNumber = inputNumber * (-1);
    inputView.value = inputNumber;
}

function pressOperator(operator) {
    if (operationValues[0] == undefined)
        operationValues[0] = inputNumber;

    if (operationValues[0] !== undefined && operationValues[1] !== undefined)
        pressEqual();

    operationValues[1] = operator.id;
    inputNumber = '0';
    inputView.value = operator.innerText;
    fpt = false;
}

function pressEqual() {

    if (operationValues[0] == undefined) {
        inputNumber = inputView.value;
        inputView.value = inputNumber;
    }

    if (operationValues[1] == undefined)
        operationValues[0] = inputNumber;

    operationValues[2] = inputNumber;

    switch (operationValues[1]) {
        case "sum_btn":
            inputNumber = parseFloat(operationValues[0]) + parseFloat(operationValues[2]);
            operationValues[0] = inputNumber;
            operationValues[2] = undefined;
            inputView.value = operationValues[0];
            break;
        case "sub_btn":
            inputNumber = parseFloat(operationValues[0]) - parseFloat(operationValues[2]);
            operationValues[0] = inputNumber;
            operationValues[2] = undefined;
            inputView.value = operationValues[0];
            break;
        case "mult_btn":
            inputNumber = parseFloat(operationValues[0]) * parseFloat(operationValues[2]);
            operationValues[0] = inputNumber;
            operationValues[2] = undefined;
            inputView.value = operationValues[0];
            break;
        case "div_btn":
            inputNumber = parseFloat(operationValues[0]) / parseFloat(operationValues[2]);
            operationValues[0] = inputNumber;
            operationValues[2] = undefined;
            inputView.value = operationValues[0];
            break;
        default:
            inputView.value = operationValues[0];
            break
    }

    if (lastBtn != "op_btn" && lastBtn != "equal_btn")
        buffer.push(inputNumber);

    operationValues[1] = undefined;
    fpt = false;
}

function clr() {
    if (lastBtn == "num_btn") {
        inputNumber = '0';
    } else {
        buffer.pop();
        if (buffer.length > 0)
            inputNumber = [...buffer].pop();
        else
        {
            inputNumber = '0';
            clrAll();
        }
    }
    inputView.value = inputNumber;
}

function clrAll() {
    var aux = buffer.length;

    for (var i = 0; i < aux; i++)
        buffer.pop();

    for (var j = 0; j <= 2; j++)
        operationValues[j] = undefined;

    inputNumber = '0';
    inputView.value = inputNumber;
}

document.querySelectorAll(".num_btn, .op_btn, .equal_btn").forEach(element => {
    element.addEventListener('click', function () {
        lastBtn = element.className;
    })
})

