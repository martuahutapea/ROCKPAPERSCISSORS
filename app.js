const game = () => {
  let pScore = 0;
  let cScore = 0;

  const startGame = () => {
    const playButton = document.querySelector(".intro button");
    const introScreen = document.querySelector(".intro");
    const match = document.querySelector(".match");

    playButton.addEventListener("click", () => {
      introScreen.classList.add("fadeOut");
      match.classList.add("fadeIn");
    });
  };

  //   Play Match
  const playMatch = () => {
    const options = document.querySelectorAll(".options button");
    const playerHand = document.querySelector(".playerHand");
    const computerHand = document.querySelector(".computerHand");

    const hands = document.querySelectorAll(".hands img");

    hands.forEach((hand) => {
      hand.addEventListener("animationend", function () {
        this.classList.remove("shakePlayer", "shakeComputer");
      });
    });

    // Computer option that will random generate the number
    const computerOptions = ["rock", "paper", "scissors"];

    options.forEach((option) => {
      option.addEventListener("click", function () {
        // Computer Choice
        const computerNumber = Math.floor(Math.random() * 3);
        const computerChoice = computerOptions[computerNumber];

        // Animation
        playerHand.classList.add("shakePlayer");
        computerHand.classList.add("shakeComputer");

        // Update images after the animation
        setTimeout(() => {
          // Called the compare Hands
          compareHands(this.textContent, computerChoice);

          // Update images
          playerHand.src = `./assets/${this.textContent}.png`;
          computerHand.src = `./assets/${computerChoice}.png`;
        }, 2000);
      });
    });
  };

  // Update the score
  const updateScore = () => {
    const playerScore = document.querySelector(".playerScore p");
    const computerScore = document.querySelector(".computerScore p");

    playerScore.textContent = pScore;
    computerScore.textContent = cScore;
  };

  const compareHands = (playerChoice, computerChoice) => {
    // Update Text
    const winner = document.querySelector(".winner");
    // Checking the draw
    if (playerChoice === computerChoice) {
      winner.textContent = "Draw";
      return;
    }

    // Checking for rock
    if (playerChoice === "rock") {
      if (computerChoice === "scissors") {
        winner.textContent = "Win";
        pScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "Lose";
        cScore++;
        updateScore();
        return;
      }
    }

    // Checking for Paper
    if (playerChoice === "paper") {
      if (computerChoice === "scissors") {
        winner.textContent = "Lose";
        cScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "Win";
        pScore++;
        updateScore();
        return;
      }
    }

    // Checking for Scissors
    if (playerChoice === "scissors") {
      if (computerChoice === "rock") {
        winner.textContent = "Lose";
        cScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "Win";
        pScore++;
        updateScore();
        return;
      }
    }
  };

  //   Call the inner function
  startGame();
  playMatch();
  //   updateScore();
};

// Start the game
game();
