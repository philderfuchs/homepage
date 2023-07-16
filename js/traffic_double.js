class Square {
    constructor(x, y, width, color, movesDown) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.color = color;
        this.movesRight = true;
        this.movesDown = movesDown;
    }

    move() {
        if (this.movesRight) { this.x++; } else { this.x--; }
        var yDyrection = this.movesDown ? this.width : (-1 * this.width)

        if (this.x >= canvas.getWidth()) {
            this.movesRight = false;
            this.y += yDyrection;
        } else if (this.x <= -this.width) {
            this.movesRight = true;
            this.y += yDyrection
        }
    }

    draw() {
        canvas.context.fillStyle = this.color;
        canvas.context.fillRect(this.x, this.y, this.width, this.width);
    }
}

function spawnSquare(color, movesDown) {
    var size = canvas.getHeight() / 9;
    if (movesDown) {
        return new Square(-1*size, 0, size, color, true)
    } else {
        return new Square(canvas.getWidth(), canvas.getHeight()+size, size, color, false)
    }
}

function pickColor(colors) {
    return colors[getRandomNumber(0, colors.length - 1)]
}

async function main() {
    const colorScheme = initScholorScheme(2, 4)

    updateDesignDescription({
        title: "Double Traffic",
        variation: colorScheme.join(","),
        artist: "Philipp Anders",
        year: 2023,
        type: "Javascript on canvas"
    });

    dots = []

    var currentColor = pickColor(colorScheme);
    var trainIsRunning = true;
    var movesDown = true
    while (true) {
        canvas.clear();
        var dotSpawnChance = trainIsRunning ? 0.9 : 0.02;
        if (getRandomBool(dotSpawnChance, 0)) {
            trainIsRunning = true;
            dots.push(spawnSquare(currentColor, movesDown));
        } else {
            trainIsRunning = false;
            currentColor = pickColor(colorScheme);
        }

        dots.forEach((dot) => { dot.draw(); dot.move(); })

        movesDown = !movesDown;
        await sleep(10);
    }
}

main();