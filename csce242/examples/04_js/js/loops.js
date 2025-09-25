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

    // Loop for every number from start to end and display in paragraphs
    for (let i = startNum; i <= endNum; i++) {
        const pCounter = document.createElement("p");
        pCounter.innerHTML = i;

        // Can only make onclick functionality where this element is alive
        pCounter.onclick = () => {
            console.log(`You cllicked Number ${i}`);
        };

        resultDiv.append(pCounter);
    }
};

document.getElementById("btn-show-toys").onclick = () => {
    const toyList = document.getElementById("toy-list");
    toyList.innerHTML = "";

    const toys = ["ball", "skipping rope", "doll", "mini car", "elmo"];

    /* First way to iterate */
    // Iterate over toys and add lis to the ul 
    /*for (let i = 0; i < toys.length; i++) {
        const li = document.createElement("li");
        li.innerHTML = toys[i];

        toyList.append(li);
    }/*

    /* Second way preferred: for each */
    // toy is the element at index, i is the index
    toys.forEach((toy, i) => {
        const li = document.createElement("li");
        li.innerHTML = toy;

        toyList.append(li);
    });
};

document.getElementById("btn-show-toy-prices").onclick = () => {
    const toys = [];
    // Associate array
    toys["ball"] = 2.99;
    toys["barbie"] = 19.99;
    toys["skipping rope"] = 1.98;
    toys["match box car"] = 2.54;

    const toyDiv = document.getElementById("toy-prices");
    toyDiv.innerHTML = "";

    const priceDiv = document.getElementById("prices");
    priceDiv.innerHTML = "";

    for (let toy in toys) {
        const p = document.createElement("p");
        p.innerHTML = toy;

        toyDiv.append(p);

        // On click paragrapph, show price in div
        p.onclick = () => {
            priceDiv.innerHTML = `${toy} costs $${toys[toy]}`;
        }
    }
};