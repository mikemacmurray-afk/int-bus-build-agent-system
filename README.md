# BusinessBuildAgenticSystem

> **Drive My Business Better** - A unified AI agentic system for building and scaling a personal brand business from zero.

## 🎯 What This Is

A comprehensive system of **six specialized AI agents** working together through a **single shared knowledge base** to:
- Build authority through proof collection
- Develop authentic narrative and brand voice
- Scale content distribution across platforms
- Maintain human presence and connection
- Automate workflows while preserving authenticity

**Business Focus**: Coaching, Consulting, Course Creation, and Content Creation

---

## 🏗️ System Architecture

### The ANCHOR Framework

```
┌─────────────────────────────────────────────────────┐
│              UNIFIED KNOWLEDGE BASE                  │
│           "Single Source of Truth"                   │
└─────────────────────────────────────────────────────┘
                        │
        ────────────────┼────────────────
        │               │               │
   AUTHORITY       NARRATIVE      DISTRIBUTION
        │               │               │
  📊 Credibility  💡 Voice Codex  🚀 Content
     Agent         Agent           Engine
                  📝 Narrative         │
                     Strategist        │
                                  HUMAN PRESENCE
                                       │
                               ❤️ Humanizer
                               🎤 Speaking Coach
```

### Six Pillar Agents

1. **Credibility Agent** - Extract and organize proof of results
2. **Voice Codex Agent** - Capture and index personal insights
3. **Narrative Strategist Agent** - Evolve brand messaging
4. **Content Engine Agent** - Repurpose content across platforms
5. **Humanizer Agent** - Add authenticity to AI-generated content
6. **Speaking Coach Agent** - Improve delivery and presence

---

## 🚀 Quick Start

### Prerequisites
- Python 3.8+ (for local server)
- Node.js 14+ (optional, for additional tooling)
- Git
- Modern web browser

### Local Development Setup

```bash
# Clone the repository
git clone https://github.com/mikemacmurray-afk/BusinessBuildAgenticSystem.git
cd BusinessBuildAgenticSystem

# Start local server (choose one method)

# Option 1: Python
python -m http.server 8000

# Option 2: Node.js (if you have http-server installed)
npx http-server -p 8000

# Open browser
# Navigate to: http://localhost:8000
```

### First Time Setup

1. **Launch Dashboard**: Open `http://localhost:8000` in your browser
2. **Initialize Knowledge Base**: The system will create initial data structures
3. **Configure Integrations**: Set up Gmail, Outlook, YouTube, Notion connections
4. **Start Using Agents**: Click any agent card to begin your first session

---

## 📁 Project Structure

```
BusinessBuildAgenticSystem/
│
├── README.md                    ← You are here
├── CONTEXT.md                   ← Master project documentation
│
├── frontend/                    ← HTML Interface
│   ├── index.html              ← Main Dashboard
│   ├── assets/
│   │   ├── css/
│   │   │   ├── main.css
│   │   │   └── dashboard.css
│   │   └── js/
│   │       ├── dashboard.js
│   │       ├── session-manager.js
│   │       └── data-loader.js
│   └── agents/                 ← Individual Agent Pages
│       ├── credibility.html
│       ├── voice-codex.html
│       ├── narrative-strategist.html
│       ├── content-engine.html
│       ├── humanizer.html
│       └── speaking-coach.html
│
├── knowledge-base/              ← Shared Data Repository
│   ├── sessions/               ← Active session data
│   ├── persistent/             ← Long-term storage
│   │   ├── proof-library/
│   │   ├── narrative-bricks/
│   │   ├── brand-evolution/
│   │   ├── content-library/
│   │   ├── humanized-content/
│   │   └── speaking-analytics/
│   └── integrations/           ← External data imports
│       ├── gmail/
│       ├── outlook/
│       ├── youtube/
│       └── notion/
│
├── agents/                      ← Agent Specifications
│   ├── 01-credibility-agent/
│   ├── 02-voice-codex-agent/
│   ├── 03-narrative-strategist-agent/
│   ├── 04-content-engine-agent/
│   ├── 05-humanizer-agent/
│   └── 06-speaking-coach-agent/
│
├── workflows/                   ← Inter-agent automation
│   ├── voice-to-content.md
│   ├── credibility-to-narrative.md
│   └── content-to-humanizer.md
│
└── docs/
    ├── architecture.md
    ├── data-schema.md
    ├── setup-guide.md
    └── deployment-guide.md
```

---

## 💡 How It Works

### 1. Unified Knowledge Base
All agents read from and write to a single shared repository. This creates **compound intelligence** - each interaction makes the entire system smarter.

### 2. Session-Based + Persistent Storage
- **Sessions**: Temporary working data (active agent processes)
- **Persistent**: Long-term knowledge (proof, insights, content)

