class Enemy{
    constructor(){

        this.size = 40;
        this.image = new Image();
        this.image.src = "./img/enemy-ship.png";

        this.position = {
            x: Math.random() * ((canvas.width-this.size) - this.size) + this.size,
            y: canvas.height/10,
        };

        this.velocity = {
            x: 0,
            y: 0,
        };
  

    }

draw(){
c.beginPath();
c.fillStyle = "red";
c.drawImage(
    this.image,
    this.position.x,
    this.position.y,
    this.size,
    this.size
);
}

blast(){
    if(enemy.position.x == allBullets[i].position.x && enemy.position.y == allBullets[i].position.y){
        c.enemy.clearRect(this.position.x, this.position.y, this.position.x + this.size, this.position.y + this.size);
        c.allBullets[i].clearRect(this.x, this.y, this.x + this.size, this.y + this.size);
    }
}

// move(){
//     this.position.x += this.velocity.x;
//     this.position.y += this.velocity.y;
// }

update(){
    this.draw();
    // this.blast();
    // this.move();
}
}