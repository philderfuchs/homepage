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

function getRandomBool(probability) {
    return Math.random() < Math.max(0.1, probability);
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
}