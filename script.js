// Function to generate a password based on selected criteria
function generatePassword() {
  // Prompt for password length
  var lengthInput = prompt("Enter password length (8-128):");
  var length = parseInt(lengthInput);

  // Check if the input is a valid number and within the specified range
  if (isNaN(length) || length < 8 || length > 128) {
    alert("Invalid input! Password length must be between 8 and 128 characters.");
    return "";
  }

  // Confirm character types
  var lowercase = confirm("Include lowercase letters?");
  var uppercase = confirm("Include uppercase letters?");
  var numeric = confirm("Include numeric characters?");
  var special = confirm("Include special characters?");

  // Define character sets based on selected criteria
  var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numericChars = "0123456789";
  var specialChars = "!@#$%^&*()_+~`|}{[]\\:;?><,./-=";

  // Initialize the characters variable to include uppercase and lowercase letters
  var characters = lowercaseChars + uppercaseChars;

  // Check which confirmations are true and add corresponding character sets
  if (numeric) {
    characters += numericChars;
  }
  if (special) {
    characters += specialChars;
  }

  // Generate the password
  var password = "";
  for (var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * characters.length);
    password += characters.charAt(randomIndex);
  }

  return password;
}

// Get references to the #generate element and checkboxes
var generateBtn = document.querySelector("#generate");

// Add an event listener to the Generate Password button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
