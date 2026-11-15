
// Smooth scroll for navigation
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function(e) {
        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            e.preventDefault();
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Player cards animation
const playerCards = document.querySelectorAll('.player-card');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, {
    threshold: 0.2
});

playerCards.forEach(card => {
    observer.observe(card);
});

// Welcome message
console.log("WELCOME TO WINSTON FC!");
console.log("ONE TEAM. ONE FAMILY.");
