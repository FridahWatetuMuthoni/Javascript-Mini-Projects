const score_text = document.getElementById("scoreText")
const reset_btn = document.getElementById("resetBtn")
const gameBoard = document.getElementById("gameBoard")
const context = gameBoard.getContext('2d')
const game_width = gameBoard.width
const game_height = gameBoard.height
const boardBackground = "white"
const snakeColor = "lightgreen"
const snakeBorder = "black"
const foodColor = "red"
const unitSize = 25;
let running = false
let xVelocity=unitSize
let yVelocity = 0
let foodX;
let foodY;
let score = 0
let snake = [
    {x:unitSize * 4, y:0},
    {x:unitSize * 3, y:0},
    {x:unitSize * 2 , y:0},
    {x:unitSize, y:0},
    {x:0,y:0}
]

window.addEventListener("keydown",changeDirecton)
reset_btn.addEventListener('click',resetGame)
gameStart()

function gameStart(){
    running = true
    score_text.textContent = score
    createFood()
    drawFood()
    nextTick()
}

function nextTick(){
    if(running){
        setTimeout(() => {
            clearBoard();
            drawFood()
            moveSnake()
            drawSnake()
            checkGameOver()
            nextTick()
        }, 200);
    }
    else{
        displayGameOver()
    }
}

function clearBoard(){
    context.fillStyle = boardBackground
    context.fillRect(0, 0, game_width, game_height)
}

function createFood(){
    function randomFood(min, max){
        const randNum = Math.round((Math.random() * (max - min) + min) / unitSize) * unitSize;
        return randNum
    }

    foodX = randomFood(0, game_width - unitSize)
    foodY = randomFood(0, game_width - unitSize)
}

function drawFood(){
    context.fillStyle = foodColor
    context.fillRect(foodX, foodY, unitSize, unitSize)
}

function moveSnake(){
    const head = {x:snake[0].x+xVelocity, y:snake[0].y+yVelocity}
    snake.unshift(head)
    //if food was eaten
    if(snake[0].x == foodX && snake[0].y == foodY){
        score++
        score_text.textContent = score 
        createFood()
    }
    else{
        snake.pop()
    }
}

function drawSnake(){
    context.fillStyle = snakeColor
    context.strokeStyle = snakeBorder
    snake.forEach((snakePart)=>{
        context.fillRect(snakePart.x, snakePart.y, unitSize, unitSize)
        context.strokeRect(snakePart.x, snakePart.y, unitSize, unitSize)
    })
}

function changeDirecton(e){
    const keyPressed = e.keyCode
    const LEFT = 37
    const UP = 38
    const RIGHT = 39
    const DOWN = 40
    const goingUp =(yVelocity == -unitSize)
    const goingDown =(yVelocity == unitSize)
    const goingRight =(xVelocity == unitSize)
    const goingLeft =(xVelocity == -unitSize)

    switch(true){
        case(keyPressed == LEFT && !goingRight):
            xVelocity = -unitSize
            yVelocity= 0
            break
        case(keyPressed == UP && !goingDown):
            xVelocity = 0
            yVelocity = -unitSize
            break
        case(keyPressed == RIGHT && !goingLeft):
            xVelocity = unitSize
            yVelocity = 0
            break
        case(keyPressed == DOWN && !goingUp):
            xVelocity = 0
            yVelocity = unitSize
            break
    }
}

function checkGameOver(){
    switch(true){
        case(snake[0].x < 0):
            running = false
            break
        case(snake[0].x >= game_width):
            running = false
            break
        case(snake[0].y < 0):
            running = false
            break
        case(snake[0].y >= game_height):
            running = false
            break
    }

    for(let i = 1; i < snake.length; i++){
        if(snake[i].x == snake[0].x && snake[i].y == snake[0].y ){
            running=false
        }
    }
}

function displayGameOver(){
    context.font = "50px MV Boli"
    context.fillStyle = "blueviolet"
    context.textAlign = "center"
    context.fillText("GAME OVER!", game_width/2, game_height/2)
    running = false
}

function resetGame(e){
    score = 0
    xVelocity=unitSize
    yVelocity=0
    snake = [
    {x:unitSize * 4, y:0},
    {x:unitSize * 3, y:0},
    {x:unitSize * 2 , y:0},
    {x:unitSize, y:0},
    {x:0,y:0}
    ]
    gameStart()
}