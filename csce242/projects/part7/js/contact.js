document.getElementById("contact-form").onsubmit = (event) => {
    event.preventDefault();

    const result = document.getElementById("contact-result");
    const formData = new FormData(event.currentTarget);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);
    // Create a form reference to hold the form element before the event clears
    // (due to asynchronous tasks being run)
    const form = event.currentTarget;

    result.innerHTML = "Please wait...";

    fetch("https://api.web3forms.com/submit", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: json
        })
        .then(async (response) => {
            let json = await response.json();
            if (response.status == 200) {
                result.innerHTML = "Email sent! Expect response within normal business hours.";
            } else {
                console.log(response);
                result.innerHTML = json.message;
            }
        })
        .catch(error => {
            console.log(error);
            result.innerHTML = "Something went wrong!";
        })
        .then(function() {
            form.reset();
            setTimeout(() => {
                result.style.display = "none";
            }, 5000);
        });
};