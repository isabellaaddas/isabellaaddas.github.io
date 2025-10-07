const getFood = async() => {
    const url = "https://isabellaaddas.github.io/csce242/projects/json/food.json";

    try {
        const response = await fetch(url);
        return response.json();
    }
    catch (error) {
        console.log("sorry");
    }
};

const showFood = async() => {
    const orders = await getFood();
    const sandwichDiv = document.getElementById("sandwiches");
    const soupDiv = document.getElementById("soups");
    const coldCutDiv = document.getElementById("cold-cuts");
    const jarredGoodDiv = document.getElementById("jarred-goods");
    const cheeseDiv = document.getElementById("cheese");
    const extraDiv = document.getElementById("extras");
    const dessertDiv = document.getElementById("desserts");

    orders.forEach((order) => {
        // Outer div
        const item = document.createElement("div");
        item.classList.add("menu-item");
        item.classList.add("columns");

        // Inner div for image
        const itemImageDiv = document.createElement("div");
        itemImageDiv.classList.add("menu-item-img");
        itemImageDiv.classList.add("one");
        item.append(itemImageDiv);

        // a - image div
        const imageA = document.createElement("a");
        imageA.href = "sandwich.html";
        itemImageDiv.append(imageA);

        // img - image div
        const img = document.createElement("img");
        img.src = `../json/images/${order.img}`;
        imageA.append(img);

        // Inner div for text
        const itemText = document.createElement("div");
        itemText.classList.add("menu-item-text");
        itemText.classList.add("three");
        item.append(itemText);

        // Special top text
        const itemTextTop = document.createElement("div");
        itemTextTop.classList.add("menu-item-text-top");
        itemTextTop.classList.add("special-columns");
        itemText.append(itemTextTop);

        // h4 title - top text
        const h4Title = document.createElement("h4");
        h4Title.classList.add("one");
        itemTextTop.append(h4Title);

        // a - top text
        const textA = document.createElement("a");
        textA.href = "sandwich.html";
        textA.innerHTML = order.name.toUpperCase();
        h4Title.append(textA);
        
        // Button div - top text
        const buttonDiv = document.createElement("div");
        buttonDiv.classList.add("incr-decr");
        buttonDiv.classList.add("one");
        itemTextTop.append(buttonDiv);

        // Minus button - button div
        const minus = document.createElement("button");
        minus.classList.add("minus-button");
        minus.innerHTML  = "-";
        buttonDiv.append(minus);

        // Counter span - button div
        const span = document.createElement("span");
        span.classList.add("counter");
        span.innerHTML = "1";
        buttonDiv.append(span);

        // Plus button - button div
        const plus = document.createElement("button");
        plus.classList.add("plus-button");
        plus.innerHTML = "+";
        buttonDiv.append(plus);

        // h4 price - top text
        const h4Price = document.createElement("h4");
        h4Price.classList.add("one");
        h4Price.innerHTML = `$${order.price}`;
        itemTextTop.append(h4Price);

        // Bottom text
        const itemTextBottom = document.createElement("div");
        itemTextBottom.classList.add("menu-item-text-bottom");
        itemText.append(itemTextBottom);

        // p - bottom text
        const p = document.createElement("p");
        p.innerHTML = order.description;
        itemTextBottom.append(p);

        // Decide which div to put it in based on category
        if (order.category == "sandwich") {
            sandwichDiv.append(item);
        } else if (order.category == "soup") {
            soupDiv.append(item);
        } else if (order.category == "cold-cut") {
            coldCutDiv.append(item);
        } else if (order.category == "jarred") {
            jarredGoodDiv.append(item);
        } else if (order.category == "cheese") {
            cheeseDiv.append(item);
        } else if (order.category == "extra") {
            extraDiv.append(item);
        } else if (order.category == "dessert") {
            dessertDiv.append(item);
        }
    });
};

showFood();