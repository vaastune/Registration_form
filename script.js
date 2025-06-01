document.getElementById("registrationForm").addEventListener("submit", function (e) {
  e.preventDefault(); 

  const password = document.getElementById("password").value;
  const confirm = document.getElementById("confirmPassword").value;

  if (password !== confirm) {
    alert("Passwords do not match!");
  } else {
    alert("Registration successful!");

  }

  
});
