function changeTheme() {
	const theme =
		settings.background === 5 || settings.background === 1
			? "black"
			: "white";

	if (theme === "white") {
		document.querySelector("body").classList.add("white");
	} else {
		document.querySelector("body").classList.remove("white");
	}
	if (settings.difficulty === "basic") {
		document.querySelector(".img-rule").src = "./images/image-rules.svg";

		document.querySelector(".logo-bonus").src =
			theme === "black" ? "./images/logo.svg" : "./images/logo-white.svg";
		document.querySelector(".shape").src =
			theme === "black"
				? "./images/bg-triangle.svg"
				: "./images/bg-triangle-white.svg";
	} else {
		document.querySelector(".img-rule").src =
			"./images/image-rules-bonus.svg";
		document.querySelector(".logo-bonus").src =
			theme === "black"
				? "./images/logo-bonus.svg"
				: "./images/logo-bonus-white.svg";
		document.querySelector(".shape").src =
			theme === "black"
				? "./images/bg-pentagon.svg"
				: "./images/bg-pentagon-white.svg";
	}
}
function init() {
	const container = document.querySelector(".container");

	container.innerHTML += loadSelectors();

	let choices =
		settings.difficulty === "advanced"
			? ["scissor", "spock", "lizard", "rock", "paper"]
			: ["scissor", "rock", "paper"];
	changeTheme();

	Element.prototype.remove = function () {
		if (this !== null) {
			this.parentElement.removeChild(this);
		}
	};

	let humanChoice = "";
	let computerChoice = "";
	function handleClickAnimation() {
		document.addEventListener("click", () => {
			cursor.classList.add("clicked");
			generateCircleBorders();
			setTimeout(() => {
				cursor.style.animation = "";
			}, 800);
		});
		document
			.querySelectorAll(".game .selections .select")
			.forEach((element) => {
				element.addEventListener("click", () => handleClick(element));
				element.addEventListener("mousedown", () =>
					element.classList.add("down")
				);
				element.addEventListener("mouseleave", () =>
					element.classList.remove("down")
				);
				element.addEventListener("mouseup", () =>
					element.classList.remove("down")
				);
				element.addEventListener("mouseenter", (e) => {
					handleCursor(
						e.target.dataset.gradient.split("-"),
						"select"
					);
				});
				element.addEventListener("mouseleave", (e) => {
					cursor.style.background = `transparent`;
					cursor.classList.remove("expand");
				});
			});
	}
	handleClickAnimation();
	function handlePlayAgain() {
		document.querySelector(".result").classList.remove("bounceIn");
		document.querySelector(".result").classList.add("bounceOut");
		setTimeout(() => {
			document.querySelector(".result").remove();
			container.innerHTML += loadSelectors();
			changeTheme();
			handleClickAnimation();
		}, 1000);
	}
	function setUpEventsAgain() {
		document.getElementById("rules").addEventListener("click", handleRules);
		document.getElementById("close").addEventListener("click", handleRules);
		document
			.getElementById("playAgain")
			.addEventListener("click", handlePlayAgain);
	}
	function handleClick(element) {
		computerChoice = choices[Math.floor(Math.random() * choices.length)];
		humanChoice = element.dataset.id;
		const result = choiceMaker[humanChoice][computerChoice];
		let computerElement = document.querySelector(
			`.select[data-id="${computerChoice}"]`
		);

		let humanElement = document.querySelector(
			`.select[data-id="${humanChoice}"]`
		);
		console.log(computerChoice);
		computerElement.classList.remove("select");

		document.querySelector(".game").style.animationDelay = "0s";
		document.querySelector(".game").classList.remove("bounceIn");
		document.querySelector(".game").classList.add("bounceOut");
		updateScore(result);
		setTimeout(() => {
			document.querySelector(".game").remove();
			document.querySelectorAll(".animated").forEach((e) => {
				if (!e.classList.contains("settingPage")) {
					e.classList.remove("animated");
				}
			});

			if (humanElement.dataset.id === computerElement.dataset.id) {
				document
					.querySelector("body")
					.appendChild(
						generateResult(
							humanElement,
							computerElement,
							result === "win" || result === "lose"
								? `You ${result}`
								: "It's a tie"
						)
					);
				document.querySelector(
					".human"
				).innerHTML = document.querySelector(".computer").innerHTML;
			} else {
				document
					.querySelector("body")
					.appendChild(
						generateResult(
							humanElement,
							computerElement,
							result === "win" || result === "lose"
								? `you ${result}`
								: "It's a tie"
						)
					);
			}

			document
				.querySelector(".human div:first-of-type")
				.removeEventListener("mousedown", () =>
					element.classList.add("down")
				),
				true;

			setUpEventsAgain();
		}, 1000);
	}
	function add(e) {
		e.style.transform = `scale(.8)`;
	}
	function updateScore(result) {
		switch (result) {
			case "win":
				document.getElementById("score").innerHTML =
					Number(document.getElementById("score").innerHTML) + 1;
				break;
			case "lose":
				document.getElementById("score").innerHTML =
					Number(document.getElementById("score").innerHTML) - 1;
				break;
			case "tie":
				document.getElementById("score").innerHTML = Number(
					document.getElementById("score").innerHTML
				);
				break;
		}
	}
}
function handleRules() {
	const elm = document.querySelector(".rules");
	elm.classList.toggle("closed");
	elm.classList.toggle("opened");
}
window.onload = () => {
	init();

	document.getElementById("rules").addEventListener("click", handleRules);
	document.getElementById("close").addEventListener("click", handleRules);
};
