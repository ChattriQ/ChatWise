document.getElementById('signupForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
  
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
  
    // Success message (you can replace it with real backend code later)
    alert('Sign Up Successful!');
  });
  