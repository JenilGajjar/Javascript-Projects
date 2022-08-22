var player = document.getElementById("player");
var block = document.getElementById("block");
var scoreBoard = document.getElementById("score");
var score = 0;
function jump(e) {
    if (e.keyCode == 38 || e.keyCode == 13 || e.keyCode == 32) {
        if (player.classList.contains != "animate")
            player.classList.add("animate");
        setTimeout(() => {
            player.classList.remove("animate");
        }, 500)
    }
}

var checkDead = setInterval(() => {
    var playerTop = player.getBoundingClientRect().top;
    var blockLeft = block.getBoundingClientRect().left;
    score += 3;
    scoreBoard.innerHTML = score;
    console.log(score);
    if (blockLeft >= 0 && blockLeft <= 50 && playerTop >= 380) {
        alert("game over");
        player.style.animation = "none";
        block.style.animation = "none";
        block.style.display = "none";
        clearInterval(checkDead);
    }
}, 10)

