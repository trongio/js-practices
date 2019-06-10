class MyString {

  reverse(str) {
      return str.split('').reverse().join('');
  }

  ucFirst(str) {
      return str[0].toUpperCase()+str.slice(1);
  }

  ucWords(str) {
      return str.split(' ').map( value => this.ucFirst(value)).join(' ');
  }

}

const str = new MyString();

console.log(str.reverse('abcde')); // print 'edcba'
console.log(str.ucFirst('abcde')); // print 'Abcde'
console.log(str.ucWords('abcde abcde abcde')); // print 'Abcde Abcde Abcde'