# BusinessBuildAgenticSystem - Setup Guide

## Quick Start (5 Minutes)

### Prerequisites Check

Before starting, ensure you have:
- ✅ Windows 10 or 11
- ✅ Python 3.8+ installed
- ✅ Node.js 14+ installed (optional, but recommended)
- ✅ Git installed
- ✅ Modern web browser (Chrome, Firefox, Edge)

### Step 1: Clone the Repository

```bash
# Open Command Prompt or PowerShell
cd C:\Users\YourUsername\Documents

# Clone the repository
git clone https://github.com/mikemacmurray-afk/BusinessBuildAgenticSystem.git

# Navigate into the directory
cd BusinessBuildAgenticSystem
```

### Step 2: Verify Directory Structure

```bash
# Windows Command Prompt
dir /s

# PowerShell
Get-ChildItem -Recurse
```

You should see:
```
BusinessBuildAgenticSystem/
├── frontend/
├── knowledge-base/
├── agents/
├── workflows/
├── docs/
├── config/
├── CONTEXT.md
└── README.md
```

### Step 3: Start Local Server

#### Option A: Python (Recommended for Beginners)

```bash
# Navigate to frontend directory
cd frontend

# Start Python HTTP server
python -m http.server 8000

# Alternative for Python 2 (if you have it)
python -m SimpleHTTPServer 8000
```

#### Option B: Node.js

```bash
# Install http-server globally (one-time)
npm install -g http-server

# Navigate to frontend directory
cd frontend

# Start server
http-server -p 8000
```

#### Option C: Live Server (VS Code Extension)

1. Install "Live Server" extension in VS Code
2. Open `frontend/index.html`
3. Right-click and select "Open with Live Server"

### Step 4: Access Dashboard

Open your browser and navigate to:
```
http://localhost:8000
```

You should see the BusinessBuild Agentic System dashboard! 🎉

---

## Detailed Setup

### Python Installation (If Needed)

