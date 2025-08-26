function getValue(id) {
	return document.getElementById(id).value;
}
function getIntValue(id) {
	return parseInt(document.getElementById(id).value);
}
function getCurrentAmount() {
	return parseInt(document.getElementById("currentAmount").innerText);
}
function setCurrentAmount(amount) {
	return (document.getElementById("currentAmount").innerText =
		amount.toString());
}

const customerPin = 1234;

export {
	getIntValue,
	getValue,
	getCurrentAmount,
	setCurrentAmount,
	customerPin,
	hideAllForms,
};

function hideAllForms() {
	const formElements = document.getElementById("all-forms-section").children;

	for (const form of formElements) {
		form.style.display = "none";
	}
}

hideAllForms();

function showForm(id) {
	document.getElementById(id).style.display = "block";
}

function selectedBtnState(btnId) {
	document
		.getElementById(btnId)
		.classList.remove("border-1", "border-[rgba(8,8,8,.1)]");

	document
		.getElementById(btnId)
		.classList.add(
			"border-2",
			"border-[#0874F2]",
			"bg-[rgba(8,116,242,.05)]",
			"font-semibold",
			"selected"
		);

	document.getElementById(btnId).querySelector("h2").style.color = "#0874F2";
}

function unselectedBtnState() {
	const btnElements = document.getElementById("btnParent").children;

	for (const btn of btnElements) {
		btn.classList.add("border-1", "border-[rgba(8,8,8,.1)]");

		btn.classList.remove(
			"border-2",
			"border-[#0874F2]",
			"bg-[rgba(8,116,242,.05)]",
			"font-semibold",
			"selected"
		);

		btn.querySelector("h2").style.color = "rgba(8,8,8,.7)";
	}
}

function toggleFunctions(btnToggled, btnId) {
	if (btnToggled == false) {
		// Untoggle Everything first
		unselectedBtnState();

		// Then toggle Button
		selectedBtnState(btnId);
	}

	function showTransaction(id) {
		showForm(id);
	}

	// console.log(btnId);

	//connecting btnIds with forms, using switch case

	switch (btnId) {
		case "addMoneyBtn":
			hideAllForms();
			showForm("addMoney");

			break;

		case "cashoutBtn":
			hideAllForms();
			showForm("cashOut");

			break;

		case "transferMoneyBtn":
			hideAllForms();
			showForm("transferMoney");

			break;

		case "getBonusBtn":
			hideAllForms();
			showForm("getBonus");

			break;

		case "payBillBtn":
			hideAllForms();
			showForm("payBill");

			break;

		case "transactionBtn":
			hideAllForms();

			showForm("transaction");

			break;

		default:
			hideAllForms();

			break;
	}
}

// Remove All Forms on Click

document.addEventListener("click", (e) => {
	//Finds the clicked button
	const btnClicked = e.target.closest("#btnParent>div");

	// console.log(e.target.closest("#all-forms-section"));

	//for clicks outside the functional buttons, returns and does nothing

	if (btnClicked == null) {
		return;
	}

	//  Provides the functional btnId selected

	const btnId = btnClicked.id;

	const btnToggled = document
		.getElementById(btnId)
		.classList.contains("selected");
	// console.log(btnToggled);

	toggleFunctions(btnToggled, btnId);
});
