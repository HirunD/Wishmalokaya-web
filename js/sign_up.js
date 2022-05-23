const signupform = document.querySelector("#details-in");
const email = signupform.email.value;
const password = signupform.name.value;


signupform.addEventListener('submit',(e) =>{
  e.preventDefault();

  const email = signupform['email'].value;
  const password = signupform['password'].value;

  //sign up user
  auth
  .createUserWithEmailAndPassword(email, password)
  .then((cred) => {
    db.collection("users")
      .doc(cred.user.uid)
      .set({
        Userinfo: {
          name: signupform["name"].value,
          user_name: signupform["user_name"].value,
          organization : signupform["organization"].value,
          profilePic : dplink,
          user_status : "pending"
        },
      });
      console.log("sucess");
    // signupform.name.value = "";
    // signupform.signup_email.value = "";
    // signupform.signup_password.value = "";
    // Signed in
    const user = cred.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
});





