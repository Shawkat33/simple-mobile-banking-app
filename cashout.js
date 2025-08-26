import {
	getValue,
	getIntValue,
	getCurrentAmount,
	setCurrentAmount,
	customerPin,
} from "./toggle.js";

import { transactionData } from "./transaction.js";

// console.log("Add Money Script Connected");

document.getElementById("withdrawMoney-btn").addEventListener("click", (e) => {
	e.preventDefault();
	// console.log("Add Money Button Click");

	const agentNo = getValue("agentNo");

	const cashoutAmount = getIntValue("cashoutAmount");

	const pinNo = getIntValue("pinNoCO");

	const currentAmount = getCurrentAmount();

	if (cashoutAmount > currentAmount) {
		alert("Cashout exceeds Current Balance!");
		return;
	} else if (cashoutAmount <= 0) {
		alert("Invalid Input");
		return;
	}

	console.log(agentNo, cashoutAmount, pinNo, currentAmount);

	const newTotalAmount = currentAmount - cashoutAmount;

	if (agentNo.length !== 11) {
		alert("Please provide a valid Agent No.");
	} else if (customerPin !== pinNo) {
		alert("Invalid Pin, Cashout Failed!");
	} else {
		setCurrentAmount(newTotalAmount);

		console.log(newTotalAmount);

		const cashOutData = {
			name: "Cash Out",
		};

		cashOutData.date = new Date().toLocaleTimeString();

		cashOutData.amount = cashoutAmount;

		console.log(cashOutData);

		transactionData.push(cashOutData);
	}
});
