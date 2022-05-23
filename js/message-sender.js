var link = document.getElementById("link-in");
var filename = document.getElementById("name-in");
var btn = document.getElementById("submbtn");
var sbtn = document.getElementById('sendbtn')
var links = [];

const d = new Date();
var time = d.getHours()+ ":" + d.getMinutes();

btn.addEventListener('click', function () {
    console.log(link.value);
    links.push(link.value + " - " + filename.value);
    console.log(links);
    link.focus();
    link.value = "";
    filename.value = "";
})


link.addEventListener('keypress', function(event) {
    if (event.code === 'Enter') {
        filename.focus();
    }
})
filename.addEventListener('keypress', function(event) {
    if (event.code === 'Enter') {
        btn.click();
    }
})


sbtn.addEventListener('click', function () {
    setMessage();
})

function setMessage() {
    var mcode = "w" + d.getDate() +"." +d.getHours()+":" + d.getMinutes();
    db.collection('Messages').doc(mcode).set({
    content: firebase.firestore.FieldValue.arrayUnion.apply(this, links),
    from : textuser.user_name,
    to : textuser.organization
  });
}

