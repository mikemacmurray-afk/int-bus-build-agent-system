/**
 * BusinessBuild Agentic System - Dashboard JavaScript
 * Handles metrics display, navigation, and core dashboard functionality
 */

// ===================================
// Configuration
// ===================================
const CONFIG = {
    knowledgeBasePath: '../knowledge-base',
    updateInterval: 30000, // 30 seconds
    animationDuration: 300
};

// ===================================
// Dashboard State Management
// ===================================
const DashboardState = {
    metrics: {
        proofAssets: 0,
        contentPieces: 0,
        narrativeBricks: 0,
        workflowsRun: 0
    },
    activeSessions: [],
    recentActivity: [],
    lastUpdate: null
};

// ===================================
// Initialize Dashboard
// ===================================
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 BusinessBuild Agentic System - Dashboard Loading...');
    
    // Load initial data
    loadDashboardData();
    
    // Set up auto-refresh
    setInterval(refreshMetrics, CONFIG.updateInterval);
    
    // Set up navigation
    setupNavigation();
    
    console.log('✅ Dashboard Initialized');
});

// ===================================
// Data Loading Functions
// ===================================

/**
 * Load all dashboard data
 */
async function loadDashboardData() {
    try {
        await Promise.all([
            loadMetrics(),
            loadActiveSessions(),
            loadRecentActivity()
        ]);
        
        DashboardState.lastUpdate = new Date();
        console.log('📊 Dashboard data loaded successfully');
    } catch (error) {
        console.error('Error loading dashboard data:', error);
        showNotification('Error loading dashboard data', 'error');
    }
}

/**
 * Load business metrics
 */
async function loadMetrics() {
    try {
        // In production, this would load from knowledge-base
        // For now, using demo data
        const metrics = await fetchMetricsData();
        
        DashboardState.metrics = metrics;
        updateMetricsDisplay(metrics);
        
    } catch (error) {
        console.error('Error loading metrics:', error);
    }
}

/**
 * Fetch metrics from knowledge base
 */
async function fetchMetricsData() {
    // TODO: Replace with actual file system reads
    // For now, return demo data
    return {
        proofAssets: 47,
        contentPieces: 156,
        narrativeBricks: 89,
        workflowsRun: 23
    };
}

/**
 * Update metrics display
 */
function updateMetricsDisplay(metrics) {
    animateValue('proof-assets-count', 0, metrics.proofAssets, 1000);
    animateValue('content-pieces-count', 0, metrics.contentPieces, 1000);
    animateValue('narrative-bricks-count', 0, metrics.narrativeBricks, 1000);
    animateValue('workflows-run-count', 0, metrics.workflowsRun, 1000);
}

/**
 * Animate number counting
 */
function animateValue(id, start, end, duration) {
    const element = document.getElementById(id);
    if (!element) return;
    
    const range = end - start;
    const increment = range / (duration / 16);
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        if ((increment > 0 && current >= end) || (increment < 0 && current <= end)) {
            current = end;
            clearInterval(timer);
        }
        element.textContent = Math.floor(current);
    }, 16);
}

/**
 * Load active sessions
 */
async function loadActiveSessions() {
    // TODO: Load from knowledge-base/sessions/
    // For now, sessions are displayed via HTML
    console.log('📋 Active sessions loaded');
}

/**
 * Load recent activity
 */
async function loadRecentActivity() {
    // TODO: Load from knowledge-base activity log
    console.log('⚡ Recent activity loaded');
}

/**
 * Refresh all metrics
 */
async function refreshMetrics() {
    await loadMetrics();
    console.log('🔄 Metrics refreshed');
}

// ===================================
// Navigation Functions
// ===================================

/**
 * Set up navigation handling
 */
function setupNavigation() {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Update active nav link on scroll
    updateActiveNavOnScroll();
}

/**
 * Update active navigation link based on scroll position
 */
function updateActiveNavOnScroll() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.pageYOffset >= sectionTop - 100) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// ===================================
// Agent Interaction Functions
// ===================================

