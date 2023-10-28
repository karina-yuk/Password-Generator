// Assignment code here

//Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Create function that takes user input to generate a desired password
var generatePassword = function(){ 

  // List of variables
  var generatedPass = [];
  var passwordLength;
  var lowerCase;
  var upperCase;
  var specialCharacters;
  var uppercaseCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  var lowercaseCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  var specialCharacters = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];
 


  // Asking the user to choose a password between 8 - 128 character length
passwordLength = prompt("How many characters would you like in the password (Must be a number between 8-128)");
  while (passwordLength < 8 || passwordLength >128){
    alert ("Must be a number between 8-128")
    passwordLength = prompt("How many characters would you like in the password (Must be a number between 8-128)");
  }
  // Asking the user for different password criteria 
  lowerCase = confirm("Include at least 1 lowercase?");
  upperCase = confirm("Include at least 1 UPPERCASE?");
  numericCharacters = confirm("Include at least 1 number?");
  specialCharacters = confirm("Include at least 1 Special Character (eg: */!?#,.)?");
  emptySpot = true;

  // Using user criteria, generate password
  // Setting max size of password 

 

};
