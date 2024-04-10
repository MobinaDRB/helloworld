document.getElementById('contactForm').addEventListener('submit', function(event){
    event.preventDefault();
    
    // Example: Fetch API could be used here to send form data to a server
    console.log("Form submitted");
    alert("Thank you for your message!");
    
    // Reset the form after submission
    event.target.reset();
});
