// ================================================
// SISTEMA DE NAVEGACIÓN DE PRESENTACIÓN
// ================================================

let currentSlide = 0;
const slides = document.querySelectorAll('section');
const totalSlides = slides.length;

// Mostrar slide inicial
function showSlide(n) {
    // Remover la clase 'active' de todos los slides
    slides.forEach(slide => slide.classList.remove('active'));
    
    // Asegurar que el índice esté dentro del rango
    if (n >= totalSlides) {
        currentSlide = totalSlides - 1;
    } else if (n < 0) {
        currentSlide = 0;
    } else {
        currentSlide = n;
    }
    
    // Mostrar el slide actual
    slides[currentSlide].classList.add('active');
    
    // Actualizar contador
    document.getElementById('currentSlide').textContent = currentSlide + 1;
    document.getElementById('totalSlides').textContent = totalSlides;
    
    // Mostrar fuegos artificiales en la última diapositiva
    if (currentSlide === totalSlides - 1) {
        startFireworks();
    }
}

// Siguiente slide
function nextSlide() {
    showSlide(currentSlide + 1);
}

// Slide anterior
function prevSlide() {
    showSlide(currentSlide - 1);
}

// Ir a slide específico (para índice)
function goToSlide(slideNumber) {
    showSlide(slideNumber);
}

// Ir al índice (slide 1)
function goToIndex() {
    showSlide(1);
}

// Ir al final (última slide)
function goToEnd() {
    showSlide(totalSlides - 1);
}

// ================================================
// FUEGOS ARTIFICIALES Y CELEBRACIÓN
// ================================================

function startFireworks() {
    // Limpiar fuegos anteriores
    const existing = document.querySelectorAll('.firework');
    existing.forEach(el => el.remove());
    
    // Reproducir sonido de aplausos
    playApplauseSound();
    
    // Crear múltiples fuegos artificiales
    for (let i = 0; i < 40; i++) {
        setTimeout(() => {
            createFirework();
        }, i * 80);
    }
}

// Función para generar sonido de aplausos con Web Audio API
function playApplauseSound() {
    try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const now = audioContext.currentTime;
        
        // Crear múltiples aplausos
        for (let i = 0; i < 8; i++) {
            createClap(audioContext, now + i * 0.15);
        }
    } catch (e) {
        console.log('Web Audio API no disponible');
    }
}

// Crear un aplauso individual
function createClap(audioContext, startTime) {
    const duration = 0.1;
    const now = audioContext.currentTime;
    const time = Math.max(startTime, now);
    
    // Crear oscilador para el sonido
    const osc = audioContext.createOscillator();
    const gain = audioContext.createGain();
    
    osc.connect(gain);
    gain.connect(audioContext.destination);
    
    // Frecuencia variable para sonido más natural
    osc.frequency.setValueAtTime(200 + Math.random() * 150, time);
    osc.frequency.exponentialRampToValueAtTime(100, time + duration);
    
    // Envelope de volumen
    gain.gain.setValueAtTime(0.3, time);
    gain.gain.exponentialRampToValueAtTime(0.01, time + duration);
    
    // Tipo de onda para sonido más orgánico
    osc.type = 'sine';
    
    osc.start(time);
    osc.stop(time + duration);
}

function createFirework() {
    const firework = document.createElement('div');
    firework.className = 'firework';
    firework.innerHTML = '✨';
    firework.style.left = Math.random() * 100 + '%';
    firework.style.top = Math.random() * 100 + '%';
    firework.style.fontSize = Math.random() * 40 + 30 + 'px';
    document.body.appendChild(firework);
    
    setTimeout(() => firework.remove(), 2000);
}

// Event listeners para botones
document.getElementById('btnNext').addEventListener('click', nextSlide);
document.getElementById('btnPrev').addEventListener('click', prevSlide);
document.getElementById('btnIndex').addEventListener('click', goToIndex);
document.getElementById('btnEnd').addEventListener('click', goToEnd);

// Event listeners para enlaces del índice
document.querySelectorAll('.index-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const slideNumber = parseInt(this.getAttribute('data-slide'));
        goToSlide(slideNumber);
    });
});

// Navegación con teclado
document.addEventListener('keydown', function(event) {
    switch(event.key) {
        case 'ArrowRight':
            nextSlide();
            break;
        case 'ArrowLeft':
            prevSlide();
            break;
        case ' ':
            event.preventDefault();
            showSlide(currentSlide + 2);
            break;
        case 'w':
        case 'W':
            goToIndex();
            break;
    }
});

// Inicializar presentación
showSlide(0);

// ================================================
// SISTEMA DE PARTÍCULAS - Fondo Animado
// ================================================

const canvas = document.getElementById('particleCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

class Particle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.speedY = (Math.random() - 0.5) * 0.5;
        this.opacity = Math.random() * 0.5 + 0.3;
        this.color = '#4db8ff';
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;

        // Desaparecer lentamente
        this.opacity -= 0.005;

        // Rebotar en los bordes
        if (this.x < 0) this.x = canvas.width;
        if (this.x > canvas.width) this.x = 0;
        if (this.y < 0) this.y = canvas.height;
        if (this.y > canvas.height) this.y = 0;
    }

    draw() {
        ctx.fillStyle = this.color;
        ctx.globalAlpha = this.opacity;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1;
    }
}

function createParticles(event) {
    const x = event.clientX || canvas.width / 2;
    const y = event.clientY || canvas.height / 2;

    for (let i = 0; i < 5; i++) {
        particles.push(new Particle(x, y));
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Crear nuevas partículas aleatoriamente
    if (Math.random() < 0.3) {
        createParticles({
            clientX: Math.random() * canvas.width,
            clientY: Math.random() * canvas.height
        });
    }

    // Actualizar y dibujar todas las partículas
    for (let i = particles.length - 1; i >= 0; i--) {
        particles[i].update();
        particles[i].draw();

        // Eliminar partículas que han desaparecido
        if (particles[i].opacity <= 0) {
            particles.splice(i, 1);
        }
    }

    requestAnimationFrame(animate);
}

// Crear partículas al mover el ratón
document.addEventListener('mousemove', createParticles);

// Crear partículas al hacer clic
document.addEventListener('click', (event) => {
    // No crear partículas si hacemos clic en botones
    if (!event.target.closest('.controls')) {
        for (let i = 0; i < 20; i++) {
            createParticles(event);
        }
    }
});

// Adaptar canvas al redimensionar ventana
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

// Iniciar animación
animate();

