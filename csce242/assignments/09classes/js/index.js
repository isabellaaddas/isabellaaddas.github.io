const paintingsDiv = document.getElementById("paintings");

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

        const dialog = this.dialog(this.title, this.artist, this.pic, this.isFramed);
        console.log("dialog added?");

        const img = this.image(this.pic);
        img.onclick = () => {
            dialog.classList.remove("hidden");
        };

        const h3 = this.name(this.title);
        h3.onclick = () => {
            dialog.classList.remove("hidden");
        }
        
        section.append(h3);
        section.append(img);
        section.append(dialog);

        return section;
    }

    image(filename) {
        const img = document.createElement("img");
        img.src = `images/${filename}`;

        return img;
    }

    name(title) {
        const h3 = document.createElement("h3");
        h3.style.fontWeight = "bold";
        h3.innerHTML = title;

        return h3;
    }

    dialog(title, artist, filename, framed) {
        const modal = document.createElement("div");
        const content = document.createElement("div");
        const container = document.createElement("div");

        const span = document.createElement("span");
        const h2 = document.createElement("h2");
        const p = document.createElement("p");
        const img = document.createElement("img");

        span.classList.add("w3-button");
        span.classList.add("w3-display-topright");
        span.innerHTML = "&times;";
        span.onclick = () => {
            modal.classList.add("hidden");
        };

        h2.innerHTML = title;
        p.innerHTML = `by ${artist}`;
        img.src = `images/${filename}`;
        if (framed == "true") {
            img.classList.add("frame");
        }

        modal.classList.add("w3-modal");
        modal.classList.add("hidden");
        content.classList.add("w3-modal-content");
        container.classList.add("w3-container");
        
        container.append(span);
        container.append(h2);
        container.append(p);
        container.append(img);

        content.append(container);

        modal.append(content);

        return modal;
    }
}

/* Paintings Array */
const paintings = [];
paintings.push(new Painting("Blonde Woman", "Bianca Van Dijk", "blonde-woman.jpg", "true"));
paintings.push(new Painting("Cozy Bear", "Betidraws", "cozy-bear.jpg", "false"));
paintings.push(new Painting("Good Plant", "Bianca Van Dijk", "good-plant.jpg", "true"));
paintings.push(new Painting("The Archer", "Mila Okta Safitri", "the-archer.jpg", "true"));
paintings.push(new Painting("The Witchy Kitty", "Missartem", "the-witchy-kitty.png", "false"));

/* Looping and Populating */

paintings.forEach((painting) => {
    paintingsDiv.append(painting.section);
});