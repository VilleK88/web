names = ["Johnny", "Deedee", "Joey", "Marky"];

let string = concat(names);
displayText(string);

function concat(list) {
    let string = "";
    for(let i = 0; i < list.length; i++ ) {
        string += list[i];
    }
    return string;
}

function displayText(text) {
    document.getElementById("message").innerText = text;
}