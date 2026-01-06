# Credibility Agent

**Version**: 1.0.0  
**Pillar**: Authority (ANCHOR Framework)  
**Status**: Active

---

## Purpose

The Credibility Agent extracts, organizes, and presents proof of results from all client interactions. It builds your "wall of proof" - a comprehensive library of testimonials, case studies, and verified results that compound trust.

---

## What It Does

### Core Functions

1. **Extract Proof** from multiple sources:
   - Email (Gmail, Outlook)
   - Manual entries
   - Form responses (Typeform, Google Forms, etc.)
   - File uploads (CSV, JSON, email archives)

2. **Classify & Tag** automatically:
   - Proof type (revenue-win, time-saved, confidence-gain, etc.)
   - Industry/niche
   - Sentiment (positive, exceptional)
   - Quality scores (specificity, emotional resonance, usability)

3. **Organize & Store**:
   - Searchable proof library
   - Markdown files with YAML frontmatter
   - Tags for flexible filtering
   - Verification tracking

4. **Detect Patterns**:
   - Identify common results across clients
   - Suggest case study opportunities
   - Surface trends in testimonials

5. **Generate Assets**:
   - Case studies from accumulated proof
   - Testimonial collections
   - CSV/JSON exports for other tools

---

## Files in This Directory

### `agent-prompt.md`
Complete AI prompt for Claude to act as the Credibility Agent. Copy-paste this into Claude when you want to process proof manually.

**Use this when:**
- Processing emails manually
- Adding testimonials
- Analyzing client feedback
- Creating case studies

### `logic.md`
Technical specification of all processing logic, algorithms, and decision trees.

**Use this for:**
- Understanding how classification works
- Debugging extraction issues
- Customizing scoring formulas
- Implementing in code

### `config.json`
Configuration settings for the agent.

**Customize:**
- Extraction patterns
- Classification keywords
- Quality thresholds
- Email integration settings
- Export formats

---

## Quick Start

### 1. Access the Agent

Navigate to: `http://localhost:8000/agents/credibility.html`

### 2. Import Your First Proof

**Option A: Scan Email**
1. Click "Email" tab
2. Select Gmail or Outlook
3. Click "Scan Emails for Proof"
4. Review extracted proof

**Option B: Manual Entry**
1. Click "Manual Entry" tab
2. Fill in:
   - Client name
   - Result/outcome
   - Testimonial quote
   - Context (optional)
3. Select proof types
4. Click "Add to Proof Library"

### 3. View Your Proof Library

Scroll down to see all proof assets with:
- Type badges
- Client names
- Results
- Full quotes
- Tags

### 4. Search & Filter

- Search box: Find by keyword
- Type filter: Filter by proof type
- Export: Download as CSV

---

## Data Structure

### Proof Asset (Stored in Markdown)

```yaml
---
asset_id: "proof-001"
type: "revenue-win"
client: "Sarah Johnson"
created: "2025-12-20"
source: "gmail"
tags: ["revenue-win", "saas", "mrr"]
industry: "saas"
sentiment: "positive"
specificity: 9
emotional_resonance: 8
usability: 10
verified: true
---

# Client Testimonial: Sarah Johnson

## Result
Doubled MRR in 8 weeks

## Quote
> "This system transformed our onboarding..."

## Context
[Client context and situation]

## Metrics
- Before: $5K MRR
- After: $10K MRR  
- Timeline: 8 weeks
```

---

## Classification System

### Proof Types

| Type | Description | Example |
|------|-------------|---------|
| **revenue-win** | Money/income increase | "Doubled revenue in 8 weeks" |
| **time-saved** | Efficiency improvement | "Saved 15 hours per week" |
| **confidence-gain** | Psychological transformation | "Finally feel confident pitching" |
| **transformation** | Complete change | "Completely transformed my business" |
| **launch** | Successfully shipped something | "Launched first course to 500 students" |
| **system-improvement** | Process/workflow better | "Team now aligned on process" |

### Industries

- SaaS
- Coaching  
- Consulting
- Course Creation
- Content Creation
- Agency
- Freelance
- E-commerce
- General

### Quality Scores (0-10)

