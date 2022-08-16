// Global Variables

// Alphabet String Variable
const alphabet = "abcdefghijklmnopqrstuvwxyz";
// create an array with the alphabet string split into lowercase
const lowercase = alphabet.split("");
// create an array with the alphabet string split into uppercase
const uppercase = alphabet.toUpperCase().split("");
// Create an array with number 0 - 10
const numbers = Array.from(Array(10).keys());
// Create an array from all special characters
const symbols = Array.from("!@#$%^&*()_-={}|[]");
// Combine all Arrays
const allNumsAndChars = [...lowercase, ...uppercase, ...numbers, ...symbols];

// Document Default Variables

let defaultSetting = true;
let passwordLength = 15;

// Console Variables

// Toggle Constants

const lowercaseAlphabetToggle = document.getElementById("lowercaseAlphabetCheckbox");
const lowercaseAlphabetSpan = document.getElementById("includeLowercaseAlphabetSpan");
const uppercaseAlphabetToggle = document.getElementById("uppercaseAlphabetCheckbox");
const uppercaseAlphabetSpan = document.getElementById("includeUppercaseAlphabetSpan");
const specialCharactersToggle = document.getElementById("specialCharactersCheckbox");
const specialCharactersSpan = document.getElementById("includeSpecialCharactersSpan");
const numbersToggle = document.getElementById("numbersCheckbox");
const numbersSpan = document.getElementById("includeNumbersSpan");

// Check Variables

lowercaseAlphabetToggle.checked = true;
lowercaseAlphabetSpan.style.color = "var(--green)";
uppercaseAlphabetToggle.checked = true;
uppercaseAlphabetSpan.style.color = "var(--green)";
specialCharactersToggle.checked = false;
numbersToggle.checked = false;

// Generate Password Button Variables
const errorMessage = document.getElementById("error-message");
const buttonError = document.getElementById("generate-btn");

// Text Input Constants
const boxLength = document.getElementById("box-length");

// Button Constants
const setLength = document.getElementById("set-length");
// const resetBtn = document.getElementById("reset-button")
let resetLengthBtn = document.getElementById("reset-button");

// Length Field Variable
const fieldLength = document.getElementById("field-length");
      // fieldLength.value = "";

// Password Box Variable
const passwordBox = document.getElementsByClassName("password-box");
    // Variable Logs
    // console.log(passwordBox[0]);
    // console.log(passwordBox[1]);

// Button Functions
// Button for Generating the passwords
function generatePassword() {
    checkToggles();
    if (checkToggles() === true) {
        buttonError.textContent = `Select Toggle(s)`;
        console.log(buttonError);
        buttonError.style.backgroundColor = `background-color: red`;
    }
    for (let i = 0; i < passwordBox.length; i++) {
        passwordBox[i].style.border = "2px solid var(--green)";
        passwordBox[i].value = `password ${[i]}`;
        // console.log(generateType(lowercase));
        // For Loop Logs
            // console.log("passwordBox.style.border");
    }
    // Function Logs
        console.log("Generate Password Button Clicked!");
        console.log(`Password Length: ${passwordLength}`);
}
// Button to Check Password Length
function setPasswordLength() {
    //passwordLength = fieldLength.value;
    //
    // console.log("Value:" + passwordLength);
    // console.log("Set Length Button Clicked!");
    // fieldLength.style.border = "2px solid var(--green)";
    defaultSetting = false;
    // if (fieldLength.value === ""){
    //     fieldLength.style.border = "2px dashed red";
    //     // passwordLength = 15;
    //     console.log(`Password Length: ${passwordLength}`);
    //     //return passwordLength;
    // } else {
        setLength.addEventListener('click', () => {
            //fieldLength.style.border = "2px solid var(--green)";
            passwordLength = fieldLength.value;
            console.log(`Password Length: ${passwordLength}`);
            resetLengthBtn.value = true;
            resetLengthBtn.style.background = "white";
            resetLengthBtn.style.color = "var(--night-background)";
        })

        return passwordLength;
    // }

    //getPasswordLength();
    // check type of value for Length of Password;
    //     let lengthValue = fieldLength.value;
    //     console.log(boxLength);
    //     boxLength.style.color = "var(--green)";
    //     console.log(lengthValue);
}

