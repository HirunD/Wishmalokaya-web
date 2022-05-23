function initSign() {
  const email = "hirundwickramasinghe@gmail.com";
  const pasword = "Sshirun123";

  //sign up user
  auth
    .signInWithEmailAndPassword(email, pasword)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(userCredential);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
}

function logOut() {
  auth.signOut();
}
