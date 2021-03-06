const $point = document.querySelector('#point');
const $life = document.querySelector('#life');
const $bug = document.querySelector('#bug');
const $box = document.querySelector('.box');
const bugSpeed = 3000;

let point = 0;
let life = 10;
let timerId = 0;

function showBug(){
    $bug.style.display = 'block';
}

function hideBug(){
    $bug.style.display = 'none';
}

function move(){
    showBug();
    const x = getRandom($box.offsetWidth - $bug.offsetWidth);
    const y = getRandom($box.offsetHeight - $bug.offsetHeight);

    $bug.style.left = `${x}px`;
    $bug.style.top = `${y}px`;
}

function getRandom(max){
    return Math.floor(Math.random() * max);
}

function hit(event){
    point += 1;
    $point.innerHTML = point;
    hideBug();
    start();
    event.stopPropagation();
}

const minusLife = () => {
    life -= 1;
    $life.innerHTML = life;
    setTimeout(() => {
        if(life === 0){
            alert('gameover~');
            clearInterval(timerId);
        }
    })
}

function start(){
    clearInterval(timerId);
    timerId = setInterval(move, bugSpeed);
}

start();
$bug.addEventListener('click', minusLife);
$bug.addEventListener('click', hit);