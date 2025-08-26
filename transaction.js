export const transactionData = [];

document
	.getElementById("transactionBtn")
	.addEventListener("click", function () {
		console.log(transactionData);
	});

const transactionDetail = document.getElementById("transactionContainer");

document
	.getElementById("transactionBtn")
	.addEventListener("click", function () {
		if (transactionData.length == 0) {
			const noHistory = document.createElement("h2");
			noHistory.innerText = "No Transaction History";
			noHistory.classList.add("p-10", "text-4xl", "font-medium", "text-center");
			noHistory.style.color = "rgba(8,8,8,.7)";

			document.getElementById("transaction").innerHTML = "";
			document.getElementById("transaction").appendChild(noHistory);
		} else {
			for (const data of transactionData) {
				const transactionDiv = document.createElement("div");

				transactionDiv.innerHTML = `<div
							class="bg-white rounded-3xl py-6 px-6 flex justify-between items-center mt-4"
						>
							<div class="flex items-center">
								<div class="p-3 rounded-full bg-[rgba(8,8,8,.05)]">
									<img src="assets/wallet1.png" class="mx-auto" alt="" />
								</div>
								<div class="pl-2 text-[rgba(8,8,8,.7)]">
									<h1 class="text-[1rem] font-semibold">${data.name} - ${data.amount}</h1>
									<p class="text-[.75rem]">${data.date}</p>
								</div>
							</div>
							<div class="">
								<i class="fa-solid fa-ellipsis-vertical scale-150"></i>
							</div>
						</div>`;

				transactionDetail.appendChild(transactionDiv);
			}
		}
	});
