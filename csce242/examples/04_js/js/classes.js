class Dog {
    constructor(title, breed, color, age, size, pic) {
        this.title = title;
        this.breed = breed;
        this.color = color;
        this.age = age;
        this.size = size;
        this.pic = pic;
    }

    get item() {
        const section = document.createElement("section");
        section.classList.add("dog");

        // Header
        const h3 = document.createElement("h3");
        h3.innerHTML = this.title;
        section.append(h3);
        const arrow = document.createElement("a");
        arrow.href="#";
        arrow.innerHTML = "&#x2964";
        h3.append(arrow);

        // Columns
        const colDiv = document.createElement("div");
        colDiv.classList.add("columns");
        section.append(colDiv);

        // Left column
        const leftCol = document.createElement("div");
        leftCol.append(this.picture(this.pic));
        colDiv.append(leftCol);

        // Right column
        const rightCol = document.createElement("div");
        rightCol.append(this.property("Breed", this.breed));
        rightCol.append(this.property("Size", this.size));
        rightCol.append(this.property("Age", this.age));
        rightCol.classList.add("transparent");
        colDiv.append(rightCol);

        arrow.onclick = (e) => {
            e.preventDefault(); // Don't go to link destination
            rightCol.classList.toggle("transparent");
        }

        return section;
    }

    picture(filename) {
        const img = document.createElement("img");
        img.src = `images/classes/${filename}`;

        return img;
    }

    property(name, value) {
        const p = document.createElement("p");
        p.innerHTML = `${name}: ${value}`;

        return p;
    }
}

const dogs = [];
dogs.push(new Dog("Coco", "Yorkie", "Black", 6, "small", "yorkie.jpg"));
dogs.push(new Dog("Sweetie", "Pit Bull", "White", 3, "large", "pitt-bull.jpg"));
dogs.push(new Dog("Goldie", "Golden Retriever", "Yellow", 5, "large", "golden-retriever.jpg"));

// On Page Load
const dogListDiv = document.getElementById("dog-list");

dogs.forEach((dog) => {
    dogListDiv.append(dog.item);
});