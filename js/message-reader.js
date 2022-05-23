const display = document.getElementById("reader");
let message = [];
let content = [];
var contentli = "";
// var prototype = [["this is a pilot massage", "trbhgbrthbgrtg" , "rtgnrtughrugtrt", "rtughruthgrt"],["names", "names", "names", "names"]]

db.collection("Messages")
  .get()
  .then(function (querySnapshot) {
    querySnapshot.forEach(function (doc) {
      if (doc) {
        console.log("Document data:", doc.data());
        message.push(doc.data());
        // refreshTable();
        // console.log(message);
        // content.push(doc.data().content)
        // console.log(content);
        // renderTitle(doc);
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    });
  })
  .catch(function (error) {
    console.log("Error getting document:", error);
  })
  .then(refreshTable);
// });

// refreshTable()

function refreshTable() {
  var myTable = "<div>";
  var perrow = 1;

  message.forEach((value, i) => {
    // console.log(Array.from(content));
    // console.log(value.content);
    // "NORMAL" CELL
    console.log(value);
    myTable += `<h1>${value.from}</h1>`;
    list(value.content);
    myTable += contentli;

    var next = i + 1;
    if (next % perrow == 0 && next != message.length) {
      myTable += "</tr><tr>";
    }
  });

  // (C3) CLOSE THE TABLE STRING
  myTable += "</div>";

  // (D) ATTACH HTML TO CONTAINER
  document.getElementById("reader").innerHTML = myTable;
}

function list(con) {
  contentli = "<ul>";
  // console.log(con);
  con.forEach((value, i) => {
    content.push(value);
    readcontent();
  });
}

function readcontent() {
  content.forEach((value, i) => {
    console.log(value);
    contentli += `<li>${value}</li>`;
    // contentli += `<li>${value}</li>`
  });
  contentli += "</ul>";
  content = [];
}