// Button to Reset Password Length
function resetButton() {
    defaultSetting = true;
    errorMessage.innerHTML = "";
    fieldLength.value = "";
    fieldLength.style.border = "2px solid var(--night-blue)";
        // Function Logs
            // console.log("Reset length Button Clicked!");
            // console.log(fieldLength);
    for (let i = 0; i < passwordBox.length; i++) {
        passwordBox[i].style.border = "2px solid var(--night-blue)";
        passwordBox[i].value = ``;
        // For Loop Logs
            // console.log("passwordBox.style.border");
    }
    // console.log(defaultSetting);
    defaultToggles();
    checkDefault();
}

// Set Toggles Back to Default
function defaultToggles(){
    // Lowercase Default Settings
    lowercaseAlphabetToggle.checked = true;
    lowercaseAlphabetSpan.style.color = "var(--green)";
    // Uppercase Default Settings
    uppercaseAlphabetToggle.checked = true;
    uppercaseAlphabetSpan.style.color = "var(--green)";
    // Special Character Default Settings
    specialCharactersToggle.checked = false;
    specialCharactersSpan.style.color = "var(--grey)";
    // Number Default Settings
    numbersToggle.checked = false;
    numbersSpan.style.color = "var(--grey)";
}

// function generatePassword() {
//     console.log("button clicked!");
//     if (toggleNumbers.checked === false && toggleSpecChar.checked === false) {
//         generateType(characters);
//     } else if (toggleNumbers.checked === true && toggleSpecChar.checked === true){
//         generateType(charactersOnly);
//     } else if ( toggleNumbers.checked === false && toggleSpecChar.checked === true){
//         console.log("Characters with Numbers")
//         generateType(charWithNumbers);
//     } else if ( toggleNumbers.checked === true && toggleSpecChar.checked === false){
//         console.log("Characters and Special Characters");
//         generateType(charWithSpecChar);
//     }
//
// }

function generateType(type) {
    let passwordField = "";
    for (let i = 0; i < passwordField.length; i++) {
        let randomIndex = Math.floor(Math.random() * type.length);
        //console.log(randomIndex);
        passwordField += type[randomIndex];
        // }
        // for (let i = 0; i < passwordLength; i++){
        //     let randomIndex = Math.floor( Math.random() * type.length);
        //     //console.log(randomIndex);
        //     newRightPassword += type[randomIndex];
        // }

        // passwordField.value = passwordField;
        // passwordField.value = passwordField;
    }
}

// Toggle Functions - Complete

function toggle(toggleValue, spanValue, trueColor, falseColor){
    toggleValue.checked == !toggleValue.checked;
    spanValue.style.color = toggleValue.checked ? trueColor : falseColor;
    checkDefault();
}

// Toggle to Include Lowercase Alphabet - Complete
function toggleLowercaseAlphabet() {
    toggle(lowercaseAlphabetToggle, lowercaseAlphabetSpan, "var(--green)", "var(--grey)");
    // Function Logs
    //         console.log("Include Lowercase Alphabet Characters Toggled");
    //         console.log(lowercaseAlphabetSpan.style.color);
    //         console.log(lowercaseAlphabetToggle.checked);
}

// Toggle to Include Uppercase Alphabet - Complete
function toggleUppercaseAlphabet() {
    toggle(uppercaseAlphabetToggle, uppercaseAlphabetSpan, "var(--green)", "var(--grey)");
    // Function Logs
    // console.log("Include Uppercase Alphabet Characters Toggled");
    // console.log(uppercaseAlphabetSpan.style.color);
    // console.log(uppercaseAlphabetToggle.checked);
}

// Toggle to Include Special Characters - Complete
function toggleSpecialCharacters() {
    toggle(specialCharactersToggle, specialCharactersSpan, "var(--green)", "var(--grey)");
        // Function Logs
            // console.log("Include Special Characters Toggled");
            // console.log(specialCharactersSpan.style.color);
            // console.log(specialCharactersToggle.checked);
}

// Toggle to Include Numbers - Complete
function toggleNumbers() {
    toggle(numbersToggle, numbersSpan, "var(--green)", "var(--grey)");
        // Function Logs
            // console.log("Include Numbers Toggled");
            // console.log(numbersSpan.style.color);
            // console.log(numbersToggle.checked);
}

// Check if Default Settings are Set - Complete
function checkDefault() {
    if (lowercaseAlphabetToggle.checked === !true || uppercaseAlphabetToggle.checked === !true || specialCharactersToggle.checked === !false || numbersToggle.checked === !false) {
        console.log("Not Default Settings");
    } else {
        console.log("Default");
    }
}

function checkToggles() {
    if (lowercaseAlphabetToggle.checked === false &&
        uppercaseAlphabetToggle.checked === false &&
        specialCharactersToggle.checked === false &&
        numbersToggle.checked === false) {
        return true;
    }
}