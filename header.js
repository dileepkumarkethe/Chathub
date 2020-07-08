
// Get the modal
var mdl = document.getElementsByClassName("mdl")[0];
var mdl1 = document.getElementsByClassName("mdl")[1];
// Get the button that opens the modal
var btn = document.getElementsByClassName("topBtn")[1];
var btn1 = document.getElementsByClassName("topBtn")[0];
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("closeOne")[0];
var span1 = document.getElementsByClassName("closeOne")[1];


// When the user clicks on the button, open the modal 

btn1.onclick = function() {
  mdl1.style.display = "block";
}
btn.onclick = function() {
  mdl.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  mdl.style.display = "none";
}
span1.onclick = function() {
  mdl1.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it

mdl.onclick = function(event) {
  if (event.target == mdl) {
    mdl.style.display = "none";
  }
}
window.onclick = function(event) {
  if (event.target == mdl1) {
    mdl1.style.display = "none";
  }
}

var show = document.getElementsByClassName("sign")[0];
show.onclick = function()
{
  mdl1.style.display = "block";
  mdl.style.display = "none";
}

