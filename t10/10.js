document.getElementById("source").addEventListener("submit", function(event) {
    event.preventDefault();
    const firstName = this.firstname.value.trim();
    const lastName = this.lastname.value.trim();
    if(firstName === "" || lastName === "") {
        return;
    }

    document.getElementById("target").textContent = `Your name is ${firstName} ${lastName}`;
});