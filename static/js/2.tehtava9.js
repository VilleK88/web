numbers = [2, 7, 4];
even_numbers = [];

even(numbers);
console.log(numbers);
console.log(even_numbers);
getText(numbers, even_numbers);

function even(array) {
    for(let i = 0; i < array.length; i++) {
        if(array[i] % 2 === 0) {
            even_numbers.push(array[i]);
        }
    }
}

function getText(text1, text2) {
    let text = text1.join(" ") + "<br>" + text2.join(" ");
    document.getElementById("message").innerHTML = text;
}