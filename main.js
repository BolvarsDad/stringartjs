const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext("2d");
const SIZE = 1000;

canvas.width  = SIZE;
canvas.height = SIZE;

const center_x = canvas.width / 2;
const center_y = canvas.height / 2;

const radius = 450;
const points = [];
const point_count = 10;

const degrees_to_radians = (degrees, precision = 2) => {
    return parseFloat(((parseFloat(degrees) * Math.PI) / 180).toFixed(precision));
};

// (x,y) = (rcos(θ), rsin(θ))
// for n points on the circle, they need to be spaced 2pi/n units apart.
const circle_point = (angle, radius) => {
    return {
        px: center_x + radius * Math.cos(degrees_to_radians(angle)),
        py: center_y + radius * Math.sin(degrees_to_radians(angle))
    };
};

let angle = 0;
for (let i = 0; i < degrees_to_radians(2 * Math.PI / point_count); ++i) {
    points.push(circle_point(i, radius));
}

// background color
ctx.globalCompositeOperation = "destination-under";
ctx.fillStyle = "White";
ctx.fillRect(0, 0, canvas.width, canvas.height);

// main circle
ctx.beginPath();
ctx.arc(center_x, center_y, radius, 0, 2 * Math.PI);
ctx.stroke();
ctx.closePath();

ctx.fillStyle = "Gray";

console.log(points);
