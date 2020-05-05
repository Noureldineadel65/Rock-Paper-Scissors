const settings = {
	HumanName: "",
	computerName: "",
	background: 5,
	difficulty: "basic",
};
// const selectors = `<div class="game animated bounceIn" style="animation-delay: .5s">
// <div class="pentagon">
//   <img src="./images/bg-pentagon.svg" alt="">
// </div>
// <div class="selections">
//   <div class="scissor select" data-id="scissor" data-gradient="hsl(39, 89%, 49%)-hsl(40, 84%, 53%)">
//     <div class="circle"></div>
//     <div class="icon">
//       <img src="./images/icon-scissors.svg" alt="">

//     </div>

//   </div>
//   <div class="spock select" data-id="spock" data-gradient="hsl(189, 59%, 53%)-hsl(189, 58%, 57%)">
//     <div class="circle"></div>
//     <div class="icon">
//       <img src="./images/icon-spock.svg" alt="">

//     </div>
//   </div>
//   <div class="lizard select" data-id="lizard" data-gradient="hsl(261, 73%, 60%)-hsl(261, 72%, 63%)">
//     <div class="circle"></div>
//     <div class="icon">
//       <img src="./images/icon-lizard.svg" alt="">

//     </div>
//   </div>
//   <div class="rock select" data-id="rock" data-gradient="hsl(349, 71%, 52%)-hsl(349, 70%, 56%)">
//     <div class="circle"></div>
//     <div class="icon">
//       <img src="./images/icon-rock.svg" alt="">

//     </div>
//   </div>
//   <div class="paper select" data-id="paper" data-gradient="hsl(230, 89%, 62%)-hsl(230, 89%, 65%)">
//     <div class="circle"></div>
//     <div class="icon">
//       <img src="./images/icon-paper.svg" alt="">

//     </div>
//   </div>
// </div>

