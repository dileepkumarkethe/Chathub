// Get the modal
var modalThree = document.getElementsByClassName("modalThree")[0];

// Get the button that opens the modal
var button3 = document.getElementsByClassName("fa fa-trash")[0];
var button4 = document.getElementsByClassName("fa fa-trash")[1];
var button5 = document.getElementsByClassName("fa fa-trash")[2];
var button6 = document.getElementsByClassName("fa fa-trash")[3];
var button7 = document.getElementsByClassName("fa fa-trash")[4];
// When the user clicks on the button, open the modal 
button3.onclick = function() {
  modalThree.style.display = "block";
}
button4.onclick = function() {
  modalThree.style.display = "block";
}
button5.onclick = function() {
  modalThree.style.display = "block";
}
button6.onclick = function() {
  modalThree.style.display = "block";
}
button7.onclick = function() {
  modalThree.style.display = "block";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modalThree.style.display = "none";
  }
}
function remove()
{
  modalThree.style.display = "none";
}
