let humanScore = 0;
let computerScore = 0;
let gameRound = 0;

const options = [
  {
    'number': '1',
    'selection': 'Rock',
    'imageUrl': 'images/rock.jpg'
  },
  {
    'number': '2',
    'selection': 'Paper', 
    'imageUrl': 'images/paper.jpeg'
  },
  {
    'number': '3',
    'selection': 'Scissors',
    'imageUrl': 'images/scissors.jpg'
  }
]

const optionSetup = (optionsToPick) => {
  const ImageContainerUser = document.getElementById('userImageContainer');
  const imageContainerBot = document.getElementById('botImageContainer');
  let i = 0;
  for (let o of optionsToPick) {
    //creates img elements for bot and user
    const imageUser = document.createElement('img');
    const imageBot = document.createElement('img');
    imageUser.classList.add('topImages');
    imageUser.setAttribute('id', o.selection);
    imageBot.classList.add('bottomImages');
    //makes user image clickable and runs the playRound function
    imageUser.addEventListener("click", (event) => {
      setTimeout(function() {
        const winDecision = playRound(event.target.id,getComputerChoice());
        displayResults(winDecision);
        displayScore();
      }, 1000)

    });
    imageUser.src = o.imageUrl;
    imageBot.src = o.imageUrl;
    i++;
    ImageContainerUser.appendChild(imageUser);
    imageContainerBot.appendChild(imageBot);
  }
}

//Bot selects option at random
const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  return options[randomNumber].selection;
}

//Logic for deciding winner. Returns tie,user,bot or instructionsMessage
const playRound = (userDecision, botDecision) => {
  let decision;
  switch (userDecision) {
    case botDecision:
      decision = 'tie';
      break;
    case 'Rock':
      if (botDecision == 'Scissors') {
        decision = 'user';
        break;
      } else {
        decision = 'bot';
        break;
      }
    case 'Scissors':
    if (botDecision == 'Paper') {
      decision = 'user';
      break;
    } else {
      decision = 'bot';
      break;
    }
    case 'Paper':
    if (botDecision == 'Rock') {
      decision = 'user';
      break;
    } else {
      decision = 'bot';
      break;
    }
    default:
      decision = 'instructionsMessage'
  }
  
  return decision;
}

const displayResults = (winner) => {
  switch (winner) {
    case 'user':
      humanScore = humanScore + 1;
      alert('You win!');
      gameRound = gameRound + 1;
      break;
    case 'bot':
      computerScore = computerScore + 1;      
      alert('You lost')
      gameRound = gameRound + 1;
      break;
    case 'tie':
      alert('Tie... dang')
      gameRound = gameRound + 1;      
      break;    
  }

  if (humanScore === 5 || computerScore === 5) {
    alert(`Final Score: Human - ${humanScore} Computer - ${computerScore}`);
    humanScore = 0;
    computerScore = 0;
    gameRound = 0;
  }
}

const displayScore = () => {
  let humanScoreText = document.getElementById('humanScore');
  let computerScoreText = document.getElementById('computerScore');
  humanScoreText.textContent = `Human Score: ${humanScore}`;
  computerScoreText.textContent = `Computer Score: ${computerScore}`;
}

optionSetup(options);

