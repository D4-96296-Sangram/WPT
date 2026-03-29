let employees = [];

function addName() {
    let input = document.getElementById("empName");
    let name = input.value.trim();

    if (employees.length >= 6) {
        alert("You have already entered 6 names");
        input.value = "";
        return;
    }

    if (name !== "") {
        employees.push(name);
        input.value = "";
    } else {
        alert("Please enter a name");
    }
}

function displaySorted() {
    let list = document.getElementById("resultList");
    list.innerHTML = "";

    employees.sort();

    for (let i = 0; i < employees.length; i++) {
        let li = document.createElement("li");
        li.textContent = employees[i];
        list.appendChild(li);
    }
}
