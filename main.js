// Toggle navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
};

// Scroll section active link
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector(`header nav a[href*="${id}"]`).classList.add('active');
            });
        }
    });

    // Sticky navbar
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // Remove toggle icon and navbar
    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};

// Scroll reveal
ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

// typed js 

const typed = new Typed('.multiple-text',{
    strings:['Full Stack Developer','Multimedia Designer'],
    typeSpeed:70,
    backSpeed:70,
    backDelay:1000,
    loop:true,
});

// EmailJS form submission
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent page reload

    // Form data
    var params = {
        user_name: this.user_name.value,
        user_email: this.user_email.value,
        subject: this.subject.value,
        user_mobile: this.user_mobile.value,
        message: this.message.value
    };

    // EmailJS send email
    emailjs.send("service_4prs2di", "template_wa40hhl", params)
        .then(function(response) {
            alert("Message sent successfully!");
            document.getElementById("contact-form").reset();
        }, function(error) {
            alert("Failed to send message. Please try again!");
            console.error("Error:", error);
        });
});