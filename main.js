//Prompt user to select option
let selectOption = prompt("Rock, Paper or Scissors? (don't forget to spell it correctly)", "Rock");

const options = [
  {
    'number': '1',
    'selection': 'Rock'
  },
  {
    'number': '2',
    'selection': 'Paper'
  },
  {
    'number': '3',
    'selection': 'Scissors'
  }
]
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

console.log(decideWinner(selectOption, botSelection()));

