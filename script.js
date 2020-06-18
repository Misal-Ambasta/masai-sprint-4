search = {};
found = {};
var restro = localStorage.getItem("append");

restro = JSON.parse(restro) || [];
console.log(restro);

function getName() {
	var searchName = document.getElementById("restaurant").value;
	search["searchName"] = searchName;
	console.log(searchName, search);
	localStorage.setItem("search", JSON.stringify(search));

	for (var i = 0; i < restro.length; i++) {
		if (restro[i].Name == search.searchName) {
			console.log("Matched");
			found["name"] = restro[i].Name;
			found["address"] = restro[i].address;
			console.log(found);

			localStorage.setItem("found", JSON.stringify(found));
			// matched(restro[i]);
			location.href = "Restropage.html";
		}
		// else {
		// 	alert("Sorry! This resturant is not avaliable here.");
		// }
	}
}

function account() {
	console.log("account");
	var Inputemail = document.getElementById("Inputemail").value;
	var Inputpassword = document.getElementById("Inputpassword").value;
	console.log(Inputemail, Inputpassword);
	for (var i = 0; i < restro.length; i++) {
		if (restro[i].email == Inputemail && restro[i].password == Inputpassword) {
			console.log("right details");
			location.href = "account.html";
		} else if (Inputemail == "admin" && Inputpassword == "admin") {
			location.href = "admin.html";
		}
	}
}

window.addEventListener("load", function () {
	var searchBtn = document.getElementById("button-addon2");
	searchBtn.addEventListener("click", getName);
	var login = document.getElementById("login");
	login.addEventListener("click", account);
});
