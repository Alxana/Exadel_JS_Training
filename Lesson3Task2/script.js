function Machine(power) {
 this._power = power;
 this._enabled = false;
 let self = this;
 this.enable = function() { self._enabled = true; };
 this.disable = function() { self._enabled = false; };
}


function Fringe (power) {
	Machine.apply(this, arguments);
	
	let food = [];
	const maxQuantity = power/100;
		
	this.addFood = (...foods) => {
		
		if (!this._enabled) { 
			alert("Fringe is off. Switch it on!");
		} else if ((food.length + foods.length) > maxQuantity) {
			alert(`Too much food! You can only put  ${maxQuantity - food.length} item(s)`);
		} else {
			food.push(...foods);
		}
	}
	
	this.getFood = () => ([...food])
	
		
}


/*TESTS*/

myFringe = new Fringe(1000);
console.log(myFringe.getFood());


myFringe.addFood('apple', 'pear', 'soup', 'milk', 'cabbage');
console.log(myFringe.getFood());

myFringe.enable();

myFringe.addFood('apple', 'pear', 'soup', 'milk', 'cabbage');
console.log(myFringe.getFood());

myFringe.addFood('sausage', 'cheese', 'tomatos', 'cucumber');
console.log(myFringe.getFood());

myFringe.addFood('icecream', 'cake');



	
	
