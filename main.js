const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext("2d");
const SIZE = 1000;

const circle_point = (angle_rad, radius) => ({
    x: (canvas.width / 2) + radius + Math.cos(angle_rad),
    y: (canvas.height / 2) + radius + Math.sin(angle_rad),
});

function mk_circle_points(radius, point_count) {
    let points = [];

    for (let angle_rad = 0; angle_rad < 2 * Math.PI; angle_rad += 2 * Math.PI / point_count)
        points.push(circle_point(angle_rad, radius));

    return points;
}

function init_canvas() {
    canvas.width = SIZE;
    canvas.height = SIZE;
    ctx.fillStyle = "White";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function draw_circle_outline(radius) {
    ctx.strokeStyle = "Gray";

    ctx.beginPath();
    ctx.arc(canvas.width / 2, canvas.height / 2, radius, 0, 2 * Math.PI);
    ctx.stroke();

    ctx.closePath();
}

function draw_circle_points(points) {
    ctx.fillStyle = "Gray";

    points.forEach(function(point) {
        ctx.beginPath();
        ctx.arc(point.x, point.y, 5, 0, 2 * Math.PI);
        ctx.fill();
        ctx.closePath();
    });
}

let points = mk_circle_points(450, 100);
init_canvas();
draw_circle_outline(450);
draw_circle_points(points);
