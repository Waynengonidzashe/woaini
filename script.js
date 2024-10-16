function openEnvelope() {
    document.querySelector('.flap').style.transform = 'rotateX(180deg)';
    document.querySelector('.letter').style.display = 'block';
    setTimeout(() => {
        document.querySelector('.response').classList.remove('hidden');
    }, 800); // Wait for envelope animation to complete
}

function showThanks(reply) {
    document.querySelector('.response').classList.add('hidden');
    document.querySelector('.thank-you').classList.remove('hidden');
}

function sendReply() {
    let userMessage = document.querySelector('.custom-reply textarea').value; // Get user's reply
    console.log("Sending message:", userMessage); // Log the message

    let templateParams = {
        message: userMessage,
        to_email: "your_email@example.com" // Replace with your email
    };

    console.log("Template params:", templateParams); // Log the template parameters

    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams) // Replace with your service and template IDs
    .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
        document.querySelector('.thank-you p').textContent = "Your reply has been sent!";
    }, function(error) {
        console.log('FAILED...', error);
        document.querySelector('.thank-you p').textContent = "Failed to send your reply.";
    });
}
