function goToContact() {
    window.location.href = "contact.html";
}

function submitForm(event) {
    event.preventDefault();
    document.getElementById("msg").innerText =
        "Thank you! We will contact you soon.";
}