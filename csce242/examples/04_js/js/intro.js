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