- **Specificity**: How measurable/detailed
- **Emotional Resonance**: How impactful emotionally
- **Usability**: How easy to use standalone

---

## Integration with Other Agents

### → Narrative Strategist
Proof patterns inform brand positioning:
- "Most proof shows time-saving → position as efficiency expert"

### → Content Engine
Testimonials feed content creation:
- Pull quotes for social posts
- Case studies for newsletters
- Metrics for landing pages

### ← Voice Codex
Insights trigger proof searches:
- "delegation" mentioned → surface delegation wins

---

## Common Workflows

### Workflow 1: Weekly Proof Harvest

```
1. Click "Scan Emails" (Gmail, last 7 days)
2. Review extracted proof
3. Edit/enhance any unclear entries
4. Save to library
5. Update dashboard metrics
```

### Workflow 2: Pre-Launch Proof Collection

```
1. Manual entry tab
2. Add all client wins from notes
3. Categorize by type
4. Export as CSV
5. Use for sales page
```

### Workflow 3: Case Study Generation

```
1. Filter by type (e.g., revenue-win)
2. Identify pattern (5+ similar results)
3. Use agent-prompt.md with Claude
4. Generate case study
5. Save to brand-evolution
```

---

## Configuration Tips

### Customize Classification Keywords

Edit `config.json` → `classification` → `proof_types`:

```json
{
  "id": "custom-type",
  "label": "Your Custom Type",
  "keywords": ["keyword1", "keyword2"],
  "color": "#hexcode"
}
```

### Adjust Quality Thresholds

Edit `config.json` → `thresholds`:

```json
{
  "quality_minimum": 5.0,
  "confidence_minimum": 0.3,
  "verification_required_threshold": 8.5
}
```

### Email Search Queries

Edit `config.json` → `email_integration` → `gmail` → `default_query`:

```json
"default_query": "subject:(win OR success) OR body:(testimonial)"
```

---

## Troubleshooting

### Issue: Email scan finds nothing

**Solutions:**
- Broaden search query
- Increase date range
- Check email permissions
- Try manual search query

### Issue: Extracted proof is incomplete

**Solutions:**
- Use "Manual Entry" to add details
- Edit proof asset markdown file
- Adjust extraction patterns in config
- Provide more context in source email

### Issue: Wrong classification

**Solutions:**
- Manually add correct tags
- Update classification keywords
- Check logic.md for rules
- Provide feedback for improvement

---

## Metrics to Track

Monitor these in the dashboard:

- **Total Proof Assets**: Growing over time
- **Monthly Additions**: Consistency indicator
- **Quality Distribution**: How many 8+ scores
- **Type Breakdown**: What results you deliver most
- **Industry Focus**: Where you have most proof
- **Verification Rate**: How much is verified

---

## Best Practices

### ✅ DO

- Scan emails weekly for fresh proof
- Add context to every proof asset
- Tag generously for searchability
- Verify exceptional claims
- Export backups monthly
- Create case studies when patterns emerge

### ❌ DON'T

- Skip context field (reduces usability)
- Delete unverified proof (mark for verification instead)
- Ignore quality scores (they guide usage)
- Forget to ask permission for public use
- Let proof pile up unorganized

---

## Future Enhancements

Planned for future versions:

- **Automatic email monitoring** - Real-time proof capture
- **Video testimonial analysis** - Extract proof from videos
- **Social proof scraping** - Pull from LinkedIn, Twitter
- **CRM integration** - Connect to HubSpot, Salesforce
- **AI-powered verification** - Auto-request confirmation
- **Public proof page generation** - Auto-build testimonial page

---

## Support

### Resources

- **agent-prompt.md** - Full AI instructions
- **logic.md** - Technical specifications
- **config.json** - All settings
- **CONTEXT.md** (root) - System architecture

### Getting Help

1. Check troubleshooting section above
2. Review logic.md for decision rules
3. Adjust config.json settings
4. Consult main documentation

---

## Version History

### v1.0.0 (2025-12-20)
- Initial release
- Email scanning (Gmail, Outlook)
- Manual entry interface
- Automatic classification
- Quality scoring
- Proof library with search/filter
- CSV export

---

**Remember**: Every proof asset you capture compounds your authority. Start building your wall of proof today!
