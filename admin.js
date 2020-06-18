var soldbyRestro = localStorage.getItem("soldbyRestro");
console.log("admin Page");

soldbyRestro = JSON.parse(soldbyRestro) || [];
console.log(soldbyRestro);
function showData() {
	var summary = document.getElementById("summary");
	summary.textContent = "";
	var P_restroName = document.createElement("p");
	var P_total = document.createElement("p");
	P_restroName.setAttribute("class", "mt-3");
	P_restroName.textContent = "Resturant name : " + soldbyRestro.restroName;
	P_total.textContent = "Total Amount : Rs " + soldbyRestro.total;
	summary.append(P_restroName, P_total);
	// summary.append();
}

window.addEventListener("load", function () {
	var summaryBtn = document.getElementById("summaryBtn");
	summaryBtn.addEventListener("click", showData);
});
