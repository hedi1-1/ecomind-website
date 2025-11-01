// ============================================
// SynthWell - User Dashboard JavaScript
// Personal progress tracking functionality
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    
    // ============================================
    // Progress Chart (Line Chart)
    // ============================================
    const progressChartCanvas = document.getElementById('progressChart');
    if (progressChartCanvas) {
        const ctx = progressChartCanvas.getContext('2d');
        
        // Create gradients
        const healthGradient = ctx.createLinearGradient(0, 0, 0, 300);
        healthGradient.addColorStop(0, 'rgba(239, 68, 68, 0.2)');
        healthGradient.addColorStop(1, 'rgba(239, 68, 68, 0.01)');
        
        const ecoGradient = ctx.createLinearGradient(0, 0, 0, 300);
        ecoGradient.addColorStop(0, 'rgba(16, 185, 129, 0.2)');
        ecoGradient.addColorStop(1, 'rgba(16, 185, 129, 0.01)');
        
        const productivityGradient = ctx.createLinearGradient(0, 0, 0, 300);
        productivityGradient.addColorStop(0, 'rgba(139, 92, 246, 0.2)');
        productivityGradient.addColorStop(1, 'rgba(139, 92, 246, 0.01)');
        
        new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['1 Oct', '5 Oct', '10 Oct', '15 Oct', '20 Oct', '25 Oct', '31 Oct'],
                datasets: [
                    {
                        label: 'Santé',
                        data: [72, 75, 78, 80, 82, 83, 85],
                        backgroundColor: healthGradient,
                        borderColor: '#ef4444',
                        borderWidth: 3,
                        fill: true,
                        tension: 0.4,
                        pointBackgroundColor: '#ef4444',
                        pointBorderColor: '#fff',
                        pointBorderWidth: 2,
                        pointRadius: 4,
                        pointHoverRadius: 6
                    },
                    {
                        label: 'Écologie',
                        data: [80, 82, 85, 87, 88, 90, 92],
                        backgroundColor: ecoGradient,
                        borderColor: '#10b981',
                        borderWidth: 3,
                        fill: true,
                        tension: 0.4,
                        pointBackgroundColor: '#10b981',
                        pointBorderColor: '#fff',
                        pointBorderWidth: 2,
                        pointRadius: 4,
                        pointHoverRadius: 6
                    },
                    {
                        label: 'Productivité',
                        data: [70, 72, 73, 75, 76, 77, 78],
                        backgroundColor: productivityGradient,
                        borderColor: '#8b5cf6',
                        borderWidth: 3,
                        fill: true,
                        tension: 0.4,
                        pointBackgroundColor: '#8b5cf6',
                        pointBorderColor: '#fff',
                        pointBorderWidth: 2,
                        pointRadius: 4,
                        pointHoverRadius: 6
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'top',
                        labels: {
                            usePointStyle: true,
                            padding: 15,
                            font: {
                                size: 12,
                                weight: '600'
                            }
                        }
                    },
                    tooltip: {
                        backgroundColor: 'rgba(255, 255, 255, 0.95)',
                        titleColor: '#0f172a',
                        bodyColor: '#64748b',
                        borderColor: '#e2e8f0',
                        borderWidth: 1,
                        padding: 12,
                        borderRadius: 8,
                        titleFont: {
                            size: 13,
                            weight: 'bold'
                        },
                        bodyFont: {
                            size: 12
                        },
                        callbacks: {
                            label: function(context) {
                                return context.dataset.label + ': ' + context.parsed.y + '/100';
                            }
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 100,
                        grid: {
                            color: 'rgba(0, 0, 0, 0.05)'
                        },
                        ticks: {
                            callback: function(value) {
                                return value;
                            }
                        }
                    },
                    x: {
                        grid: {
                            display: false
                        }
                    }
                },
                interaction: {
                    intersect: false,
                    mode: 'index'
                }
            }
        });
    }
    
    // ============================================
    // Impact Doughnut Chart
    // ============================================
    const impactDoughnutCanvas = document.getElementById('impactDoughnut');
    if (impactDoughnutCanvas) {
        const ctx = impactDoughnutCanvas.getContext('2d');
        
        new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['Transport', 'Énergie', 'Alimentation', 'Déchets'],
                datasets: [{
                    data: [45, 38, 42, 31],
                    backgroundColor: [
                        '#10b981',
                        '#3b82f6',
                        '#8b5cf6',
                        '#f59e0b'
                    ],
                    borderWidth: 0,
                    hoverOffset: 5
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
                        backgroundColor: 'rgba(255, 255, 255, 0.95)',
                        titleColor: '#0f172a',
                        bodyColor: '#64748b',
                        borderColor: '#e2e8f0',
                        borderWidth: 1,
                        padding: 12,
                        borderRadius: 8,
                        callbacks: {
                            label: function(context) {
                                return context.label + ': ' + context.parsed + 'kg CO₂';
                            }
                        }
                    }
                },
                cutout: '75%'
            }
        });
    }
    
    // ============================================
    // Date Navigation
    // ============================================
    const currentDate = document.getElementById('currentDate');
    const dateButtons = document.querySelectorAll('.date-selector .btn-icon');
    
    if (dateButtons.length > 0) {
        dateButtons[0].addEventListener('click', () => {
            showNotification('Chargement des données du jour précédent...', 'info');
        });
        
        dateButtons[1].addEventListener('click', () => {
            showNotification('Chargement des données du jour suivant...', 'info');
        });
    }
    
    // ============================================
    // Sidebar Navigation
    // ============================================
    const sidebarLinks = document.querySelectorAll('.sidebar-link');
    sidebarLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                sidebarLinks.forEach(l => l.classList.remove('active'));
                this.classList.add('active');
                
                // Smooth scroll to section
                const targetId = href.substring(1);
                const targetSection = document.getElementById(targetId);
                if (targetSection) {
                    targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }
        });
    });
    
    // ============================================
    // Activity Checkboxes
    // ============================================
    const activityCheckboxes = document.querySelectorAll('.activity-checkbox');
    activityCheckboxes.forEach(checkbox => {
        if (!checkbox.classList.contains('checked') && !checkbox.querySelector('.activity-spinner')) {
            checkbox.addEventListener('click', function() {
                const activityItem = this.closest('.activity-item');
                const activityName = activityItem.querySelector('h4').textContent;
                
                this.classList.add('checked');
                this.innerHTML = '<i class="fas fa-check"></i>';
                activityItem.classList.add('completed');
                
                showNotification(`Activité "${activityName}" complétée! +10 XP`, 'success');
                
                // Update XP
                updateXP(10);
            });
        }
    });
    
    // ============================================
    // Recommendation Buttons
    // ============================================
    const recButtons = document.querySelectorAll('.recommendation-card button');
    recButtons.forEach(button => {
        button.addEventListener('click', function() {
            const card = this.closest('.recommendation-card');
            const title = card.querySelector('h4').textContent;
            
            const originalText = this.textContent;
            const originalClass = this.className;
            
            this.textContent = '✓ Activé';
            this.className = 'btn-primary';
            
            showNotification(`"${title}" a été activé avec succès!`, 'success');
            
            setTimeout(() => {
                this.textContent = originalText;
                this.className = originalClass;
            }, 3000);
        });
    });
    
    // ============================================
    // Period Selector
    // ============================================
    const periodSelector = document.querySelector('.period-selector');
    if (periodSelector) {
        periodSelector.addEventListener('change', function() {
            showNotification(`Chargement des données: ${this.value}`, 'info');
            // Here you would reload chart data
        });
    }
    
    // ============================================
    // Notification System
    // ============================================
    function showNotification(message, type = 'success') {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        
        const icons = {
            success: 'check-circle',
            error: 'exclamation-circle',
            warning: 'exclamation-triangle',
            info: 'info-circle'
        };
        
        const colors = {
            success: '#10b981',
            error: '#ef4444',
            warning: '#f59e0b',
            info: '#3b82f6'
        };
        
        notification.innerHTML = `
            <i class="fas fa-${icons[type]}"></i>
            <span>${message}</span>
        `;
        
        notification.style.cssText = `
            position: fixed;
            top: 80px;
            right: 20px;
            background: ${colors[type]};
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 0.75rem;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
            display: flex;
            align-items: center;
            gap: 0.75rem;
            z-index: 10000;
            animation: slideIn 0.3s ease;
            max-width: 400px;
        `;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }
    
    // Add animations
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
    // XP Update System
    // ============================================
    function updateXP(points) {
        const xpText = document.querySelector('.sidebar-card p');
        if (xpText) {
            const currentXP = parseInt(xpText.textContent.match(/\d+/)[0]);
            const newXP = currentXP + points;
            xpText.textContent = `${newXP}/1000 XP pour niveau 9`;
            
            // Update progress bar
            const progressFill = document.querySelector('.sidebar-card .progress-fill');
            if (progressFill) {
                const percentage = (newXP / 1000) * 100;
                progressFill.style.width = percentage + '%';
            }
            
            // Check for level up
            if (newXP >= 1000) {
                showNotification('🎉 Félicitations! Vous êtes passé au niveau 9!', 'success');
            }
        }
    }
    
    // ============================================
    // Metric Animations
    // ============================================
    function animateMetrics() {
        const metricFills = document.querySelectorAll('.metric-fill');
        metricFills.forEach(fill => {
            const width = fill.style.width;
            fill.style.width = '0';
            setTimeout(() => {
                fill.style.width = width;
            }, 100);
        });
    }
    
    // Animate on page load
    setTimeout(animateMetrics, 500);
    
    // ============================================
    // User Menu Dropdown
    // ============================================
    const userMenu = document.querySelector('.user-menu');
    if (userMenu) {
        userMenu.addEventListener('click', function() {
            showNotification('Menu utilisateur (à implémenter)', 'info');
        });
    }
    
    // ============================================
    // Notification Bell
    // ============================================
    const notificationBtn = document.querySelector('.icon-btn .fa-bell');
    if (notificationBtn) {
        notificationBtn.parentElement.addEventListener('click', function() {
            showNotification('Vous avez 3 nouvelles notifications', 'info');
        });
    }
    
    // ============================================
    // Achievement Badges
    // ============================================
    const achievementBadges = document.querySelectorAll('.achievement-badge');
    achievementBadges.forEach(badge => {
        badge.addEventListener('click', function() {
            const badgeName = this.querySelector('.badge-name').textContent;
            if (this.classList.contains('unlocked')) {
                showNotification(`Badge "${badgeName}" débloqué!`, 'success');
            } else {
                const progress = this.querySelector('.badge-progress').textContent;
                showNotification(`Badge "${badgeName}" - Progression: ${progress}`, 'info');
            }
        });
    });
    
    // ============================================
    // Challenge Button
    // ============================================
    const challengeBtn = document.querySelector('.btn-challenge');
    if (challengeBtn) {
        challengeBtn.addEventListener('click', function() {
            showNotification('Exploration des nouveaux défis...', 'info');
        });
    }
    
    // ============================================
    // Refresh Metrics Button
    // ============================================
    const refreshBtn = document.querySelector('.metrics-card .fa-sync');
    if (refreshBtn) {
        refreshBtn.parentElement.addEventListener('click', function() {
            const icon = this.querySelector('i');
            icon.style.animation = 'spin 1s linear';
            setTimeout(() => {
                icon.style.animation = '';
                animateMetrics();
                showNotification('Métriques actualisées!', 'success');
            }, 1000);
        });
    }
    
    // ============================================
    // Add New Activity Button
    // ============================================
    const addActivityBtn = document.querySelector('.activities-card .fa-plus');
    if (addActivityBtn) {
        addActivityBtn.parentElement.addEventListener('click', function() {
            showNotification('Ajout d\'une nouvelle activité...', 'info');
        });
    }
    
    // ============================================
    // Stats Counter Animation
    // ============================================
    function animateCounter(element, start, end, duration, suffix = '') {
        let startTime = null;
        
        function animation(currentTime) {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);
            
            const value = Math.floor(progress * (end - start) + start);
            element.textContent = value + suffix;
            
            if (progress < 1) {
                requestAnimationFrame(animation);
            }
        }
        
        requestAnimationFrame(animation);
    }
    
    // Animate stat values on page load
    const statValues = document.querySelectorAll('.stat-value');
    statValues.forEach(stat => {
        const text = stat.textContent;
        const match = text.match(/\d+/);
        if (match) {
            const value = parseInt(match[0]);
            const unit = stat.querySelector('.stat-unit')?.textContent || '';
            animateCounter(stat, 0, value, 1500, unit);
        }
    });
    
    // ============================================
    // Scroll Animations
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
    
    // Observe cards
    const cards = document.querySelectorAll('.stat-card, .chart-card, .recommendation-card');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(card);
    });
    
    // ============================================
    // Real-time Updates Simulation
    // ============================================
    function simulateRealTimeUpdates() {
        setInterval(() => {
            // Randomly update a metric
            const metrics = document.querySelectorAll('.metric-info h4');
            if (metrics.length > 0) {
                const randomMetric = metrics[Math.floor(Math.random() * metrics.length)];
                const currentValue = parseInt(randomMetric.textContent);
                const newValue = currentValue + Math.floor(Math.random() * 10);
                randomMetric.textContent = newValue.toLocaleString();
            }
        }, 10000); // Every 10 seconds
    }
    
    // Start real-time updates
    simulateRealTimeUpdates();
    
    // ============================================
    // Keyboard Shortcuts
    // ============================================
    document.addEventListener('keydown', function(e) {
        // Ctrl/Cmd + N for new activity
        if ((e.ctrlKey || e.metaKey) && e.key === 'n') {
            e.preventDefault();
            showNotification('Ajout d\'une nouvelle activité...', 'info');
        }
        
        // Ctrl/Cmd + R for refresh
        if ((e.ctrlKey || e.metaKey) && e.key === 'r') {
            e.preventDefault();
            animateMetrics();
            showNotification('Données actualisées!', 'success');
        }
    });
    
    // ============================================
    // Console Welcome
    // ============================================
    console.log('%c🌿 EcoMind Dashboard ', 'color: #10b981; font-size: 20px; font-weight: bold;');
    console.log('%cBienvenue sur votre tableau de bord personnel!', 'color: #3b82f6; font-size: 14px;');
    console.log('%cSuivez votre progression et atteignez vos objectifs', 'color: #64748b; font-size: 12px;');
    
    // Log current stats
    console.table({
        'Score Écologique': '92/100',
        'Santé & Bien-être': '85/100',
        'Productivité': '78/100',
        'Série de jours': '12 jours',
        'Niveau': '8',
        'XP': '650/1000'
    });
    
});
