document.addEventListener('DOMContentLoaded', () => {
  
    const emailInput = document.getElementById('reg-email');
    const emailError = document.getElementById('error-email');

    const passwordInput = document.getElementById('reg-password');
    const confirmInput = document.getElementById('reg-password-confirm');
    const confirmError = document.getElementById('error-password-confirm');

    const form = emailInput.closest('form');

    function validateEmail() {
        const value = emailInput.value.trim();
        let message = '';
        if (!value) message = 'Email address is required';
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) message = 'Please provide a valid e-mail address';
        emailError.textContent = message;
        return message === '';
    }

    function validateConfirm() {
        const password = passwordInput.value;
        const confirm = confirmInput.value;
        let message = '';
        if (confirm && password !== confirm) message = 'This field value must be the same as "Password".';
        confirmError.textContent = message;
        return message === '';
    }

    function validateAll() {
        const emailValid = validateEmail();
        const confirmValid = validateConfirm();
        return emailValid && confirmValid;
    }

    emailInput.addEventListener('blur', validateEmail);
    confirmInput.addEventListener('blur', validateConfirm);

    form.addEventListener('submit', function(e) {
        if (!validateAll()) {
            e.preventDefault();
            console.log("Verification failed: errors present");
        } else {
            console.log("Verification succeeded");
        }
    });

    const passwordFields = document.querySelectorAll('input[type="password"]');

    passwordFields.forEach(passwordField => {
        
        const toggleIcon = passwordField.parentElement.querySelector('[aria-label="Show Password"]');
        if (!toggleIcon) return; 

        toggleIcon.addEventListener('click', () => {
            const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordField.setAttribute('type', type);

           
            const svg = toggleIcon.querySelector('svg');
            if (svg) {
                if (type === 'text') svg.setAttribute('fill', '#1f2937'); 
                else svg.setAttribute('fill', 'currentColor'); 
            }
        });
    });
});
