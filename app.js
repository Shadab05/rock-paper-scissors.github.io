const game = () => 
{  
    let pScore = 0;
    let cScore = 0;

    //Start the game function
    const startGame = () => {
        const playBtn = document.querySelector(".intro button");
        const introScreen = document.querySelector(".intro");
        const match = document.querySelector(".match");
        const scr = document.querySelector(".score");

        playBtn.addEventListener("click", () => {
            introScreen.classList.add("fadeOut");
            match.classList.add("fadeIn");
            scr.classList.add("fadeIn");
        });
    };

    //Play match
    const playMatch = () => {
        const options = document.querySelectorAll(".options button");
        const playerHand = document.querySelector(".player-hand");
        const computerHand = document.querySelector(".computer-hand");
        const hands = document.querySelectorAll(".hands img");

        hands.forEach(hand => {
            hand.addEventListener("animationend", function()
            {
                this.style.animation = "";
            });
        });
        
        //Computer Options
        const computerOptions = ['Rock', 'Paper', 'Scissors'];

        options.forEach(option => {
      option.addEventListener("click", function() {
        playerHand.src = `./images/Rock.png`;
        computerHand.src = `./images/Rock.png`;
        //Computer Choice
        const computerNumber = Math.floor(Math.random() * 3);
        const computerChoice = computerOptions[computerNumber];

        setTimeout(() => {
          //Here is where we call compare hands
          compareHands(this.textContent, computerChoice);
          //Update Images
          playerHand.src = `./images/${this.textContent}.png`;
          computerHand.src = `./images/${computerChoice}.png`;
        }, 2000);
        //Animation
        playerHand.style.animation = "shakePlayer 2s ease";
        computerHand.style.animation = "shakeComputer 2s ease";
      });
    });
  };

    const updateScore = () => {
        const playerScore = document.querySelector(".player-score p");
        const computerScore = document.querySelector(".computer-score p");
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
    }

    const compareHands = (playerChoice, computerChoice) => {
        //Update text
        const winner = document.querySelector(".winner");
        //Checking for a tie
        if(playerChoice.toLowerCase() === computerChoice.toLowerCase())
        {
            winner.textContent = "It is a tie";
            return;
        }
        //Checking for a rock
        if(playerChoice.toLowerCase() === 'rock')
        {
            if(computerChoice.toLowerCase() === 'scissors'){
                winner.textContent = 'Player Wins';
                pScore++;
                updateScore();
                return;
            }
            else{
                winner.textContent = 'Computer Wins';
                cScore++;
                updateScore();
                return;
            }
        }

        if(playerChoice.toLowerCase() === 'paper')
        {
            if(computerChoice.toLowerCase() === 'scissors'){
                winner.textContent = 'Computer Wins';
                cScore++;
                updateScore();
                return;
            }
            else{
                winner.textContent = 'Player Wins';
                pScore++;
                updateScore();
                return;
            }
        }

        if(playerChoice.toLowerCase() === 'scissors')
        {
            if(computerChoice.toLowerCase() === 'rock'){
                winner.textContent = 'Computer Wins';
                cScore++;
                updateScore();
                return;
            }
            else{
                winner.textContent = 'Player Wins';
                pScore++;
                updateScore();
                return;
            }
        }
    };

    // Calling all the inner functions
    startGame();
    playMatch();
};

// Calling the game function to execute the prog
game();
