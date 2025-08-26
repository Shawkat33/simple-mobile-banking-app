import {
	getValue,
	getIntValue,
	getCurrentAmount,
	setCurrentAmount,
	customerPin,
} from "./toggle.js";

import { transactionData } from "./transaction.js";

// console.log("Transfer Money Script Connected");

document.getElementById("transferMoney-btn").addEventListener("click", (e) => {
	e.preventDefault();

	// console.log("Transfer Money Button Click");

	const accountNo = getValue("accountNoTM");

	const transferAmount = getIntValue("transferAmount");

	const pinNo = getIntValue("pinNoTM");

	const currentAmount = getCurrentAmount();

	console.log(accountNo, transferAmount, pinNo, currentAmount);

	const newTotalAmount = currentAmount - transferAmount;

	if (accountNo.length !== 11) {
		alert("Please provide a valid Account No.");
	} else if (customerPin !== pinNo) {
		alert("Invalid Pin, Transfer Money Failed!");
	} else {
		setCurrentAmount(newTotalAmount);
		console.log(newTotalAmount);

		const transferMoneyData = {
			name: "Transfer Money",
		};

		transferMoneyData.date = new Date().toLocaleTimeString();
		transferMoneyData.amount = transferAmount;
		console.log(transferMoneyData);

        transactionData.push(transferMoneyData);
	}
});
