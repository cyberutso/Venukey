const passwordBox = document.getElementById("password");
const length = 12; // Length of the password

// Character sets to include
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "@#$%^&*()_+~|}{[]><!/-=";

const allChars = upperCase + lowerCase + number + symbol;

function createPassword() {
    let password = "";
    
    // Ensure at least one of each type exists for security
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];

    // Fill the rest of the length with random characters
    while(length > password.length) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    
    passwordBox.value = password;
}

function copyPassword() {
    // Select the text field
    passwordBox.select();
    passwordBox.setSelectionRange(0, 99999); // For mobile devices

    // Copy to clipboard
    navigator.clipboard.writeText(passwordBox.value);

    // Optional: visual feedback
    alert("Password copied to clipboard!");
}