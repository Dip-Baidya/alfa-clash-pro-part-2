// function play() {
//     // Home Section Hidden
//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden');

//     // Show the Playground Section
//     const playGroundSection = document.getElementById('play-ground');
//     playGroundSection.classList.remove('hidden');
// }


function handleKeyboardUpevent(event) {
    const playerPressed = event.key;

    // get the expected to press
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAplphabet = currentAlphabet.toLowerCase();

    // Checked mattched or not

    if (playerPressed === expectedAplphabet) {
        console.log('You get a point');
    }
    else (
        console.log('You lose a point')
    )

}

document.addEventListener('keyup', handleKeyboardUpevent);


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
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame()
}