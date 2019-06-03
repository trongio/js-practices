const person = {
    get salary() {
        let today = new Date();
        const dayss = today.getDate();
        const mothdays = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();
        if(mothdays-dayss>20) return'good salary';
        else return 'bad salary';
    }
  };

  console.log(person.salary);