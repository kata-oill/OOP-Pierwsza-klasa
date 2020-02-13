'use strict';

function Phone(brand, model, price, color) {
    this.brand = brand;
    this.model = model;
	this.price = price;
	this.color = color;
}

Phone.prototype.printInfo = function() {
		console.log("The phone brand is " + this.brand + " " + this.model + ", color is " + this.color + " and the price is " + this.price + ".");
}

var samsungGalaxyS6 = new Phone("Samsung", "Galaxy S6", 3600, "black");
var iPhone6S = new Phone("Apple", "iPhone 6S", 2250, "silver");
var onePlusOne = new Phone("OnePlus", "One", 1500, "white");

samsungGalaxyS6.printInfo();
iPhone6S.printInfo();
onePlusOne.printInfo();