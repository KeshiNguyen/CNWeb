
//Palindrome Checker
function palindrome(str) {
    str = str.toLowerCase();
    str = str.replace(/[^a-z0-9]/g, '');
    var backward = str.split('');
    backward = backward.reverse().join('').toString();
    
    if(backward === str){
      return true;
    } else {
      return false;
    }
  }
  
  palindrome("eye");

//Roman Numeral Converter  
  function convertToRoman(num) {
    const romanNumerals = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1,
    };
  
    let result = '';
  
    for (let key in romanNumerals) {
      while (num >= romanNumerals[key]) {
        result += key;
        num -= romanNumerals[key];
      }
    }
  
    return result;
  }
//Caesars Cipher
  function rot13(str) {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    return str.replace(/[A-Z]/g, (char) => {
      const index = letters.indexOf(char);
      const result = (index - 13 + 26) % 26;
      return letters[result];
    });
  }
  
  rot13("SERR PBQR PNZC");

  //Telephone Number Validator
  function telephoneCheck(str) {

    //conplete each format
    // 5555555, 15555555
    // const UNFORMATTED = /^1?\d{10}$/;
    // // 555-555-5555, 1 555-555-5555
    // const DASH_FORMATTED= /^(1 )?\d{3}-\d{3}-\d{4}$/;
    // // (555)555-5555, 1(555)555-5555, 1 (555)555-5555, 1 (555) 555-5555
    // const PAREN_FORMATTED = /^(1 |1)?\(\d{3}\) ?\d{3}-\d{4}$/;
    // // 555 555 5555, 1 555 555 5555
    // const SPACE_FORMATTED = /^(1 )?\d{3} \d{3} \d{4}$/;
    // if (UNFORMATTED.test(str)) {
    //   return true;
    // }
    // if (DASH_FORMATTED.test(str)) {
    //   return true;
    // }
    // if (PAREN_FORMATTED.test(str)) {
    //   return true;
    // }
    // if (SPACE_FORMATTED.test(str)) {
    //   return true;
    // }
  
    //only one
  //   ^:sự khớp bắt đầu từ đầu chuỗi.
  
  // (1\s?)?: nhóm chứa 1 có thể xuất hiện hoặc không xuất hiện. 
  // \s? sự xuất hieện của khoangr trắng Nhóm này đại diện cho trường hợp có mã quốc gia 1 (country code).
  
  // (\(\d{3}\)|\d{3}): nhóm chứa số điện thoại(3 chữ số), có thể có hoặc không có dấu ngoặc đơn
  
  // ([-\s]?): nhóm chứa dấu gạch ngang (-) hoặc khoảng trắng (\s), có thể xuất hiện hoặc không.
  
  // \d{3} và \d{4}: ba chữ số (area code) và bốn chữ số (số điện thoại) theo thứ tự.
  
  // $: sự khớp kết thúc ở cuối chuỗi.
    const pattern = /^(1\s?)?(\(\d{3}\)|\d{3})([-\s]?)\d{3}([-\s]?)\d{4}$/;
    return pattern.test(str);
  }
  
  telephoneCheck("555-555-5555");
//cash register
  function checkCashRegister(price, cash, cid) {
    const currencyUnitMap = {
      "PENNY": 0.01,
      "NICKEL": 0.05,
      "DIME": 0.1,
      "QUARTER": 0.25,
      "ONE": 1,
      "FIVE": 5,
      "TEN": 10,
      "TWENTY": 20,
      "ONE HUNDRED": 100
    };
  
    let changeDue = cash - price;
    let change = [];
    const totalCashInDrawer = cid.reduce((total, [, amount]) => total + amount, 0);
    const roundToTwoDecimalPlaces = (num) => Math.round(num * 100) / 100;
    if (roundToTwoDecimalPlaces(totalCashInDrawer) < changeDue) {
      return { status: "INSUFFICIENT_FUNDS", change: [] };
    } else if (roundToTwoDecimalPlaces(totalCashInDrawer) === changeDue) {
      return { status: "CLOSED", change: cid };
    } else {
      for (let i = cid.length - 1; i >= 0; i--) {
        const [unit, amount] = cid[i];
        const unitValue = currencyUnitMap[unit];
        let availableAmount = amount;
        let returnedAmount = 0;
  
        while (changeDue >= unitValue && availableAmount > 0) {
          changeDue = roundToTwoDecimalPlaces(changeDue - unitValue);
          availableAmount = roundToTwoDecimalPlaces(availableAmount - unitValue);
          returnedAmount = roundToTwoDecimalPlaces(returnedAmount + unitValue);
        }
        if (returnedAmount > 0) {
          change.push([unit, returnedAmount]);
        }
      }
    }
    if (roundToTwoDecimalPlaces(changeDue) > 0) {
      return { status: "INSUFFICIENT_FUNDS", change: [] };
    } else {
      return { status: "OPEN", change };
    }
  }
  checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);