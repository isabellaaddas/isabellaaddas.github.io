/* Variables are var, let, const (don't use var, let better, const standard unless 
it actually needs to change) */
/*
const sayHello = () => {
    console.log("Hello World");
}

document.getElementById("btn-click-me").onclick = sayHello;
*/

document.getElementById("btn-click-me").onclick = () => {
    console.log("Hello World");
};