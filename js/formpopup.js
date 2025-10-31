document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");

    const successDiv = document.getElementById("submission-message");

    form.addEventListener("submit", function (event) { 
        event.preventDefault();
        
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const discord = document.getElementById("discord").value;
        const message = document.getElementById("message").value;

        successDiv.innerHTML =  `
                <h2>Form Successfully Submitted!</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Discord Username:</strong> ${discord}</p>
                <p><strong>Message:</strong> ${message}</p>      
            `;
        form.reset()
    });
});