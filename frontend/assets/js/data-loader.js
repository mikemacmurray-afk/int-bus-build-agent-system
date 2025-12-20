/**
 * BusinessBuild Agentic System - Data Loader
 * Handles loading and saving data from/to the knowledge base
 */

// ===================================
// Data Loader Configuration
// ===================================
const DataConfig = {
    basePath: '../knowledge-base',
    paths: {
        sessions: '../knowledge-base/sessions',
        proofLibrary: '../knowledge-base/persistent/proof-library',
        narrativeBricks: '../knowledge-base/persistent/narrative-bricks',
        brandEvolution: '../knowledge-base/persistent/brand-evolution',
        contentLibrary: '../knowledge-base/persistent/content-library',
        humanizedContent: '../knowledge-base/persistent/humanized-content',
        speakingAnalytics: '../knowledge-base/persistent/speaking-analytics'
    },
    cacheTimeout: 300000 // 5 minutes
};

// ===================================
// Data Cache
// ===================================
const DataCache = {
    data: new Map(),
    timestamps: new Map()
};

// ===================================
// Data Loading Functions
// ===================================

/**
 * Load proof library data
 */
async function loadProofLibrary() {
    return await loadData('proofLibrary', 'proof-library');
}

/**
 * Load narrative bricks
 */
async function loadNarrativeBricks() {
    return await loadData('narrativeBricks', 'narrative-bricks');
}

/**
 * Load brand evolution data
 */
async function loadBrandEvolution() {
    return await loadData('brandEvolution', 'brand-evolution');
}

/**
 * Load content library
 */
async function loadContentLibrary() {
    return await loadData('contentLibrary', 'content-library');
}

/**
 * Load humanized content
 */
async function loadHumanizedContent() {
    return await loadData('humanizedContent', 'humanized-content');
}

/**
 * Load speaking analytics
 */
async function loadSpeakingAnalytics() {
    return await loadData('speakingAnalytics', 'speaking-analytics');
}

/**
 * Generic data loader with caching
 */
async function loadData(cacheKey, dataType) {
    // Check cache first
    if (isCacheValid(cacheKey)) {
        console.log(`📦 Loading ${dataType} from cache`);
        return DataCache.data.get(cacheKey);
    }
    
    try {
        console.log(`📂 Loading ${dataType} from file system...`);
        
        // TODO: Implement actual file system read
        // For now, return demo data
        const data = await fetchDataFromFileSystem(dataType);
        
        // Update cache
        DataCache.data.set(cacheKey, data);
        DataCache.timestamps.set(cacheKey, Date.now());
        
        console.log(`✅ Loaded ${dataType}: ${data.length} items`);
        return data;
        
    } catch (error) {
        console.error(`Error loading ${dataType}:`, error);
        return [];
    }
}

/**
 * Check if cached data is still valid
 */
function isCacheValid(key) {
    if (!DataCache.data.has(key)) return false;
    
    const timestamp = DataCache.timestamps.get(key);
    const age = Date.now() - timestamp;
    
    return age < DataConfig.cacheTimeout;
}

/**
 * Clear specific cache entry
 */
function clearCache(key) {
    DataCache.data.delete(key);
    DataCache.timestamps.delete(key);
    console.log(`🧹 Cleared cache for: ${key}`);
}

/**
 * Clear all cache
 */
function clearAllCache() {
    DataCache.data.clear();
    DataCache.timestamps.clear();
    console.log('🧹 Cleared all cache');
}

// ===================================
// File System Operations
// ===================================

/**
 * Fetch data from file system
 * TODO: Replace with actual file system access
 */
async function fetchDataFromFileSystem(dataType) {
    // Simulate async file read
    await new Promise(resolve => setTimeout(resolve, 100));
    
    // Return demo data based on type
    switch (dataType) {
        case 'proof-library':
            return getDemoProofData();
        case 'narrative-bricks':
            return getDemoNarrativeData();
        case 'brand-evolution':
            return getDemoBrandData();
        case 'content-library':
            return getDemoContentData();
        case 'humanized-content':
            return getDemoHumanizedData();
        case 'speaking-analytics':
            return getDemoSpeakingData();
        default:
            return [];
    }
}

/**
 * Save data to file system
 */
async function saveDataToFileSystem(dataType, data, filename) {
    try {
        console.log(`💾 Saving ${dataType} to: ${filename}`);
        
        // TODO: Implement actual file save
        // For now, save to localStorage
        const key = `data_${dataType}_${filename}`;
        localStorage.setItem(key, JSON.stringify(data));
        
        console.log(`✅ Saved ${dataType}`);
        return true;
        
    } catch (error) {
        console.error(`Error saving ${dataType}:`, error);
        return false;
    }
}

// ===================================
// Demo Data Generators
// ===================================

function getDemoProofData() {
    return [
        {
            id: 'proof-001',
            type: 'client-testimonial',
            client: 'SaaS Startup A',
            result: 'Doubled MRR in 8 weeks',
            quote: 'This system transformed our onboarding process completely.',
            tags: ['revenue-win', 'saas', 'onboarding'],
            created: '2025-12-15T10:00:00Z'
        },
        {
            id: 'proof-002',
            type: 'case-study',
            client: 'Coach B',
            result: 'Launched course to 500 students',
            quote: 'I finally have a system that works.',
            tags: ['course-creation', 'launch', 'confidence'],
            created: '2025-12-10T14:30:00Z'
        }
    ];
}

