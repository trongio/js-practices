function CoffeeMachine(power, capacity) {
	let waterAmount = 0;
	let WATER_HEAT_CAPACITY = 4200;
	
    function getTimeToBoil() {
		return waterAmount * WATER_HEAT_CAPACITY * 80 / power;
    }
	
    this.setWaterAmount = function(amount) {
		if (amount < 0) {
			throw new Error("Value has to be positive");
		}
		if (amount > capacity) {
			throw new Error("You can't put more water, than " + capacity);
		}
		waterAmount = amount;
	};
	
    function onReady() {
		console.log('Coffee is ready');
		}
		
	this.addWater= function(water){
		if(waterAmount+water>capacity){
			throw new Error(`You can't put more water, than ${capacity}`);
		}
		waterAmount=water;
	}
    
	this.run = function() {
		setTimeout(onReady, getTimeToBoil());
	};
}


var coffeeMachine = new CoffeeMachine(100000, 400);
coffeeMachine.addWater(200);
coffeeMachine.addWater(100);
coffeeMachine.addWater(500); // You can't put more water, than 400
coffeeMachine.run();