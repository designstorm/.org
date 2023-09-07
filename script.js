// script.js
document.addEventListener("DOMContentLoaded", function () {
    const aboutUsLink = document.querySelector("#about-us-link");

    aboutUsLink.addEventListener("click", function (e) {
        e.preventDefault();
        // Redirect to the About Us page
        window.location.href = "about.html";
    });
});

// script.js
document.addEventListener("DOMContentLoaded", function () {
    const privacyLink = document.getElementById("privacy-link");
    const termsLink = document.getElementById("terms-link");
    const modalBackground = document.querySelector(".modal-background");
    const modalContent = document.querySelector(".modal-content");

    function openModal() {
        modalBackground.style.display = "flex";
    }

    function closeModal() {
        modalBackground.style.display = "none";
    }

    privacyLink.addEventListener("click", function (e) {
        e.preventDefault();
        openModal();
        // Load and display your privacy policy content here
        modalContent.innerHTML = "<h2>Privacy Policy</h2><p>Your privacy policy content goes here.</p>";
    });

    termsLink.addEventListener("click", function (e) {
        e.preventDefault();
        openModal();
        // Load and display your terms and conditions content here
        modalContent.innerHTML = "<h2>Terms and Conditions</h2><p>Your terms and conditions content goes here.</p>";
    });

    modalBackground.addEventListener("click", function (e) {
        if (e.target === modalBackground) {
            closeModal();
        }
    });
});

// script.js
document.addEventListener("DOMContentLoaded", function () {
    const cursor = document.querySelector(".cursor");

    document.addEventListener("mousemove", (e) => {
        cursor.style.left = e.pageX + "px";
        cursor.style.top = e.pageY + "px";
    });

    const links = document.querySelectorAll(".hover-links a");
    links.forEach((link) => {
        link.addEventListener("mouseover", () => {
            cursor.style.width = "40px"; /* Adjust the expanded size */
            cursor.style.height = "40px"; /* Adjust the expanded size */
            cursor.style.opacity = "0.7"; /* Adjust the transparency */
        });

        link.addEventListener("mouseout", () => {
            cursor.style.width = "20px"; /* Return to the original size */
            cursor.style.height = "20px"; /* Return to the original size */
            cursor.style.opacity = "1"; /* Restore full opacity */
        });
    });
});


// Select the Services link
const servicesLink = document.querySelector('a[href="#services"]');

// Add a click event listener to the Services link
servicesLink.addEventListener('click', function (e) {
    e.preventDefault(); // Prevent the default behavior of jumping to the anchor
    
    // Get the target section (services) by its ID
    const targetSection = document.getElementById('services');
    
    // Scroll smoothly to the target section
    targetSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start' // You can change this to 'center' or 'end' if desired
    });
});

// Select all service headings
const serviceHeadings = document.querySelectorAll('.service h3.service-heading');

// Add click event listeners to each service heading
serviceHeadings.forEach((heading) => {
    heading.addEventListener('click', function () {
        // Toggle the visibility of the associated description
        const description = this.nextElementSibling; // Get the next element (description)
        if (description.style.display === 'none' || description.style.display === '') {
            description.style.display = 'block'; // Show the description
        } else {
            description.style.display = 'none'; // Hide the description
        }
    });
});

// JavaScript to handle smooth scrolling when clicking the "Contact" link
document.querySelector('a[href="#contact"]').addEventListener('click', function (e) {
    e.preventDefault(); // Prevent default behavior of the link

    const targetElement = document.getElementById('contact'); // Get the footer element
    const yOffset = -50; // Adjust the offset as needed to fine-tune the scrolling position

    // Scroll to the footer smoothly
    window.scrollTo({
        top: targetElement.offsetTop + yOffset,
        behavior: 'smooth'
    });
});

// JavaScript to show the letter image when "About Us" button is clicked
document.getElementById('about-us-link').addEventListener('click', function () {
    const letterImage = document.getElementById('letter-image');
    
    // Check if the letter image is hidden, then show it; otherwise, hide it
    if (letterImage.style.display === 'none' || letterImage.style.display === '') {
        letterImage.style.display = 'block';
    } else {
        letterImage.style.display = 'none';
    }
});
