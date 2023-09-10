// Get references to the #generate element and checkboxes
var generateBtn = document.querySelector("#generate");
var lowercaseCheckbox = document.querySelector("#lowercase");
var uppercaseCheckbox = document.querySelector("#uppercase");
var numericCheckbox = document.querySelector("#numeric");
var specialCheckbox = document.querySelector("#special");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Function to generate a password based on selected criteria
function generatePassword() {
  // Define character sets based on selected criteria
  var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numericChars = "0123456789";
  var specialChars = "!@#$%^&*()_+~`|}{[]\:;?><,./-=";

  // Initialize the characters variable to include uppercase and lowercase letters
  var characters = lowercaseChars + uppercaseChars;

  // Check which checkboxes are selected and add corresponding character sets
  if (numericCheckbox.checked) {
    characters += numericChars;
  }
  if (specialCheckbox.checked) {
    characters += specialChars;
  }

  // Get the desired password length from the length input
  var length = parseInt(document.querySelector("#length").value);

  // Generate the password
  var password = "";
  for (var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * characters.length);
    password += characters.charAt(randomIndex);
  }

  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
