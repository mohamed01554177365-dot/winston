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

// Players Database
const players = [
    { name: "KOFI BEN ZAMORA", position: "GOALKEEPER", number: "#1", image: "images/player1.jpg", bio: "A reliable goalkeeper who protects the goal and leads from the back." },
    { name: "HAMADA RM", position: "GOALKEEPER", number: "#16", image: "images/player2.jpg", bio: "A reliable goalkeeper who protects the goal and leads from the back." },
    { name: "BEN GOMAA", position: "CENTER BACK", number: "#4", image: "images/player3.jpg", bio: "A strong defender who always puts the team first." },
    { name: "SHARKAWY", position: "CENTER BACK", number: "#5", image: "images/player4.jpg", bio: "A strong defender who always puts the team first." },
    { name: "ZOLA", position: "CENTER BACK", number: "#23", image: "images/player5.jpg", bio: "A strong defender who always puts the team first." },
    { name: "HAZEM ZSC", position: "CENTER BACK", number: "#26", image: "images/player6.jpg", bio: "A strong defender who always puts the team first." },
    { name: "MOAAZ UWK", position: "CENTER BACK", number: "#12", image: "images/player7.jpg", bio: "A strong defender who always puts the team first." },
    { name: "MOAZ AZAB", position: "RIGHT BACK", number: "#66", image: "images/player8.jpg", bio: "A hard-working full back who defends and attacks down the right." },
    { name: "YOUSSEF BEN TAREK", position: "RIGHT BACK", number: "#6", image: "images/player9.jpg", bio: "A hard-working full back who defends and attacks down the right." },
    { name: "AMR EL SWESSY", position: "LEFT BACK", number: "#3", image: "images/player10.jpg", bio: "A hard-working full back who defends and attacks down the left." },
    { name: "YASSIN FAROUK", position: "LEFT BACK", number: "#13", image: "images/player11.jpg", bio: "A hard-working full back who defends and attacks down the left." },
    { name: "EYAD EL FARANSY", position: "DEFENSIVE MIDFIELDER", number: "#17", image: "images/player12.jpg", bio: "A midfielder who protects the defense and wins the ball back." },
    { name: "MOHAMED ASHRAF", position: "CENTRAL MIDFIELDER", number: "#14", image: "images/player14.jpg", bio: "A talented midfielder who gives everything for the team. One team. One family." },
    { name: "AMR YASSER", position: "CENTRAL MIDFIELDER", number: "#20", image: "images/player15.jpg", bio: "A talented midfielder who gives everything for the team. One team. One family." },
    { name: "LOAY MOHSEN", position: "ATTACKING MIDFIELDER", number: "#8", image: "images/player16.jpg", bio: "A creative player who links midfield and attack." },
    { name: "MOHAMED ADEL", position: "LEFT WINGER", number: "#15", image: "images/player17.jpg", bio: "A fast winger who creates chances down the left." },
    { name: "ABDULLAH SON", position: "LEFT WINGER", number: "#7", image: "images/player18.jpg", bio: "A fast winger who creates chances down the left." },
    { name: "BEBO HAGAZY", position: "LEFT WINGER", number: "#22", image: "images/player19.jpg", bio: "A fast winger who creates chances down the left." },
    { name: "YOUSSEF VIĆ", position: "RIGHT WINGER", number: "#11", image: "images/player20.jpg", bio: "A fast winger who creates chances down the right." },
    { name: "ZIAD WANIS", position: "RIGHT WINGER", number: "#18", image: "images/player21.jpg", bio: "A fast winger who creates chances down the right." },
    { name: "AHMED GAMAL JR", position: "STRIKER", number: "#9", image: "images/player22.jpg", bio: "A forward player who works hard and fights for every opportunity." },
    { name: "SAFWAN WALEED", position: "STRIKER", number: "#19", image: "images/player23.jpg", bio: "A forward player who works hard and fights for every opportunity." },
    { name: "GEDO", position: "STRIKER", number: "#10", image: "images/player24.jpg", bio: "A forward player who works hard and fights for every opportunity." }
];


// Show Player Information
function showPlayer(index) {

    const player = players[index];

    if (!player) return;

    document.getElementById("modalImage").src = player.image;
    document.getElementById("modalName").textContent = player.name;
    document.getElementById("modalPosition").textContent = player.position;
    document.getElementById("modalNumber").textContent = player.number;
    document.getElementById("modalBio").textContent = player.bio;

    document.getElementById("playerModal").classList.add("active");
}


// Close Player Information
function closePlayer() {
    document.getElementById("playerModal").classList.remove("active");
}


// Close when clicking outside the player information
document.getElementById("playerModal").addEventListener("click", function(e) {
    if (e.target === this) {
        closePlayer();
    }
});


// Close with Escape key
document.addEventListener("keydown", function(e) {
    if (e.key === "Escape") {
        closePlayer();
    }
});

// Cigarette smoke
(function () {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const canvas = document.getElementById('smoke');
    const ctx = canvas.getContext('2d');
    let w, h;
    const puffs = [];
    const sources = [0.12, 0.38, 0.62, 0.88];

    function resize() {
        w = canvas.width = window.innerWidth;
        h = canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    function spawn() {
        const s = sources[Math.floor(Math.random() * sources.length)];
        puffs.push({
            x: s * w + (Math.random() - 0.5) * 30,
            y: h + 20,
            r: 5 + Math.random() * 6,
            vy: 0.6 + Math.random() * 0.5,
            phase: Math.random() * Math.PI * 2,
            sway: 0.5 + Math.random() * 0.8,
            freq: 0.008 + Math.random() * 0.008,
            drift: (Math.random() - 0.5) * 0.25,
            life: 0,
            maxLife: 600 + Math.random() * 300
        });
    }

    function frame() {
        ctx.clearRect(0, 0, w, h);

        if (Math.random() < 0.3) spawn();

        for (let i = puffs.length - 1; i >= 0; i--) {
            const p = puffs[i];
            p.life++;
            const t = p.life / p.maxLife;

            p.y -= p.vy;
            p.x += Math.sin(p.life * p.freq + p.phase) * p.sway + p.drift;
            p.r += 0.1;

            const alpha = Math.sin(Math.PI * t) * 0.06;
            const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r);
            g.addColorStop(0, 'rgba(220, 225, 235, ' + alpha + ')');
            g.addColorStop(1, 'rgba(220, 225, 235, 0)');
            ctx.fillStyle = g;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
            ctx.fill();

            if (p.life >= p.maxLife) puffs.splice(i, 1);
        }
        requestAnimationFrame(frame);
    }
    frame();
})();
