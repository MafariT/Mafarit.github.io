function uploadFile() 
{
    var input = document.getElementById("fileInput");
    var fileList = input.files;
    var imageList = document.getElementById("imageList");
    for (var i = 0; i < fileList.length; i++) 
    {
          var file = fileList[i];
          var image = document.createElement("img");
          image.src = URL.createObjectURL(file);
          image.style.width = "35%";
         image.style.height = "35%";
          imageList.appendChild(image);
    }   
}