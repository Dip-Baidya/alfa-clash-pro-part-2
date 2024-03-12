// function play() {
//     // Home Section Hidden
//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden');

//     // Show the Playground Section
//     const playGroundSection = document.getElementById('play-ground');
//     playGroundSection.classList.remove('hidden');
// }


function handleKeyboardKeyUpEvent(event) {
    const playerPressed = event.key;

    // Stop the game if press 'Esc'

    if (playerPressed === 'Escape') {
        gameOver();
    }

    // get the expected to press
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAplphabet = currentAlphabet.toLowerCase();

    // Checked mattched or not

    if (playerPressed === expectedAplphabet) {


        const currentScore = getTextElementValueById('current-score');
        const updatedScore = currentScore + 1;
        setTextElementValueById('current-score', updatedScore);

        // // Update Score:
        // // 1. Get the current score
        // const currentScoreElement = document.getElementById('current-score');
        // const currentScoreText = currentScoreElement.innerText;
        // const currentScore = parseInt(currentScoreText);

        // // 2. Increase the score by 1
        // const newScore = currentScore + 1;

        // // 3. Show the updated score
        // currentScoreElement.innerText = newScore;

        // start a new round
        removeBackgroundColorById(expectedAplphabet);
        continueGame();
    }
    else {

        const currentLife = getTextElementValueById('current-life');
        const updatedLife = currentLife - 1;
        setTextElementValueById('current-life', updatedLife);



        // step 1 get current life number

        // const currentLifeElement = document.getElementById('current-life');
        // const currentLifeText = currentLifeElement.innerText;
        // const curerentLife = parseInt(currentLifeText);

        // // step 2 reduce the life count
        // const newLife = curerentLife - 1;

        // // Step 3 Display the life count
        // currentLifeElement.innerText = newLife;

        if (updatedLife === 0) {
            gameOver();
        }

    }




}

document.addEventListener('keyup', handleKeyboardKeyUpEvent);


function continueGame() {
    // step-1: Generate a random alphabet
    const alphabet = getRandomAlphabet();

    // set randomly genarated alphabet  to the screen (Show it)
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    // set backGround color
    setBackgroundColorById(alphabet);
}


function play() {
    // Hide Everything show only the playground
    hideElementById('home-screen');
    hideElementById('final-score')
    showElementById('play-ground');

    // reset score and life
    setTextElementValueById('current-life', 5);
    setTextElementValueById('current-score', 0);
    continueGame()
}
function gameOver() {

    hideElementById('play-ground');
    showElementById('final-score');

    // update final score
    // 1. get the final score

    const lastScore = getTextElementValueById('current-score');
    // console.log(lastScore)
    setTextElementValueById('last-score', lastScore);

    // clear the last selected alphabet highlight
    const currentAlphabet = getElementTextById('current-alphabet');
    removeBackgroundColorById(currentAlphabet)
}