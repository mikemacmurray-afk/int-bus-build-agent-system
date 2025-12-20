/**
 * BusinessBuild Agentic System - Session Manager
 * Handles agent session lifecycle, state management, and persistence
 */

// ===================================
// Session Configuration
// ===================================
const SessionConfig = {
    sessionPath: '../knowledge-base/sessions/',
    persistentPath: '../knowledge-base/persistent/',
    autoSaveInterval: 60000, // 60 seconds
    maxSessionAge: 86400000 // 24 hours
};

// ===================================
// Session State
// ===================================
const SessionManager = {
    activeSessions: new Map(),
    sessionHistory: [],
    autoSaveTimers: new Map()
};

// ===================================
// Session Class
// ===================================
class AgentSession {
    constructor(agentType, sessionId = null) {
        this.sessionId = sessionId || this.generateSessionId();
        this.agentType = agentType;
        this.status = 'active';
        this.createdAt = new Date().toISOString();
        this.updatedAt = new Date().toISOString();
        this.inputs = [];
        this.decisions = [];
        this.outputs = [];
        this.metadata = {};
    }
    
    /**
     * Generate unique session ID
     */
    generateSessionId() {
        const timestamp = new Date().toISOString().replace(/[-:]/g, '').split('.')[0];
        const random = Math.random().toString(36).substring(2, 8);
        return `${timestamp}-${this.agentType}-${random}`;
    }
    
    /**
     * Add input to session
     */
    addInput(type, source, content, metadata = {}) {
        const input = {
            id: this.inputs.length + 1,
            type,
            source,
            content,
            metadata,
            timestamp: new Date().toISOString()
        };
        this.inputs.push(input);
        this.updatedAt = new Date().toISOString();
        return input;
    }
    
    /**
     * Add decision to session
     */
    addDecision(step, action, reasoning, data = {}) {
        const decision = {
            step,
            action,
            reasoning,
            data,
            timestamp: new Date().toISOString()
        };
        this.decisions.push(decision);
        this.updatedAt = new Date().toISOString();
        return decision;
    }
    
    /**
     * Add output to session
     */
    addOutput(assetType, content, metadata = {}) {
        const output = {
            id: this.outputs.length + 1,
            assetType,
            content,
            metadata,
            timestamp: new Date().toISOString()
        };
        this.outputs.push(output);
        this.updatedAt = new Date().toISOString();
        return output;
    }
    
    /**
     * Update session status
     */
    updateStatus(status) {
        this.status = status;
        this.updatedAt = new Date().toISOString();
    }
    
    /**
     * Get session summary
     */
    getSummary() {
        return {
            sessionId: this.sessionId,
            agentType: this.agentType,
            status: this.status,
            createdAt: this.createdAt,
            updatedAt: this.updatedAt,
            inputCount: this.inputs.length,
            decisionCount: this.decisions.length,
            outputCount: this.outputs.length
        };
    }
    
    /**
     * Export session to markdown with frontmatter
     */
    toMarkdown() {
        const frontmatter = `---
session_id: "${this.sessionId}"
agent: "${this.agentType}"
timestamp: "${this.createdAt}"
status: "${this.status}"
updated: "${this.updatedAt}"
inputs: ${this.inputs.length}
decisions: ${this.decisions.length}
outputs: ${this.outputs.length}
---

`;
        
        let markdown = frontmatter;
        markdown += `# Agent Session: ${this.agentType}\n\n`;
        markdown += `**Session ID**: ${this.sessionId}  \n`;
        markdown += `**Status**: ${this.status}  \n`;
        markdown += `**Created**: ${this.createdAt}  \n`;
        markdown += `**Updated**: ${this.updatedAt}  \n\n`;
        
        // Inputs section
        if (this.inputs.length > 0) {
            markdown += `## Inputs\n\n`;
            this.inputs.forEach((input, index) => {
                markdown += `### Input ${index + 1}: ${input.type}\n`;
                markdown += `- **Source**: ${input.source}\n`;
                markdown += `- **Timestamp**: ${input.timestamp}\n`;
                markdown += `\n${input.content}\n\n`;
            });
        }
        
        // Decisions section
        if (this.decisions.length > 0) {
            markdown += `## Decisions\n\n`;
            this.decisions.forEach((decision, index) => {
                markdown += `### Step ${decision.step}: ${decision.action}\n`;
                markdown += `**Reasoning**: ${decision.reasoning}\n\n`;
                if (Object.keys(decision.data).length > 0) {
                    markdown += `**Data**: \`\`\`json\n${JSON.stringify(decision.data, null, 2)}\n\`\`\`\n\n`;
                }
            });
        }
        
        // Outputs section
        if (this.outputs.length > 0) {
            markdown += `## Outputs\n\n`;
            this.outputs.forEach((output, index) => {
                markdown += `### Output ${index + 1}: ${output.assetType}\n`;
                markdown += `- **Timestamp**: ${output.timestamp}\n`;
                markdown += `\n${output.content}\n\n`;
            });
        }
        
        return markdown;
    }
}

