// async denotes an asynchronous function, which happens on its own time without slowing down
// other things
const getShoes = async() => {
    const url = "https://portiaportia.github.io/json/shoes.json";

    try {
        // await denotes waiting until statement is complete to proceed to the next
        // (can only be used with async function)
        const response = await fetch(url);
        return response.json();
    }
    catch (error) {
        console.log("sorry");
    }
};

const showShoes = async() => {
    const shoes = await getShoes();
    const shoeListDiv = document.getElementById("shoe-list");

    shoes.forEach((shoe) => {
        // Make section for each shoe, putting the data in nicely
        const section = document.createElement("section");
        section.classList.add("shoe");

        // Heading
        const h3 = document.createElement("h3");
        section.append(h3);
        h3.innerHTML = shoe.name;

        // Brand
        const p = document.createElement("p");
        section.append(p);
        p.innerHTML = `Brand: ${shoe.brand}`;

        // Loop through reviews and make ul li list
        const ul = document.createElement("ul");
        section.append(ul);

        shoe.reviews.forEach((review) => {
            const li = document.createElement("li");
            li.innerHTML = review;

            ul.append(li);
        });

        // Image
        //const img = document.createElement("img");
        //section.append(img);
        //img.src = `https://portiaportia.github.io/json/${shoe.img}`;

        // Append to shoe list
        shoeListDiv.append(section);
    });
};

showShoes();