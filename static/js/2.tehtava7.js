main_program();

function main_program() {
    numbers = [];

    let max_num = parseInt(prompt("Maximum number:"))
    while(true) {
        let num = dice_roll(21);
        numbers.push(num);
        if(num === max_num) {
            break;
        }
    }

    displayList(numbers);
}

function dice_roll(num_of_sides) {
    return num = Math.floor(Math.random() * num_of_sides) + 1;
}

function displayList(list) {
    let ul = document.createElement("ul");
    for(let i = 0; i < list.length; i++) {
        let li = document.createElement("li");
        li.textContent = list[i];
        ul.appendChild(li);
    }
    document.getElementById("message").appendChild(ul);
}