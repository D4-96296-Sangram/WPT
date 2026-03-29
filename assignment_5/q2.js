function calculate(op) {
    let num1 = parseFloat(document.getElementById('n1').value);
    let num2 = parseFloat(document.getElementById('n2').value);
    let display = document.getElementById('res');

    if (isNaN(num1) || isNaN(num2)) {
        alert("Please enter both numbers");
        return;
    }

    let result;
    if (op === '+') result = num1 + num2;
    else if (op === '-') result = num1 - num2;
    else if (op === '*') result = num1 * num2;
    else if (op === '/') {
        if (num2 === 0) {
            alert("Division by zero is not allowed");
            return;
        }
        result = num1 / num2;
    }
    display.value = result;
}