// </div>`;
function loadSelectors() {
	if (settings.difficulty === "basic") {
		return `<div class="game animated bounceIn triangle" style="animation-delay: .5s">
		<div class="pentagon">
		  <img src="./images/bg-triangle.svg" alt="" class="shape">
		</div>
		<div class="selections">
		  <div class="scissor select" data-id="scissor" data-gradient="hsl(39, 89%, 49%)-hsl(40, 84%, 53%)">
			<div class="circle"></div>
			<div class="icon">
			  <img src="./images/icon-scissors.svg" alt="">
		
			</div>
		
		  </div>
		
		  <div class="rock select" data-id="rock" data-gradient="hsl(349, 71%, 52%)-hsl(349, 70%, 56%)">
			<div class="circle"></div>
			<div class="icon">
			  <img src="./images/icon-rock.svg" alt="">
		
			</div>
		  </div>
		  <div class="paper select" data-id="paper" data-gradient="hsl(230, 89%, 62%)-hsl(230, 89%, 65%)">
			<div class="circle"></div>
			<div class="icon">
			  <img src="./images/icon-paper.svg" alt="">
		
			</div>
		  </div>
		</div>
		
		</div>`;
	} else {
		return `<div class="game animated bounceIn" style="animation-delay: .5s">
		 <div class="pentagon">
		   <img src="./images/bg-pentagon.svg" alt="" class="shape">
		 </div>
		 <div class="selections">
		   <div class="scissor select" data-id="scissor" data-gradient="hsl(39, 89%, 49%)-hsl(40, 84%, 53%)">
		     <div class="circle"></div>
		     <div class="icon">
		       <img src="./images/icon-scissors.svg" alt="">
		
		     </div>
		
		   </div>
		   <div class="spock select" data-id="spock" data-gradient="hsl(189, 59%, 53%)-hsl(189, 58%, 57%)">
		     <div class="circle"></div>
		     <div class="icon">
		       <img src="./images/icon-spock.svg" alt="">
		
		     </div>
		   </div>
		   <div class="lizard select" data-id="lizard" data-gradient="hsl(261, 73%, 60%)-hsl(261, 72%, 63%)">
		     <div class="circle"></div>
		     <div class="icon">
		       <img src="./images/icon-lizard.svg" alt="">
		
		     </div>
		   </div>
		   <div class="rock select" data-id="rock" data-gradient="hsl(349, 71%, 52%)-hsl(349, 70%, 56%)">
		     <div class="circle"></div>
		     <div class="icon">
		       <img src="./images/icon-rock.svg" alt="">
		
		     </div>
		   </div>
		   <div class="paper select" data-id="paper" data-gradient="hsl(230, 89%, 62%)-hsl(230, 89%, 65%)">
		     <div class="circle"></div>
		     <div class="icon">
		       <img src="./images/icon-paper.svg" alt="">
		
		     </div>
		   </div>
		 </div>
		
		 </div>`;
	}
}
const generateResult = (firstElm, secondElm, decision) => {
	firstElm.classList.add("result-div");
	secondElm.classList.add("result-div");

	const result = document.createElement("div");
	result.className = "result animated bounceIn";
	const youPicked = document.createElement("div");
	youPicked.className = "you-picked";
	youPicked.textContent = `${
		settings.HumanName ? settings.HumanName : "You"
	} Picked`;
	const human = document.createElement("div");
	human.className = "human";
	human.appendChild(firstElm);
	const you = document.createElement("div");
	you.className = "you";
	you.innerHTML = `<p>${decision}</p>
    <div class="btn-white" id="playAgain">Play Again</div>`;
	const theyPicked = document.createElement("div");
	theyPicked.className = "they-picked";
	theyPicked.textContent = `${
		settings.computerName ? settings.computerName : "Computer"
	} picked`;
	const computer = document.createElement("div");
	computer.className = "computer";
	computer.appendChild(secondElm);
	result.appendChild(youPicked);
	result.appendChild(you);
	result.appendChild(theyPicked);

	if (decision.split(" ")[1] === "win") {
		const circleEffect = document.createElement("div");
		circleEffect.className = "circle-effect";
		circleEffect.appendChild(document.createElement("div"));
		circleEffect.appendChild(document.createElement("div"));
		circleEffect.appendChild(document.createElement("div"));
		human.appendChild(circleEffect);
	} else if (decision.split(" ")[1] === "lose") {
		const circleEffect = document.createElement("div");
		circleEffect.className = "circle-effect";
		circleEffect.appendChild(document.createElement("div"));
		circleEffect.appendChild(document.createElement("div"));
		circleEffect.appendChild(document.createElement("div"));
		computer.appendChild(circleEffect);
	}
	result.appendChild(human);
	result.appendChild(computer);

	return result;
	// 	return `<div class="result animated bounceIn">
	//     <div class="you-picked">You Picked</div>
	//     <div class="human">

	//     </div>
	//     <div class="you">
	//       <p>${result}</p>
	//       <div class="btn-white" id="playAgain">Play Again</div>
	//     </div>
	//     <div class="they-picked">The house picked</div>
	//     <div class="computer">
	//     </div>
	//   </div>`;
};
let choiceMaker = {
	scissor: {
		scissor: "tie",
		spock: "lose",
		lizard: "win",
		rock: "lose",
		paper: "win",
	},
	spock: {
		scissor: "win",
		spock: "tie",
		lizard: "lose",
		rock: "win",
		paper: "lose",
	},
	lizard: {
		scissor: "lose",
		spock: "win",
		lizard: "tie",
		rock: "lose",
		paper: "win",
	},
	rock: {
		scissor: "win",
		spock: "lose",
		lizard: "win",
		rock: "tie",
		paper: "lose",
	},
	paper: {
		scissor: "lose",
		spock: "win",
		lizard: "lose",
		rock: "win",
		paper: "tie",
	},
};
const backgrounds = {
	0: {
		background:
			"radial-gradient(circle farthest-side at 0% 50%, #fb1 23.5%, rgba(240, 166, 17, 0) 0) 21px 30px, radial-gradient(circle farthest-side at 0% 50%, #b71 24%, rgba(240, 166, 17, 0) 0) 19px 30px, linear-gradient(#fb1 14%, rgba(240, 166, 17, 0) 0, rgba(240, 166, 17, 0) 85%, #fb1 0) 0 0, linear-gradient(150deg, #fb1 24%, #b71 0, #b71 26%, rgba(240, 166, 17, 0) 0, rgba(240, 166, 17, 0) 74%, #b71 0, #b71 76%, #fb1 0) 0 0, linear-gradient(30deg, #fb1 24%, #b71 0, #b71 26%, rgba(240, 166, 17, 0) 0, rgba(240, 166, 17, 0) 74%, #b71 0, #b71 76%, #fb1 0) 0 0, linear-gradient(90deg, #b71 2%, #fb1 0, #fb1 98%, #b71 0%) 0 0 #fb1",
		backgroundSize: "40px 60px",
	},
	1: {
		background:
			"radial-gradient(black 15%, transparent 16%) 0 0, radial-gradient(black 15%, transparent 16%) 8px 8px, radial-gradient(rgba(255, 255, 255, 0.1) 15%, transparent 20%) 0 1px, radial-gradient(rgba(255, 255, 255, 0.1) 15%, transparent 20%) 8px 9px",
		backgroundSize: "16px 16px",
		backgroundColor: "282828",
	},
	2: {
		backgroundImage:
			"linear-gradient(30deg, #445 12%, transparent 12.5%, transparent 87%, #445 87.5%, #445), linear-gradient(150deg, #445 12%, transparent 12.5%, transparent 87%, #445 87.5%, #445), linear-gradient(30deg, #445 12%, transparent 12.5%, transparent 87%, #445 87.5%, #445), linear-gradient(150deg, #445 12%, transparent 12.5%, transparent 87%, #445 87.5%, #445), linear-gradient(60deg, #99a 25%, transparent 25.5%, transparent 75%, #99a 75%, #99a), linear-gradient(60deg, #99a 25%, transparent 25.5%, transparent 75%, #99a 75%, #99a)",
		backgroundColor: "#556",
		backgroundSize: "80px 140px",
		backgroundPosition: "0 0, 0 0, 40px 70px, 40px 70px, 0 0, 40px 70px",
	},
	3: {
		backgroundImage:
			"linear-gradient(335deg, #b00 23px, transparent 23px), linear-gradient(155deg, #d00 23px, transparent 23px), linear-gradient(335deg, #b00 23px, transparent 23px), linear-gradient(155deg, #d00 23px, transparent 23px)",
		backgroundColor: "silver",
		backgroundSize: "58px 58px",
		backgroundPosition: "0px 2px, 4px 35px, 29px 31px, 34px 6px",
	},
	4: {
		background:
			"linear-gradient(135deg, #708090 21px, #d9ecff 22px, #d9ecff 24px, transparent 24px, transparent 67px, #d9ecff 67px, #d9ecff 69px, transparent 69px), linear-gradient(225deg, #708090 21px, #d9ecff 22px, #d9ecff 24px, transparent 24px, transparent 67px, #d9ecff 67px, #d9ecff 69px, transparent 69px) 0 64px",
		backgroundColor: "#708090",
		backgroundSize: "64px 128px",
	},
	5: {
		background: "radial-gradient(#141539, #1f3756)",
	},
};
