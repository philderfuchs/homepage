var canvas = new Canvas();

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

function initScholorScheme() {
    var colors = ["#525FE1", "#F86F03", "#FFA41B", "#FFF6F4", "#A0C49D", "#E966A0", "#090580", "#F1D4E5", "#00DFA2", "#884A39", "#116D6E", "#FFE7A0", "#00C4FF"]
    const shuffled = colors.sort(() => Math.random() - 0.5);
    return shuffled.slice(0, getRandomNumber(3, 4));
}

async function main() {
    const colorScheme = initScholorScheme();

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