const squares = document.querySelectorAll('.square');
const mole = document.querySelectorAll('.mole');
const timeLeft = document.querySelector('#time-left');
const score = document.querySelector('#score');


let result = 0;
let hitPosition;
let currentTime=10;
let timerId= null;


//generates a random no.[0,8] and place the mole at that index in the box
function randomSquare(){
    squares.forEach(square =>{
        square.classList.remove('mole');
    });

    let randSquare = squares[Math.floor(Math.random()*9)];
    randSquare.classList.add('mole');

    hitPosition = randSquare.id; 
}

squares.forEach(square => {
    square.addEventListener('mousedown',()=>{
        if (square.id == hitPosition){
            result++;
            score.textContent = result;
            hitPosition=null
        }
    })
})

function moveMole(){
    
    timerId = setInterval(randomSquare, 500);
}


function countDown(){
    currentTime--;
    timeLeft.textContent=currentTime;
    
    if (currentTime == 0){
        clearInterval(timerId);
        clearInterval(countDownTimerId);
        alert('Game Over! Your final score is :'+result);
    }
    
}


// "setInterval(fn(), time in ms)" function repeats the fn() every time (in ms) until the id returned by it is cleared.
// let timerId = setInterval(fn(), 1000);
// clearInterval(timerId) ; --> stops the setInterval fn.
// it is asynchronous.
moveMole();
let countDownTimerId = setInterval(countDown, 1000); 

