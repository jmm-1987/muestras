// Funciones de navegación suave
function scrollToModels() {
    // Scroll suave hasta la sección de modelos
    window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth'
    });
}

function scrollToPricing() {
    document.getElementById('pricing').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}

function entrarAplicacion() {
    // Redirigir a la aplicación de barbería
    window.open('https://modelo-barber.onrender.com', '_blank');
}

function entrarPanelControl() {
    // Aquí puedes cambiar la URL por la de tu panel de control
    window.open('https://modelo-barber.onrender.com/panel','_blank');
}

// Función para abrir WhatsApp
function openWhatsApp() {
    const phoneNumber = '34600123456'; // Cambia este número por el tuyo
    const message = 'Hola! Me interesa conocer más sobre los modelos de páginas web para mi negocio de estética.';
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}

// Animaciones al hacer scroll (solo para feature-item y pricing-card)
function handleScrollAnimations() {
    const elements = document.querySelectorAll('.feature-item, .pricing-card');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('animate');
        }
    });
}

// Efecto de scroll donde los modelos se comen la portada
function handleScrollEffect() {
    const scrolled = window.pageYOffset;
    const header = document.querySelector('.header');
    const modelsSection = document.querySelector('.models-section');
    
    if (header && modelsSection) {
        // Calcular el progreso del scroll (0 a 1)
        const scrollProgress = Math.min(scrolled / window.innerHeight, 1);
        
        // Mover la sección de modelos hacia arriba gradualmente
        const translateY = -scrolled;
        modelsSection.style.transform = `translateY(${translateY}px)`;
        
        // Opcional: Ajustar la opacidad del header conforme se va "comiendo"
        const headerOpacity = 1 - scrollProgress;
        header.style.opacity = headerOpacity;
    }
}

// Efecto de typing en el título principal
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Contador animado para los precios
function animateCounters() {
    const counters = document.querySelectorAll('.amount');
    
    counters.forEach(counter => {
        const target = parseInt(counter.textContent);
        const duration = 2000;
        const increment = target / (duration / 16);
        let current = 0;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            counter.textContent = Math.floor(current);
        }, 16);
    });
}

// Efecto de hover mejorado para las tarjetas (solo pricing-card)
function enhanceCardHovers() {
    const cards = document.querySelectorAll('.pricing-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-15px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// Lazy loading para los iframes
function lazyLoadIframes() {
    const iframes = document.querySelectorAll('iframe');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const iframe = entry.target;
                iframe.style.opacity = '0';
                iframe.style.transition = 'opacity 0.5s ease';
                
                setTimeout(() => {
                    iframe.style.opacity = '1';
                }, 200);
            }
        });
    });
    
    iframes.forEach(iframe => {
        observer.observe(iframe);
    });
}

// Efecto de partículas en el header
function createParticles() {
    const header = document.querySelector('.header');
    const particleCount = 80;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        const size = Math.random() * 4 + 1;
        const duration = Math.random() * 8 + 4;
        const delay = Math.random() * 3;
        
        particle.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            background: radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.2) 100%);
            border-radius: 50%;
            opacity: ${Math.random() * 0.6 + 0.2};
            animation: float ${duration}s ease-in-out infinite;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation-delay: ${delay}s;
            box-shadow: 0 0 10px rgba(255,255,255,0.3);
        `;
        header.appendChild(particle);
    }
}

// Efecto de ondas en el header
function createWaves() {
    const header = document.querySelector('.header');
    
    for (let i = 0; i < 3; i++) {
        const wave = document.createElement('div');
        wave.className = 'wave';
        wave.style.cssText = `
            position: absolute;
            bottom: 0;
            left: 0;
            width: 200%;
            height: 100px;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
            animation: wave ${8 + i * 2}s linear infinite;
            animation-delay: ${i * 2}s;
            transform: translateX(-50%);
        `;
        header.appendChild(wave);
    }
}

// Añadir CSS para las ondas
function addWaveCSS() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes wave {
            0% { transform: translateX(-50%) translateY(0); }
            50% { transform: translateX(-50%) translateY(-20px); }
            100% { transform: translateX(-50%) translateY(0); }
        }
        
        .particle {
            pointer-events: none;
        }
        
        .wave {
            pointer-events: none;
        }
    `;
    document.head.appendChild(style);
}

// Efecto de cursor personalizado
function createCustomCursor() {
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    cursor.style.cssText = `
        position: fixed;
        width: 20px;
        height: 20px;
        background: radial-gradient(circle, rgba(45, 45, 45, 0.8) 0%, rgba(64, 64, 64, 0.8) 100%);
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        transition: transform 0.1s ease;
        mix-blend-mode: difference;
    `;
    document.body.appendChild(cursor);
    
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX - 10 + 'px';
        cursor.style.top = e.clientY - 10 + 'px';
    });
    
    document.addEventListener('mousedown', () => {
        cursor.style.transform = 'scale(0.8)';
    });
    
    document.addEventListener('mouseup', () => {
        cursor.style.transform = 'scale(1)';
    });
}

