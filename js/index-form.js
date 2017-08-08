// открытие/закрытие формы
var link = document.querySelector("section .button-hotels");
var popup = document.querySelector(".form-index");
var date = popup.querySelector("[name=date-in]");

link.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.toggle("active");
    date.focus();
 });