1. Download Python from [python.org](https://www.python.org/downloads/)
2. Run installer
3. ✅ **IMPORTANT**: Check "Add Python to PATH"
4. Complete installation
5. Verify:
   ```bash
   python --version
   ```

### Node.js Installation (If Needed)

1. Download Node.js from [nodejs.org](https://nodejs.org/)
2. Run installer (use LTS version)
3. Complete installation
4. Verify:
   ```bash
   node --version
   npm --version
   ```

### Git Installation (If Needed)

1. Download Git from [git-scm.com](https://git-scm.com/)
2. Run installer (use default settings)
3. Verify:
   ```bash
   git --version
   ```

---

## Creating Your First Session

### Test the System

1. **Open Dashboard**: `http://localhost:8000`

2. **Click "Capture Insight"** (Voice Codex)

3. **The system will**:
   - Create a new session
   - Generate session ID
   - Initialize data storage
   - Start auto-save

4. **Check Storage**:
   - Open browser Developer Tools (F12)
   - Go to "Application" or "Storage" tab
   - Check "Local Storage"
   - You should see session data

---

## File System Organization

### Knowledge Base Structure

```
knowledge-base/
│
├── sessions/                    # Active agent sessions
│   ├── 20251220-143000-voice-codex-abc123.md
│   ├── 20251220-150000-content-engine-def456.md
│   └── ...
│
├── persistent/                  # Long-term data storage
│   ├── proof-library/          # Credibility Agent outputs
│   │   ├── proof-001.md
│   │   └── proof-002.md
│   │
│   ├── narrative-bricks/       # Voice Codex outputs
│   │   ├── brick-001.md
│   │   └── brick-002.md
│   │
│   ├── brand-evolution/        # Narrative Strategist outputs
│   ├── content-library/        # Content Engine outputs
│   ├── humanized-content/      # Humanizer outputs
│   └── speaking-analytics/     # Speaking Coach outputs
│
└── integrations/                # External data imports
    ├── gmail/
    ├── outlook/
    ├── youtube/
    └── notion/
```

### Data File Format

All data files use Markdown with YAML frontmatter:

```markdown
---
asset_id: "proof-001"
type: "client-testimonial"
created: "2025-12-20"
tags: ["revenue-win", "saas"]
---

# Client Testimonial

Client reported 2x MRR growth in 8 weeks after implementation.

**Quote**: "This system transformed our onboarding."

**Context**: SaaS startup, 50 employees, B2B focus
```

---

## Configuration

### Browser Settings

For best experience:
- **Enable JavaScript**
- **Allow Local Storage**
- **Disable Pop-up Blocker** (for this site)

### Firewall Settings

If you can't access `localhost:8000`:

1. **Windows Firewall**:
   - Search "Windows Defender Firewall"
   - Click "Allow an app through firewall"
   - Add Python or Node.js
   - Allow for Private networks

### Port Already in Use?

If port 8000 is busy, use a different port:

```bash
# Python
python -m http.server 8080

# Node.js
http-server -p 8080
```

Then access: `http://localhost:8080`

---

## Troubleshooting

### Problem: "Python is not recognized"

**Solution**:
1. Reinstall Python
2. Check "Add to PATH" during installation
3. Restart Command Prompt

### Problem: Dashboard shows but doesn't load data

**Solution**:
1. Open browser Console (F12 → Console tab)
2. Check for errors
3. Ensure you're accessing via `http://localhost:8000` not `file:///`

### Problem: Changes not showing

**Solution**:
1. Hard refresh: `Ctrl + F5`
2. Clear browser cache
3. Restart local server

### Problem: Can't find directory

**Solution**:
```bash
# Check current location
cd

# Windows: Navigate to Documents
cd C:\Users\%USERNAME%\Documents\BusinessBuildAgenticSystem

# Check if Git repo exists
git status
```

---

## Development Workflow

### Recommended Workflow

1. **Start Server** (morning):
   ```bash
   cd C:\Users\YourUsername\Documents\BusinessBuildAgenticSystem\frontend
   python -m http.server 8000
   ```

2. **Open Dashboard**: `http://localhost:8000`

3. **Work with Agents** throughout the day

4. **Check Data** periodically:
   - Browser DevTools → Application → Local Storage
   - File system: `knowledge-base/sessions/`

5. **Commit Changes** (end of day):
   ```bash
   git add .
   git commit -m "Daily session updates"
   git push
   ```

### Best Practices

✅ **DO**:
- Keep server running during work session
- Let auto-save handle persistence
- Review session data before completing
- Commit meaningful changes to Git

❌ **DON'T**:
- Close browser without completing sessions
- Edit markdown files while sessions are active
- Delete session files manually
- Skip Git commits

---

## Next Steps

Once your local setup is working:

1. ✅ **Explore Each Agent**
   - Click through all 6 agent pages
   - Create test sessions
   - Review outputs

2. ✅ **Test Workflows**
   - Voice Codex → Content Engine
   - Credibility → Narrative Strategist
   - Content → Humanizer

3. ✅ **Configure Integrations**
   - Set up Gmail connection
   - Connect YouTube
   - Link Notion workspace

4. ✅ **Deploy to Netlify** (when ready)
   - See `deployment-guide.md`

---

## Getting Help

### Resources

- **Documentation**: See `/docs/` directory
- **Agent Specs**: See `/agents/` directory  
- **CONTEXT.md**: Full system architecture
- **README.md**: Project overview

### Common Commands Reference

```bash
# Start server
python -m http.server 8000

# Check Git status
git status

# Save changes
git add .
git commit -m "Your message"
git push

# Update from GitHub
git pull

# See directory contents
dir  # Windows Command Prompt
ls   # PowerShell/Git Bash
```

---

## Success Checklist

Before proceeding to agent development, verify:

- ✅ Local server running successfully
- ✅ Dashboard loads in browser
- ✅ Can navigate between sections
- ✅ Metrics display correctly
- ✅ Can click agent cards
- ✅ Browser console shows no errors
- ✅ Git repository initialized
- ✅ Directory structure intact

---

**You're ready to start building!** 🚀

Next: Review the [Agent Specifications](../agents/) to understand how each agent works.