function getDemoNarrativeData() {
    return [
        {
            id: 'brick-001',
            type: 'insight',
            content: 'Prompting tools is like tweeting, but agent building is like founding.',
            theme: 'systems-thinking',
            tags: ['leverage', 'systems', 'founding'],
            created: '2025-12-18T09:00:00Z'
        },
        {
            id: 'brick-002',
            type: 'metaphor',
            content: 'Your personal brand is an appreciating asset.',
            theme: 'brand-philosophy',
            tags: ['brand', 'asset', 'value'],
            created: '2025-12-17T15:20:00Z'
        }
    ];
}

function getDemoBrandData() {
    return [
        {
            id: 'evolution-001',
            type: 'positioning-update',
            from: 'Productivity coach',
            to: 'Systems architect for personal brands',
            reason: 'Evolved beyond time management into infrastructure building',
            date: '2025-12-01T00:00:00Z'
        }
    ];
}

function getDemoContentData() {
    return [
        {
            id: 'content-001',
            platform: 'twitter',
            type: 'thread',
            content: 'Thread about systems thinking...',
            sourceIdea: 'brick-001',
            created: '2025-12-19T08:00:00Z'
        },
        {
            id: 'content-002',
            platform: 'linkedin',
            type: 'post',
            content: 'Long-form post about personal brands...',
            sourceIdea: 'brick-002',
            created: '2025-12-19T10:00:00Z'
        }
    ];
}

function getDemoHumanizedData() {
    return [
        {
            id: 'humanized-001',
            originalId: 'content-001',
            authenticity Score: 8.5,
            changes: ['Added personal story', 'Softened language', 'Added vulnerability'],
            created: '2025-12-19T08:30:00Z'
        }
    ];
}

function getDemoSpeakingData() {
    return [
        {
            id: 'speaking-001',
            videoId: 'video-123',
            analysis: {
                pacing: 7.5,
                energy: 8.0,
                clarity: 9.0,
                emotionalResonance: 7.0
            },
            feedback: [
                'Slow down key insights for emphasis',
                'Add more pauses after important points'
            ],
            created: '2025-12-18T16:00:00Z'
        }
    ];
}

// ===================================
// Data Saving Functions
// ===================================

/**
 * Save proof asset
 */
async function saveProofAsset(data) {
    const filename = `proof-${Date.now()}.md`;
    return await saveDataToFileSystem('proof-library', data, filename);
}

/**
 * Save narrative brick
 */
async function saveNarrativeBrick(data) {
    const filename = `brick-${Date.now()}.md`;
    return await saveDataToFileSystem('narrative-bricks', data, filename);
}

/**
 * Save content piece
 */
async function saveContentPiece(data) {
    const filename = `content-${Date.now()}.md`;
    return await saveDataToFileSystem('content-library', data, filename);
}

/**
 * Save brand evolution entry
 */
async function saveBrandEvolution(data) {
    const filename = `evolution-${Date.now()}.md`;
    return await saveDataToFileSystem('brand-evolution', data, filename);
}

/**
 * Save humanized content
 */
async function saveHumanizedContent(data) {
    const filename = `humanized-${Date.now()}.md`;
    return await saveDataToFileSystem('humanized-content', data, filename);
}

/**
 * Save speaking analysis
 */
async function saveSpeakingAnalysis(data) {
    const filename = `speaking-${Date.now()}.md`;
    return await saveDataToFileSystem('speaking-analytics', data, filename);
}

// ===================================
// Search and Filter Functions
// ===================================

/**
 * Search across all data types
 */
async function searchAllData(query) {
    const results = {
        proof: [],
        narrative: [],
        content: [],
        brand: [],
        speaking: []
    };
    
    // Load all data
    const [proof, narrative, content, brand, speaking] = await Promise.all([
        loadProofLibrary(),
        loadNarrativeBricks(),
        loadContentLibrary(),
        loadBrandEvolution(),
        loadSpeakingAnalytics()
    ]);
    
    // Search each dataset
    const lowerQuery = query.toLowerCase();
    
    results.proof = proof.filter(item => 
        JSON.stringify(item).toLowerCase().includes(lowerQuery)
    );
    
    results.narrative = narrative.filter(item => 
        JSON.stringify(item).toLowerCase().includes(lowerQuery)
    );
    
    results.content = content.filter(item => 
        JSON.stringify(item).toLowerCase().includes(lowerQuery)
    );
    
    results.brand = brand.filter(item => 
        JSON.stringify(item).toLowerCase().includes(lowerQuery)
    );
    
    results.speaking = speaking.filter(item => 
        JSON.stringify(item).toLowerCase().includes(lowerQuery)
    );
    
    return results;
}

/**
 * Filter data by tags
 */
function filterByTags(data, tags) {
    return data.filter(item => {
        if (!item.tags) return false;
        return tags.some(tag => item.tags.includes(tag));
    });
}

/**
 * Filter data by date range
 */
function filterByDateRange(data, startDate, endDate) {
    const start = new Date(startDate).getTime();
    const end = new Date(endDate).getTime();
    
    return data.filter(item => {
        const itemDate = new Date(item.created).getTime();
        return itemDate >= start && itemDate <= end;
    });
}

// ===================================
// Export API
// ===================================
window.DataAPI = {
    // Load functions
    loadProofLibrary,
    loadNarrativeBricks,
    loadBrandEvolution,
    loadContentLibrary,
    loadHumanizedContent,
    loadSpeakingAnalytics,
    
    // Save functions
    saveProofAsset,
    saveNarrativeBrick,
    saveContentPiece,
    saveBrandEvolution,
    saveHumanizedContent,
    saveSpeakingAnalysis,
    
    // Search functions
    searchAllData,
    filterByTags,
    filterByDateRange,
    
    // Cache management
    clearCache,
    clearAllCache
};

console.log('📦 Data Loader API loaded');
