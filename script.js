function convertToRoman(num) {

  const romanNumerals = {
    1: "I",
    4: "IV",
    5: "V",
    9: "IX",
    10: "X",
    40: "XL",
    50: "L",
    90: "XC",
    100: "C",
    400: "CD",
    500: "D",
    900: "CM",
    1000: "M"
  }
    
  let romanString = "";
  
  while (num > 0) {
    if (num >= 1000) {
      romanString += romanNumerals[1000];
      num -= 1000;  
    } else if (num >= 900) {
      romanString += romanNumerals[900];
      num -= 900;
    } else if (num >= 500) {
      romanString += romanNumerals[500];
      num -= 500;  
    } else if (num >= 400) {
      romanString += romanNumerals[400];
      num -= 400;
    } else if (num >= 100) {
      romanString += romanNumerals[100];
      num -= 100;  
    } else if (num >= 90) {
      romanString += romanNumerals[90];
      num -= 90;
    } else if (num >= 50) {
      romanString += romanNumerals[50];
      num -= 50;  
    } else if (num >= 40) {
      romanString += romanNumerals[40];
      num -= 40;
    } else if (num >= 10) {
      romanString += romanNumerals[10];
      num -= 10;  
    } else if (num >= 9) {
      romanString += romanNumerals[9];
      num -= 9;  
    } else if (num >= 5) {
      romanString += romanNumerals[5];
      num -= 5;  
    } else if (num >= 4) {
      romanString += romanNumerals[4];
      num -= 4;  
    } else if (num >= 1) {
      romanString += romanNumerals[1];
      num -= 1;  
    } 
  }

 return romanString;
}


// Tests:

// log II into the console
console.log(convertToRoman(2))

// log III into the console
console.log(convertToRoman(3))

// log IV into the console
console.log(convertToRoman(4))

// log V into the console
console.log(convertToRoman(5))

// log IX into the console
console.log(convertToRoman(9))

// log XII into the console
console.log(convertToRoman(12))

// log XVI into the console
console.log(convertToRoman(16))

// log XXIX into the console
console.log(convertToRoman(29))

// log XLIV into the console
console.log(convertToRoman(44))

// log XLV into the console
console.log(convertToRoman(45))

// log LXVIII into the console
console.log(convertToRoman(68))

// log LXXXIII into the console
console.log(convertToRoman(83))

// log XCVII into the console
console.log(convertToRoman(97))

// log XCIX into the console
console.log(convertToRoman(99))

// log CD into the console
console.log(convertToRoman(400))

// log D into the console
console.log(convertToRoman(500))

// log DI into the console
console.log(convertToRoman(501))

// log DCXLIX into the console
console.log(convertToRoman(649))

// log DCCXCVIII into the console
console.log(convertToRoman(798))

// log DCCCXCI into the console
console.log(convertToRoman(891))

// log M into the console
console.log(convertToRoman(1000))

// log MIV into the console
console.log(convertToRoman(1004))

// log MVI into the console
// console.log(convertToRoman(1006))

// log MXXIII into the console
// console.log(convertToRoman(1023))

// log MMXIV into the console
// console.log(convertToRoman(2014))

// log MMMCMXCIX into the console
// console.log(convertToRoman(3999))



