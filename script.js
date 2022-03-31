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

generateBtn.addEventListener("click", passwordQuestions);

function passwordQuestions() {
  var passwordLength = prompt ("How many characters do you want your password to be? min - 8, max - 128");
  if (passwordLength >= 8 && passwordLength <= 128) {
    return passwordLength;
  } else {
    return prompt("Please enter within the range of 8 - 128.");
  }
}

function passwordQuestions() {
  var passwordLength = prompt ("How many characters do you want your password to be? min - 8, max - 128");
  if (passwordLength >= 8 && passwordLength <= 128) {
    return passwordLength;
  } else {
    return prompt("Please enter within the range of 8 - 128.");
  }
}

// var promptQuestion {
//   lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz",
//   upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
//   specialCharacters = " !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
// }



// if (passwordLength >= 8 && passwordLength <= 128) {
//   return passwordLength;
// } else {
//   return prompt("Please enter within the range of 8 - 128.");
// }


// generateBtn.addEventListener("click", writePassword);
