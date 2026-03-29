   console.log("JS file loaded!");
   
    function getPositiveInteger(message) {
        let val;
        while (true) {
            let input = prompt(message);
            val = Number(input);

            if (!isNaN(val) && val > 0 && Number.isInteger(val)) {
                return val;
            } else {
                alert("Please enter valid positive numbers!");
            }
        }
    }

    let num1 = getPositiveInteger("Enter first positive number:");
    let num2 = getPositiveInteger("Enter second positive number:");
    let num3 = getPositiveInteger("Enter third positive number:");

    let largest = Math.max(num1, num2, num3);

    alert("The largest number is: " + largest);