// ===================================
// Session Management Functions
// ===================================

/**
 * Create new agent session
 */
function createSession(agentType, metadata = {}) {
    const session = new AgentSession(agentType);
    session.metadata = metadata;
    
    SessionManager.activeSessions.set(session.sessionId, session);
    
    // Set up auto-save
    setupAutoSave(session.sessionId);
    
    console.log(`✅ Created session: ${session.sessionId}`);
    return session;
}

/**
 * Get existing session
 */
function getSession(sessionId) {
    return SessionManager.activeSessions.get(sessionId);
}

/**
 * Get all active sessions
 */
function getActiveSessions() {
    return Array.from(SessionManager.activeSessions.values())
        .map(session => session.getSummary());
}

/**
 * Get active sessions by agent type
 */
function getSessionsByAgent(agentType) {
    return Array.from(SessionManager.activeSessions.values())
        .filter(session => session.agentType === agentType)
        .map(session => session.getSummary());
}

/**
 * Pause session
 */
function pauseSession(sessionId) {
    const session = getSession(sessionId);
    if (session) {
        session.updateStatus('paused');
        saveSession(sessionId);
        console.log(`⏸️  Paused session: ${sessionId}`);
    }
}

/**
 * Resume session
 */
function resumeSession(sessionId) {
    const session = getSession(sessionId);
    if (session) {
        session.updateStatus('active');
        console.log(`▶️  Resumed session: ${sessionId}`);
    }
}

/**
 * Complete session
 */
function completeSession(sessionId) {
    const session = getSession(sessionId);
    if (session) {
        session.updateStatus('completed');
        saveSession(sessionId);
        
        // Stop auto-save
        clearAutoSave(sessionId);
        
        // Move to history
        SessionManager.sessionHistory.push(session.getSummary());
        
        // Remove from active
        SessionManager.activeSessions.delete(sessionId);
        
        console.log(`✅ Completed session: ${sessionId}`);
    }
}

/**
 * Save session to file system
 */
async function saveSession(sessionId) {
    const session = getSession(sessionId);
    if (!session) {
        console.error(`Session not found: ${sessionId}`);
        return false;
    }
    
    try {
        const markdown = session.toMarkdown();
        const filename = `${session.sessionId}.md`;
        
        // TODO: Implement actual file save
        // For now, save to localStorage as fallback
        localStorage.setItem(`session_${sessionId}`, markdown);
        
        console.log(`💾 Saved session: ${sessionId}`);
        return true;
    } catch (error) {
        console.error(`Error saving session ${sessionId}:`, error);
        return false;
    }
}

/**
 * Load session from file system
 */
async function loadSession(sessionId) {
    try {
        // TODO: Implement actual file load
        // For now, load from localStorage
        const markdown = localStorage.getItem(`session_${sessionId}`);
        
        if (markdown) {
            // Parse markdown and recreate session
            // This is simplified - full implementation would parse frontmatter
            console.log(`📂 Loaded session: ${sessionId}`);
            return markdown;
        }
        
        return null;
    } catch (error) {
        console.error(`Error loading session ${sessionId}:`, error);
        return null;
    }
}

/**
 * Set up auto-save for session
 */
function setupAutoSave(sessionId) {
    const timer = setInterval(() => {
        saveSession(sessionId);
    }, SessionConfig.autoSaveInterval);
    
    SessionManager.autoSaveTimers.set(sessionId, timer);
}

/**
 * Clear auto-save for session
 */
function clearAutoSave(sessionId) {
    const timer = SessionManager.autoSaveTimers.get(sessionId);
    if (timer) {
        clearInterval(timer);
        SessionManager.autoSaveTimers.delete(sessionId);
    }
}

/**
 * Clean up old sessions
 */
function cleanupOldSessions() {
    const now = Date.now();
    const deleted = [];
    
    SessionManager.activeSessions.forEach((session, sessionId) => {
        const age = now - new Date(session.createdAt).getTime();
        if (age > SessionConfig.maxSessionAge && session.status !== 'active') {
            completeSession(sessionId);
            deleted.push(sessionId);
        }
    });
    
    if (deleted.length > 0) {
        console.log(`🧹 Cleaned up ${deleted.length} old sessions`);
    }
}

// ===================================
// Initialize Session Manager
// ===================================
function initializeSessionManager() {
    console.log('🔧 Initializing Session Manager...');
    
    // Load any existing sessions from storage
    // TODO: Implement session recovery
    
    // Set up periodic cleanup
    setInterval(cleanupOldSessions, 3600000); // 1 hour
    
    console.log('✅ Session Manager initialized');
}

// Auto-initialize on load
if (typeof document !== 'undefined') {
    document.addEventListener('DOMContentLoaded', initializeSessionManager);
}

// ===================================
// Export API
// ===================================
window.SessionAPI = {
    createSession,
    getSession,
    getActiveSessions,
    getSessionsByAgent,
    pauseSession,
    resumeSession,
    completeSession,
    saveSession,
    loadSession
};

console.log('📦 Session Manager API loaded');
