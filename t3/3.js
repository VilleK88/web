'use strict';
const names = ['John', 'Paul', 'Jones'];

displayList(names);

function displayList(names) {
    let ul = document.createElement("ul");
    for(let i = 0; i < names.length; i++) {
        let li = document.createElement("li");
        li.textContent = names[i];
        ul.appendChild(li);
    }
    document.getElementById("target").appendChild(ul);
}