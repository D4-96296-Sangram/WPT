let n;
while (true) {
    let input = prompt("Enter a number (n):");
    n = Number(input);

    if (!isNaN(n) && n > 0 && Number.isInteger(n)) {
        break;
    } else {
        alert("Please enter a valid positive integer!");
    }
}

let evenNumbers = [];
for (let i = 2; i <= n; i += 2) {
    evenNumbers.push(i);
}

alert("Check the console for the list of even numbers!");

let j = 0;
let output = "Even numbers <= " + n + ": ";
while (j < evenNumbers.length) {
    output += evenNumbers[j];
    if (j < evenNumbers.length - 1) {
        output += ", ";
    }
    j++;
}
console.log(output);
