document.getElementById("signinForm").addEventListener("submit", function(event) {
      event.preventDefault(); // stop page reload

      // Get values from inputs
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;

      // Show received data
      console.log("Email:", email, "Password:", password);
});