// Form validation and alert message
document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    if (email === "" || password === "") {
      alert("Please fill out all fields.");
    } else {
      alert(Welcome back, ${email}!);
      // Add your authentication logic here
    }
  });