// Efecto de parallax mejorado (solo para feature-item y pricing-card)
function enhancedParallax() {
    const elements = document.querySelectorAll('.feature-item, .pricing-card');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        
        elements.forEach((element, index) => {
            const rect = element.getBoundingClientRect();
            const speed = 0.1 + (index % 3) * 0.05;
            
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                element.style.transform = `translateY(${scrolled * speed}px)`;
            }
        });
    });
}

// Validación de formularios (si se añaden)
function validateForm(form) {
    const inputs = form.querySelectorAll('input[required], textarea[required]');
    let isValid = true;
    
    inputs.forEach(input => {
        if (!input.value.trim()) {
            input.style.borderColor = '#f5576c';
            isValid = false;
        } else {
            input.style.borderColor = '#ddd';
        }
    });
    
    return isValid;
}

// Efecto de scroll suave mejorado
function smoothScrollTo(target) {
    const targetElement = document.querySelector(target);
    if (targetElement) {
        const headerHeight = document.querySelector('.header').offsetHeight;
        const targetPosition = targetElement.offsetTop - headerHeight;
        
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    }
}

// Detección de dispositivo móvil
function isMobile() {
    return window.innerWidth <= 768;
}

// Optimización para móviles
function optimizeForMobile() {
    if (isMobile()) {
        // Reducir animaciones en móviles para mejor rendimiento
        document.body.style.setProperty('--animation-duration', '0.3s');
        
        // Ajustar el tamaño de los iframes en móviles
        const iframes = document.querySelectorAll('.model-preview iframe');
        iframes.forEach(iframe => {
            iframe.style.transform = 'scale(0.3)';
            iframe.style.width = '333%';
            iframe.style.height = '333%';
        });
    }
}

// Efecto de carga de la página
function showLoadingAnimation() {
    const loader = document.createElement('div');
    loader.id = 'page-loader';
    loader.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(135deg,rgb(3, 3, 3) 0%,rgb(61, 60, 61) 100%);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 9999;
        transition: opacity 0.5s ease;
    `;
    
    loader.innerHTML = `
        <div style="text-align: center; color: white;">
            <div style="width: 50px; height: 50px; border: 3px solid rgba(255,255,255,0.3); border-top: 3px solid white; border-radius: 50%; animation: spin 1s linear infinite; margin: 0 auto 20px;"></div>
            <p>Abiendo el catálogo...</p>
        </div>
    `;
    
    document.body.appendChild(loader);
    
    // Añadir CSS para la animación de spin
    const style = document.createElement('style');
    style.textContent = `
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
    `;
    document.head.appendChild(style);
    
    // Ocultar loader después de cargar
    window.addEventListener('load', () => {
        setTimeout(() => {
            loader.style.opacity = '0';
            setTimeout(() => {
                loader.remove();
            }, 500);
        }, 1000);
    });
}

// Función para mostrar notificaciones
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#4caf50' : type === 'error' ? '#f5576c' : '#667eea'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 10px;
        box-shadow: 0 4px 15px rgba(0,0,0,0.2);
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Animar entrada
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Auto-remover después de 3 segundos
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

// Event Listeners
document.addEventListener('DOMContentLoaded', function() {
    // Mostrar animación de carga
    showLoadingAnimation();
    
    // Optimizar para móviles
    optimizeForMobile();
    
    // Crear efectos visuales rompedores
    createParticles();
    createWaves();
    addWaveCSS();
    createCustomCursor();
    enhancedParallax();
    
    // Mejorar efectos de hover
    enhanceCardHovers();
    
    // Cargar iframes de forma lazy
    lazyLoadIframes();
    
    // Añadir event listeners para scroll
    window.addEventListener('scroll', () => {
        handleScrollAnimations();
        handleScrollEffect();
    });
    
    // Añadir event listeners para redimensionamiento
    window.addEventListener('resize', optimizeForMobile);
    
    
    // Animar contadores cuando se vean los precios
    const pricingSection = document.getElementById('pricing');
    if (pricingSection) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounters();
                    observer.unobserve(entry.target);
                }
            });
        });
        observer.observe(pricingSection);
    }
    
    // Añadir efectos de click a los botones
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Efecto ripple
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                background: rgba(255,255,255,0.3);
                border-radius: 50%;
                transform: scale(0);
                animation: ripple 0.6s linear;
                pointer-events: none;
            `;
            
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
    
    // Añadir CSS para la animación ripple
    const rippleStyle = document.createElement('style');
    rippleStyle.textContent = `
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(rippleStyle);
    
    console.log('WebEstética Pro - Página cargada correctamente');
});

// Función para detectar si el usuario está en móvil y ajustar comportamientos
function handleMobileOptimizations() {
    if (isMobile()) {
        // Desactivar hover effects en móviles
        const cards = document.querySelectorAll('.model-card, .pricing-card');
        cards.forEach(card => {
            card.addEventListener('touchstart', function() {
                this.classList.add('mobile-touch');
            });
            
            card.addEventListener('touchend', function() {
                setTimeout(() => {
                    this.classList.remove('mobile-touch');
                }, 300);
            });
        });
    }
}

// Llamar a las optimizaciones móviles
document.addEventListener('DOMContentLoaded', handleMobileOptimizations);
