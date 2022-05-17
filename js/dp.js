// // {/* <button id="upload_widget" class="cloudinary-button">Upload files</button> */}

// // {/* <script src="https://upload-widget.cloudinary.com/global/all.js" type="text/javascript"></script>   */}

// // {/* <script type="text/javascript">   */}
// var myWidget = cloudinary.createUploadWidget({
//   cloudName: 'wishmalokaya', 
//   uploadPreset: 'wishmalokaya'}, (error, result) => { 
//     if (!error && result && result.event === "success") { 
//       console.log('Done! Here is the image info: ', result.info); 
//     }
//   }
// )

// document.getElementById("upload_widget").addEventListener("click", function(){
//     myWidget.open();
//   }, false);
// // </script>

// var date = new getDate();
const d = new Date();
console.log(d.getDate()+":" + d.getMonth()+":" + d.getFullYear() + " " + d.getHours() + ":" + d.getMinutes() + "." + d.getSeconds());