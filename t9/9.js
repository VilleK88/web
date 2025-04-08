document.getElementById("start").addEventListener("click", () => {
    const input = document.getElementById("calculation").value.trim()
    let result;

    if(input.includes("+")) {
        const [a, b] = input.split("+").map(n => parseInt(n));
        result = a + b;
    } else if(input.includes("-")) {
        const [a, b] = input.split("-").map(n => parseInt(n));
        result = a - b;
    } else if(input.includes("*")) {
        const [a, b] = input.split("*").map(n => parseInt(n));
        result = a * b;
    } else if(input.includes("/")) {
        const [a, b] = input.split("/").map(n => parseInt(n));
        result = b === 0 ? "Cannot divide by zero" : Math.floor(a / b);
    } else {
        result = "Invalid input. Use +, -, * or /";
    }

    document.getElementById("result").textContent = result;
});