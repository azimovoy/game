let btn = document.querySelector('.btn'),
    input = document.querySelector('.input'),
    timeOut = document.querySelector('.time'),
    gameBox = document.querySelector('.game__block'),
    time = 0,
    score = 0,
    interval = 0;
    size = random(20,100);
    
btn.addEventListener('click', (event) => {
    event.preventDefault()
    if(input.value > 4) {
        time = input.value
        input.value = ''
        score = 0
        clearInterval(interval)
        start()
        let result = document.querySelector('.result')
        if(result) {
            result.style.display = 'none'
        }
    }
})

gameBox.addEventListener('click', (event) => {
    if(event.target.classList.contains('ball')) {
        score++
        event.target.remove()
        createBall()
    }
})




function start() {
    btn.disabled = true
    timeOut.innerHTML = time
    interval = setInterval(() => {
        decrease()
    }, 1000);
    createBall()
}

function decrease() {
    if(time == 0) {
        endGame()
    }else {
        let currentTime = --time
        timeOut.innerHTML = currentTime
    }
}

function endGame() {
    gameBox.innerHTML = `<h2 class="result">Вы набрали: ${score} очков</h2>`
    btn.disabled = false
}

function createBall() {
    let ball = document.createElement('div')
    ball.classList.add('ball')
    let coor = gameBox.getBoundingClientRect()
    let x = random(0, coor.width - size)
    let y = random(0, coor.height - size)
    ball.style = randomForm()
    ball.style.width =  ball.style.height = random(20,100) + 'px' 
    ball.style.background = setColor(ball)
    ball.style.top = y + 'px'
    ball.style.left = x + 'px'
    gameBox.append(ball)
    console.log(ball.style.width);
    console.log(ball.style.height);
}

function random(min,max){
    return Math.floor(Math.random() * (max + 1 - min) + min)
}






function randomred() {
    return Math.floor(Math.random() * 255);
  }
  
  function setColor(el) {
    el.style.background = `rgb(${randomred()}, ${randomred()}, ${randomred()})`;
  }
  
  let form = [
    'clip-path: polygon(50% 0%, 0% 100%, 100% 100%);',
    'clip-path: inset(5% 20% 15% 10%);',
    'clip-path: circle(50% at 50% 50%);',
    'clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);',
    'clip-path: polygon(50% 0%, 0% 100%, 100% 100%);',
    'clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);',
    'clip-path: polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%);',
    'clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);',
    'clip-path: polygon(50% 0%, 90% 20%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%);',
    'clip-path: polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%);',
    'clip-path: polygon(50% 0%, 83% 12%, 100% 43%, 94% 78%, 68% 100%, 32% 100%, 6% 78%, 0% 43%, 17% 12%);',
    'clip-path: polygon(50% 0%, 80% 10%, 100% 35%, 100% 70%, 80% 90%, 50% 100%, 20% 90%, 0% 70%, 0% 35%, 20% 10%);',
    'clip-path: polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%);',
    'clip-path: polygon(20% 0%, 0% 20%, 30% 50%, 0% 80%, 20% 100%, 50% 70%, 80% 100%, 100% 80%, 70% 50%, 100% 20%, 80% 0%, 50% 30%);'
]

  function randomForm() {
    let index = Math.floor(Math.random() * form.length)
    return form[index]
  }
  
  
 
  
  



    
  let polygon = [
//   polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%),
//   polygon(50% 0%, 0% 100%, 100% 100%);
//   polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
//   polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%);
//   polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
//   polygon(50% 0%, 90% 20%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%);
//   polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%);
//   polygon(50% 0%, 83% 12%, 100% 43%, 94% 78%, 68% 100%, 32% 100%, 6% 78%, 0% 43%, 17% 12%);
//   polygon(50% 0%, 80% 10%, 100% 35%, 100% 70%, 80% 90%, 50% 100%, 20% 90%, 0% 70%, 0% 35%, 20% 10%);
//   polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%);
//   polygon(20% 0%, 0% 20%, 30% 50%, 0% 80%, 20% 100%, 50% 70%, 80% 100%, 100% 80%, 70% 50%, 100% 20%, 80% 0%, 50% 30%); */
  ]


 
