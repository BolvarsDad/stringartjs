const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext("2d");
const SIZE = 1000;

canvas.width  = SIZE;
canvas.height = SIZE;

const center_x = canvas.width / 2;
const center_y = canvas.height / 2;

const radius = 450;
const points = [];
const point_count = 100;

const degrees_to_radians = (degrees, precision = 2) => {
    return degrees * Math.PI / 180;
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

function init_canvas() {
    canvas.width = SIZE;
    canvas.height = SIZE;

    ctx.fillStyle = "White";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function draw_circle_outline() {
    ctx.fillStyle = "Gray";
    ctx.beginPath();
    ctx.arc(center_x, center_y, radius, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.closePath();
}

function draw_circle_points(points) {
    ctx.fillStyle = "Gray";

    points.forEach(function(point) {
        ctx.beginPath();
        ctx.arc(point.px, point.py, 5, 0, 2 * Math.PI);
        ctx.fill();
        ctx.closePath();
    });
}

init_canvas();
draw_circle_outline();
draw_circle_points(points);
