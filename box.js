var numberOfClicks=0;
function postLiked(){
    document.getElementById("lykBlg").innerHTML = "<i class='fa fa-thumbs-up'></i> Liked!";
    numberOfClicks += 1;
    if(numberOfClicks!==0){
        if (numberOfClicks==1){
            document.getElementById('cmntCounting').innerHTML = numberOfClicks + " person likes this!";
        }
        else {
            document.getElementById('cmntCounting').innerHTML = numberOfClicks + " people have liked this!";
        }
        }
    }
    var noOfClicks=0;

function savePost()
{
    noOfClicks += 1;
    var x = document.getElementById("blogBody");
    var y = document.getElementById("blogTitleNew")
    if(noOfClicks%2!=0)
    {
      document.getElementById("edit").innerHTML = "Save <i class='fa fa-save'></i>";
      x.contentEditable="true";
      y.contentEditable="true";

    }
    else if(noOfClicks%2==0)
    {
        document.getElementById("edit").innerHTML = "Edit <i class='fa fa-pencil-square-o'></i>";
        x.contentEditable="false";
        y.contentEditable="false";
    }
   
}
function addComments(id){
    var addEventName = id.value +'<br>';
    var a = document.getElementById('userComments');
    document.getElementById('addEventNames').innerHTML = '<p>'+addEventName+'</p>'+document.getElementById('addEventNames').innerHTML;          
    a.value=a.defaultValue;
}
