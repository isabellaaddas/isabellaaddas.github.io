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
}