// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  return;
}

//All characters user can choose
var lowerCase = ["abcdefghijklmnopqrstuvwxyz"];
var upperCase = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var nmCharacters = ["0123456789"];
var spCharacters = ["!#$%&'()*+,-./:;<=>?@[]^_`{|}~"];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
