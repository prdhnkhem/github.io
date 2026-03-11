javascript
document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Mobile Menu Activation
    const trigger = document.getElementById("menu-trigger");
    const overlay = document.getElementById("mobile-nav");
    if (trigger && overlay) {
        trigger.addEventListener("click", () => {
            overlay.classList.toggle("active");
            document.body.style.overflow = overlay.classList.contains("active") ? "hidden" : "auto";
        });
    }

    // 2. Ticker Loop Initialization
    const ticker = document.querySelector(".ticker");
    if (ticker) {
        ticker.innerHTML += ticker.innerHTML; // Suggestion 1: Duplication for loop
        const speed = 0.5;
        let pos = 0;
        function move() {
            pos -= speed;
            if (pos <= -(ticker.firstElementChild.offsetWidth + 80)) {
                pos = 0;
            }
            ticker.style.transform = `translateX(${pos}px)`;
            requestAnimationFrame(move);
        }
        move();
    }

    // 3. Review Scroller Loop (Suggestion 11)
    const reviewTrack = document.getElementById("scroller-mixed");
    if (reviewTrack) {
        reviewTrack.innerHTML += reviewTrack.innerHTML;
        let rPos = 0;
        function scrollReviews() {
            rPos -= 0.4;
            if (rPos <= -(reviewTrack.scrollWidth / 2)) {
                rPos = 0;
            }
            reviewTrack.style.transform = `translateX(${rPos}px)`;
            requestAnimationFrame(scrollReviews);
        }
        scrollReviews();
    }

    // 4. Digital Vastu Canvas (Suggestions 8)
    initCanvas();
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

    const particles = Array.from({ length: 15 }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        s: Math.random() * 80 + 40,
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2,
        t: Math.floor(Math.random() * 3)
    }));

    function loop() {
        ctx.clearRect(0, 0, w, h);
        ctx.strokeStyle = "rgba(240, 180, 41, 0.1)";
        ctx.lineWidth = 1;
        particles.forEach(p => {
            p.x += p.vx; p.y += p.vy;
            if (p.x < 0 || p.x > w) p.vx *= -1;
            if (p.y < 0 || p.y > h) p.vy *= -1;
            ctx.beginPath();
            if (p.t === 0) { // Hexagon
                for(let i=0; i<6; i++) ctx.lineTo(p.x + p.s * Math.cos(i * Math.PI/3), p.y + p.s * Math.sin(i * Math.PI/3));
            } else if (p.t === 1) { // Triangle
                ctx.moveTo(p.x, p.y); ctx.lineTo(p.x + p.s, p.y); ctx.lineTo(p.x + p.s/2, p.y - p.s);
            } else { // Compass
                ctx.moveTo(p.x - p.s, p.y); ctx.lineTo(p.x + p.s, p.y); ctx.moveTo(p.x, p.y - p.s); ctx.lineTo(p.x, p.y + p.s);
            }
            ctx.closePath(); ctx.stroke();
        });
        requestAnimationFrame(loop);
    }
    loop();
}
