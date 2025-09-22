/* Mobile Menu Toggler */
// Toggle text function help:
// https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_toggle_text
document.getElementById("toggler").onclick = (event) => {
    const toggleText = event.currentTarget;

    if (toggleText.innerHTML == "🢓") {
        toggleText.innerHTML = "🢑";
    } else if (toggleText.innerHTML == "🢑") {
        toggleText.innerHTML = "🢓";
    }

    document.getElementById("nav-items").classList.toggle("hide-small");
};

/* Section Toggler */
const plantingSect = document.getElementById("planting");
const clockSect = document.getElementById("digital-clock");

document.getElementById("exercise-1").onclick = () => {
    plantingSect.classList.toggle("hide-section");

    if (!clockSect.classList.contains("hide-section")) {
        clockSect.classList.add("hide-section");
    }
};

document.getElementById("exercise-2").onclick = () => {
    clockSect.classList.toggle("hide-section");

    if (!plantingSect.classList.contains("hide-section")) {
        plantingSect.classList.add("hide-section");
    }
};

/* Planting Section */
document.getElementById("days-slider").addEventListener('change', (event) => {
    const userDays = event.currentTarget.value;
    const plantMessage = document.getElementById("p-plant-state");
    const plantPic = document.getElementById("img-plant-state");

    document.getElementById("p-days-passed").innerHTML = `It's been ${userDays} since watering your plant`;

    if (userDays <= 2) {
        plantMessage.innerHTML = "Your plant is healthy and happy";
        plantPic.src = 'images/healthy-plant.jpg';
    } else if (userDays <= 5) {
        plantMessage.innerHTML = "Your plant needs watering";
        plantPic.src = 'images/water-plant.jpg';
    } else if (userDays <= 9) {
        plantMessage.innerHTML = "Leaves are dropping and the color is changing, water soon";
        plantPic.src = 'images/wilted-plant.jpg';
    } else {
        plantMessage.innerHTML = "Sorry, your plant has died";
        plantPic.src = 'images/dead-plant.jpeg';
    }
});

/* Digital Clock Section */

function printClock() {
    const digiClock = new Date();
    const pClock = document.getElementById("clock");
    let hours = digiClock.getHours();
    let minutes = digiClock.getMinutes();

    if (minutes < 10) {
        minutes = '0' + minutes;
    }

    if (hours < 10) {
        hours = '0' + hours;
    }

    if (hours < 12) {
        pClock.innerHTML = `${hours}:${minutes} am`;
    } else if (hours == 12) {
        pClock.innerHTML = `${hours}:${minutes} pm`;
    } else {
        pClock.innerHTML = `${hours - 12}:${minutes} pm`;
    }
}

printClock();
setInterval(printClock, 1000);