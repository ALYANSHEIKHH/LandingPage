document.getElementById('downloadForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var email = document.getElementById('email').value;

    if (email) {
        document.getElementById('downloadForm').style.display = 'none';
        document.getElementById('thankYouMessage').style.display = 'block';
        // Here you would typically send the email to your server
        // using AJAX or a form submission.
        console.log('Email submitted: ' + email);
    }
});
