const canvas = document.getElementById("canvas");
const c = canvas.getContext("2d");

const player = new Player();
const enemy = new Enemy();

let allBullets = [];

function loop(){
    c.clearRect(0, 0, canvas.width, canvas.height);
    enemy.update();
    player.update();

    for(let i = 0; i< allBullets.length; i++){
        allBullets[i].update();
    }

    requestAnimationFrame(loop);
}

loop();

//All listener here
document.addEventListener("keydown", (event) => {
    if(event.code === "ArrowUp") player.velocity.y = -5;
    if(event.code === "ArrowDown") player.velocity.y = 5;
    if(event.code === "ArrowLeft") player.velocity.x = -5;
    if(event.code === "ArrowRight") player.velocity.x = 5;

    if(event.code === "Space") allBullets.push(new Bullet(player.position.x + player.size / 3.2, player.position.y));
});

document.addEventListener("keyup", (event) => {
    if(event.code === "ArrowUp") player.velocity.y = 0;
    if(event.code === "ArrowDown") player.velocity.y = 0;
    if(event.code === "ArrowLeft") player.velocity.x = 0;
    if(event.code === "ArrowRight") player.velocity.x = 0;
});