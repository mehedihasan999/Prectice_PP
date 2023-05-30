// script.js

// Toggle Navbar links for responsive view
const navbarToggle = document.getElementById('navbarToggle');
const navbarLinks = document.getElementById('navbarLinks');

navbarToggle.addEventListener('click', () => {
  navbarLinks.classList.toggle('active');
});


//About page

// script.js
// script.js

// Add event listener to project card buttons
const projectButtons = document.querySelectorAll('.btn');

projectButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Perform desired action when button is clicked
    console.log('Button clicked');
  });
});


// script.js

// script.js

// Contact form submission
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // Get form values
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Send form data to server
  fetch('/send-email', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name,
      email,
      message,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log('Email sent successfully');
      // Optionally show a success message to the user
    })
    .catch((error) => {
      console.log('Error sending email', error);
      // Optionally show an error message to the user
    });

  // Reset form fields
  contactForm.reset();
});
