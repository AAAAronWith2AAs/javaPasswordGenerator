// Assignment Code
var generateBtn = document.querySelector("#generate");

//All characters user can choose
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var nmCharacters = "0123456789";
var spCharacters = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword());

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  console.log("click");
}

function passwordOptions() {
  var characterSize = parseInt(
    prompt("How many characters would you like? (8-128)")
  );
  var optionSpCharacters = confirm(
    "Would you like special characters? Click ok"
  );
  var optionNumbers = confirm("Would you like Numbers? Click ok");
  var optionUpperCase = confirm("Would you like Upper Case? Click ok");
  var optionLowerCase = confirm("Would you like Lower Case? Click ok");
  var myPasswordOptions = {
    length: characterSize,
    specialCharacters: optionSpCharacters,
    numericCharacters: optionNumbers,
    lowerCaseCharacters: optionLowerCase,
    upperCaseCharacters: optionUpperCase,
  };
  console.log(myPasswordOptions);
  return myPasswordOptions;
}

function generatePassword() {
  options = passwordOptions();
  var allPasswordOptions = "";
  var password = "";

  //conditional
  if (options.specialCharacters) {
    allPasswordOptions += spCharacters;
  }
  if (options.numericCharacters) {
    allPasswordOptions += nmCharacters;
  }
  if (options.lowerCaseCharacters) {
    allPasswordOptions += lowerCase;
  }
  if (options.upperCaseCharacters) {
    allPasswordOptions += upperCase;
  }

  for (var i = 0; i < options.length; i++) {
    password += allPasswordOptions.charAt(
      Math.floor(Math.random() * allPasswordOptions.length)
    );
    console.log(password);
  }
  return password;

  console.log(allPasswordOptions);
}
