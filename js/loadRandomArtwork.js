function loadScript(url) {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = url;
        script.onload = resolve;
        script.onerror = reject;
        document.head.appendChild(script);
    });
}

// Usage example
const scriptUrls = [
    "js/artworks/dots.js",
    "js/artworks/traffic.js"
];

// Generate a random index to select a script URL
const randomScriptUrl = scriptUrls[getRandomNumber(0, scriptUrls.length - 1)];

loadScript(randomScriptUrl)
    .then(() => {
        console.log(`Successfully loaded ${randomScriptUrl}`);
    })
    .catch((error) => {
        console.error(`Failed to load ${randomScriptUrl}`, error);
    });