### 3. Markdown + Frontmatter
All data stored as human-readable Markdown files with YAML frontmatter for metadata:

```yaml
---
asset_id: "proof-001"
type: "client-testimonial"
created: "2025-12-20"
tags: ["revenue-win", "saas"]
---

Client reported 2x MRR growth in 8 weeks after implementing our system.
```

### 4. Automated Workflows
Agents trigger each other when appropriate:
- Voice note captured → Content Engine generates posts
- Testimonial collected → Narrative Strategist updates messaging
- Video analyzed → Speaking Coach provides feedback → Content extracted

---

## 🎨 Dashboard Features

### Main Dashboard
- **Real-time metrics** across all 6 agents
- **Active sessions** indicator
- **Business health** indicators (proof count, content output, etc.)
- **Recent activity** feed
- **Quick access** to each agent

### Agent Pages
- Individual interface for each agent
- Input forms specific to agent type
- Session history and management
- Output preview and download
- Drill-down to detailed data

---

## 📊 Data Integrations

### Currently Supported
- ✅ Gmail (email extraction)
- ✅ Outlook (email extraction)
- ✅ YouTube (video content)
- ✅ Notion (notes and organization)

### Coming Soon
- Zoom (call transcripts)
- Slack (team communications)
- Google Drive (documents)
- Calendar (meeting data)

---

## 🔄 Workflow Examples

### Example 1: Insight to Multi-Platform Content
```
1. Record voice note with insight
   ↓
2. Voice Codex extracts narrative bricks
   ↓
3. Content Engine generates:
   - X thread
   - LinkedIn post
   - Instagram caption
   - YouTube short hook
   ↓
4. Humanizer adds authenticity
   ↓
5. Ready to publish
```

### Example 2: Client Win to Brand Update
```
1. Client sends testimonial email
   ↓
2. Credibility Agent extracts proof
   ↓
3. Proof added to library
   ↓
4. Narrative Strategist detects pattern
   ↓
5. Suggests brand messaging update
   ↓
6. Updated positioning available
```

---

## 🚢 Deployment

### Local Development
```bash
python -m http.server 8000
# Access at http://localhost:8000
```

### Production (Netlify)
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod
```

See `docs/deployment-guide.md` for detailed instructions.

---

## 📖 Documentation

- **[CONTEXT.md](CONTEXT.md)** - Complete project context and architecture
- **[docs/architecture.md](docs/architecture.md)** - System design deep dive
- **[docs/data-schema.md](docs/data-schema.md)** - Data structure specifications
- **[docs/setup-guide.md](docs/setup-guide.md)** - Detailed setup instructions
- **[docs/deployment-guide.md](docs/deployment-guide.md)** - Netlify deployment guide

### Agent Documentation
Each agent has detailed specifications in `/agents/[agent-name]/`:
- `agent-prompt.md` - Complete agent instructions
- `logic.md` - Decision-making logic
- `config.json` - Configuration settings

---

## 🎯 Business Goals

This system is designed to help you:

1. **Build Authority** - Systematic proof collection and presentation
2. **Scale Content** - 1 idea → 10+ platform-specific posts
3. **Maintain Authenticity** - AI handles scale, you provide soul
4. **Save Time** - Automate 80% of content workflow
5. **Compound Growth** - Every interaction strengthens the system

---

## 🛠️ Technology Stack

- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Data**: Markdown files with YAML frontmatter
- **Local Dev**: Python/Node.js HTTP server
- **Version Control**: Git + GitHub
- **Hosting**: Netlify (production)
- **Integrations**: Gmail API, Outlook API, YouTube API, Notion API

---

## 📈 Roadmap

### Phase 1: Foundation ✅ *IN PROGRESS*
- [x] Repository structure
- [ ] HTML dashboard
- [ ] Data schema implementation
- [ ] Local development setup

### Phase 2: Agent Development
- [ ] Credibility Agent
- [ ] Voice Codex Agent
- [ ] Narrative Strategist Agent
- [ ] Content Engine Agent
- [ ] Humanizer Agent
- [ ] Speaking Coach Agent

### Phase 3: Integration
- [ ] Workflow automation
- [ ] API integrations
- [ ] Testing and optimization

### Phase 4: Production
- [ ] Netlify deployment
- [ ] Performance monitoring
- [ ] User documentation

---

## 🤝 Contributing

This is a personal business system, but the architecture and agents can be adapted for other use cases. Feel free to fork and customize for your own needs.

---

## 📝 License

Private repository - All rights reserved.

---

## 🙋 Support

For questions or issues:
1. Check documentation in `/docs/`
2. Review agent specifications in `/agents/`
3. Refer to CONTEXT.md for architectural decisions

---

**Built with ❤️ to Drive My Business Better**

*Last Updated: December 2025*
