// Assignment code here

//List of variables
// Clear console after refresh
// console.clear();

var generateBtn = document.querySelector("#generate");
var passwordLength;
var lowerCase;
var upperCase;
var specialCharacters;
var uppercaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercaseCharacters = "abcdefghijklmnopqrstuvwxyz";
var lowercaseCharactersLength = lowercaseCharacters.length;
var uppercaseCharactersLength = uppercaseCharacters.length;  
var numericCharacters = "1234567890";
var specialCharacters = "!@#$%^&*()_";
var passwordSource = "";
var randomCharacters = "";
var finalPassword = "";  


  // Asking the user to choose a password between 8 - 128 character length
  function generatePassword() {
passwordSource = "";
finalPassword = "";
passwordLength = prompt("How many characters would you like in the password (Must be a number between 8-128)");
  while (passwordLength < 8 || passwordLength >128){
    alert ("Must be a number between 8-128")
    passwordLength = prompt("How many characters would you like in the password (Must be a number between 8-128)");
  }
 
 // ask user to confirm whether or not to include lower characters
  var pwLowCaseChoice = confirm("Would you like to include at least 1 lowercase?");
  if (pwLowCaseChoice == true) {
    passwordSource += lowercaseCharacters;
    console.log(passwordSource)
  }

  if (pwLowCaseChoice == false){
    console.log(passwordSource + "false")
  }

  // ask user to confirm whether or not to include uppercase characters
  var pwUpCaseChoice = confirm("Would you like to include at least 1 UPPERCASE?");
  if (pwUpCaseChoice == true) {
    passwordSource += uppercaseCharacters;
    console.log(passwordSource)
  }

  if (pwUpCaseChoice == false){
    console.log(passwordSource + "false")
  }

  // ask user to confirm whether or not to include numbers
  var pwNumberChoice = confirm("Would you like to include at least 1 number?");
  if (pwNumberChoice == true) {
    passwordSource += numericCharacters;
    console.log(passwordSource)
  }

  if (pwNumberChoice == false){
    console.log(passwordSource + "false")
  }


  // ask user to confirm whether or not to include special characters
  var pwSpecialChoice = confirm("Would you like to include a Special Character (eg: */!?#,.)?");
  if (pwSpecialChoice == true) {
    passwordSource += specialCharacters;
    console.log(passwordSource)
  }

  if (pwSpecialChoice == false){
    console.log(passwordSource + "false")
  }

  for (var i = 0; i < passwordLength; i++) {
    var randCharacters = passwordSource.charAt(Math.floor(Math.random() * passwordSource.length));
    finalPassword += randCharacters;
  }

  return finalPassword;
  
  console.log(finalPassword);
  }

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

