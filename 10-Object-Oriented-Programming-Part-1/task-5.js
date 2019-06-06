function CoffeeMachine(power, capacity) {
	let waterAmount = 0;
	let running=0;
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
			running=0;
			console.log('Coffee is ready');
		}
		
		this.setOnReady = function(func){
			isReadyCallback= func;
		}
    
	this.run = function() {
		running=1;
		setTimeout(onReady, getTimeToBoil());
	};
	this.isRunning=function() {
		if(running===1){
			return 'true';
		}
		return 'false';
	}
}

var coffeeMachine = new CoffeeMachine(20000, 500);
coffeeMachine.setWaterAmount(100);

console.log('Before: ' + coffeeMachine.isRunning()); // Before: false

coffeeMachine.run();

console.log('In progress: ' + coffeeMachine.isRunning()); // In progress: true

coffeeMachine.setOnReady(function() {
	console.log('After: ' + coffeeMachine.isRunning()); // After: false
});