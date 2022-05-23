var dplink = "";

function dpUpload() {
    var myWidget = cloudinary.createUploadWidget({
        cloudName: 'wishmalokaya', 
        uploadPreset: 'system14'}, (error, result) => { 
          if (!error && result && result.event === "success") { 
            console.log('Done! Here is the image info: ', result.info.url); 
            dplink = result.info.url;
          }
        }
      )
      
      document.getElementById("upload_widget").addEventListener("click", function(){
          myWidget.open();
        }, false);
}
