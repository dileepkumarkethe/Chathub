var modal2 = document.getElementsByClassName("modal")[0];
var button2 = document.getElementById("createPost");
var span2 = document.getElementsByClassName("close")[0];
button2.onclick = function(){
  modal2.style.display = "block";
}
span2.onclick = function()
{
  modal2.style.display = "none";
}
modal2.onclick = function(event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
}
function remove()
{
  modal2.style.display = "none";
}

