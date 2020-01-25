// When the user clicks the button, open the modal 
function openModal(ele) {
  window.eleId = ele.id;  
  var selectedModal = document.getElementById("myModal"+eleId);
  console.log(eleId)
  selectedModal.style.display = "block";
  selectedModal.scrollIntoView();
}

// When the user clicks on <span> (x), close the modal
function closeModal() {
  var modal = document.getElementById("myModal"+window.eleId);  
  modal.style.display = "none";
  console.log("closed modal");
  document.body.scrollTop = 0;
//   document.documentElement.scrollTop = 0;
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == document.getElementById("myModal"+window.eleId)) {
    var modal = document.getElementById("myModal"+window.eleId); 
    modal.style.display = "none";
    document.body.scrollTop = 0;

  }
}

function preventCache(){
  var _theframe = document.getElementById("videoContent");
  _theframe.contentWindow.location.href = _theframe.src;

}