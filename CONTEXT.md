# BusinessBuildAgenticSystem - Project Context

## Project Overview

**Purpose**: A comprehensive AI-powered agentic system designed to build and scale a personal brand business from zero through six specialized agents working within a unified knowledge base.

**Mission Statement**: "Drive My Business Better" - Every agent, every data point, every workflow serves this single purpose.

**Business Model**: 
- **Niche (High-Touch)**: Coaching & Consulting for select clients
- **Broad (Scalable)**: Course Creation & Content Creation for wide audience
- **Status**: Zero-based startup - building from ground up

---

## System Architecture

### Core Principle
**Single Shared Knowledge Base** - All agents contribute to and draw from one unified repository, creating compound intelligence over time.

### The ANCHOR Framework

```
A - AUTHORITY      → Credibility Agent
N - NARRATIVE      → Voice Codex Agent + Narrative Strategist Agent  
C - CONSISTENCY    → Content Engine Agent
H - HUMAN PRESENCE → Humanizer Agent + Speaking Coach Agent
O - [Framework continues with remaining pillars]
R - [Framework continues with remaining pillars]
```

---

## Technical Stack

### Frontend
- **Technology**: HTML5, CSS3, Vanilla JavaScript
- **Design Philosophy**: Clean, functional, data-rich, easy on the eyes
- **Interface Type**: Single-page dashboard with drill-down capability

### Data Storage
- **Format**: Markdown files with YAML frontmatter
- **Structure**: 
  - Session-based (temporary working data)
  - Persistent (long-term knowledge base)
- **Location**: `/knowledge-base/` directory

### Development Environment
- **Local**: Windows laptop with Python/Node.js
- **Version Control**: Git + GitHub
- **Production**: Netlify (deployed when ready)

### Integrations (Current)
- Gmail
- Outlook  
- YouTube
- Notion
- **Expandable**: Additional sources added as needed

---

## Agent Ecosystem

### 1. Credibility Agent (Authority Pillar)
**Purpose**: Extract, organize, and surface proof of results from all client interactions
**Input Sources**: 
- Email (Gmail, Outlook)
- Zoom transcripts
- Client surveys/forms
- DMs and testimonials
**Output**: Searchable proof library, case studies, testimonial vault

### 2. Voice Codex Agent (Narrative Pillar)
**Purpose**: Capture raw thinking and organize into reusable narrative building blocks
**Input Sources**:
- Voice notes
- Audio transcripts
- Brainstorming sessions
- Book insights
**Output**: Personal narrative bricks library, searchable insights, metaphor bank

### 3. Narrative Strategist Agent (Narrative Pillar)
**Purpose**: Evolve brand messaging and positioning based on growth
**Input Sources**:
- Past content archive
- Voice Codex insights
- Market positioning data
**Output**: Updated messaging frameworks, positioning statements, brand evolution roadmap

### 4. Content Engine Agent (Distribution Pillar)
**Purpose**: Transform one core idea into multi-platform content formats
**Input Sources**:
- Long-form content (YouTube, newsletters, podcasts)
- Voice Codex narrative bricks
- Core insights
**Output**: Platform-specific posts (X, LinkedIn, Instagram), shorts hooks, captions

### 5. Humanizer Agent (Human Presence Pillar)
**Purpose**: Transform AI-polished content into authentic, relatable communication
**Input Sources**:
- Draft content (any format)
- Brand voice guidelines
**Output**: Humanized content with warmth, vulnerability, and authenticity

### 6. Speaking Coach Agent (Human Presence Pillar)
**Purpose**: Analyze and improve delivery, pacing, and presence in audio/video
**Input Sources**:
- Video recordings
- Audio files
- Live recording sessions
**Output**: Delivery analysis, coaching feedback, improvement suggestions

---

## Data Flow Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                   UNIFIED KNOWLEDGE BASE                     │
│                  /knowledge-base/persistent/                 │
│                                                              │
│  ┌──────────────┬──────────────┬──────────────┬──────────┐ │
│  │ Proof Library│Narrative Bricks│Content Library│Analytics│ │
│  └──────────────┴──────────────┴──────────────┴──────────┘ │
└─────────────────────────────────────────────────────────────┘
                            │
        ┌───────────────────┼───────────────────┐
        ▼                   ▼                   ▼
   AUTHORITY           NARRATIVE          DISTRIBUTION
        │                   │                   │
  Credibility         Voice Codex         Content Engine
    Agent            Agent + Strategist       Agent
                            │                   │
                      HUMAN PRESENCE            │
                            │                   │
                     Humanizer Agent ◄──────────┘
                    Speaking Coach Agent
