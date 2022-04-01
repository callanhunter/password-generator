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
  if (lengthPromptAnswer >= 8 && lengthPromptAnswer <= 128) {
    console.log(lengthPromptAnswer);
  } else {
    prompt ("Please select within the range. 8 - 128")
  }

  if (lengthPromptAnswer === true) {
    console.log(lengthPromptAnswer)
  }

  if (upperCaseAnswer === true) {
    console.log(upperCaseLetters)
  }

  if (lowerCaseAnswer === true) {
    console.log(lowerCaseLetters)
  }

  if (numbersAnswer === true) {
    console.log(numbers)
  }

  if (specialCharactersAnswer === true) {
    console.log(specialCharacters)
  }

  passwordText.value = password;//this will write to page

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword(){
  // THEN I am presented with a series of prompts for password criteria
    //issue prompts to user
      //prompted for the length
        //at least 8 characters and no more than 128 characters
      //asked for character type
        // confirm whether or not to include lowercase, 
        // uppercase, 
        // numeric, 
        // and/or special characters
      //Input should be validated 
        //at least one character type should be selected
      //a password is generated that matches the selected criteria
        //How?
};
