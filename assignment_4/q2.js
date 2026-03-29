let count;
while (true) {
    let input = prompt("Enter the number of times to print the message");
    count = Number(input);

    if (!isNaN(count) && count > 0 && Number.isInteger(count)) {
        break;
    } else {
        alert("Please enter a valid positive integer!");
    }
}

let message = prompt("Enter the message");

console.log("Repeated Message:");
for (let i = 1; i <= count; i++) {
    console.log(i + ". " + message);
}

alert("Check the console for the repeated messages!");
