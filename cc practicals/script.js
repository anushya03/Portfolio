// Form submission functionality
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        document.getElementById('response').innerHTML = `<p>Thank you for your message, ${name}! We will get back to you shortly.</p>`;
        document.getElementById('contact-form').reset();
    } else {
        document.getElementById('response').innerHTML = `<p>Please fill in all fields.</p>`;
    }
});
