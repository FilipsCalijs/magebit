document.addEventListener('DOMContentLoaded', () => {

    const emailInput = document.getElementById('reg-email');
    const passwordInput = document.getElementById('reg-password');
    const confirmInput = document.getElementById('reg-password-confirm');
    const firstInput = document.getElementById('firstname');
    const lastInput = document.getElementById('lastname');

    const emailError = document.getElementById('error-email');
    const passwordError = document.getElementById('error-password');
    const confirmError = document.getElementById('error-password-confirm');
    const firstError = document.getElementById('error-firstname');
    const lastError = document.getElementById('error-lastname');

    const regFormMessage = document.createElement('div');
    regFormMessage.className = 'text-red-500 text-sm mt-2';
    regFormMessage.id = 'form-message';
    const regForm = document.getElementById('customer-register-form');
    if(regForm) regForm.appendChild(regFormMessage);

    function validateEmail() {
        const value = emailInput.value.trim();
        let message = '';
        if (!value) message = 'Email address is required';
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) message = 'Please provide a valid e-mail address';
        emailError.textContent = message;
        return message === '';
    }

    function validatePassword() {
        const value = passwordInput.value.trim();
        let message = '';
        if (!value) message = 'Password is required';
        else if (value.length < 8) message = 'The password must be at least 8 characters.';
        else if (!/[A-Za-z]/.test(value)) message = 'The password must contain at least one letter.';
        else if (!/\d/.test(value)) message = 'The password must contain at least one number.';
        passwordError.textContent = message;
        return message === '';
    }

    function validateConfirm() {
        const password = passwordInput.value;
        const confirm = confirmInput.value;
        let message = '';
        if (!confirm) message = 'Please confirm your password';
        else if (password !== confirm) message = 'This field value must be the same as "Password".';
        confirmError.textContent = message;
        return message === '';
    }

    function validateFirstName() {
        const value = firstInput.value.trim();
        const message = value ? '' : 'First name is required';
        firstError.textContent = message;
        return message === '';
    }

    function validateLastName() {
        const value = lastInput.value.trim();
        const message = value ? '' : 'Last name is required';
        lastError.textContent = message;
        return message === '';
    }

    function validateAll() {
        const emailValid = validateEmail();
        const passwordValid = validatePassword();
        const confirmValid = validateConfirm();
        const firstValid = validateFirstName();
        const lastValid = validateLastName();
        return emailValid && passwordValid && confirmValid && firstValid && lastValid;
    }

    emailInput && emailInput.addEventListener('blur', validateEmail);
    passwordInput && passwordInput.addEventListener('blur', validatePassword);
    confirmInput && confirmInput.addEventListener('blur', validateConfirm);
    firstInput && firstInput.addEventListener('blur', validateFirstName);
    lastInput && lastInput.addEventListener('blur', validateLastName);

    regForm && regForm.addEventListener('submit', function(e) {
        regFormMessage.textContent = '';
        const isValid = validateAll();
        if (!isValid) {
            e.preventDefault();
            regFormMessage.textContent = 'Please fix the errors above before continuing';
        }
    });

    // Логин
    const loginEmail = document.getElementById('email');
    const loginPass = document.getElementById('pass');
    const loginForm = loginEmail ? loginEmail.closest('form') : null;
    const loginFormMessage = document.createElement('div');
    loginFormMessage.className = 'text-red-500 text-sm mt-2';
    loginFormMessage.id = 'login-form-message';
    if(loginForm) loginForm.appendChild(loginFormMessage);

    function validateLoginEmail() {
        const value = loginEmail.value.trim();
        let message = '';
        if (!value) message = 'Email address is required';
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) message = 'Please provide a valid e-mail address';
        return message;
    }

    function validateLoginPassword() {
        const value = loginPass.value.trim();
        let message = '';
        if (!value) message = 'Password is required';
        return message;
    }

    loginForm && loginForm.addEventListener('submit', function(e) {
        const emailMsg = validateLoginEmail();
        const passMsg = validateLoginPassword();
        if (emailMsg || passMsg) {
            e.preventDefault();
            loginFormMessage.textContent = emailMsg || passMsg;
        } else {
            loginFormMessage.textContent = '';
        }
    });

    // Show/Hide Password
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
