// Dynamic Scroll Effect for Header
window.addEventListener('scroll', function() {
    const header = document.querySelector('.glass-header');
    if (window.scrollY > 50) {
        header.style.padding = '10px 0';
        header.style.background = 'rgba(255,255,255,0.95)';
    } else {
        header.style.padding = '20px 0';
        header.style.background = 'rgba(255,255,255,0.8)';
    }
});

// Subtle Grid Animation for Digital Vastu Canvas
const canvas = document.getElementById('digital-vastu-canvas');
const ctx = canvas.getContext('2d');

function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

window.addEventListener('resize', resize);
resize();

function drawGrid() {
    ctx.strokeStyle = '#d4af37';
    ctx.lineWidth = 0.2;
    const spacing = 50;

    for (let x = 0; x < canvas.width; x += spacing) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
    }
    for (let y = 0; y < canvas.height; y += spacing) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
    }
}
drawGrid();
