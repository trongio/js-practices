class Validator {
    
  isEmail(str) {
      return str.match(/[a-z]+@[a-z]+\.[a-z]{2,}/i) ? true : false;
  }

  isDomain(str) {
      return str.match(/[a-z]+\.[a-z]{2,}/i) ? true : false;
  }

  isDate(str) {
      return str.match(/([0-9]{2}[\./]){2}[0-9]{4}/) ? true : false;  
  }

  isPhone(str) {
      return str.match(/\+[0-9]{3} ?\([0-9]{2}\) ?[0-9]{3}-?([0-9]{2}-?){2}/) ? true : false;        
  }
}

const validator = new Validator();

console.log(validator.isEmail('jshtml@mail.ru'));
console.log(validator.isDomain('jshtml.net'));
console.log(validator.isDate('12.05.2020'));
console.log(validator.isPhone('+375 (29) 817-68-92')); // it can be format of your country