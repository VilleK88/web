numbers = [];

getNumbers();

function getNumbers() {
    while(true) {
        let num = parseInt(prompt("Number:"))
        if(num in numbers) {
            console.log(num + "syötetty jo");
            console.log(numbers.sort((a, b) => a - b));
            break;
        }
        else {
            numbers.push(num);
        }
    }
}