import {
	getValue,
	getIntValue,
	getCurrentAmount,
	setCurrentAmount,
	customerPin,
} from "./toggle.js";

import { transactionData } from "./transaction.js";

// console.log("Add Money Script Connected");

document.getElementById("addMoney-btn").addEventListener("click", (e) => {
	e.preventDefault();
	// console.log("Add Money Button Click");

	const bankSelected = getValue("bank");

	const accountNo = getValue("accountNo");

	const addAmount = getIntValue("addAmount");

	if (addAmount <= 0 || typeof addAmount !== "number") {
		alert("Invalid Amount");
		return;
	}

	const pinNo = getIntValue("pinNoAM");

	const currentAmount = getCurrentAmount();

	console.log(bankSelected, accountNo, addAmount, pinNo, currentAmount);

	const newTotalAmount = currentAmount + addAmount;

	if (accountNo.length !== 11) {
		alert("Please provide a valid Account No.");
	} else if (customerPin !== pinNo) {
		alert("Invalid Pin, Add Money Failed!");
	} else {
		setCurrentAmount(newTotalAmount);

		console.log(newTotalAmount);

		const addMoneyData = {
			name: "Add Money",
		};

		addMoneyData.date = new Date().toLocaleTimeString();
		addMoneyData.amount = addAmount;
		console.log(addMoneyData);

		transactionData.push(addMoneyData);
	}
});
