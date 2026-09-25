// =========================================
// SURPRISE BUTTON
// =========================================

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


// =========================================
// BIRTHDAY COUNTDOWN
// =========================================

const birthday =
    new Date("October 14, 2026 00:00:00").getTime();

let birthdayCelebrationStarted = false;


function updateCountdown() {

    const now = new Date().getTime();

    const difference = birthday - now;


    // Birthday has arrived

    if (difference <= 0) {

        document.getElementById("days").innerText = "00";
        document.getElementById("hours").innerText = "00";
        document.getElementById("minutes").innerText = "00";
        document.getElementById("seconds").innerText = "00";


        if (!birthdayCelebrationStarted) {

            birthdayCelebrationStarted = true;


            // Replace countdown

            const countdown =
                document.querySelector(".countdown");

            if (countdown) {

                countdown.innerHTML = `
                    <div class="birthday-complete-message">

                        <h2>
                            🎂 Happy Birthday, Sneha! 🎉
                        </h2>

                        <p>
                            Today is your special day! ❤️
                        </p>

                    </div>
                `;

            }


            // Birthday emoji blast

            const emojis = [
                "🎉",
                "🎂",
                "🎈",
                "💗",
                "❤️",
                "✨",
                "🥳",
                "🌸"
            ];


            for (let i = 0; i < 60; i++) {

                const item =
                    document.createElement("div");

                item.classList.add("birthday-blast");

                item.innerText =
                    emojis[
                        Math.floor(
                            Math.random() * emojis.length
                        )
                    ];


                item.style.left =
                    Math.random() * 100 + "%";


                item.style.setProperty(
                    "--fall",
                    (500 + Math.random() * 500) + "px"
                );


                item.style.animationDuration =
                    (2 + Math.random() * 2) + "s";


                document.body.appendChild(item);


                setTimeout(function () {

                    item.remove();

                }, 4500);

            }

        }

        return;
    }


    // Countdown values

    const days =
        Math.floor(
            difference /
            (1000 * 60 * 60 * 24)
        );


    const hours =
        Math.floor(
            (difference /
                (1000 * 60 * 60)) % 24
        );


    const minutes =
        Math.floor(
            (difference /
                (1000 * 60)) % 60
        );


    const seconds =
        Math.floor(
            (difference / 1000) % 60
        );


    document.getElementById("days").innerText =
        days;

    document.getElementById("hours").innerText =
        hours;

    document.getElementById("minutes").innerText =
        minutes;

    document.getElementById("seconds").innerText =
        seconds;
}


updateCountdown();

setInterval(updateCountdown, 1000);



// =========================================
// BIRTHDAY CAKE
// =========================================

const candle =
    document.getElementById("candle");

const flame =
    document.getElementById("flame");

const wishText =
    document.getElementById("wishText");


if (candle && flame && wishText) {

    candle.addEventListener("click", function () {

        flame.style.display = "none";

        wishText.innerText =
            "Your wish has been made. Happy Birthday, Sneha! ❤️";

        wishText.classList.add("wished");

    });

}



// =========================================
// FLOATING HEARTS
// =========================================

const heartsContainer =
    document.getElementById("hearts-container");


function createHeart() {

    if (!heartsContainer) return;


    const heart =
        document.createElement("div");

    heart.classList.add("heart");

    heart.innerText = "💗";


    heart.style.left =
        Math.random() * 100 + "%";


    heart.style.fontSize =
        (15 + Math.random() * 20) + "px";


    heart.style.animationDuration =
        (4 + Math.random() * 4) + "s";


    heartsContainer.appendChild(heart);


    setTimeout(function () {

        heart.remove();

    }, 8000);
}


setInterval(createHeart, 700);



// =========================================
// CELEBRATION EFFECT
// =========================================

const celebration =
    document.getElementById("celebration");


function createCelebration() {

    if (!celebration) return;


    const emojis = [
        "💗",
        "❤️",
        "✨",
        "🎉",
        "🎂",
        "💕",
        "🌸",
        "🥳"
    ];


    for (let i = 0; i < 35; i++) {

        const item =
            document.createElement("div");

        item.classList.add(
            "celebration-heart"
        );


        item.innerText =
            emojis[
                Math.floor(
                    Math.random() * emojis.length
                )
            ];


        const x =
            (Math.random() - 0.5) * 700;


        const y =
            (Math.random() - 0.5) * 600;


        item.style.setProperty(
            "--x",
            x + "px"
        );


        item.style.setProperty(
            "--y",
            y + "px"
        );


        item.style.fontSize =
            (18 + Math.random() * 18) + "px";


        item.style.animationDuration =
            (1.2 + Math.random() * 0.8) + "s";


        celebration.appendChild(item);


        setTimeout(function () {

            item.remove();

        }, 2000);

    }
}



// =========================================
// SECRET MESSAGE
// =========================================

const secretBtn =
    document.getElementById("secretBtn");

const secretMessage =
    document.getElementById("secretMessage");


if (secretBtn && secretMessage) {

    secretBtn.addEventListener("click", function () {

        secretMessage.classList.toggle("show");


        if (
            secretMessage.classList.contains("show")
        ) {

            secretBtn.innerText =
                "Message Opened ❤️";

        } else {

            secretBtn.innerText =
                "Open My Message 💗";

        }

    });

}



// =========================================
// FINAL SURPRISE
// =========================================

const finalBtn =
    document.getElementById("finalBtn");

const finalMessage =
    document.getElementById("finalMessage");


if (finalBtn && finalMessage) {

    finalBtn.addEventListener("click", function () {

        finalMessage.classList.toggle("show");


        if (
            finalMessage.classList.contains("show")
        ) {

            finalBtn.innerText =
                "Surprise Revealed ❤️";


            createCelebration();


            finalMessage.scrollIntoView({
                behavior: "smooth"
            });

        } else {

            finalBtn.innerText =
                "One Last Surprise 💖";

        }

    });

}



// =========================================
// BACKGROUND MUSIC
// =========================================

const bgMusic =
    document.getElementById("bgMusic");

const musicBtn =
    document.getElementById("musicBtn");


if (bgMusic && musicBtn) {

    musicBtn.addEventListener(
        "click",
        function () {

            if (bgMusic.paused) {

                bgMusic.play()
                    .then(function () {

                        musicBtn.innerText =
                            "⏸ Pause Music";

                    })
                    .catch(function () {

                        alert(
                            "Music could not be played."
                        );

                    });

            } else {

                bgMusic.pause();

                musicBtn.innerText =
                    "🎵 Play Music";

            }

        }
    );

}



// =========================================
// PHOTO LIGHTBOX
// =========================================

const photoCards =
    document.querySelectorAll(
        ".photo-card img"
    );


const photoLightbox =
    document.getElementById(
        "photoLightbox"
    );


const lightboxImage =
    document.getElementById(
        "lightboxImage"
    );


const closeLightbox =
    document.getElementById(
        "closeLightbox"
    );



photoCards.forEach(function (photo) {

    photo.addEventListener(
        "click",
        function () {

            lightboxImage.src =
                photo.src;

            photoLightbox.classList.add(
                "show"
            );

        }
    );

});



if (closeLightbox && photoLightbox) {

    closeLightbox.addEventListener(
        "click",
        function () {

            photoLightbox.classList.remove(
                "show"
            );

        }
    );

}



if (photoLightbox) {

    photoLightbox.addEventListener(
        "click",
        function (event) {

            if (
                event.target ===
                photoLightbox
            ) {

                photoLightbox.classList.remove(
                    "show"
                );

            }

        }
    );

}