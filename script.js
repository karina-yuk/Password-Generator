// Assignment code here

// Clear console after refresh
// console.clear();
//Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// List of variables

var passwordLength;
var lowerCase;
var upperCase;
var specialCharacters;
var uppercaseCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowercaseCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialCharacters = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];
var lowercaseCharacters = lowercaseCharacters.length;
var uppercaseCharacters = uppercaseCharacters.length;  
let passwordSource = [];
let randCharacters = "";
let finalPassword = "";  

  // Asking the user to choose a password between 8 - 128 character length
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

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);