```

---

## Workflow Automation

### Natural Flow Sequences

**1. Insight Capture → Content Distribution**
- Voice Codex captures idea → Content Engine generates multi-platform posts

**2. Proof Collection → Brand Evolution**
- Credibility Agent extracts testimonial → Narrative Strategist updates positioning

**3. Content Creation → Humanization**
- Content Engine generates posts → Humanizer adds authenticity → Ready for publishing

**4. Speaking Prep → Content Repurposing**
- Speaking Coach analyzes video → Content Engine extracts insights → Distribution

---

## Storage Schema

### Session Data Structure
```yaml
---
session_id: "YYYYMMDD-HHMMSS-AgentName"
agent: "credibility|voice-codex|narrative|content|humanizer|speaking"
timestamp: "2025-12-20T14:30:00Z"
status: "active|paused|completed"
inputs:
  - type: "email|voice|video|text"
    source: "gmail|notion|upload"
    content: "..."
decisions:
  - step: 1
    action: "extract|classify|transform"
    reasoning: "..."
outputs:
  - asset_type: "testimonial|insight|post|analysis"
    content: "..."
    metadata: {}
---

[Session content in Markdown]
```

### Persistent Data Structure
```yaml
---
asset_id: "UUID"
asset_type: "proof|narrative-brick|content-piece|analysis"
created: "2025-12-20"
updated: "2025-12-20"
source_agent: "credibility"
tags: ["revenue-win", "saas", "onboarding"]
metadata:
  client_name: "..."
  context: "..."
  sentiment: "positive|neutral|negative"
---

[Asset content in Markdown]
```

---

## Dashboard Metrics

### Business Health Indicators
- **Proof Assets Count**: Total validated results/testimonials
- **Content Pieces Generated**: Multi-platform outputs created
- **Narrative Bricks Library Size**: Reusable insights captured
- **Workflows Executed**: Automated agent sequences run
- **Active Sessions**: Currently running agent processes

### Per-Agent Metrics
- **Credibility Agent**: Proof assets, client wins documented, last update
- **Voice Codex**: Narrative bricks, insights captured, themes identified
- **Narrative Strategist**: Brand updates, positioning shifts, messaging evolution
- **Content Engine**: Posts generated, platforms covered, conversion rate
- **Humanizer**: Content processed, authenticity score improvements
- **Speaking Coach**: Sessions analyzed, delivery improvements, key feedback

---

## Development Phases

### Phase 1: Foundation ✅ *CURRENT*
- [x] CONTEXT.md created
- [ ] Repository structure built
- [ ] HTML frontend dashboard
- [ ] Local development setup
- [ ] Data schema templates

### Phase 2: Agent Development (Sequential)
- [ ] Agent 1: Credibility Agent
- [ ] Agent 2: Voice Codex Agent
- [ ] Agent 3: Narrative Strategist Agent
- [ ] Agent 4: Content Engine Agent
- [ ] Agent 5: Humanizer Agent
- [ ] Agent 6: Speaking Coach Agent

### Phase 3: Integration
- [ ] Inter-agent workflows
- [ ] Integration testing
- [ ] Performance optimization

### Phase 4: Deployment
- [ ] Netlify configuration
- [ ] Production deployment
- [ ] Monitoring setup

---

## Success Criteria

### Technical
- ✅ All 6 agents operational
- ✅ Unified knowledge base functioning
- ✅ Dashboard displaying real-time metrics
- ✅ Workflows executing automatically
- ✅ Data persisting correctly

### Business
- ✅ Proof library growing consistently
- ✅ Content output increasing 5x
- ✅ Brand messaging clarity improving
- ✅ Time-to-publish decreasing
- ✅ Client acquisition accelerating

---

## Guiding Principles

1. **Single Source of Truth**: All agents write to one knowledge base
2. **Compound Intelligence**: Each interaction makes the system smarter
3. **Human-AI Collaboration**: AI scales, human provides soul
4. **Evidence-Driven Growth**: Proof compounds trust
5. **Narrative Coherence**: Every piece reinforces brand story
6. **Sustainable Systems**: Build once, benefit continuously

---

## Project Ownership

**Repository**: `github.com/mikemacmurray-afk/BusinessBuildAgenticSystem`  
**Owner**: Mike MacMurray  
**Purpose**: Drive My Business Better  
**Started**: December 2025  
**Status**: Active Development

---

*This document serves as the master reference for all development decisions, agent specifications, and system architecture choices throughout the project lifecycle.*
