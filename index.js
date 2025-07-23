// template_ux16esc - Template ID
// service_frm9cdp - Service ID
// fZork7537wneqtdF2 - Public Key



// Async await function Promise to verify email js through IDs
function contact(event) {
    event.preventDefault(); //This line prevents the default action of the form submission, which would normally refresh the page. Instead, we want to handle the submission with JavaScript.
    const loading = document.querySelector('.modal__overlay--loading'); //This selects an HTML element with the class modal__overlay--loading
    const success = document.querySelector('.modal__overlay--success'); //This selects another element that will show a success message once the email is sent.
    loading.classList += " modal__overlay--visible"; //This adds a class to the loading element to make it visible on the screen, indicating to the user that the form is being processed.

    emailjs //This is a call to the EmailJS service, which allows you to send emails directly from your JavaScript code. The parameters include:
        .sendForm(
            'service_frm9cdp', //The ID of the email service you are using.
            'template_ux16esc', //The ID of the email template you want to use.
            event.target, //This refers to the form that was submitted.
            'fZork7537wneqtdF2' //This is the user ID or API key for authentication.
        ).then(() => { //.then(() => { ... }): This block runs if the email is sent successfully. It removes the loading indicator and shows the success message.
            loading.classList.remove("modal__overlay--visible"); //This hides the loading spinner.
            success.classList += " modal__overlay--visible"; //This makes the success message visible.
        }).catch(() => {
            loading.classList.remove("modal__overlay--visible");
            alert(
                "The email service is temporarily unavailable. Please contact me directly on tchowdhhury29@gmail.com"
            );
        })
}