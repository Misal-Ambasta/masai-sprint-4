restaurant = {};

function newRestro() {
	event.preventDefault();
	var newrestroName = document.getElementById("newrestroName").value;
	var newEmail = document.getElementById("newEmail").value;
	var password = document.getElementById("password").value;
	var address = document.getElementById("address").value;
	var address2 = document.getElementById("address2").value;
	var newmobile = document.getElementById("newmobile").value;
	var newCity = document.getElementById("newCity").value;
	var newState = document.getElementById("newState").value;
	var newZip = document.getElementById("newZip").value;
	var owner = document.getElementById("gridCheck").value;

	restaurant["Name"] = newrestroName;
	restaurant["email"] = newEmail;
	restaurant["password"] = password;
	restaurant["address"] = address;
	restaurant["address2"] = address2;
	restaurant["mobile"] = newmobile;
	restaurant["city"] = newCity;
	restaurant["state"] = newState;
	restaurant["newZip"] = newZip;
	restaurant["owner"] = owner;

	// localStorage.setItem("New", JSON.stringify(restaurant));
	console.log(restaurant);

	let append;

	if (localStorage.getItem("append") === null) {
		append = [];
	} else {
		append = JSON.parse(localStorage.getItem("append"));
	}

	append.push(restaurant);

	localStorage.setItem("append", JSON.stringify(append));

	console.log(append);

	renderDetails(restaurant);
}

function renderDetails(data) {
	var registerBox = document.getElementById("registerBox");
	var result = document.getElementById("result");
	var outerBox = document.createElement("div");

	var thankyou = document.createElement("h2");
	var welcome = document.createElement("h2");
	// var address= document.createElement
	thankyou.textContent = "Thank You for choosing our service !";

	welcome.textContent = "Welcome " + data.Name + " in our family";
	var para = document.createElement("p");
	para.textContent = "Below are the details:";

	var restroNameP = document.createElement("p");
	var addressP = document.createElement("p");
	var cityP = document.createElement("p");
	var emailP = document.createElement("p");
	var mobileP = document.createElement("p");
	var zipP = document.createElement("p");
	var stateP = document.createElement("p");

	console.log(thankyou, data);
	result.append(thankyou, welcome);

	restroNameP.textContent = "Name : " + data.Name;
	addressP.textContent = "Address : " + data.address + " " + data.address2;
	cityP.textContent = "City : " + data.city;
	emailP.textContent = "Email : " + data.email;
	mobileP.textContent = "Mobile :" + data.mobile;
	zipP.textContent = "Zip code :" + data.newZip;
	stateP.textContent = "State :" + data.state;

	outerBox.append(restroNameP, emailP, mobileP, addressP, cityP, stateP, zipP);
	outerBox.style.marginLeft = "15%";
	registerBox.remove();
	result.append(outerBox);
}

var addRestro = document.getElementById("addRestro");
addRestro.addEventListener("click", newRestro);
