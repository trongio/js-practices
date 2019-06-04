const person = {
    get salary() {
        let today = new Date();
        const days = today.getDate();
        const mothdays = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();
        if(mothdays - days>20)
            return'good salary';
        else
            return 'bad salary';
    }
  };

  console.log(person.salary);