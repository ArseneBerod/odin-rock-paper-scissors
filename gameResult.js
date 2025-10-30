export function gameResultElement(result, callback) {
	const overlay = document.createElement("div");
	overlay.classList.add("overlay");

	const gameResult = document.createElement("div");
	gameResult.classList.add("game-result");

	const resultText = document.createElement("div");
	resultText.classList.add("text-result");
	if (result === "won") {
		resultText.textContent = "You won!";
	} else {
		resultText.textContent = "You lost!";
	}

	const playAgainButton = document.createElement("button");
	playAgainButton.classList.add("play-again");
	playAgainButton.textContent = "Play again?";
	playAgainButton.addEventListener("click", () => {
		callback();
		overlay.remove();
	});

	gameResult.appendChild(resultText);
	gameResult.appendChild(playAgainButton);
	overlay.appendChild(gameResult);
	return overlay;
}
