const canvas = document.getElementById("canvas");
const c = canvas.getContext("2d");

class Box{
    constructor(x, y, colour){
        this.x = x;
        this.y = y;
        this.width = 60;
        this.height = 60;
        this.colour = colour || "red";
        this.x_speed = 1;
        this.y_speed = 1;
    }

    draw(){
        c.beginPath();
        c.fillStyle = this.colour;
        c.rect(this.x, this.y, this.width, this.height);
        c.fill();
    }
    move(){
        this.x += this.x_speed;
        this.y += this.y_speed;

        if(this.x + this.width > canvas.width){
            this.x_speed = -1;
        }
        else if(this.x < 0){
            this.x_speed = 1;
        }
        if(this.y + this.height > canvas.height){
            this.y_speed = -1;
        }
        else if(this.y < 0){
            this.y_speed = 1;
        }
    }
    update(){
        this.draw();
        this.move();
    }
}

const box = new Box(Math.random() * (canvas.width - 0) + 0, Math.random() * (canvas.height - 0) + 0 , "blue");
const box1 = new Box(Math.random() * (canvas.width - 0) + 0, Math.random() * (canvas.height - 0) + 0 , "green");



function animate(){

    //update logic here
    c.clearRect(0, 0, canvas.width, canvas.height);
    box.update();
    box1.update();
    
    requestAnimationFrame(animate);
}
animate();