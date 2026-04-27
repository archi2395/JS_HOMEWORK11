const text = document.querySelector("#text");
const btn = document.querySelector("#btn");

btn.addEventListener("click", function () {
    text.classList.toggle("green");
    text.classList.toggle("blacktext");
});