let textuser = "";
auth.onAuthStateChanged((user) => {
  if (user) {
    console.log("logged_in");
    console.log(user.email);
    // textuser = user.uid;
    getName(user.uid)

    console.log(user.uid);
    user.textContent = user;
    //   section.style.display = "none";
    //   submit.style.display = "inline";
    //   logoutbutton.style.display = "inline";
  } else {
    console.log("logged_out");
    console.log("no data");
    //   section.style.display = "inline-block";
    //   submit.style.display = "none";
    //   logoutbutton.style.display = "none";
  }
});


function getName(uid) {
    db.collection('users').doc(uid)
.get()
.then(function(doc) {
  if (doc.exists) {
    console.log("Document data:", doc.data().Userinfo.user_name);

    textuser = doc.data().Userinfo;
    
    const docname = document.getElementById("name");
    docname.textContent = textuser.user_name;
    // renderTitle(doc);
  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
  }
}).catch(function(error) {
  console.log("Error getting document:", error);
});
}