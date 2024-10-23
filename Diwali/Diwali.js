 // Countdown Timer
 function updateCountdown() {
    const currentYear = new Date().getFullYear();
    // Diwali 2024 date (November 1, 2024)
    const diwaliDate = new Date(2024, 10, 1);
    
    if (new Date() > diwaliDate) {
        diwaliDate.setFullYear(currentYear + 1);
    }

    const currentDate = new Date();
    const diff = diwaliDate - currentDate;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById('countdown').innerHTML = `
        Time until Diwali: ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds
    `;
}

// Update countdown every second
setInterval(updateCountdown, 1000);
updateCountdown();

// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const section = document.querySelector(this.getAttribute('href'));
        section.scrollIntoView({ behavior: 'smooth' });
    });
});