const catsDiv = document.getElementById("cat-showcase");

// Associative Array 1: Before Pictures
const beforeCats = [];
beforeCats["Ciabatta"] = 'images/Ciabatta-before.jpg';
beforeCats["Dapper"] = 'images/Dapper-before.jpg';
beforeCats["Earl"] = 'images/Earl-before.jpg';
beforeCats["Fluffy"] = 'images/Fluffy-before.jpg';

for (let cat in beforeCats) {
    const catDiv = document.createElement("div");
    catDiv.classList.add("cat-card");

    const catPic = document.createElement("img");
    catPic.src = beforeCats[cat];

    catDiv.append(catPic);

    catDiv.onmouseenter = () => {
        /* */
    }

    catsDiv.append(catDiv);
}