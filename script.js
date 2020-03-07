// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  //prompt user for paramaters
  var length = prompt("How long do you want your password to be? Enter a number between 8 and 128");
   //verify for vaild input
  if (length >= 8 && length <= 128 ) {

  var charType = prompt('Enter a character type: special, numeric, uppercase, lowercase, all. (Or mix and match Ex. "special and numeric")');
 
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

 
//generates password
function generatePassword() {
  //evaluates character type based on user input
   var charSet = "";
   var charTypeLower = charType.toLowerCase();
  

  switch(charTypeLower){
    case "lowercase":
      charSet = "abcdefghijklmnopqrstuvwxyz"
      break;
    case "uppercase":
      charSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
      break;
    case "numeric":
      charSet = "0123456789"
      break;
    case "special":
      charSet = "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
      break;
    case "all":
      charSet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
      break;
    case "lowercase and uppercase":
    case "uppercase and lowercase":
      charSet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
      break;
    case "lowercase and numeric":
    case "numeric and lowercase":
      charSet = "abcdefghijklmnopqrstuvwxyz0123456789"
      break;
    case "lowercase and special":
    case "special and lowercase":
      charSet = "abcdefghijklmnopqrstuvwxyz!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
      break;
    case "uppercase and numeric":
    case "numeric and uppercase":
      charSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
      break;
    case "uppercase and special":
    case "special and uppercase":
      charSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
      break;
    case "special and numeric":
    case "numeric and special":
      charSet = "0123456789!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
      break;
    default:
      alert("Please enter a valid input");
      writePassword()
  }

  //return value
  var cutsomPassword = "";
  for (var i = 0; i < parseInt(length); i++) {
    //picks a character within charSet at index of a random number
    cutsomPassword += charSet.charAt(Math.floor(Math.random() * charSet.length));
  }
  return cutsomPassword;
}
} else {
  alert('Please enter a number between 8 and 128')
  writePassword()
}
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
