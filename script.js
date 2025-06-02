document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("registrationForm");

  document.querySelector(".fade-in")?.classList.add("visible");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const fullName = document.getElementById("fullName").value;

    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const fullNamePattern = /^[a-zA-Z\s]+$/;
    const allowedPattern = /^[a-zA-Z0-9!@#$%^&*()_+=\-]+$/;

     if (!fullNamePattern.test(fullName)) {
      alert("Full Name can only contain letters and spaces.");
      return;
    }
    
    if (!allowedPattern.test(password)) {
      alert("Password contains invalid characters.\nAllowed: letters, numbers, !@#$%^&*()_+=-");
      return;
    }
    

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    alert("Registration successful!");
  });
});
