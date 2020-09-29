// Assignment Code
var generateBtn = document.querySelector("#generate");
var criteria_1= confirm('UpperCase ?');
var criteria_2= confirm('LowerCase ?');
var criteria_3= confirm('Numbers ?');
var criteria_4= confirm('Symbols ?');
var criteria_5= prompt('how long do you want it to be ?  from 8- to 128');



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
passwordText.value = password;

 function generatePassword (){ 
  var passwordArray=[];
for(var i=0 ; i < parseInt(criteria_5) ; i++){
  var wantUpper = String.fromCharCode(Math.floor(Math.random()*26)+65);
  var wantLower = String.fromCharCode(Math.floor(Math.random()*26)+97) ;
  var wantNumber = String.fromCharCode(Math.floor(Math.random()*10)+48) ;
  var symbols=' "!#$%&()*+,-./:;<=>?@[\]^_`{|}~ ' ;
  var wantSymbols= symbols[Math.floor(Math.random() * symbols.length)];
  
if(criteria_1){ passwordArray.push(wantUpper); }
if(criteria_2){ passwordArray.push(wantLower); }
if(criteria_3){ passwordArray.push(wantNumber); }
if(criteria_4){ passwordArray.push(wantSymbols); }
 passwordArray=  passwordArray.slice(0,parseInt(criteria_5));
}

return passwordArray.join('');
 }
 

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
