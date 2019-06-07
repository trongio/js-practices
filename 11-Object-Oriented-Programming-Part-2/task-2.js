{

  let waterAmount = 0;

  function CoffeeMachine(power) {
      waterAmount = 0;
      this.power = power;
  }
  
  CoffeeMachine.prototype.run = function() {
      setTimeout(function() { 
          console.log('Coffee is ready!');
      }, this.getTimeToBoil());
  }
  
  CoffeeMachine.prototype.setWaterAmount = function(amount) {
      waterAmount = amount;
  };
  
  CoffeeMachine.prototype.getTimeToBoil = function() {
      return waterAmount * this.WATER_HEAT_CAPACITY * 80 / this.power;
  };

  CoffeeMachine.prototype.WATER_HEAT_CAPACITY = 4200;

}

var coffeeMachine = new CoffeeMachine(10000);
coffeeMachine.setWaterAmount(50);
coffeeMachine.run();