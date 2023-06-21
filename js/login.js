function validateLoginForm() {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    const emailError = document.getElementById('login-email-error');
    const passwordError = document.getElementById('login-password-error');
    
    // Email validation
    if (!validateEmail(email)) {
      emailError.textContent = 'Invalid email';
      return false;
    } else {
      emailError.textContent = '';
    }
    
    // Password validation
    if (password.length < 6) {
      passwordError.textContent = 'Password must be at least 6 characters';
      return false;
    } else {
      passwordError.textContent = '';
    }
    
    // Form submission
    // Add your logic here to submit the login form
    return true;
  }
  
  function validateSignupForm() {
    const name = document.getElementById('signup-name').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    const nameError = document.getElementById('signup-name-error');
    const emailError = document.getElementById('signup-email-error');
    const passwordError = document.getElementById('signup-password-error');
    
    // Name validation
    if (name.trim() === '') {
      nameError.textContent = 'Name is required';
      return false;
    } else {
      nameError.textContent = '';
    }
    
    // Email validation
    if (!validateEmail(email)) {
      emailError.textContent = 'Invalid email';
      return false;
    } else {
      emailError.textContent = '';
    }
    
    // Password validation
    if (password.length < 6) {
      passwordError.textContent = 'Password must be at least 6 characters';
      return false;
    } else {
      passwordError.textContent = '';
    }
    
    // Form submission
    // Add your logic here to submit the signup form
    return true;
  }
  
  function validateEmail(email) {
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return emailRegex.test(email);
  }