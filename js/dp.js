var cl = new cloudinary.Cloudinary({cloud_name: "wishmalokaya", secure: true});


function upload() {
    cloudinary.uploader().upload(new File("https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg"),
  ObjectUtils.asMap("public_id", "olympic_flag"));
}

// upload()