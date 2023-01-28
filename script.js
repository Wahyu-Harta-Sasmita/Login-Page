// This is a basic example, you'll likely want to add more functionality
// such as validating the form and sending a request to a server.
document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();
    let username = document.querySelector("#username").value;
    let password = document.querySelector("#password").value;
    if (username === "admin" && password === "password") {
      alert("Login successful!");
      window.location = "h.html";
    } else {
      alert("Invalid username or password.");
    }
  });
