// function play() {
//     // Home Section Hidden
//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden');

//     // Show the Playground Section
//     const playGroundSection = document.getElementById('play-ground');
//     playGroundSection.classList.remove('hidden');
// }

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