document.getElementById("setting").addEventListener("click", function () {
	document.querySelector(".settingPage").classList.remove("slideOutLeft");
	document.querySelector(".settingPage").style.display = "block";

	document.querySelector(".settingPage").classList.add("slideInLeft");
});
document.querySelector("#exit").addEventListener("click", function () {
	document.querySelector(".settingPage").classList.remove("slideInLeft");
	document.querySelector(".settingPage").classList.add("slideOutLeft");
	setTimeout(() => {
		document.querySelector(".settingPage").style.display = "none";
	}, 800);
});
function setBackground() {
	const index = Array.from(
		document.querySelectorAll(".background")
	).findIndex((e) => e.classList.contains("selected-bg"));
	settings.background = index;

	for (const property in backgrounds[index]) {
		document.querySelector("body").style[property] =
			backgrounds[index][property];
	}
}
document.querySelector(".apply-changes").addEventListener("click", function () {
	setBackground();

	const humanName = document.getElementById("humanInput").value;
	const computerName = document.getElementById("computerInput").value;
	settings.HumanName = humanName;
	settings.computerName = computerName;
	document.querySelector(".game").remove();
	init();
	document.querySelector(".settingPage").classList.remove("slideInLeft");
	document.querySelector(".settingPage").classList.add("slideOutLeft");
	setTimeout(() => {
		document.querySelector(".settingPage").style.display = "none";
	}, 800);
});
document
	.querySelector(".choose-difficulty")
	.addEventListener("click", function (e) {
		document
			.querySelector(".active-difficulty")
			.classList.remove("active-difficulty");
		e.target.classList.add("active-difficulty");
	});
document.querySelector(".backgrounds").addEventListener("click", function (e) {
	if (e.target.classList.contains("background")) {
		document.querySelector(".selected-bg").classList.remove("selected-bg");
		e.target.classList.add("selected-bg");
	}
});
