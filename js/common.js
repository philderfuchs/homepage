function updateDesignDescription(metaDataInfo) {
    document.querySelector("#title").textContent = metaDataInfo.title
    document.querySelector("#variation").textContent = metaDataInfo.variation
    document.querySelector("#artist").textContent = metaDataInfo.artist
    document.querySelector("#year").textContent = metaDataInfo.year
    document.querySelector("#type").textContent = metaDataInfo.type
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max + 1 - min) + min);
}

function getRandomBool(probability, minProbability = 0.1) {
    return Math.random() < Math.max(minProbability, probability);
}

function initScholorScheme(minColorCount, maxColorCount) {
    var colors = [];

    var darkModeIsActivated = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (darkModeIsActivated) {
        var colors = ["#9681EB", "#45CFDD", "#A7EDE7", "#F31559", "#FF52A2", "#FFB07F", "#FFECAF", "#B5F1CC", "#068FFF"]
    } else {
        var colors = ["#F08A5D", "#B83B5E", "#6A2C70", "#08D9D6", "#252A34", "#FF2E63", "#AA96DA", "#112D4E", "#61C0BF", "#FFD460"]
    }
    const shuffled = colors.sort(() => Math.random() - 0.5);
    return shuffled.slice(0, getRandomNumber(minColorCount, maxColorCount));
}

class Canvas {
    constructor() {
        this.canvas = document.querySelector("canvas");
        this.context = this.canvas.getContext("2d")
        this.resize();
    }

    resize() {
        var containerWidth = document.querySelector(".container").offsetWidth;

        if (containerWidth >= 500) {
            // desktop view
            this.canvas.width = 500;
            this.canvas.height = 500;
        } else {
            // mobile view
            this.canvas.width = containerWidth;
            this.canvas.height = containerWidth;
        }
    }

    getWidth() {
        return this.canvas.width;
    }

    getHeight() {
        return this.canvas.height;
    }

    clear() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}

var canvas = new Canvas();