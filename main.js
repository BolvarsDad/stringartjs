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
const circle_point = (angle_deg, radius) => {
    return {
        px: center_x + radius * Math.cos(degrees_to_radians(angle_deg)),
        py: center_y + radius * Math.sin(degrees_to_radians(angle_deg))
    };
};

for (let angle_deg = 0; angle_deg < 360; angle_deg += 360 / point_count) {
    points.push(circle_point(angle_deg, radius));
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

for (let i = 0; i < point_count; ++i) {
    ctx.beginPath();
    ctx.arc(points[i].px, points[i].py, 5, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.closePath();
}
console.log(points);
