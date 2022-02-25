var span = document.getElementById("close")
var modal = document.getElementById("model")

var btn = document.getElementById("myBtn")

btn.onclick = function() {
    modal.style.display = "block"
}


function closeModal() {
    modal.style.display = "none";
}
span.onclick = function() {
    closeModal();
};