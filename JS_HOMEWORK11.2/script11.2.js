const text = document.querySelector("#text");
const btn = document.querySelector("#btn");

// ставимо початковий клас
text.classList.add("blacktext");

let isGreen = false;

btn.addEventListener("click", function () {
    if (isGreen) {
        text.classList.remove("green");
        text.classList.add("blacktext");
        isGreen = false;
    } else {
        text.classList.remove("blacktext");
        text.classList.add("green");
        isGreen = true;
    }
});