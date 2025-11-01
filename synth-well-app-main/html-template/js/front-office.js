// ============================================
// SynthWell - Front Office JavaScript
// Interactive features and animations
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    
    // ============================================
    // Navigation
    // ============================================
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    // Scroll effect for navbar
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.1)';
        }
    });
    
    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetSection = document.getElementById(targetId);
                
                if (targetSection) {
                    const offsetTop = targetSection.offsetTop - 80;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                    
                    // Update active link
                    navLinks.forEach(l => l.classList.remove('active'));
                    this.classList.add('active');
                }
            }
        });
    });
    
    // Mobile menu toggle
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }
    
    // ============================================
    // Intersection Observer for Animations
    // ============================================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Animate elements on scroll
    const animateOnScroll = document.querySelectorAll('.feature-card, .recommendation-card, .stat-card');
    animateOnScroll.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    
    // ============================================
    // Chart.js Implementation
    // ============================================
    const chartCanvas = document.getElementById('impactChart');
    if (chartCanvas) {
        const ctx = chartCanvas.getContext('2d');
        
        // Create gradient
        const gradient = ctx.createLinearGradient(0, 0, 0, 200);
        gradient.addColorStop(0, 'rgba(16, 185, 129, 0.5)');
        gradient.addColorStop(1, 'rgba(59, 130, 246, 0.1)');
        
        new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin'],
                datasets: [{
                    label: 'Impact Écologique',
                    data: [65, 72, 78, 85, 88, 92],
                    backgroundColor: gradient,
                    borderColor: '#10b981',
                    borderWidth: 3,
                    fill: true,
                    tension: 0.4,
                    pointBackgroundColor: '#10b981',
                    pointBorderColor: '#fff',
                    pointBorderWidth: 2,
                    pointRadius: 5,
                    pointHoverRadius: 7
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        backgroundColor: 'rgba(0, 0, 0, 0.8)',
                        padding: 12,
                        borderRadius: 8,
                        titleFont: {
                            size: 14
                        },
                        bodyFont: {
                            size: 13
                        },
                        callbacks: {
                            label: function(context) {
                                return 'Score: ' + context.parsed.y + '%';
                            }
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 100,
                        ticks: {
                            callback: function(value) {
                                return value + '%';
                            }
                        },
                        grid: {
                            color: 'rgba(0, 0, 0, 0.05)'
                        }
                    },
                    x: {
                        grid: {
                            display: false
                        }
                    }
                }
            }
        });
    }
    
    // ============================================
    // Progress Bars Animation
    // ============================================
    function animateProgressBars() {
        const progressBars = document.querySelectorAll('.progress-fill');
        progressBars.forEach(bar => {
            const width = bar.style.width;
            bar.style.width = '0';
            setTimeout(() => {
                bar.style.width = width;
            }, 100);
        });
    }
    
    // Trigger progress animation when dashboard is visible
    const dashboardSection = document.querySelector('.dashboard-preview');
    if (dashboardSection) {
        const dashboardObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateProgressBars();
                    dashboardObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 });
        
        dashboardObserver.observe(dashboardSection);
    }
    
    // ============================================
    // Counter Animation for Stats
    // ============================================
    function animateCounter(element, start, end, duration) {
        let startTime = null;
        
        function animation(currentTime) {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);
            
            const value = Math.floor(progress * (end - start) + start);
            element.textContent = formatNumber(value);
            
            if (progress < 1) {
                requestAnimationFrame(animation);
            } else {
                element.textContent = formatNumber(end);
            }
        }
        
        requestAnimationFrame(animation);
    }
    
    function formatNumber(num) {
        if (num >= 1000000) {
            return (num / 1000000).toFixed(1) + 'M';
        } else if (num >= 1000) {
            return (num / 1000).toFixed(1) + 'k';
        }
        return num.toString();
    }
    
    // Animate stats when visible
    const statsSection = document.querySelector('.hero-stats');
    if (statsSection) {
        const statsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const statNumbers = entry.target.querySelectorAll('.stat-number');
                    statNumbers.forEach(stat => {
                        const text = stat.textContent;
                        let targetValue = 0;
                        
                        if (text.includes('k')) {
                            targetValue = parseFloat(text) * 1000;
                        } else if (text.includes('M')) {
                            targetValue = parseFloat(text) * 1000000;
                        } else {
                            targetValue = parseInt(text);
                        }
                        
                        animateCounter(stat, 0, targetValue, 2000);
                    });
                    statsObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        statsObserver.observe(statsSection);
    }
    
    // ============================================
    // Recommendation Cards Interaction
    // ============================================
    const recButtons = document.querySelectorAll('.rec-action');
    recButtons.forEach(button => {
        button.addEventListener('click', function() {
            const card = this.closest('.recommendation-card');
            
            // Show success message
            const originalText = this.textContent;
            this.textContent = '✓ Activé';
            this.style.background = '#059669';
            
            // Add success animation
            card.style.borderColor = '#10b981';
            card.style.background = 'rgba(16, 185, 129, 0.05)';
            
            // Reset after 2 seconds
            setTimeout(() => {
                this.textContent = originalText;
                this.style.background = '';
                card.style.borderColor = '';
                card.style.background = '';
            }, 2000);
        });
    });
    
    // ============================================
    // Floating Cards Animation
    // ============================================
    const floatingCards = document.querySelectorAll('.floating-card');
    floatingCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.2}s`;
    });
    
    // ============================================
    // Parallax Effect for Hero Section
    // ============================================
    const hero = document.querySelector('.hero');
    if (hero) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const parallax = hero.querySelector('.hero-visual');
            if (parallax) {
                parallax.style.transform = `translateY(${scrolled * 0.3}px)`;
            }
        });
    }
    
    // ============================================
    // Form Validation (for future forms)
    // ============================================
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
    
    // ============================================
    // Local Storage for User Preferences
    // ============================================
    const userPreferences = {
        theme: localStorage.getItem('theme') || 'light',
        language: localStorage.getItem('language') || 'fr'
    };
    
    function savePreference(key, value) {
        userPreferences[key] = value;
        localStorage.setItem(key, value);
    }
    
    // ============================================
    // Notification System
    // ============================================
    function showNotification(message, type = 'success') {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}"></i>
            <span>${message}</span>
        `;
        
        notification.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            background: ${type === 'success' ? '#10b981' : '#ef4444'};
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 0.75rem;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
            display: flex;
            align-items: center;
            gap: 0.75rem;
            z-index: 10000;
            animation: slideIn 0.3s ease;
        `;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }
    
    // Add notification animations to document
    if (!document.getElementById('notification-styles')) {
        const style = document.createElement('style');
        style.id = 'notification-styles';
        style.textContent = `
            @keyframes slideIn {
                from {
                    transform: translateX(400px);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
            
            @keyframes slideOut {
                from {
                    transform: translateX(0);
                    opacity: 1;
                }
                to {
                    transform: translateX(400px);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    // ============================================
    // Button Click Handlers
    // ============================================
    const primaryButtons = document.querySelectorAll('.btn-primary, .btn-large');
    primaryButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            if (!this.classList.contains('rec-action')) {
                // Create ripple effect
                const ripple = document.createElement('span');
                const rect = this.getBoundingClientRect();
                const size = Math.max(rect.width, rect.height);
                const x = e.clientX - rect.left - size / 2;
                const y = e.clientY - rect.top - size / 2;
                
                ripple.style.cssText = `
                    position: absolute;
                    border-radius: 50%;
                    background: rgba(255, 255, 255, 0.5);
                    width: ${size}px;
                    height: ${size}px;
                    left: ${x}px;
                    top: ${y}px;
                    animation: ripple 0.6s ease-out;
                    pointer-events: none;
                `;
                
                this.style.position = 'relative';
                this.style.overflow = 'hidden';
                this.appendChild(ripple);
                
                setTimeout(() => ripple.remove(), 600);
            }
        });
    });
    
    // Add ripple animation
    if (!document.getElementById('ripple-styles')) {
        const style = document.createElement('style');
        style.id = 'ripple-styles';
        style.textContent = `
            @keyframes ripple {
                from {
                    transform: scale(0);
                    opacity: 1;
                }
                to {
                    transform: scale(2);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    // ============================================
    // Console Welcome Message
    // ============================================
    console.log('%c🌿 EcoMind ', 'color: #10b981; font-size: 24px; font-weight: bold;');
    console.log('%cInnovation Technologique & Développement Durable', 'color: #3b82f6; font-size: 14px;');
    console.log('%cPowered by AI • Built with ❤️ for the planet', 'color: #64748b; font-size: 12px;');
    
});
