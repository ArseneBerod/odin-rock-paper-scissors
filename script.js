function getComputerChoice() {
	const choices = ["rock", "paper", "scissors"];
	return choices[Math.floor(Math.random() * choices.length)];
}

function getHumanChoice() {
	return prompt("Choose your move (Rock, Paper or Scissors)").toLowerCase();
}

function playGame(numberOfRounds) {
	let humanScore = 0;
	let computerScore = 0;

	function playRound(humanChoice, computerChoice) {
		if (humanChoice === computerChoice) {
			console.log("It's a draw");
			return;
		}

		const winsAgainst = {
			rock: "scissors",
			paper: "rock",
			scissors: "paper",
		}

		if(winsAgainst[humanChoice] === computerChoice) {
			humanScore++;
			console.log(`You won! ${humanChoice} beats ${computerChoice}`)
		} else {
			computerScore++;
			console.log(`You lose! ${computerChoice} beats ${humanChoice}`)
		}
	}

	while (humanScore < numberOfRounds && computerScore < numberOfRounds) {
		playRound(getHumanChoice(), getComputerChoice());
	}

	if (humanScore > computerScore) {
		console.log(
			`Congratulation, you won the match ${humanScore} to ${computerScore}`,
		);
	} else {
		console.log(`Sorry, you lose the match ${humanScore} to ${computerScore}`);
	}
}

playGame(5);
