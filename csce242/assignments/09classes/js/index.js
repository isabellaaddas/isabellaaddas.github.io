/* Paintings Class */
class Painting {
    constructor(title, artist, pic, isFramed) {
        this.title = title;
        this.artist = artist;
        this.pic = pic;
        this.isFramed = isFramed;
    }

    get section() {
        const section = document.createElement("section");
        section.classList.add("painting");
        
        section.append(this.name(this.title));
        section.append(this.image(this.pic));

        return section;
    }

    image(filename) {
        const img = document.createElement("img");
        img.src = `images/${filename}`;

        return img;
    }

    name(title) {
        const h3 = document.createElement("h3");
        h3.innerHTML = title;

        return h3;
    }
}

/* Paintings Array */
const paintings = [];
paintings.push(new Painting("Blonde Woman", "Bianca Van Dijk", "blonde-woman.jpg", "true"));
paintings.push(new Painting("Cozy Bear", "Betidraws", "cozy-bear.jpg", "false"));
paintings.push(new Painting("Good Plant", "Bianca Van Dijk", "good-plant.jpg", "false"));
paintings.push(new Painting("The Archer", "Mila Okta Safitri", "the-archer.jpg", "true"));
paintings.push(new Painting("The Witchy Kitty", "Missartem", "the-witchy-kitty.png", "true"));

/* Looping and Populating */
const paintingsDiv = document.getElementById("paintings");

paintings.forEach((painting) => {
    paintingsDiv.append(painting.section);
});