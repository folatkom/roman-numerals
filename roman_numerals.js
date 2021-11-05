function convertToRoman(num) {
  let roman = "";
  let multiplier = 1;
  if(num >= 1000){
    multiplier = Math.floor(num/1000);
      for(let i = 0; i<multiplier;i++){
         roman += "M"
         num -= 1000;
      }  
  }
  if(num < 1000 && num >= 500){
    if (num <900){
      roman += "D";
      num -= 500; 
    }
    else{
      roman += "CM";
      num -= 900;
    }
  }
  if(num < 500 && num >= 100){
    if (num >= 400){
      roman += "CD";
      num -= 400;
    }
    else{
      multiplier = Math.floor(num/100);
      for(let i = 0; i < multiplier; i++){
        roman += "C";
        num -= 100;
      }
    }
  }
  if(num < 100 && num >= 50){
    if(num >= 90){
      roman += "XC";
      num -= 90;
    }
    else{
      roman += "L";
      num -= 50;
    }
  }
  if(num < 50 && num >= 10){
    if(num >= 40){
      roman += "XL"
      num -= 40;
    }
    else{
      multiplier = Math.floor(num/10);
      for(let i = 0; i < multiplier; i++){
        roman += "X";
        num -= 10;
      }
    }
  }
  if(num < 10 && num >= 5){
    if(num >= 9){
      roman += "IX";
      num -= 9;
    }
    else{
      roman += "V";
      num -= 5;
    }
  }
  if(num < 5){
    if(num == 4){
      roman += "IV"
    }
    else{
      for(let i = 0; i < num; i++){
      roman += "I";
      }
    }
  }
 return roman;
}

console.log(convertToRoman(3999));
console.log(convertToRoman(83));
console.log(convertToRoman(798));
console.log(convertToRoman(44))
console.log(convertToRoman(7))
