var restro = localStorage.getItem("found");
console.log(restro);
// var search = localStorage.getItem("search");

restro = JSON.parse(restro) || [];
// search = JSON.parse(search) || [];
soldbyRestro = {};
console.log("Welcome to Restro Page");
console.log(restro.name);

var addName = document.getElementById("addName");
var addAddress = document.getElementById("addAddress");

addName.append(restro.name);
addAddress.append(restro.address);

var Dishname = document.querySelectorAll("h5");

var show = document.getElementById("show"); // Show inside Model
function getTotal() {
	var sum = 0;
	var cost = document.querySelectorAll("input");
	var paraSum = document.getElementById("totalsum");

	for (var i = 0; i < cost.length; i++) {
		if (cost[i].checked == true) {
			sum = sum + Number(cost[i].value);

			ordermenu(Dishname[i].textContent, cost[i].value);
		}
		console.log(sum);
	}
	// paraSum.textContent = " Totat Amount : Rs " + sum;
	soldbyRestro["restroName"] = restro.name;
	soldbyRestro["total"] = sum;
	localStorage.setItem("soldbyRestro", JSON.stringify(soldbyRestro));

	var line = document.createElement("hr");

	show.append(line, "Total Payable : Rs " + sum);
}

function ordermenu(Dishname, cost) {
	var item = document.createElement("p");
	var cost_itm = document.createElement("p");
	item.textContent = Dishname + " : Rs :" + cost;
	show.setAttribute("class", "text-center");
	console.log(item);
	show.append(item);
}

window.addEventListener("load", function () {
	var calculate = document.getElementById("calculate");
	calculate.addEventListener("click", getTotal);
});
