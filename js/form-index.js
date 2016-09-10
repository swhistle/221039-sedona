var link = document.querySelector("section .button-hotels");
var popup = document.querySelector(".form-index");

link.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.toggle("form-index-show");
});