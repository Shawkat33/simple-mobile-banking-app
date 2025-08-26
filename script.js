// console.log("script Connected");

// Login button functionality

document.getElementById("login-btn").addEventListener("click", (e) => {
	e.preventDefault();
	// console.log("Login button clicked");
	// console.log(e);

	const mobileNo = 12345678910;
	const pinNo = 1234;

	const mobileNoSubmitted = document.getElementById("mobileNo").value;

	const convertedMobileNoSubmitted = parseInt(mobileNoSubmitted);
	// console.log(convertedMobileNoSubmitted);

	const pinNoSubmitted = document.getElementById("pinNo").value;

	const convertedpinNoSubmitted = parseInt(pinNoSubmitted);
	// console.log(convertedpinNoSubmitted);

	if (
		convertedMobileNoSubmitted !== mobileNo &&
		convertedpinNoSubmitted !== pinNo
	) {
		alert("Invalid Credentials");
	} else {
		window.location.href = "./main.html";
		console.log("All valid Credentials");
	}
});
