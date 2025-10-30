import { gameResultElement } from "./gameResult.js";

const media = {
	rock: "./images/rock.svg",
	paper: "./images/paper.svg",
	scissors: "./images/scissors.svg",
	questionMark: "./images/question-mark.svg",
};

const NB_ROUND = 5;

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
	const choices = ["rock", "paper", "scissors"];
	return choices[Math.floor(Math.random() * choices.length)];
}

function updateScore(player, newScore) {
	const score = document.querySelector(`${player} .score`);
	score.textContent = newScore;
}

function updateGameArea(humanChoice, computerChoice) {
	const humanChoiceImg = document.querySelector("#choice1");
	humanChoiceImg.setAttribute("src", media[humanChoice]);
	const computerChoiceImg = document.querySelector("#choice2");
	computerChoiceImg.setAttribute("src", media[computerChoice]);
}

function resetScore() {
	humanScore = 0;
	computerScore = 0;
	updateScore("#player1", 0);
	updateScore("#player2", 0);
}
function resetGameArea() {
	updateGameArea("questionMark", "questionMark");
	updateRoundResult("");
}
function resetGame() {
	resetScore();
	resetGameArea();
}

function updateRoundResult(text) {
	const roundResultElement = document.querySelector(".round-result");
	roundResultElement.textContent = text;
}

function playRound(humanChoice, computerChoice) {
	updateGameArea(humanChoice, computerChoice);
	if (humanChoice === computerChoice) {
		console.log("It's a draw");
		updateRoundResult("It's a draw");
		return;
	}

	const winsAgainst = {
		rock: "scissors",
		paper: "rock",
		scissors: "paper",
	};

	if (winsAgainst[humanChoice] === computerChoice) {
		updateScore("#player1", ++humanScore);
		console.log(`You won! ${humanChoice} beats ${computerChoice}`);
		updateRoundResult(`You won! ${humanChoice} beats ${computerChoice}`);
	} else {
		updateScore("#player2", ++computerScore);
		console.log(`You lost! ${computerChoice} beats ${humanChoice}`);
		updateRoundResult(`You lost! ${computerChoice} beats ${humanChoice}`);
	}

	gameOver(NB_ROUND);
}

function gameOver(numberOfRounds) {
	const maxRound = Math.round(numberOfRounds / 2);
	if (humanScore >= maxRound) {
		document.body.appendChild(gameResultElement("won", resetGame));
	} else if (computerScore >= maxRound) {
		document.body.appendChild(gameResultElement("lost", resetGame));
	}
}

const rockButton = document.querySelector("button.rock");
rockButton.addEventListener("click", () => {
	console.log("rock");
	playRound("rock", getComputerChoice());
});
const paperButton = document.querySelector("button.paper");
paperButton.addEventListener("click", () => {
	console.log("paper");
	playRound("paper", getComputerChoice());
});
const scissorsButton = document.querySelector("button.scissors");
scissorsButton.addEventListener("click", () => {
	console.log("scissors");
	playRound("scissors", getComputerChoice());
});
