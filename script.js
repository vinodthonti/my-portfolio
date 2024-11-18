
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active'); 
}

function scrollToPortfolio() {
    const portfolioSection = document.getElementById('portfolio');
    portfolioSection.scrollIntoView({ behavior: 'smooth' });
}

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    console.log('Form submitted:', { name, email, message });
    document.getElementById('contactForm').reset();

    alert('Thank you for reaching out! I will get back to you soon.');
});

// var typed = new Typed(".text",{
//     strings:["Frontend Developer","Web Developer"],
//     typeSpeed:100,
//     backSpeed:100,
//     backDelay:1000,
//     loop:true

// });
