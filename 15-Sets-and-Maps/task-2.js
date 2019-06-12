

class DB {
    
  constructor() {
      this._users = new Map();
  }

  create(user) {
      const { name, age, country, salary } = user;

      if ( typeof name !== 'string' ) {
          throw new Error('Name is required and must be string');
      }

      if ( typeof age !== 'number' ) {
          throw new Error('Age is required and must be number');
      }
      
      if ( typeof country !== 'string' ) {
          throw new Error('Country is required and must be string');
      }

      if ( typeof salary !== 'number' ) {
          throw new Error('Salary is required and must be number');
      }

      const id = this.readAll()[0] && (this.readAll().reverse()[0].id + 1).toString() || '1';
      this._users.set( id, user );

      return id;
  }

  read(id) {

      if (typeof id === 'undefined' || typeof id !== 'string') {
          throw new Error('First parameter must be a string.');
      }

      const user = this._users.get(id) || null;
      if (user) {
          user.id = id;
      }
      return user;
  }

  readAll(...args) {
      if (args.length > 0) {
          throw new Error('ReadAll does\'n have any parameter.');
      }
      return Array.from(this._users.values());
  }

  update(id, data) {

      if (typeof id === 'undefined' || typeof id !== 'string') {
          throw new Error('First parameter must be a string.');
      }

      if (!this._users.has(id)) {
          throw new Error('User with this id does\'n exists.');
      }

      if (typeof data !== 'object') {
          throw new Error('Second parameter must be object.');
      }
      
      const user = this._users.get(id);
      user.name = data.name || user.name; 
      user.age = data.age || user.age; 
      user.country = data.country || user.country; 
      user.salary = data.salary || user.salary; 
      this._users.set( id, user );

      return id;

  }

  delete(id) {

      if (typeof id === 'undefined' || typeof id !== 'string') {
          throw new Error('First parameter must be a string.');
      }

      if (!this._users.has(id)) {
          throw new Error('User with this id does\'n exists.');
      }

      return this._users.delete(id);
  }

  find(query) {
      let users = [];

      try {
          users = this.readAll().filter(user => {
              return (
                  user.country === (query.country || user.country) && 
                  user.age >= (query.age && query.age.min || 0) &&
                  user.age <= (query.age && query.age.max || Infinity) &&
                  user.salary >= (query.salary && query.salary.min || 0) &&
                  user.salary <= (query.salary && query.salary.max || Infinity)
              );
          });
      } catch (error) {
          
      }

      return users;
  }

}

const db = new DB();

const person = {
  name: 'Pitter', // required field with type string
  age: 21, // required field with type number
  country: 'ge', // required field with type string
  salary: 500 // required field with type number
};

const id = db.create(person);

const query = {
  country: 'ge',
  age: {
      min: 21
  },
  salary: {
      min: 500,
      max: 600
  }
};
const customers = db.find(query); // array of users