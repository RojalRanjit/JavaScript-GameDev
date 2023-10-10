const canvas = document.getElementById('myCanvas');
const c = canvas.getContext('2d');
const objects = [];
const colors = ['#FF5733', '#33FF57', '#5733FF', '#FF336E', '#33FFFF', "red", "blue", "orange", "yellow", "green", "lilac", "pink", "neon"];

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function createObject() {
    const radius = getRandomInt(10, 40);
    const x = getRandomInt(radius, canvas.width - radius);
    const y = getRandomInt(radius, canvas.height - radius);
    const dx = (Math.random() - 2) * 2;
    const dy = (Math.random() - 2) * 2;
    const color = colors[getRandomInt(0, colors.length - 1)];

    return { x, y, radius, dx, dy, color };
}

function drawObject(obj) {
    c.beginPath();
    c.arc(obj.x, obj.y, obj.radius, 0, Math.PI * 2);
    c.fillStyle = obj.color;
    c.fill();
    c.closePath();
}

function updateObject(obj) {
    obj.x += obj.dx;
    obj.y += obj.dy;

    if (obj.x + obj.radius > canvas.width || obj.x - obj.radius < 0) {
        obj.dx = -obj.dx;
        obj.color = colors[getRandomInt(0, colors.length - 1)];
    }

    if (obj.y + obj.radius > canvas.height || obj.y - obj.radius < 0) {
        obj.dy = -obj.dy;
        obj.color = colors[getRandomInt(0, colors.length - 1)];
    }

    for (const otherObj of objects) {
        if (otherObj !== obj) {
            const dx = obj.x - otherObj.x;
            const dy = obj.y - otherObj.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < obj.radius + otherObj.radius) {
                obj.dx = -obj.dx;
                obj.dy = -obj.dy;
                obj.color = colors[getRandomInt(0, colors.length - 1)];
            }
        }
    }
}

function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, canvas.width, canvas.height);

    for (const obj of objects) {
        drawObject(obj);
        updateObject(obj);
    }
}

function init() {
    for (let i = 0; i < 70; i++) { // You can change the number of objects as needed
        objects.push(createObject());
    }

    animate();
}

init();