class Player{
    constructor(){
        this.position = {
            x: canvas.width/2,
            y: canvas.height/2,
        };

        this.velocity = {
            x: 0,
            y: 0,
        };
  
        this.size = 70;
        this.image = new Image();
        this.image.src = "./img/ship.png";
    }

draw(){
c.beginPath();
c.fillStyle = "red";
// c.fillRect(this.position.x, this.position.y, this.size, this.size);
c.drawImage(
    this.image,
    this.position.x,
    this.position.y,
    this.size,
    this.size
);
}

move(){
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;
}

warp(){
    if(this.position.x > canvas.width){
        this.position.x = 0 - this.size;
    }
    else if(this.position.x + this.size <= 0){
        this.position.x = canvas.width;
    }
}

blockBottom() {
    if (this.position.y + this.size.height > canvas.height) {
      this.position.y = canvas.height - this.size;
      this.velocity = 0;
    }
  }

update(){
    this.draw();
    this.move();
    this.blockBottom();
    this.warp();
}
}