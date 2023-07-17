class Dot {
    constructor(x, y, radius, color) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.down = true;
    }

    move() {
        if (getRandomBool(this.y / canvas.getHeight())) {

            if (this.down) { this.y++; } else { this.y--; }

            if (this.y >= canvas.getHeight()) {
                this.down = false;
            } else if (this.y <= 0) {
                this.down = true;
            }
        }
    }

    draw() {
        canvas.context.fillStyle = this.color;
        canvas.context.beginPath();
        canvas.context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        canvas.context.fill();
    }
}

function spawnDot(colors) {
    return new Dot(
        getRandomNumber(0, canvas.getWidth()),
        -10,
        10,
        colors[getRandomNumber(0, colors.length - 1)]
    )
}

async function main() {
    const colorScheme = initScholorScheme(3, 4);

    updateDesignDescription({
        title: "Dots",
        variation: colorScheme.join(","),
        artist: "Philipp Anders",
        year: 2023,
        type: "Javascript on canvas"
    });

    dots = []

    while (true) {
        if (dots.length < 100) dots.push(spawnDot(colorScheme));
        dots.forEach((dot) => { dot.draw(); dot.move(); })
        await sleep(1);
    }
}

main();