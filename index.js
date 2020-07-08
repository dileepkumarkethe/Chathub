
//js code for modal of pop of signin and sign up
var modal = document.getElementsByClassName("modal")[0];
var modal1 = document.getElementsByClassName("modal")[1];

// js code for button that opens the modal
var button = document.getElementsByClassName("topBtn")[1];
var button1 = document.getElementsByClassName("topBtn")[0];

// js code for <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
var span1 = document.getElementsByClassName("close")[1];

// When user  clicks on  button, opening would be the modal 
button.onclick = function() {
  modal.style.display = "block";
}
button1.onclick = function() {
  modal1.style.display = "block";
}

// When the user clicks on <span> (x), closing the modal
span.onclick = function() {
  modal.style.display = "none";
}
span1.onclick = function() {
  modal1.style.display = "none";
}


// When the user clicks anywhere outside the modal,closes the modal

modal.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
modal1.onclick = function(event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
  }
}
function remove()
{
  modal2.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
  }
}


var show = document.getElementsByClassName("sign")[0];
show.onclick = function()
{
  modal1.style.display = "block";
  modal.style.display = "none";
}
