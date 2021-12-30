const btn = document.querySelector(".icon");
const input = document.querySelector(".search");
btn.addEventListener("click", function() {
    input.classList.toggle("active");
    input.focus();
})