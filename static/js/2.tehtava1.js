numbers = [];
for(let i = 0; i < 5; i++) {
    num = parseInt(prompt(`${i+1}. Number:`));
    numbers.push(num);
}

numbers = reverseNumbers(numbers);
getList(numbers)

function reverseNumbers(numbers) {
    numbers_reverse = [];
    for(let i = numbers.length; i >= -1; i--) {
        numbers_reverse.push(numbers[i]);
    }
    return numbers_reverse;
}

function getList(list) {
    let string = list.join(" ");
    getText(string);
    console.log(string);
}

function getText(text) {
    document.getElementById("message").innerText = text;
}