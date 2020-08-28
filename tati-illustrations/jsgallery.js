
var modal = document.getElementById("galleryModal");
var captionText = document.getElementById("caption");
// Get the button that opens the modal
const galleryPieces=document.querySelectorAll('div.view');
galleryPieces.forEach((piece) => {
console.log(piece)
const modalImg = document.getElementById('modal-Image');
piece.onclick= function(e){
// When the user clicks on the button, open the modal
  modal.style.display = "block";
  //Get imgsrc from piece to show in modal
  const pieceImg = e.currentTarget.querySelector('img');
  const imgPath = pieceImg.src;
  modalImg.src= imgPath;
  captionText.innerHTML = this.alt;
};
});

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];



// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
