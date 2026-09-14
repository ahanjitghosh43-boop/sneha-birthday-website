
// Surprise Button
const surpriseBtn = document.getElementById("surpriseBtn");
const surpriseBox = document.getElementById("surprise");

if (surpriseBtn && surpriseBox) {
    surpriseBtn.addEventListener("click", function () {
        surpriseBox.classList.add("show");
        createCelebration();

        surpriseBox.scrollIntoView({
            behavior: "smooth"
        });

        surpriseBtn.innerText = "Surprise Opened ❤️";
    });
}


// Birthday Countdown
const birthday = new Date("October 14, 2026 00:00:00").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const difference = birthday - now;

    if (difference <= 0) {
        document.getElementById("days").innerText = "00";
        document.getElementById("hours").innerText = "00";
        document.getElementById("minutes").innerText = "00";
        document.getElementById("seconds").innerText = "00";
        return;
    }

    const days = Math.floor(
        difference / (1000 * 60 * 60 * 24)
    );

    const hours = Math.floor(
        (difference / (1000 * 60 * 60)) % 24
    );

    const minutes = Math.floor(
        (difference / (1000 * 60)) % 60
    );

    const seconds = Math.floor(
        (difference / 1000) % 60
    );

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;
}

updateCountdown();
setInterval(updateCountdown, 1000);


// Birthday Cake
const candle = document.getElementById("candle");
const flame = document.getElementById("flame");
const wishText = document.getElementById("wishText");

if (candle && flame && wishText) {
    candle.addEventListener("click", function () {
        flame.style.display = "none";

        wishText.innerText =
            "Your wish has been made. Happy Birthday, Sneha! ❤️";

        wishText.classList.add("wished");
    });
}


// Floating Hearts
const heartsContainer = document.getElementById("hearts-container");

function createHeart() {
    if (!heartsContainer) return;

    const heart = document.createElement("div");

    heart.classList.add("heart");
    heart.innerText = "💗";

    heart.style.left = Math.random() * 100 + "%";
    heart.style.fontSize = (15 + Math.random() * 20) + "px";
    heart.style.animationDuration = (4 + Math.random() * 4) + "s";

    heartsContainer.appendChild(heart);

    setTimeout(function () {
        heart.remove();
    }, 8000);
}

setInterval(createHeart, 700);


// Celebration Effect
const celebration = document.getElementById("celebration");

function createCelebration() {
    if (!celebration) return;

    for (let i = 0; i < 20; i++) {
        const heart = document.createElement("div");

        heart.classList.add("celebration-heart");
        heart.innerText = "💗";

        const x = (Math.random() - 0.5) * 500;
        const y = (Math.random() - 0.5) * 500;

        heart.style.setProperty("--x", x + "px");
        heart.style.setProperty("--y", y + "px");

        celebration.appendChild(heart);

        setTimeout(function () {
            heart.remove();
        }, 1500);
    }
}


// Secret Message
const secretBtn = document.getElementById("secretBtn");
const secretMessage = document.getElementById("secretMessage");

if (secretBtn && secretMessage) {
    secretBtn.addEventListener("click", function () {
        secretMessage.classList.toggle("show");

        if (secretMessage.classList.contains("show")) {
            secretBtn.innerText = "Message Opened ❤️";
        } else {
            secretBtn.innerText = "Open My Message 💗";
        }
    });
}


// Final Surprise
const finalBtn = document.getElementById("finalBtn");
const finalMessage = document.getElementById("finalMessage");

if (finalBtn && finalMessage) {
    finalBtn.addEventListener("click", function () {
        finalMessage.classList.toggle("show");

        if (finalMessage.classList.contains("show")) {
            finalBtn.innerText = "Surprise Revealed ❤️";

            createCelebration();

            finalMessage.scrollIntoView({
                behavior: "smooth"
            });
        } else {
            finalBtn.innerText = "One Last Surprise 💖";
        }
    });
}
