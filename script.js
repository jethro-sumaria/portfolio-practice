// Portfolio Website JavaScript

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if(targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if(targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Contact Form Submission
    const contactForm = document.getElementById('contactForm');
    if(contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // Basic validation
            if(!name || !email || !subject || !message) {
                alert('Please fill in all fields');
                return;
            }
            
            // In a real application, you would send this data to a server
            // For now, we'll just show a success message
            alert(`Thank you ${name}! Your message has been sent. I'll get back to you soon at ${email}.`);
            
            // Reset form
            contactForm.reset();
        });
    }
    
    // Download Resume Button
    const downloadResumeBtn = document.getElementById('downloadResume');
    if(downloadResumeBtn) {
        downloadResumeBtn.addEventListener('click', function(e) {
            e.preventDefault();
            alert('In a real implementation, this would download your resume PDF. For now, you can link to your actual resume file.');
            
            // To actually implement:
            // 1. Upload your resume PDF to the project folder
            // 2. Change the href to point to that file
            // window.open('path/to/your-resume.pdf', '_blank');
        });
    }
    
    // Scroll animations
    function revealOnScroll() {
        const reveals = document.querySelectorAll('.reveal');
        
        for(let i = 0; i < reveals.length; i++) {
            const windowHeight = window.innerHeight;
            const elementTop = reveals[i].getBoundingClientRect().top;
            const elementVisible = 100;
            
            if(elementTop < windowHeight - elementVisible) {
                reveals[i].classList.add('active');
            }
        }
    }
    
    // Add reveal class to sections for animation
    document.querySelectorAll('section').forEach(section => {
        section.classList.add('reveal');
    });
    
    // Initial call
    revealOnScroll();
    
    // Call on scroll
    window.addEventListener('scroll', revealOnScroll);
    
    // Navbar background change on scroll
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if(window.scrollY > 100) {
            navbar.style.backgroundColor = 'rgba(33, 37, 41, 0.95)';
            navbar.style.transition = 'background-color 0.3s ease';
        } else {
            navbar.style.backgroundColor = '';
        }
    });
    
    // Project card GitHub links (placeholder)
    document.querySelectorAll('.project-links .btn-outline-primary').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            alert('GitHub link would open your project repository. Update the href attribute with your actual GitHub link.');
        });
    });
    
    // Project card Live Demo links (placeholder)
    document.querySelectorAll('.project-links .btn-primary').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            alert('Live demo would open your deployed project. Update the href attribute with your actual project URL.');
        });
    });
    
    // Update current year in footer
    const currentYear = new Date().getFullYear();
    document.querySelector('footer p').textContent = `© ${currentYear} MyPortfolio. All rights reserved.`;
});