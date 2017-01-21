; (function(){
	"use strict";

	let bar = {
		bartender: [
			{
				name: "Jone",
				age: 20,
				cocktail: "with absinthe cocktail"
			},

			{
				name: "Sam",
				age: 20,
				cocktail: "wine cocktail"
			}
		],
		waiter: [
			{
				name: "Sabrina",
				age: 19
			},

			{
				name: "Gabriel",
				age: 21
			}
		],
		drinks: [
			{	
				name: "wine",
				ammount: 150
			},

			{
				name: "brandy",
				ammount: 200
			},
			{
				name: "beer",
				ammount: 500
			},
			{
				name: "liquor",
				ammount: 250
			},
			{
				name: "tequila",
				ammount: 100
			}
		],

		tips: 300,
		order: [],

		splitTip: function(){
			let bartendersNames = this.bartender.map(el => el.name);
			let waitersNames = this.waiter.map(el => el.name);

			let general = bartendersNames.concat(waitersNames).length;

			let tippedEmployee = this.tips/general;
			return tippedEmployee;
		},

		// hirePerson: function(name, age, position) {
		// 	let addPerson = {
		// 		name: name,
		// 		age: age
		// 	}

		// 	for(let key in bar) {

		// 		if(key === position) {
		// 			this[key].push(addPerson);
		// 		}
		// 	}
		// },

		hirePerson: function(person, position) {

			for(let key in bar) {

				if(key === position) {
					this[key].push(person);
				}
			}

			return person;
		},

		firePerson: function(name, position) {
			let index;
			for(let key in bar) {

				if (key === position) {
					index = this[key].findIndex(el => {
						if(el.name === name){
							return el;
						}
					})

					bar[key].splice(index, 1);
				}
			}
		},

		addGoods: function(drink){
			let newDrink = bar.drinks.find(el => el.name === drink.name);

			if(newDrink){
				newDrink.ammount += drink.ammount;
			}else {
				this.drinks.push(drink);
			}
		}
	}

	class Drink {
		constructor(name, ammount) {
			this.name = name;
			this.ammount = ammount;
		}
	}

	class Person {
		constructor(name, age, cocktail) {
			this.name = name;
			this.age = age;
			this.cocktail = cocktail;
		}
	}

	class Waiter extends Person {
		constructor(name, age, cocktail){
			super(name, age, cocktail);
			delete this.cocktail;
		}

		takeOrder(drink, quantity){
			let newOrder = {
				name: drink,
				ammount: quantity
			}

			bar.drinks.find(el => {
				if(el.name === drink) {

					if(el.ammount >= quantity){
						bar.order.push(newOrder);
					} else {
						alert("Sorry, this kind of drink is available");
					}
				}
			})

			return newOrder;
		}

		takeTips(tips){
			bar.tips += tips;
			return(bar.tips);
		}
	}

	class Bartender extends Person {
		constructor(name, age, cocktail) {
			super(name, age, cocktail);
		}

		completeOrder(drink, quantity) {
			bar.drinks.find(el => {
				if(el.name === drink) {

					if(el.ammount >= quantity) {
						el.ammount -= quantity;
					} else {
						el.ammount -= el.ammount;
						quantity = el.ammount;
					}
				}
			})

			return quantity;
		}
	}

	// let waiter1 = new Waiter("Jone", 25);
	// let bartender1 = new Bartender("Semen", 23, "milk shake");
	// let drink_brandy = new Drink("brandy", 25);
	// let drink_milk = new Drink("milk", 50);

	// console.log(waiter1);
	// console.log(bartender1);
	// bar.addGoods(drink_brandy);
	// bar.addGoods(drink_milk);
	// console.log(bar.drinks);

	// waiter1.takeTips(50);
	// waiter1.takeOrder("wine", 100);

	// bartender1.completeOrder("wine", 20);

	// console.log(bar.tips);
	// console.log(bar.order);
	// console.log(bar.drinks);
	// console.log(bar.splitTip());
	// bar.hirePerson(waiter1, "waiter");
	// bar.hirePerson(bartender1, "bartender");
	// console.log(bar.waiter);
	// console.log(bar.bartender);
	// console.log(bar.firePerson('Jone', 'bartender'));
	// console.log(bar.bartender);


})();