document.getElementById("arrow-prev").onclick = (event) => {
    event.preventDefault();
    
    const currSlide = document.querySelector("#slides :not(.hidden)");
    let prevSlide = currSlide.previousElementSibling;

    if (!prevSlide) {
        prevSlide = document.querySelector("#slides :last-child");
    }

    currSlide.classList.add("hidden");
    prevSlide.classList.remove("hidden");
};

document.getElementById("arrow-next").onclick = (event) => {
    event.preventDefault();

    const currSlide = document.querySelector("#slides :not(.hidden)");
    let nextSlide = currSlide.nextElementSibling;

    if(!nextSlide) {
        nextSlide = document.querySelector("#slides :first-child");
    }

    currSlide.classList.add("hidden");
    nextSlide.classList.remove("hidden");
};