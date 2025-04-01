numbers = [];

getNumbers();
console.log(numbers.sort((a, b) => a - b));

function getNumbers() {
    while(true) {
        let num = parseInt(prompt("Number:"));
        if(num === 0) {
            break;
        }
        else {
            numbers.push(num);
        }
    }
}