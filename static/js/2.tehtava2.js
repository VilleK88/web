names = [];
num = parseInt(prompt("Number of participants?"));

names = takeNames(names, num);

displayNames(names);

function takeNames(names, num) {
    new_names = [];
    for(let i = 0; i < num; i++) {
    name = prompt("Name:");
        new_names.push(name);
    }
    return new_names.sort();
}

function displayNames(names) {
    let ol = document.createElement("ol");
    for(let i = 0; i < names.length; i++) {
        let li = document.createElement("li");
        li.textContent = names[i];
        ol.appendChild(li);
    }
    document.getElementById("message").appendChild(ol);
}