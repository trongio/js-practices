function CoffeeMachine(power, capacity) {
	let waterAmount = 0;
	let WATER_HEAT_CAPACITY = 4200;
	let isReadyCallback;
	
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
			if(isReadyCallback){
				isReadyCallback();
			}
			else console.log('Coffee is ready');
		}
		
		this.setOnReady = function(func){
			isReadyCallback= func;
		}
    
	this.run = function() {
		setTimeout(onReady, getTimeToBoil());
	};

	this.getWaterAmount = function(){
		return waterAmount;
	}
}

var coffeeMachine = new CoffeeMachine(20000, 500);
coffeeMachine.setWaterAmount(150);

coffeeMachine.setOnReady(function() {
	var amount = coffeeMachine.getWaterAmount();

	console.log( 'Coffee is ready: ' + amount + 'ml' ); // Coffee is ready: 150 ml
});

coffeeMachine.run();