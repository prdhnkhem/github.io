// Intersection Observer for Dark Mode Transition
const vaultSection = document.querySelector('#vault');
const body = document.body;

const observerOptions = {
    threshold: 0.2
};

const vaultObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            body.classList.add('vault-active');
        } else {
            body.classList.remove('vault-active');
        }
    });
}, observerOptions);

vaultObserver.observe(vaultSection);

// Digital Vastu Canvas Logic (Your existing canvas code goes here)
// Ensure the canvas stretches to the full height of the SPA
function resizeCanvas() {
    const canvas = document.getElementById('digital-vastu-canvas');
    if(canvas) {
        canvas.width = window.innerWidth;
        canvas.height = document.documentElement.scrollHeight;
    }
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

// Smooth Navigation Menu Close (For Mobile)
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        const overlay = document.getElementById('mobile-nav');
        if(overlay && overlay.classList.contains('active')) {
            overlay.classList.remove('active');
        }
    });
});

// Mobile Menu Toggle Logic
const menuTrigger = document.getElementById('menu-trigger');
const mainNav = document.getElementById('main-nav');
const navLinks = document.querySelectorAll('.nav-links a');

menuTrigger.addEventListener('click', () => {
    mainNav.classList.toggle('active');
    menuTrigger.classList.toggle('open');
});

// Auto-close menu when a link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        mainNav.classList.remove('active');
        menuTrigger.classList.remove('open');
    });
});

// Digital Vastu Canvas (Placeholder for your animation logic)
const canvas = document.getElementById('digital-vastu-canvas');
const ctx = canvas.getContext('2d');
function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
window.addEventListener('resize', resize);
resize();

// Example Animation: Subtle pulsing grid
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // Your specific canvas code from previous versions goes here
    requestAnimationFrame(animate);
}
animate();
