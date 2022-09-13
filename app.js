const gameSquares = document.querySelectorAll('.gameSquare');
const mole = document.querySelector('.mole');
let timeLeft = document.querySelector('#timeLeft');
let score = document.querySelector('#score');
let result = 0;
let hitMole;
let currentTime = 60;


randomSquare = () => {
    gameSquares.forEach(square => {
        square.classList.remove('mole')
    })

    let randomSquare = gameSquares[Math.floor(Math.random() * 9)];
    console.log(randomSquare);
    console.log()
    randomSquare.classList.add('mole');
    hitMole = randomSquare.id;
}

gameSquares.forEach(square => {
    square.addEventListener('mousedown', () => {
        if (square.id == hitMole) {
            result++;
            score.innerHTML = result;
            hitMole = null;
        }
    })
})

function moleyMovement() {
    //Using a timer let to declare it later to stop moles movement 
    let timerId = null;
    timerId = setInterval(randomSquare, 1000);
}

moleyMovement();

function countDown() {
    currentTime--
    timeLeft.textContent = currentTime;
    if (currentTime == 0) {
        clearInterval(countDownTimerId);
        clearInterval(timerId)
        alert('GAME OVER || Your final score is ' + result);
    }
}

let countDownTimerId = setInterval(countDown, 1000);