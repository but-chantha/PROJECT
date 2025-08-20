document.getElementById("signinForm").addEventListener("submit", function(event) {
      event.preventDefault(); // stop page reload

      // Get values from inputs
      const userName = document.getElementById("userName").value;
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;
      const address = document.getElementById("address").value;

      // Show received data
      console.log("User-Name:",userName,"Email:", email, "Password:", password,"Address:",address);
});