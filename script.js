function showMessage() {
    window.location.href = "courses.html";
}

document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();
            alert("Thank you! Your message has been sent successfully.");
            form.reset();
        });
    }
});
