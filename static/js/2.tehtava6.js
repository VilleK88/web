main_program();

function main_program() {
    numbers = [];

    while(true) {
        let num = dice_roll();
        numbers.push(num);
        if(num === 6) {
            break;
        }
    }

    displayList(numbers);
}

function dice_roll() {
    return num = Math.floor(Math.random() * 6) + 1;
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