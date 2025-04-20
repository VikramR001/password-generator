document.addEventListener('DOMContentLoaded', () => {
    const generateBtn = document.getElementById('generateBtn');
    const passwordDisplay = document.getElementById('password-display');
    const errorMessage = document.getElementById('error-message');
    const lengthInput = document.getElementById('length');
    const uppercaseCheckbox = document.getElementById('uppercase');
    const lowercaseCheckbox = document.getElementById('lowercase');
    const numbersCheckbox = document.getElementById('numbers');
    const symbolsCheckbox = document.getElementById('symbols');

    function generatePassword(length, useUppercase, useLowercase, useNumbers, useSymbols) {
        let charset = "";
        if (useUppercase) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        if (useLowercase) charset += "abcdefghijklmnopqrstuvwxyz";
        if (useNumbers) charset += "0123456789";
        if (useSymbols) charset += "!@#$%^&*()_+=-`~[]{};':\",./<>?";

        if (!charset) {
            return ""; // No characters selected
        }

        let password = "";
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * charset.length);
            password += charset.charAt(randomIndex);
        }
        return password;
    }

    generateBtn.addEventListener('click', () => {
        const length = parseInt(lengthInput.value);
        const use_uppercase = uppercaseCheckbox.checked;
        const use_lowercase = lowercaseCheckbox.checked;
        const use_numbers = numbersCheckbox.checked;
        const use_symbols = symbolsCheckbox.checked;

        if (isNaN(length) || length <= 0) {
            errorMessage.textContent = 'Please enter a valid positive number for the password length.';
            passwordDisplay.textContent = '';
            return;
        }

        if (!use_uppercase && !use_lowercase && !use_numbers && !use_symbols) {
            errorMessage.textContent = 'Please select at least one character type.';
            passwordDisplay.textContent = '';
            return;
        }

        const generatedPassword = generatePassword(length, use_uppercase, use_lowercase, use_numbers, use_symbols);
        passwordDisplay.textContent = generatedPassword;
        errorMessage.textContent = '';
    });
});
