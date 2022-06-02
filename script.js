var generateBtn = document.querySelector("#generate");

var upperCaseLetters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var lowerCaseLetters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var specialCharacters = [
  " ",
  "!",
  "'",
  "(",
  "$",
  ")",
  "*",
  "+",
  "-",
  "&",
  "#",
  "/",
  ":",
  "%",
  ";",
  "<",
  "=",
  ">",
  "?",
  "@",
  "[",
  "^",
  "_",
  "`",
  "{",
  "|",
  "}",
  "~",
];
var finalPassword = "";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  var lengthPromptAnswer = prompt(
    "How many characters would you like? min - 8, max - 128"
  );
  if (lengthPromptAnswer >= 8 && lengthPromptAnswer <= 128) {
    console.log(lengthPromptAnswer);
  } else if (lengthPromptAnswer >= 8 && lengthPromptAnswer <= 128) {
    prompt("Please select within the range. 8 - 128");
  } else {
    generatePassword();
  }
  var upperCaseAnswer = confirm("Do you want uppercase letters?");
  var lowerCaseAnswer = confirm("Do you want lowercase letters?");
  var numbersAnswer = confirm("Do you want numbers?");
  var specialCharactersAnswer = confirm("Do you want special characters?");

  if (
    !upperCaseAnswer &&
    !lowerCaseAnswer &&
    !numbersAnswer & !specialCharactersAnswer
  ) {
    alert("Please choose one password criteria.");
    return generatePassword();
  }

  var password = [];
  if (lowerCaseAnswer) {
    password = password.concat(lowerCaseLetters);
  }
  if (upperCaseAnswer) {
    password = password.concat(upperCaseLetters);
  }
  if (numbersAnswer) {
    password = password.concat(numbers);
  }
  if (specialCharactersAnswer) {
    password = password.concat(specialCharacters);
  }

  for (var i = 0; i < lengthPromptAnswer; i++) {
    finalPassword =
      finalPassword + password[Math.floor(Math.random() * password.length)];
  }
  return finalPassword;
}
