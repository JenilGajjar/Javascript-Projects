
let score = 0;
let scoreboard = document.getElementById("scoreboard");
let life = 3;
let flag = false;
let clear = setInterval(changePosition, 5500);

function changePosition() {
	let target = document.getElementById("target");
	const leftPos = Math.floor(Math.random() * 900);
	const topPos = Math.floor(Math.random() * 660);
	target.style.left = leftPos + "px";
	target.style.top = topPos + "px";
	clearInterval(clear);
	clear = setInterval(changePosition, 1000);
	if (flag) {
		flag = false;
	}
	else {
		// console.log(score);
		if (score == 0) {
			return;
		}
		life--;
		scoreboard.innerHTML = "Score : " + score + "<br/>";
		console.log(life)
		for (let i = 0; i < life; i++) {
			scoreboard.innerHTML += `<img src="./life.webp" class="life" alt="" srcset="">`;
		}
		if (life < 0) {
			clearInterval(clear);
			document.writeln(`<div style="font-size:10rem;height:100vh; display: flex; align-items: center;justify-content: center;">
			Game Over! <br/>
			Your Score :`+ score + ` 
		</div>`);
		}
		// console.log(life);
	}
}

let heart = document.getElementById("heart");
function updateScore() {
	flag = true;
	changePosition();
	score++;
	scoreboard.innerHTML = "Score : " + score + "<br/>";
	for (let i = 0; i < life; i++) {
		scoreboard.innerHTML += `<img src="./life.webp" class="life" alt="" srcset="">`;
	}

}
