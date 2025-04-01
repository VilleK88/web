dogs = [];

getDogs(dogs);
dogs.sort();
displayDogs(dogs.reverse());

function getDogs(dogs) {
    for(let i = 0; i < 6; i++) {
        dog = prompt(`${i+1}. name:`);
        dogs.push(dog);
    }
}

function displayDogs(dogs) {
    let ul = document.createElement("ul");
    for(let i = 0; i < dogs.length; i++) {
        let li = document.createElement("li");
        li.textContent = dogs[i];
        ul.appendChild(li);
    }
    document.getElementById("message").appendChild(ul);
}