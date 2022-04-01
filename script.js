// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  var lengthPromptAnswer = prompt ("How many characters would you like? min - 8, max - 128");
  var upperCaseAnswer = confirm ("Do you want uppercase letters?");
  var lowerCaseAnswer = confirm ("Do you want lowercase letters?");
  var numbersAnswer = confirm ("Do you want numbers?");
  var specialCharactersAnswer = confirm ("Do you want special characters?");
  var upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
  var numbers = 1234567890;
  var specialCharacters = " !'($)*+,-.&#/:%;<=>?@[\]^_`{|}~";
  var passwordCharacters = [];
  if (lengthPromptAnswer >= 8 && lengthPromptAnswer <= 128) {
    console.log(lengthPromptAnswer);
  } else {
    prompt ("Please select within the range. 8 - 128")
  }

  if (lengthPromptAnswer === true) {
    console.log(lengthPromptAnswer)
  }

  if (upperCaseAnswer === true) {
    passwordCharacters.push("ABCDEFGHIJKLMNOPQRSTUVWXYZ")
  }

  if (lowerCaseAnswer === true) {
    passwordCharacters.push("abcdefghijklmnopqrstuvwxyz")
  }

  if (numbersAnswer === true) {
    passwordCharacters.push("1234567890")
  }

  if (specialCharactersAnswer === true) {
    passwordCharacters.push(" !'($)*+,-.&#/:%;<=>?@[\]^_`{|}~")
  }

  

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword(){
  //return passwordCharacters[Math.floor(Math.random() * lengthPromptAnswer.length)]
}
