// Welcome Button
function showMessage() {
    alert("🎉 Welcome to EduSmart! Happy Learning.");
}

// Contact Form
const form = document.querySelector("form");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.querySelector('input[type="text"]').value;
    const email = document.querySelector('input[type="email"]').value;

    if (name === "" || email === "") {
        alert("Please fill all the required fields.");
    } else {
        alert("✅ Thank you, " + name + "! Your message has been sent successfully.");
        form.reset();
    }
});