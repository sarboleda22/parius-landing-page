// Get the modal
var modal = document.getElementById('myModal');
var successModal = document.getElementById('mySuccessModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");
var btn2 = document.getElementById("myBtn2");
var btn3 = document.getElementById("myBtn3");
var btn4 = document.getElementById("myBtn4");
var btn5 = document.getElementById("myBtn5");
var btn6 = document.getElementById("myBtn6");
var btn7 = document.getElementById("myBtn7");
var btn8 = document.getElementById("myBtn8");
var btn9 = document.getElementById("myBtn9");
var btn10 = document.getElementById("myBtn10");
var btn11 = document.getElementById("myBtn10");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
var span2 = document.getElementsByClassName("close")[1];

// When the user clicks on the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}
btn2.onclick = function() {
    modal.style.display = "block";
}
btn3.onclick = function() {
    modal.style.display = "block";
}
btn4.onclick = function() {
    modal.style.display = "block";
}
btn5.onclick = function() {
    modal.style.display = "block";
}
btn6.onclick = function() {
    modal.style.display = "block";
}
btn7.onclick = function() {
    modal.style.display = "block";
}
btn8.onclick = function() {
    modal.style.display = "block";
}
btn9.onclick = function() {
    modal.style.display = "block";
}
btn10.onclick = function() {
    modal.style.display = "block";
}
btn11.onclick = function() {
    modal.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

span2.onclick = function() {
  successModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal || event.target == successModal) {
        modal.style.display = "none";
        successModal.style.display = "none";
    }
}

// Success Modal after inputting info in form
$('#registrationForm').on('submit', function(e){
  successModal.style.display = "block";
});
$('#registrationForm').on('submit', function() {
  modal.style.display = "none";
});
