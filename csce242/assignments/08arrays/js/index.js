const catsDiv = document.getElementById("cat-showcase");
const popup = document.getElementById("after-popup");
const closeBtn = document.getElementById("close");

// Associative Array 1: Before Pictures
const beforeCats = [];
beforeCats["Ciabatta"] = 'images/Ciabatta-before.jpg';
beforeCats["Dapper"] = 'images/Dapper-before.jpg';
beforeCats["Earl"] = 'images/Earl-before.jpg';
beforeCats["Fluffy"] = 'images/Fluffy-before.jpg';

// Associate Array 2: After Pictures
const afterCats = [];
afterCats["Ciabatta"] = 'images/Ciabatta-after.jpg';
afterCats["Dapper"] = 'images/Dapper-after.jpg';
afterCats["Earl"] = 'images/Earl-after.jpg';
afterCats["Fluffy"] = 'images/Fluffy-after.jpg';

for (let cat in beforeCats) {
    const catDiv = document.createElement("div");
    catDiv.classList.add("cat-card");

    const catPic = document.createElement("img");
    catPic.src = beforeCats[cat];

    const catAdopt = document.createElement("div");
    catAdopt.classList.add("overlay");
    catAdopt.classList.add("hidden");
    catAdopt.innerHTML = `Please adopt ${cat}`;

    catDiv.append(catPic);
    catDiv.append(catAdopt);

    catDiv.onmouseenter = () => {
        catAdopt.classList.remove("hidden");
    }

    catDiv.onmouseleave = () => {
        catAdopt.classList.add("hidden");
    }

    catDiv.onclick = () => {
        popup.innerHTML = "";

        const popupText = document.createElement("p");
        popupText.innerHTML = `${cat} after adoption`;

        const popupImg = document.createElement("img");
        popupImg.src = afterCats[cat];

        popup.append(closeBtn);
        popup.append(popupText);
        popup.append(popupImg);

        popup.classList.remove("hidden");
    }

    catsDiv.append(catDiv);
}

closeBtn.onclick = () => {
    popup.innerHTML = "";
    popup.classList.add("hidden");
};