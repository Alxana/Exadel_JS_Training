"use strict";

function Machine(power) {
 this._power = power;
 this._enabled = false;
 var self = this;
 this.enable = function() { self._enabled = true; };
 this.disable = function() { self._enabled = false; };
}


function Fringe (power) {
	Machine.apply(this, arguments);
	
	var food = [];
	var maxQuantity = power/100;
		
	this.addFood = function() {
		
		if (!this._enabled) { 
			alert("Fringe is off. Switch it on!");
		} else if ((food.length + arguments.length) > maxQuantity) {
			alert("Too much food! You can only put " + (maxQuantity - food.length) + " item(s)");
		} else {
			for(var i = 0; i< arguments.length; i++) {
				food.push(arguments[i]);
			}
		}
	}
	
	this.getFood = function() {
		return food.slice();
	}
	
		
}


/*TESTS*/

var myFringe = new Fringe(1000);
console.log(myFringe.getFood());


myFringe.addFood('apple', 'pear', 'soup', 'milk', 'cabbage');
console.log(myFringe.getFood());

myFringe.enable();

myFringe.addFood('apple', 'pear', 'soup', 'milk', 'cabbage');
console.log(myFringe.getFood());

myFringe.addFood('sausage', 'cheese', 'tomatos', 'cucumber');
console.log(myFringe.getFood());

myFringe.addFood('icecream', 'cake');



	
	
