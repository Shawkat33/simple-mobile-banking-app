import {
	getValue,
	getIntValue,
	getCurrentAmount,
	setCurrentAmount,
	customerPin,
} from "./toggle.js";

import { transactionData } from "./transaction.js";

// console.log("Add Money Script Connected");

document.getElementById("payBill-btn").addEventListener("click", (e) => {
	e.preventDefault();
	// console.log("Add Money Button Click");

	const billType = getValue("billType");

	const accountNoPB = getValue("accountNoPB");

	const payBillAmount = getIntValue("payBillAmount");

	const pinNo = getIntValue("pinNoPB");

	const currentAmount = getCurrentAmount();

	console.log(billType, accountNoPB, payBillAmount, pinNo, currentAmount);

	const newTotalAmount = currentAmount - payBillAmount;

	if (accountNoPB.length !== 11) {
		alert("Please provide a valid Biller Account No.");
	} else if (customerPin !== pinNo) {
		alert("Invalid Pin, Bill Pay Failed!");
	} else {
		setCurrentAmount(newTotalAmount);

		console.log(newTotalAmount);

		const payBillData = {
			name: "Pay Bill",
		};

		payBillData.date = new Date().toLocaleTimeString();

		payBillData.amount = payBillAmount;

		console.log(payBillData);

		transactionData.push(payBillData);
	}
});
