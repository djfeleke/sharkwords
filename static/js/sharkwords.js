const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';

const WORDS = [
  'strawberry',
  'orange',
  'apple',
  'banana',
  'pineapple',
  'kiwi',
  'peach',
  'pecan',
  'eggplant',
  'durian',
  'peanut',
  'chocolate',
];

let numWrong = 0;

// Loop over the letters in `word` and create divs.
// The divs should be appended to the section with id="word-container".
//
// Use the following template string to create each div:
// `<div class="letter-box ${letter}"></div>`
//
const createDivsForChars = (word) => {
  const sectionElector = document.querySelector('#word-container');
  for (const letter of word) {
      sectionElector.insertAdjacentHTML("beforeend",
      `<div class="letter-box ${letter}"></div>`);
  }
};

// Loop over each letter in the alphabet and generate a button for each letter
// The buttons should be appended to the section with id="letter-buttons".
const generateLetterButtons = () => {
  const letterButtonSection = document.querySelector('#letter-buttons');
  for (const letter of ALPHABET) {
    letterButtonSection.insertAdjacentHTML('beforeend',
    `<button>${letter}</button>`);
  }
};

// Set the `disabled` property of `buttonEl` to true.
//
// `buttonEl` is an `HTMLElement` object.
//
const disableLetterButton = (buttonEl) => {
  // Replace this with your code
  buttonEl.setAttribute('disabled', true)
};

// This is a helper function we will use in the future
// It should return `true` if `letter` is in the word
// For now, you should test it out to make sure it works

const isLetterInWord = (letter, word) => {
  // Replace this with your code
  for (const char of word) {
    if (letter === char) {
      return true
    }
  }
  return false
  // loop over the word and check if letter exists in the word
  
};


// This is like if __name__ == '__main__' in Python
// It will be called when the file is run (because
// we call the function on line 66)
(function startGame() {
  // For now, we'll hardcode the word that the user has to guess
  // You can change this to choose a random word from WORDS once you
  // finish this lab but we hard code it so we know what the word is
  // and can tell if things look correct for this word
  const word = 'hello';

  createDivsForChars(word);

  generateLetterButtons();

  for (const button of document.querySelectorAll('button')) {
    button.addEventListener('click', () => {
      isLetterInWord(button.innerHTML, word) ? handleCorrectGuess(button.innerHTML) : handleWrongGuess();
      disableLetterButton(button);
    });
  }

  // add an event handler to handle clicking on the Play Again button
})();

const handleCorrectGuess = (letter) => {
  const correctLetterDiv = document.querySelectorAll(`.${letter}`)
  for (const div of correctLetterDiv) {
    div.innerHTML = letter
  }
    
}

const handleWrongGuess = () => {
  numWrong += 1;
  document.querySelector('img').setAttribute('src',`/static/images/guess${numWrong}.png`);
  if (numWrong >= 5) {
    for (const buttonElem of document.querySelectorAll('button')) {
      console.log('running while loop');
      disableLetterButton(buttonElem);
    }
    document.querySelector('#play-again').style.display = '';
  }
  // Replace this with your code
};

//  Reset game state. Called before restarting the game.
const resetGame = () => {
  window.location = '/sharkwords';
};


