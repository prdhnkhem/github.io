document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Mobile Menu Toggle
    const trigger = document.getElementById("menu-trigger");
    const overlay = document.getElementById("mobile-nav");
    if (trigger && overlay) {
        trigger.addEventListener("click", () => {
            overlay.classList.toggle("active");
        });
    }

    // 2. Continuous Loop for Ticker
    const ticker = document.querySelector(".ticker");
    if (ticker) {
        const speed = 0.5; // pixels per frame
        let posX = 0;
        function moveTicker() {
            posX -= speed;
            if (posX <= -(ticker.firstElementChild.offsetWidth)) {
                posX = 0;
            }
            ticker.style.transform = `translateX(${posX}px)`;
            requestAnimationFrame(moveTicker);
        }
        moveTicker();
    }

    // 3. Continuous Loop for Reviews
    const tracks = document.querySelectorAll(".scroller-track");
    tracks.forEach(track => {
        track.innerHTML += track.innerHTML; // Duplicate content
        let pos = 0;
        function scroll() {
            pos -= 0.4;
            if (pos <= -(track.scrollWidth / 2)) {
                pos = 0;
            }
            track.style.transform = `translateX(${pos}px)`;
            requestAnimationFrame(scroll);
        }
        scroll();
    });

    // 4. Background Canvas Animation
    initCanvas();

    // 5. QR Modal Functionality
    const openBtn = document.getElementById("open-qr-btn");
    const modal = document.getElementById("qr-modal");
    const closeBtn = document.getElementById("close-qr-btn");

    if (openBtn && modal) {
        openBtn.addEventListener("click", (e) => {
            e.preventDefault();
            modal.style.display = "flex";
        });
    }

    if (closeBtn) {
        closeBtn.addEventListener("click", () => {
            modal.style.display = "none";
        });
    }

    window.onclick = (event) => {
        if (event.target === modal) modal.style.display = "none";
    };
});

function initCanvas() {
    const canvas = document.getElementById("digital-vastu-canvas");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let w, h;

    const resize = () => {
        w = canvas.width = window.innerWidth;
        h = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", resize);
    resize();

    const particles = Array.from({ length: 20 }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        size: Math.random() * 60 + 30,
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2,
        type: Math.floor(Math.random() * 3)
    }));

    function draw() {
        ctx.clearRect(0, 0, w, h);
        ctx.strokeStyle = "rgba(240, 180, 41, 0.1)";
        ctx.lineWidth = 1;

        particles.forEach(p => {
            p.x += p.vx;
            p.y += p.vy;
            if (p.x < 0 || p.x > w) p.vx *= -1;
            if (p.y < 0 || p.y > h) p.vy *= -1;

            ctx.beginPath();
            if (p.type === 0) { // Hexagon
                for(let i=0; i<6; i++) {
                    ctx.lineTo(p.x + p.size * Math.cos(i * Math.PI / 3), p.y + p.size * Math.sin(i * Math.PI / 3));
                }
            } else if (p.type === 1) { // Triangle
                ctx.moveTo(p.x, p.y);
                ctx.lineTo(p.x + p.size, p.y);
                ctx.lineTo(p.x + p.size/2, p.y - p.size);
            } else { // Compass
                ctx.moveTo(p.x - p.size, p.y);
                ctx.lineTo(p.x + p.size, p.y);
                ctx.moveTo(p.x, p.y - p.size);
                ctx.lineTo(p.x, p.y + p.size);
            }
            ctx.closePath();
            ctx.stroke();
        });
        requestAnimationFrame(draw);
    }
    draw();
}
