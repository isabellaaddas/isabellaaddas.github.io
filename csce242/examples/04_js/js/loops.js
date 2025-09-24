document.getElementById("btn-display").onclick = () => {
    const loopResult = document.getElementById("loop-result");
    const ul = document.createElement("ul");
    loopResult.append(ul);

    for (let i = 0; i < 10; ++i) {
        const li = document.createElement("li");
        li.innerHTML = `${i + 1} banana(s)`;

        ul.append(li);
    }
};

document.getElementById("btn-count").onclick = () => {
    const error = document.getElementById("error-number");
    error.innerHTML = "";

    const startNum = parseInt(document.getElementById("txt-start").value);
    const endNum = parseInt(document.getElementById("txt-end").value);

    const resultDiv = document.getElementById("d-count");
    resultDiv.innerHTML = "";

    if (endNum < startNum) {
        error.innerHTML = "* End number smaller than start number";
        return;
    }

    
};