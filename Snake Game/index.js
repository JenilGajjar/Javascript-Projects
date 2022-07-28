var food = document.getElementById("food");
var snake = document.getElementById("snake");

var display = document.getElementById("display");
var displayHeight = parseInt(display.style.height);
var displayWidth = parseInt(display.style.width);

var leftOfSnake = parseInt(snake.style.left);
var topOfSnake = parseInt(snake.style.top);
var snakeHeight = parseInt(snake.style.height);
var snakeWidth = parseInt(snake.style.width);

var leftOfFood = parseInt(food.style.left);
var topOfFood = parseInt(food.style.top);

var clearLeft, clearRight, clearTop, clearBottom;
var updateScore = document.getElementById("points");;
var heart = document.getElementById("heart");
var score = 0;
var life = 3;
var speed = 2;

function increaseSpeed() {
    if (score % 6 == 0)
        speed++;
}
function left() {
    clearLeft = setInterval(function () {
        checkForScore();
        snake.style.transform = "scale(1, 1)";
        leftOfSnake -= speed;
        if (leftOfSnake < 0) {
            gameOver();
        } else {
            leftOfSnake--;
            snake.style.left = leftOfSnake + "px";
        }
    }, 50);
    clearInterval(clearRight);
    clearInterval(clearTop);
    clearInterval(clearBottom);
}

function right() {
    clearRight = setInterval(function () {
        checkForScore();
        snake.style.transform = "scale(-1, 1)";
        leftOfSnake += speed;
        if (leftOfSnake >= displayWidth - snakeHeight) {
            gameOver();
        }
        else {
            leftOfSnake++;
            snake.style.left = leftOfSnake + "px";
        }
    }, 50);
    clearInterval(clearLeft);
    clearInterval(clearTop);
    clearInterval(clearBottom);

}

function up() {
    clearTop = setInterval(function () {
        checkForScore();
        snake.style.transform = "rotate(90deg)";
        topOfSnake -= speed;
        if (topOfSnake < 0) {
            gameOver();
        }
        else {
            topOfSnake--;
            snake.style.top = topOfSnake + "px";
        }
    }, 50);
    clearInterval(clearLeft);
    clearInterval(clearRight);
    clearInterval(clearBottom);
}


function down() {
    snake.style.transform = "rotate(-90deg)";
    clearInterval(clearLeft);
    clearInterval(clearRight);
    clearInterval(clearTop);
    clearBottom = setInterval(function () {
        checkForScore();
        topOfSnake += speed;
        if (topOfSnake >= displayHeight - snakeHeight) {
            gameOver();
        }
        else {
            topOfSnake++;
            snake.style.top = topOfSnake + "px";
        }
    }, 50);
}

function checkForScore() {
    if (topOfFood >= topOfSnake && topOfFood <= topOfSnake + snakeHeight) {
        if (leftOfFood >= leftOfSnake && leftOfFood <= leftOfSnake + snakeWidth) {
            score++;
            increaseSpeed();
            changeLocationOfFood();
            updateScore.innerHTML = "score : " + score;
        }
    }
}
function changeLocationOfFood() {
    leftOfFood = parseInt(Math.random() * 820) + 4;

    food.style.left = leftOfFood + "px";
    topOfFood = parseInt(Math.random() * 520) + 3;
    food.style.top = topOfFood + "px";
}
function changeLocationOfSnake() {
    leftOfSnake = 150;
    snake.style.left = leftOfSnake + "px";
    topOfSnake = 150;
    snake.style.top = topOfSnake + "px";
}

function gameOver() {
    speed--;
    changeLocationOfFood();
    changeLocationOfSnake();
    life--;
    if (life > 0) {
        heart.innerHTML = " ";
        for (let i = 0; i < parseInt(life); i++) {
            heart.innerHTML += `<img src="life.webp" class="life" alt="" srcset="">`;
        }
    }
    else {
        document.writeln(`<div style="font-size:10rem;height:100vh; display: flex; align-items: center;justify-content: center;">
        Game Over! <br/>
        Your Score :`+ score + ` 
    </div>`);
        clearInterval(clearLeft);
        clearInterval(clearRight);
        clearInterval(clearTop);
        clearInterval(clearBottom);
    }
}

var flag1 = true;
var flag2 = true;
var flag3 = true;
var flag4 = true;
function keyPress(e) {
    if (e.keyCode == 37) {
        if (flag1) {
            flag1 = false;
            flag2 = true;
            flag3 = true;
            flag4 = true;
            left();
        }
    }
    else if (e.keyCode == 38) {
        if (flag2) {
            flag1 = true;
            flag2 = false;
            flag3 = true;
            flag4 = true;
            up();
        }
    }
    else if (e.keyCode == 39) {
        if (flag3) {
            flag1 = true;
            flag2 = true;
            flag3 = false;
            flag4 = true;
            right();
        }
    }
    else if (e.keyCode == 40) {
        if (flag4) {
            flag1 = true;
            flag2 = true;
            flag3 = true;
            flag4 = false;
            down();
        }
    }

}