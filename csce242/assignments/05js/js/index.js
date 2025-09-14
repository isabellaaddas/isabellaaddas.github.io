// Function for "Sunny Times" text
document.getElementById("h-sunny").onclick = () => {
    document.getElementById("p-sunny-one").innerHTML = "Here comes the sun";
    document.getElementById("p-sunny-two").innerHTML = "&emsp;&emsp;Sun";
    document.getElementById("p-sunny-three").innerHTML = "&emsp;&emsp;&emsp;&emsp;Sun";
    document.getElementById("p-sunny-four").innerHTML = "&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Sun";
    document.getElementById("p-sunny-five").innerHTML = "Here it comes";
};

// Function to display text with selected color value from
// color picker input (using event listener)
document.getElementById("color-picker").addEventListener("change", function() {
    const userColor = document.getElementById("color-picker").value;
    const colorText = document.getElementById("p-color");

    colorText.innerHTML = `This color is ${userColor}`;
    colorText.style.color = `${userColor}`;
});

// Change image on click
document.getElementById("img-becomes-sunny").onclick = (event) => {
    event.currentTarget.src = 'images/sunny.jpg';
};