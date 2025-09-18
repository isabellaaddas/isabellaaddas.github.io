/* Variables are var, let, const (don't use var, let better, const standard unless 
it actually needs to change) */
/*
const sayHello = () => {
    console.log("Hello World");
}

document.getElementById("btn-click-me").onclick = sayHello;
*/

document.getElementById("btn-click-me").onclick = (event) => {
    /* Inner HTML refers to the HTML inside a tag */
    document.getElementById("p-welcome").innerHTML = "Hello World";
    // Current target refers to element that was clicked at event
    event.currentTarget.classList.add("clicked");
};

document.getElementById("btn-happy").onclick = (event) => {
    const pFeeling = document.getElementById("p-happy-sad-clear");
    pFeeling.innerHTML = "YAY";
    pFeeling.classList.add("happy-click");
    pFeeling.classList.remove("sad-click");
}

document.getElementById("btn-sad").onclick = (event) => {
    const pFeeling = document.getElementById("p-happy-sad-clear");
    pFeeling.innerHTML = "NAY";
    pFeeling.classList.add("sad-click");
    pFeeling.classList.remove("happy-click");
}

document.getElementById("btn-clear").onclick = (event) => {
    const pFeeling = document.getElementById("p-happy-sad-clear");
    pFeeling.innerHTML = "";
    pFeeling.classList.remove("sad-click");
    pFeeling.classList.remove("happy-click");
}

document.getElementById("txt-emotion").onkeyup = (event) => {
    const userInput = event.currentTarget.value;
    // Back ticks evaluate the variables signified by ${}
    document.getElementById("p-emotion").innerHTML = `You are feeling ${userInput}.`;
    document.getElementById("img-emotion").classList.remove("hidden");
};

document.getElementById("btn-mood").onclick = () => {
    // .trim() removes whitespace
    // .toLowerCase changes it all to lowercase
    const userColor = document.getElementById("txt-mood").value.trim().toLowerCase();
    const userMood = document.getElementById("p-mood");
    const error = document.getElementById("error-mood");
    error.innerHTML = ""; // Reset error
    let mood = "";
    userMood.innerHTML = ""; // Reset paragraph

    if (userColor == "") {
        error.innerHTML = "* blank";
        return;
    }

    if (userColor == "red") {
        mood = "mad";
    } else if (userColor == "pink") {
        mood = "in love";
    } else if (userColor == "blue") {
        mood = "sad";
    } else if (userColor == "yellow") {
        mood = "happy";
    } else if (userColor == "black") {
        mood = "emo";
    } else if (userColor == "green") {
        mood = "jealous";
    }

    if (mood == "") {
        error.innerHTML = "* Invalid color";
        return;
    }

    userMood.innerHTML = `You chose ${userColor}, you must be ${mood}`;
};

document.getElementById("btn-bounce").onclick = (event) => {
    const ball = document.getElementById("ball");

    if (ball.classList.contains("bounce")) {
        event.currentTarget.innerHTML = "Start";
    } else {
        event.currentTarget.innerHTML = "Stop";
    }

    ball.classList.toggle("bounce");
};

/* Counter */
let counter = 0;
let counterInterval;
const countP = document.getElementById("p-count");
const startBtn = document.getElementById("btn-count-start");
const stopBtn = document.getElementById("btn-count-stop");
const resetBtn = document.getElementById("btn-count-reset");

startBtn.onclick = () => {
    startBtn.disabled = true;
    stopBtn.disabled = false;
    resetBtn.disabled = false;

    // Parameter one features entire function declaration
    counterInterval = setInterval(()=>{
        counter++;
        countP.innerHTML = counter;
    }, 1000);
};

stopBtn.onclick = () => {
    startBtn.disabled = false;
    stopBtn.disabled = true;
    // Stops interval
    clearInterval(counterInterval);
};

resetBtn.onclick = () => {
    startBtn.disabled = false;
    stopBtn.disabled = true;
    resetBtn.disabled = true;

    counter = 0;
    countP.innerHTML = counter;
}

/* Donations */
const goal = 10000;
document.getElementById("goal-span").innerHTML = goal;

document.getElementById("btn-donations").onclick = () => {
    const donation = document.getElementById("txt-donation").value;
    const errorSpan = document.getElementById("donate-error");
    errorSpan.innerHTML = "";
    const donationMessage = document.getElementById("donation-msg");
    donationMessage.innerHTML = "";

    if (isNaN(donation) || (donation <= 0)) {
        errorSpan.innerHTML = "* Invalid amount";
        return;
    }

    const donationPercent = donation / goal * 100;

    if (donationPercent >= 100) {
        donationMessage.innerHTML = "Goal reached!"
    } else if (donationPercent >= 80) {
        donationMessage.innerHTML = "Almost there!";
    } else if (donationPercent >= 50) {
        donationMessage.innerHTML = "Keep going!";
    } else if (donationPercent >= 25) {
        donationMessage.innerHTML = "Keep going";
    } else {
        donationMessage.innerHTML = "Let's get started";
    }

    document.querySelector(":root").style.setProperty("--donation-percent", donationPercent + "%");
};