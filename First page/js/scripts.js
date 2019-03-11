

// IT IS OLD VERSION !!! 


var budget,
	nameShop,
	time,
	price = 100;

function start () {
	budget = prompt("How are you have budget?", "");
		while (isNaN(budget) || budget == null || budget == "") {
			console.log("You are have mistake!");
			budget = prompt("Please, imput the correct budget (imput a namber!", "");
		}
	nameShop = prompt("What is your shop name?", "").toUpperCase();
	time = 19;
	alert("The budget on a one day is "+ budget/30);
	console.log("The name of your shop is "+ nameShop);
	console.log(mainList);
};
start();

	

var mainList = {
	budget,
	nameShop,
	shopGoods: [],
	employees: {},
	discount: false,
	open: false,
	shopItems: [],
	HireEmployees: function HireEmployees() {
			for (let e = 0; e < 4; e++) {
					var employees = prompt("Please imput the mane your employee.", "");
					var iMistake = employees;
						while (iMistake = "" || iMistake.length > 20 || iMistake == null) {
							console.log("Your are have mistake!");
							employees = prompt("Please, imput the correct employee names!", "");
						}
					console.log("All right!");
					mainList.employees[e] = employees;
			}
	},
	discountStart: function discountStart(discount) {
	 		if (mainList.discount == true) {
		 			price = price * 0.8;
		 			console.log("You are have discount! Your price is " + price + ".");
					} else {
						console.log("Sorry, but you are not have discount.")
			}
	},
	chooseGoods: function chooseGoods() {
				for (let i = 0; i < 5; i++) {
						var goods = prompt("What goods type will you sell?");
						var iMistake = goods;
								while (iMistake = "" || iMistake.length > 20 || iMistake == null) {
									console.log("Your are have mistake!");
									goods = prompt("Please, imput the correct goods names!");
								}
						console.log("All right!");
						mainList.shopGoods[i] = goods;
				}
	},
	workTime: function workTime(time) { 
				if (time < 0) {
						console.log("It can't be!");
				} else if(time > 8 && time < 20) {
					console.log("Time to work!");
					mainList.open = true;
						} else if (time < 24) {
						console.log("It's too late to work");
							} else if (time > 24) {
									console.log("It can't be!");
								};
	},
	dayBudgetAndAll: function dayBudgetAndAll() {
				alert("The budget on a one day is "+ budget/30);
				console.log("The name of your shop is "+ nameShop);
				console.log("Your goods is " + mainList.shopGoods);
				console.log(mainList);
	},
	chooseShopItems: function chooseShopItems() {
		let items = prompt("Please seleckt from coma your items goods");
				//var iMistake = items;
				while (items == "" || items == null || typeof(items) === !"string") {
					console.log("Your are have mistake!");
					items = prompt("Please, imput the correct goods names!");
				}
		mainList.shopItems = items.split(", ");
		mainList.shopItems.sort();
		console.log("In uor shop you can buy these goods:");
		mainList.shopItems.forEach(function(item,i,arr) {
			console.log(i+1 + ": " + item + ";");
		})
	},
	startShopIncludes: function startShopIncludes() {
		console.log("Our shop includes:");
		for(let key in mainList){
			console.log(key)
		}
	}
};


