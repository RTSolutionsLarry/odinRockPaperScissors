//Prompt user to select option
//let selectOption = prompt("Rock, Paper or Scissors? (don't forget to spell it correctly)", "Rock");

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
    imageBot.classList.add('bottomImages');
    console.log(imageUser);
    //makes user image clickable and runs the decideWinner function
    imageUser.addEventListener("click", (event) => {
      setTimeout(function() {
        const winDecision = decideWinner('Rock',botSelection());
        displayResults(winDecision);
      }, 2000)

    });
    imageUser.src = o.imageUrl;
    imageBot.src = o.imageUrl;
    i++;
    ImageContainerUser.appendChild(imageUser);
    imageContainerBot.appendChild(imageBot);
  }
}

//Bot selects option at random
const botSelection = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  return options[randomNumber].selection;
}

//Logic for deciding winner. Returns tie,user,bot or instructionsMessage
const decideWinner = (userDecision, botDecision) => {
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
      alert('You win!');
      break;
    case 'bot':
      alert('You lost')
      break;
    case 'tie':
      alert('Tie... dang')
      break;    
  }
}

optionSetup(options);
