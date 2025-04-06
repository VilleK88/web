displayList();

function displayList() {
    let ul = document.createElement("ul");
    let list = ["First", "Second", "Third"];
    for(let i = 0; i < 3; i++) {
        let li = document.createElement("li");
        li.textContent = list[i] + " item";
        if(i === 1) {
            li.classList.add("my-item");
        }
        ul.appendChild(li);
    }
    document.getElementById("target").appendChild(ul);
}