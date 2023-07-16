class Square {
    constructor(x, y, width, color) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.color = color;
        this.movesRight = true;
    }

    move() {

        if (this.movesRight) { this.x++; } else { this.x--; }

        if (this.x >= canvas.getWidth()) {
            this.movesRight = false;
            this.y += this.width
        } else if (this.x <= -this.width) {
            this.movesRight = true;
            this.y += this.width
        }
    }

    draw() {
        canvas.context.fillStyle = this.color;
        canvas.context.fillRect(this.x, this.y, this.width, this.width);
    }
}

function spawnSquare(color) {
    return new Square(-20, 0, 20, color)
}

function pickColor(colors) {
    return colors[getRandomNumber(0, colors.length - 1)]
}

async function main() {
    const colorScheme = initScholorScheme(2, 4)

    updateDesignDescription({
        title: "Traffic",
        variation: colorScheme.join(","),
        artist: "Philipp Anders",
        year: 2023,
        type: "Javascript on canvas"
    });

    dots = []

    var currentColor = pickColor(colorScheme);
    var trainIsRunning = true;
    var iteration = 0;
    while (true) {
        canvas.clear();
        var dotSpawnChance = trainIsRunning ? 0.9 : 0.02;
        if (getRandomBool(dotSpawnChance, 0)) {
            trainIsRunning = true;
            dots.push(spawnSquare(currentColor));
        } else {
            trainIsRunning = false;
            currentColor = pickColor(colorScheme);
        }

        dots.forEach((dot) => { dot.draw(); dot.move(); })

        iteration++;
        await sleep(10);

    }
}

main();