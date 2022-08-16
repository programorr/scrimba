
// Unit Constants
const metersInFeet = 3.281;
const litersInGallons = 0.264;
const kilosInPounds = 2.204;


// DOM Constants
const number = document.getElementById("input-text-box");
const lengthDom = document.getElementById("length");
const volumeDom = document.getElementById("volume");
const massDom = document.getElementById("mass");

// Operator Functions
function divides (a, b) { return a / b }
function times (a, b) { return a * b }


// Convert to String
function convertString(domElement, firstUnit, secondUnit, leftValue, rightValue ){
    return `${number.value} ${firstUnit} = ${leftValue} | ${number.value} ${secondUnit} = ${rightValue}`;
}

// Convert to New Value
function uniConverter(calcValue, operatorUsed, inValue, toValue){
    return `${operatorUsed(calcValue, inValue).toFixed(3)} ${toValue}`;
}

function convertBtn(){
    // Converter Constants
    const unitMeters = uniConverter(number.value, divides, metersInFeet, 'meter(s)')
    const unitFeet = uniConverter(number.value, times, metersInFeet, 'feet')
    const unitLiters = uniConverter(number.value, divides, litersInGallons, 'liter(s)');
    const unitGallons = uniConverter(number.value, times, litersInGallons, 'gallon(s)');
    const unitPounds = uniConverter(number.value, divides, kilosInPounds, 'pound(s)');
    const unitKilos = uniConverter(number.value, times, kilosInPounds, 'kilo(s)');

    if (number.value === '') {
        number.style.border = `6px dashed var(--h1-text-color)`;
     } else {
        number.style.border = `6px solid var(--h1-text-color)`;
        // example - 20 meter(s) = 65.620 feet | 20 feet = 6.096 meter(s)
        lengthDom.innerText = convertString('lengthDom', 'meter(s)', 'feet', unitFeet, unitMeters);
        // example - 20 liters = 5.284 gallons | 20 gallons = 75.708 liters
        volumeDom.innerText = convertString('volumeDom', 'liter(s)', 'gallon(s)', unitGallons, unitLiters);
        // example - 20 kilos = 44.092 pounds | 20 pounds = 9.072 kilos
        massDom.innerText = convertString('lengthDom', 'kilo(s)', 'pound(s)', unitKilos, unitPounds);

    }
}
