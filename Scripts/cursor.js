const cursor = document.querySelector(".cursor");
let inside = false;
document.addEventListener("mousemove", (e) => {
	cursor.style.top = e.pageY + "px";
	cursor.style.left = e.pageX + "px";
});
function generateCircleBorders() {
	cursor.querySelectorAll("span").forEach((e) => e.remove());
	const spanEl1 = document.createElement("span");
	spanEl1.className = `cursor-border-1`;
	const spanEl2 = document.createElement("span");
	spanEl2.className = `cursor-border-2`;
	const spanEl3 = document.createElement("span");
	spanEl3.className = `cursor-border-3`;
	cursor.appendChild(spanEl1);
	cursor.appendChild(spanEl2);
	cursor.appendChild(spanEl3);
	setTimeout(() => {
		spanEl1.remove();
		spanEl2.remove();
		spanEl3.remove();
	}, 1000);
}
function handleCursor(gradient, action) {
	switch (action) {
		case "select":
			cursor.classList.add("expand");

			cursor.style.background = `linear-gradient(
				0deg,
				${gradient[0]} 31%,
				${gradient[1]} 100%
			)`;
			break;
	}
}
