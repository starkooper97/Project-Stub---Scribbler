function addp() {
  console.log("Hello!");
  var t = document.createElement("p");
  t.innerHTML = document.getElementById("w3review").innerHTML;
  document.getElementById("forpara").appendChild(t);
  // const parent = document.getElementById('forpara');
  // console.log(parent);
  // const para = document.createElement('p');
  // parent.appendChild(para);
  // para.innerText = "hello";
  // var g = document.getElementById('forpara');
}

var modal = document.getElementById("id01");

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

var modal = document.getElementById("id01");

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

function edit() {
  document.getElementById("paraedit").contentEditable = true;
  var f = document.getElementById("savebtn");
  if (f.innerHTML === "save") {
    document.getElementById("paraedit").contentEditable = false;
  } else {
    var f = document.getElementById("savebtn");
    f.innerHTML = "save";
  }
}

var i = 0;
function likee() {
  var g = document.getElementById("lkbnn");
  g.innerText = "liked!";
  var f = document.getElementById("likepara");
  i++;
  if (i == 1) {
    f.innerHTML = "1 person likes this!";
  } else {
    f.innerHTML = i + " " + "people have liked this!";
  }
}