/**
 * View agent library
 */
function viewLibrary(type) {
    console.log(`📚 Opening ${type} library...`);
    // TODO: Navigate to library view
    window.location.href = `#data?type=${type}`;
}

/**
 * View agent analytics
 */
function viewAnalytics(agent) {
    console.log(`📊 Opening analytics for ${agent}...`);
    // TODO: Navigate to analytics view
    window.location.href = `#analytics?agent=${agent}`;
}

/**
 * Sync agent data
 */
function syncAgent(agent) {
    console.log(`🔄 Syncing ${agent}...`);
    showNotification(`Syncing ${agent}...`, 'info');
    
    // TODO: Implement actual sync logic
    setTimeout(() => {
        showNotification(`${agent} synced successfully`, 'success');
    }, 1500);
}

/**
 * Generate report
 */
function generateReport(type) {
    console.log(`📄 Generating ${type} report...`);
    showNotification(`Generating ${type} report...`, 'info');
    
    // TODO: Implement report generation
    setTimeout(() => {
        showNotification('Report generated successfully', 'success');
    }, 2000);
}

// ===================================
// Quick Actions Functions
// ===================================

/**
 * Start new agent session
 */
function newSession(agent) {
    console.log(`🎯 Starting new ${agent} session...`);
    
    // Navigate to agent page
    const agentUrls = {
        'voice-codex': 'agents/voice-codex.html',
        'content-engine': 'agents/content-engine.html',
        'credibility': 'agents/credibility.html',
        'narrative': 'agents/narrative-strategist.html',
        'humanizer': 'agents/humanizer.html',
        'speaking': 'agents/speaking-coach.html'
    };
    
    if (agentUrls[agent]) {
        window.location.href = agentUrls[agent];
    }
}

/**
 * Import external data
 */
function importData() {
    console.log('📥 Opening data import...');
    // TODO: Open import modal
    showNotification('Data import coming soon', 'info');
}

/**
 * Run automated workflow
 */
function runWorkflow() {
    console.log('⚙️ Opening workflow selector...');
    // TODO: Open workflow modal
    showNotification('Workflow automation coming soon', 'info');
}

/**
 * View all knowledge base data
 */
function viewAllData() {
    console.log('🗄️ Opening knowledge base...');
    window.location.href = '#data';
}

/**
 * Export business report
 */
function exportReport() {
    console.log('📊 Generating export report...');
    showNotification('Generating comprehensive report...', 'info');
    
    // TODO: Implement export logic
    setTimeout(() => {
        showNotification('Report exported successfully', 'success');
    }, 2000);
}

/**
 * Load more activity items
 */
function loadMoreActivity() {
    console.log('📜 Loading more activity...');
    showNotification('Loading more activity...', 'info');
    
    // TODO: Load additional activity items
    setTimeout(() => {
        showNotification('Activity loaded', 'success');
    }, 1000);
}

// ===================================
// Utility Functions
// ===================================

/**
 * Show notification to user
 */
function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Style notification
    Object.assign(notification.style, {
        position: 'fixed',
        top: '20px',
        right: '20px',
        padding: '1rem 1.5rem',
        background: type === 'success' ? 'var(--success)' : 
                   type === 'error' ? 'var(--danger)' : 
                   'var(--primary-blue)',
        color: 'white',
        borderRadius: 'var(--radius-md)',
        boxShadow: 'var(--shadow-xl)',
        zIndex: '9999',
        animation: 'slideIn 0.3s ease-out'
    });
    
    document.body.appendChild(notification);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'fadeOut 0.3s ease-out';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

/**
 * Format date for display
 */
function formatDate(date) {
    return new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    }).format(new Date(date));
}

/**
 * Format number with commas
 */
function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

// ===================================
// Export for use in other modules
// ===================================
window.DashboardAPI = {
    loadMetrics,
    refreshMetrics,
    viewLibrary,
    viewAnalytics,
    syncAgent,
    generateReport,
    newSession,
    showNotification
};

console.log('📦 Dashboard API loaded');
