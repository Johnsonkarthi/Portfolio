// Contact Form Submission Alert
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("📩 Thank you for reaching out! I'll get back to you soon.");
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Adding a Simple Dark Mode Toggle
const header = document.querySelector("header");
header.addEventListener("dblclick", function() {
    document.body.classList.toggle("dark-mode");
});

// Dark Mode CSS (Dynamically Applied)
const darkModeCSS = document.createElement("style");
darkModeCSS.innerHTML = `
    .dark-mode {
        background-color: #222;
        color: white;
    }
    .dark-mode section {
        background-color: #333;
        color: white;
    }
    .dark-mode nav {
        background-color: #444;
    }
    .dark-mode button {
        background: #f4a261;
        color: black;
    }
`;
document.head.appendChild(darkModeCSS);
