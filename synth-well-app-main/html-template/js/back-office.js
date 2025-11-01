// ============================================
// SynthWell - Back Office JavaScript
// Dashboard interactivity and data management
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    
    // ============================================
    // Sidebar & Navigation
    // ============================================
    const sidebar = document.querySelector('.sidebar');
    const menuToggle = document.querySelector('.menu-toggle');
    const navItems = document.querySelectorAll('.nav-item');
    
    // Toggle sidebar on mobile
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            sidebar.classList.toggle('active');
        });
    }
    
    // Close sidebar when clicking outside on mobile
    document.addEventListener('click', (e) => {
        if (window.innerWidth <= 968) {
            if (!sidebar.contains(e.target) && !menuToggle.contains(e.target)) {
                sidebar.classList.remove('active');
            }
        }
    });
    
    // Navigation active state
    navItems.forEach(item => {
        item.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                navItems.forEach(nav => nav.classList.remove('active'));
                this.classList.add('active');
                
                // Close sidebar on mobile after selection
                if (window.innerWidth <= 968) {
                    sidebar.classList.remove('active');
                }
            }
        });
    });
    
    // ============================================
    // Chart.js - Users Chart
    // ============================================
    const usersChartCanvas = document.getElementById('usersChart');
    if (usersChartCanvas) {
        const ctx = usersChartCanvas.getContext('2d');
        
        // Create gradient
        const gradient = ctx.createLinearGradient(0, 0, 0, 300);
        gradient.addColorStop(0, 'rgba(16, 185, 129, 0.3)');
        gradient.addColorStop(1, 'rgba(16, 185, 129, 0.01)');
        
        new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Août', 'Sep', 'Oct', 'Nov', 'Déc'],
                datasets: [{
                    label: 'Nouveaux utilisateurs',
                    data: [850, 920, 1050, 1180, 1350, 1520, 1680, 1850, 1920, 2100, 2250, 2400],
                    backgroundColor: gradient,
                    borderColor: '#10b981',
                    borderWidth: 3,
                    fill: true,
                    tension: 0.4,
                    pointBackgroundColor: '#10b981',
                    pointBorderColor: '#1e293b',
                    pointBorderWidth: 3,
                    pointRadius: 5,
                    pointHoverRadius: 8,
                    pointHoverBackgroundColor: '#10b981',
                    pointHoverBorderWidth: 3
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
                        backgroundColor: 'rgba(15, 23, 42, 0.95)',
                        titleColor: '#f1f5f9',
                        bodyColor: '#94a3b8',
                        padding: 12,
                        borderRadius: 8,
                        borderColor: '#334155',
                        borderWidth: 1,
                        titleFont: {
                            size: 14,
                            weight: 'bold'
                        },
                        bodyFont: {
                            size: 13
                        },
                        callbacks: {
                            label: function(context) {
                                return 'Utilisateurs: ' + context.parsed.y.toLocaleString();
                            }
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        grid: {
                            color: 'rgba(51, 65, 85, 0.5)',
                            drawBorder: false
                        },
                        ticks: {
                            color: '#94a3b8',
                            callback: function(value) {
                                return value.toLocaleString();
                            }
                        }
                    },
                    x: {
                        grid: {
                            display: false
                        },
                        ticks: {
                            color: '#94a3b8'
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
    // Chart.js - Impact Chart (Doughnut)
    // ============================================
    const impactChartCanvas = document.getElementById('impactChart');
    if (impactChartCanvas) {
        const ctx = impactChartCanvas.getContext('2d');
        
        new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['Énergie', 'Transport', 'Alimentation', 'Déchets', 'Eau'],
                datasets: [{
                    data: [30, 25, 20, 15, 10],
                    backgroundColor: [
                        '#10b981',
                        '#3b82f6',
                        '#8b5cf6',
                        '#f59e0b',
                        '#ef4444'
                    ],
                    borderColor: '#1e293b',
                    borderWidth: 3,
                    hoverOffset: 10
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            color: '#94a3b8',
                            padding: 15,
                            font: {
                                size: 12
                            }
                        }
                    },
                    tooltip: {
                        backgroundColor: 'rgba(15, 23, 42, 0.95)',
                        titleColor: '#f1f5f9',
                        bodyColor: '#94a3b8',
                        padding: 12,
                        borderRadius: 8,
                        borderColor: '#334155',
                        borderWidth: 1,
                        callbacks: {
                            label: function(context) {
                                return context.label + ': ' + context.parsed + '%';
                            }
                        }
                    }
                },
                cutout: '65%'
            }
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
            element.textContent = formatNumber(value) + suffix;
            
            if (progress < 1) {
                requestAnimationFrame(animation);
            } else {
                element.textContent = formatNumber(end) + suffix;
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
        return num.toLocaleString();
    }
    
    // Animate stats on page load
    const statValues = document.querySelectorAll('.stat-value');
    statValues.forEach(stat => {
        const text = stat.textContent;
        let targetValue = 0;
        let suffix = '';
        
        // Extract suffix
        if (text.includes('%')) {
            suffix = '%';
            targetValue = parseFloat(text);
        } else if (text.includes('kg')) {
            suffix = ' kg';
            if (text.includes('M')) {
                targetValue = parseFloat(text) * 1000000;
            } else if (text.includes('k')) {
                targetValue = parseFloat(text) * 1000;
            }
        } else if (text.includes('k')) {
            targetValue = parseFloat(text.replace(',', '')) * 1000;
        } else {
            targetValue = parseInt(text.replace(',', ''));
        }
        
        animateCounter(stat, 0, targetValue, 2000, suffix);
    });
    
    // ============================================
    // Search Functionality
    // ============================================
    const searchInput = document.querySelector('.search-box input');
    const tableSearch = document.querySelector('.table-search');
    
    if (searchInput) {
        searchInput.addEventListener('input', function(e) {
            const searchTerm = e.target.value.toLowerCase();
            // Implement search logic here
            console.log('Searching for:', searchTerm);
        });
    }
    
    // Table search
    if (tableSearch) {
        tableSearch.addEventListener('input', function(e) {
            const searchTerm = e.target.value.toLowerCase();
            const rows = document.querySelectorAll('.data-table tbody tr');
            
            rows.forEach(row => {
                const text = row.textContent.toLowerCase();
                row.style.display = text.includes(searchTerm) ? '' : 'none';
            });
        });
    }
    
    // ============================================
    // Notification System
    // ============================================
    const notificationBtn = document.querySelector('.icon-btn .fa-bell').parentElement;
    
    if (notificationBtn) {
        notificationBtn.addEventListener('click', function() {
            showNotification('Vous avez 3 nouvelles notifications', 'info');
        });
    }
    
    function showNotification(message, type = 'success') {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        
        const icon = {
            success: 'check-circle',
            error: 'exclamation-circle',
            warning: 'exclamation-triangle',
            info: 'info-circle'
        }[type] || 'info-circle';
        
        const color = {
            success: '#10b981',
            error: '#ef4444',
            warning: '#f59e0b',
            info: '#3b82f6'
        }[type] || '#3b82f6';
        
        notification.innerHTML = `
            <i class="fas fa-${icon}"></i>
            <span>${message}</span>
        `;
        
        notification.style.cssText = `
            position: fixed;
            top: 80px;
            right: 20px;
            background: ${color};
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 0.5rem;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
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
        }, 4000);
    }
    
    // Add notification animations
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
    // Table Actions
    // ============================================
    const viewButtons = document.querySelectorAll('.btn-icon .fa-eye');
    const editButtons = document.querySelectorAll('.btn-icon .fa-edit');
    
    viewButtons.forEach(btn => {
        btn.parentElement.addEventListener('click', function() {
            const row = this.closest('tr');
            const userName = row.querySelector('.user-cell span').textContent;
            showNotification(`Affichage du profil de ${userName}`, 'info');
        });
    });
    
    editButtons.forEach(btn => {
        btn.parentElement.addEventListener('click', function() {
            const row = this.closest('tr');
            const userName = row.querySelector('.user-cell span').textContent;
            showNotification(`Édition du profil de ${userName}`, 'warning');
        });
    });
    
    // ============================================
    // Chart Filter
    // ============================================
    const chartFilters = document.querySelectorAll('.chart-filter');
    chartFilters.forEach(filter => {
        filter.addEventListener('change', function() {
            showNotification(`Mise à jour des données: ${this.value}`, 'info');
            // Here you would reload chart data based on selected period
        });
    });
    
    // ============================================
    // Logout Button
    // ============================================
    const logoutBtn = document.querySelector('.logout-btn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function() {
            if (confirm('Êtes-vous sûr de vouloir vous déconnecter ?')) {
                showNotification('Déconnexion en cours...', 'info');
                setTimeout(() => {
                    // Redirect to login page or home
                    window.location.href = 'index.html';
                }, 1500);
            }
        });
    }
    
    // ============================================
    // Real-time Updates Simulation
    // ============================================
    function simulateRealTimeUpdates() {
        setInterval(() => {
            // Randomly update some stats
            const statCards = document.querySelectorAll('.stat-card');
            const randomCard = statCards[Math.floor(Math.random() * statCards.length)];
            const statChange = randomCard.querySelector('.stat-change');
            
            if (statChange) {
                const currentValue = parseFloat(statChange.textContent);
                const newValue = (currentValue + (Math.random() * 2 - 1)).toFixed(1);
                statChange.innerHTML = `<i class="fas fa-arrow-${newValue > 0 ? 'up' : 'down'}"></i> ${Math.abs(newValue)}%`;
                statChange.className = `stat-change ${newValue > 0 ? 'positive' : 'negative'}`;
            }
        }, 5000);
    }
    
    // Start real-time updates
    simulateRealTimeUpdates();
    
    // ============================================
    // Export Functionality
    // ============================================
    const exportBtn = document.querySelector('.btn-secondary .fa-download');
    if (exportBtn) {
        exportBtn.parentElement.addEventListener('click', function() {
            showNotification('Exportation des données en cours...', 'info');
            
            // Simulate export
            setTimeout(() => {
                showNotification('Données exportées avec succès!', 'success');
            }, 2000);
        });
    }
    
    // ============================================
    // New Report Button
    // ============================================
    const newReportBtn = document.querySelector('.btn-primary .fa-plus');
    if (newReportBtn) {
        newReportBtn.parentElement.addEventListener('click', function() {
            showNotification('Création d\'un nouveau rapport...', 'info');
        });
    }
    
    // ============================================
    // Activity Item Click
    // ============================================
    const activityItems = document.querySelectorAll('.activity-item');
    activityItems.forEach(item => {
        item.style.cursor = 'pointer';
        item.addEventListener('click', function() {
            const title = this.querySelector('strong').textContent;
            showNotification(`Détails: ${title}`, 'info');
        });
    });
    
    // ============================================
    // System Status Progress Bars Animation
    // ============================================
    function animateProgressBars() {
        const progressBars = document.querySelectorAll('.status-progress');
        progressBars.forEach(bar => {
            const width = bar.style.width;
            bar.style.width = '0';
            setTimeout(() => {
                bar.style.width = width;
            }, 100);
        });
    }
    
    // Animate on page load
    setTimeout(animateProgressBars, 500);
    
    // ============================================
    // Keyboard Shortcuts
    // ============================================
    document.addEventListener('keydown', function(e) {
        // Ctrl/Cmd + K for search
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            searchInput?.focus();
        }
        
        // Escape to close sidebar on mobile
        if (e.key === 'Escape' && window.innerWidth <= 968) {
            sidebar.classList.remove('active');
        }
    });
    
    // ============================================
    // Responsive Table
    // ============================================
    function handleResponsiveTable() {
        const table = document.querySelector('.data-table');
        if (table && window.innerWidth <= 768) {
            table.style.fontSize = '0.75rem';
        } else if (table) {
            table.style.fontSize = '';
        }
    }
    
    window.addEventListener('resize', handleResponsiveTable);
    handleResponsiveTable();
    
    // ============================================
    // Data Refresh
    // ============================================
    function refreshData() {
        showNotification('Actualisation des données...', 'info');
        
        // Simulate data refresh
        setTimeout(() => {
            animateProgressBars();
            showNotification('Données actualisées!', 'success');
        }, 1500);
    }
    
    // Refresh every 5 minutes
    setInterval(refreshData, 300000);
    
    // ============================================
    // Console Welcome Message
    // ============================================
    console.log('%c🌿 EcoMind Admin Dashboard ', 'color: #10b981; font-size: 20px; font-weight: bold; background: #0f172a; padding: 10px;');
    console.log('%cGestion & Administration', 'color: #3b82f6; font-size: 14px;');
    console.log('%cVersion 1.0.0 • Dashboard actif', 'color: #64748b; font-size: 12px;');
    
    // Log system info
    console.table({
        'Utilisateurs actifs': '15,234',
        'CO₂ économisé': '2.5M kg',
        'Analyses IA': '45,678',
        'Satisfaction': '98.4%'
    });
    
});
