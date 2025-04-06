displayList();

function displayList() {
    const target = document.getElementById("target");
    target.innerHTML = "<li>First item</> <li>Second item</> <li>Third item</>";
    target.classList.add("my-list");
}