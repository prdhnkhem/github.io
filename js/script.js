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
