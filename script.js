// prompt asking 

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button

generateBtn.addEventListener("click", function(){prompt("How many characters do you want your password to be? min - 8, max - 128");});

// generateBtn.addEventListener("click", writePassword);
