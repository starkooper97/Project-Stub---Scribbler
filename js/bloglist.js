$(".close-icon").on("click", function () {
  $(this).closest(".card").fadeOut();
});
// $('iconfun').on('click',function(){
//   alert('hello');
// })
function openForm() {
  document.getElementById("formup").style.display = "block";
}

// Get the modal
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

function funn() {
  alert("hello ji");
}
