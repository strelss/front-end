
let openBtn = document.getElementById("open-btn"),
	nameValue = document.getElementsByClassName("name-value"),
	budgetValue = document.getElementsByClassName("budget-value"),
	goodsValue = document.getElementsByClassName("goods-value"),
	goodsItem = document.getElementsByClassName("goods-item"),
	goodsBtn = document.getElementsByClassName("goods-item-btn"),
	budgeBtn = document.getElementsByClassName("count-budget-btn"),
	employersBtn = document.getElementsByClassName("hire-employers-btn"),
	chooseItem = document.querySelector(".choose-item"),
	timeValue = document.querySelector(".time-value"),
	countBudgetValue = document.querySelector(".count-budget-value"),
	hireEmployersItem = document.querySelectorAll(".hire-employers-item"),
	itemsValue = document.getElementsByClassName("items-value"),
	isopenValue = document.getElementsByClassName("isopen-value"),
	employersValue = document.getElementsByClassName("employers-value"),
	discountValue = document.getElementsByClassName("discount-value");
	//Different imput fiels and duttons

	//console.log(isopenValue[0]);

var budget,
	nameShop,
	time,
	price = 100;

	openBtn.addEventListener("click", () => {        //Start function of budget and name of magazine
		setTimeout(start, 2000)
	});

	function start() {
		budget = prompt("How are you have budget?", "");
		while (isNaN(budget) || budget == null || budget == "") {
			console.log("You are have mistake!");
			budget = prompt("Please, imput the correct budget (imput a namber!)", "");
		}
		budgetValue[0].textContent = budget;
		nameShop = prompt("What is your shop name?", "").toUpperCase();
		nameValue[0].textContent = nameShop;
		function discountStart() {   					//The dicount system
		 		if (budget >= 10000) {
			 			alert("You are have discount!");
			 			discountValue[0].style.backgroundColor = "green"
						} else {
							console.log("Sorry, but you are not have discount.")
				}
		}
		discountStart();
		console.log("The name of your shop is "+ nameShop);
		console.log("All right!");
		console.log(mainList);
	}

	goodsBtn[0].addEventListener("click", function() {    //Start function of goods category
		for (let i = 0; i < goodsItem.length; i++) {
			var goods = goodsItem[i].value;
			var iMistake = goods;
					while (iMistake == null || iMistake == null) {
						console.log("Your are have mistake!");
					}
			console.log("All right!");
			mainList.shopGoods[i] = goods;
			goodsValue[0].textContent = mainList.shopGoods;
		}
	});

	chooseItem.addEventListener("change", () => {  // Function of choose item goods
		let items = chooseItem.value;
				if (isNaN(items) && items != "") {
					mainList.shopItems = items.split(", ");
					mainList.shopItems.sort();
					itemsValue[0].textContent = mainList.shopItems;
				}
	});

	timeValue.addEventListener("change", () =>{   // Function ofTime
		let time = timeValue.value;
		if (time < 0) {
				console.log("It can't be!");
				mainList.open = false;
				} else if (time > 8 && time < 20) {
					console.log("Time to work!");
					mainList.open = true;
						} else if (time < 24) {
							console.log("It's too late to work");
							mainList.open = false;
							} else if (time > 24) {
									console.log("It can't be!");
									mainList.open = false;
								};
		if (mainList.open == true) {
			isopenValue[0].style.backgroundColor = "green"
		} else {
			isopenValue[0].style.backgroundColor = "red"
		}
	});

	budgeBtn[0].addEventListener("click", () =>{  // Function of calculation budget
		countBudgetValue.value = budget/30;
	});

	employersBtn[0].addEventListener("click", () => {  // Function ofHiring employees
			for (let e = 0; e < hireEmployersItem.length; e++) {
					var employees = hireEmployersItem[e].value;
					mainList.employees[e] = employees;
					employersValue[0].textContent += mainList.employees[e] + ", "; 
			}
	});

	

var mainList = {
	budget,
	nameShop,
	shopGoods: [],
	employees: {},
	discount: false,
	open: false,
	shopItems: [],
	
	discountStart: function discountStart() {   //The dicount system
	 		if (budget <= 10000) {
		 			alret("You are have discount!");
		 			discountValue[0].style.backgroundColor = "green"
					} else {
						console.log("Sorry, but you are not have discount.")
			}
	},

	startShopIncludes: function startShopIncludes() {
		console.log("Our shop includes:");
		for(let key in mainList){
			console.log(key)
		}
	}
};





