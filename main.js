var password = document.getElementById("password")
  , confirm_password = document.getElementById("confirm_password");

function validatePassword(){
  if(password.value != confirm_password.value) {
    confirm_password.setCustomValidity("Passwords Don't Match");
  } else {
    confirm_password.setCustomValidity('');
  }
}

password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;


function myFunction() {
  var input = document.getElementById("search");
  var filter = input.value.toLowerCase();
  var nodes = document.getElementsByClassName('child');

  for (i = 0; i < nodes.length; i++) {
    if (nodes[i].innerText.toLowerCase().includes(filter)) {
      nodes[i].style.display = "block";
    } else {
      nodes[i].style.display = "none";
    }
  }
}

function openNav() {
  document.getElementById("myNav").style.display = "block";
}

function closeNav() {
  document.getElementById("myNav").style.display = "none";
}

function openAppo() {
  document.getElementById("myAppo").style.display = "block";
}
function closeAppo() {
  document.getElementById("myAppo").style.display = "none";
}



function writeAlert() {
  alert('Booked Successfully');
  alert(document.getElementById('name').value);  // display string message
  alert(document.getElementById('time').value);
  alert(document.getElementById('date').value);
  alert('Thank you!!')

}