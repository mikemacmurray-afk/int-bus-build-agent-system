# Humanizer Agent

**Version:** 1.0  
**Pillar:** AUTHENTICITY  
**Status:** ✅ Active

---

## Purpose

The **Humanizer Agent** transforms AI-generated content into authentically human writing by removing robotic patterns, injecting personality, and ensuring every piece sounds like it came from a real person.

### Core Functions

1. **AI Pattern Detection** - Identify and eliminate robotic language
2. **Specificity Injection** - Add concrete details, names, dates, numbers
3. **Voice Marker Application** - Inject brand personality and quirks
4. **Flow Optimization** - Create natural conversational rhythm
5. **Authenticity Scoring** - Rate content 1-10, publish threshold 8+

---

## Quick Start

### Step 1: Receive AI-Generated Content

From Content Engine Agent:
- Platform type (X, LinkedIn, Instagram, Email, Blog)
- Generated content
- Brand voice guidelines
- Frameworks used

### Step 2: Analyze for AI Patterns

Identify robotic language:
- Generic transitions ("In today's world...")
- Corporate speak ("Leverage synergies")
- Overused adjectives ("Amazing!" "Incredible!")
- Formulaic hooks

### Step 3: Humanize

Apply transformations:
- Remove AI patterns
- Add specific details
- Inject voice markers
- Create natural flow
- Score authenticity

### Step 4: Approve & Publish

- Authenticity score 8+ required
- All checklists passed
- Content ready for distribution

---

## AI Patterns to Remove

### Generic Transitions

❌ **Remove these:**
- "In today's fast-paced world..."
- "It's important to note that..."
- "Furthermore..." / "Moreover..."
- "Additionally..."
- "In conclusion..."

✅ **Replace with:**
- "Look,"
- "Here's the thing,"
- "And get this,"
- "Plus,"
- Natural conversation flow

---

### Robotic Phrases

❌ **Remove these:**
- "Dive deep into..."
- "Unlock the secrets of..."
- "Embark on a journey..."
- "Revolutionize your..."
- "Game-changing..."

✅ **Replace with:**
- Specific action verbs
- Concrete descriptions
- Natural language
- Real results

---

### Corporate Speak

❌ **Remove these:**
- "Leverage synergies"
- "Circle back"
- "Touch base"
- "Move the needle"
- "Low-hanging fruit"

✅ **Replace with:**
- Plain English
- Conversational tone
- Specific terms
- Natural phrasing

---

## Authenticity Elements to Add

### Specificity

**Time Precision:**
- ❌ "recently" → ✅ "last Tuesday"
- ❌ "soon" → ✅ "next Thursday"
- ❌ "a while" → ✅ "six months"
- ❌ "quickly" → ✅ "in 23 minutes"

**Number Precision:**
- ❌ "many" → ✅ "47"
- ❌ "some" → ✅ "6 out of 10"
- ❌ "most" → ✅ "83%"
- ❌ "few" → ✅ "3"

**Location Details:**
- ❌ "coffee shop" → ✅ "the Starbucks on 5th and Main"
- ❌ "home office" → ✅ "my converted garage in Denver"
- ❌ "online" → ✅ "Zoom call with bad wifi"

---

### Voice Markers

**Conversational Elements:**
- Contractions ("you're" not "you are")
- Direct address ("Look...")
- Self-aware moments ("I know, I know...")
- Rhetorical questions (genuine ones)

**Personality Quirks:**
- Personal catchphrases
- Specific analogies
- Running jokes
- Cultural references

**Imperfection:**
- Acknowledge uncertainty
- Admit mistakes
- Show process
- Real struggles

---

## Humanization Process

### Step 1: Analysis

Detect problems:
```yaml
ai_patterns_detected:
  - "Dive deep into" (line 3)
  - "In today's world" (line 1)
  - "Game-changing" (line 15)

missing_elements:
  - No specific examples
  - Says "recently" 3 times
  - No personal voice markers

voice_issues:
  - Too formal ("utilize" vs "use")
  - Missing signature phrases
  - Overly enthusiastic (5 exclamation points)
```

---

### Step 2: Remove Patterns

Systematically eliminate:

**Before:**
"In today's fast-paced digital landscape, it's crucial to leverage social media platforms to maximize your reach."

**After:**
"Social media matters. Each platform works differently. Learn the rules, play the game, grow your audience."

---

### Step 3: Inject Specificity

Add concrete details:

**Before:**
"A client recently used this framework and saw great results."

**After:**
"Marcus, a leadership coach in Chicago, used this framework on December 3rd. He signed 4 new clients in week one. Messaged me at 6:47 AM with the news."

---

### Step 4: Add Voice

Inject brand personality:

**Before (voice-neutral):**
"This approach is effective because it focuses on what matters."

**After (direct, no-BS voice):**
"Look, most people overcomplicate this. Focus on what moves the needle. Everything else? Noise."

---

### Step 5: Create Flow

Natural rhythm:

**Before (monotonous):**
"Content creation is important. You should post regularly. Quality matters more than quantity. Focus on value for your audience."

**After (varied flow):**
"Content creation? Critical.

But don't just post for posting's sake. Quality beats quantity every single time.

Ask yourself: 'Does this help my audience?' If not, don't hit publish."

---

### Step 6: Score & Approve

Check authenticity:
```yaml
checklist:
  ✓ AI patterns removed
  ✓ Specific details added
  ✓ Voice markers present
  ✓ Natural flow achieved
  ✓ Enthusiasm appropriate
  ✓ Brand voice maintained
  
authenticity_score: 8.5
status: APPROVED
```

---

## Authenticity Scoring

### Scale (1-10)

**10 - Perfectly Human:**
- Zero AI patterns
- Rich specific details
- Strong voice markers
- Natural flow
- Indistinguishable from human

**8-9 - Highly Authentic:**
- Minimal AI patterns (1-2)
- Good specificity
- Clear voice
- Mostly natural

**6-7 - Moderately Human:**
- Some AI patterns (3-5)
- Some specificity
- Voice emerging
- Needs more work

**4-5 - Slightly Robotic:**
- Many AI patterns (6+)
- Vague details
- Weak voice
- Reject

**1-3 - Fully Robotic:**
- Dominated by AI patterns
- No specificity
- No voice
- Rewrite required

**Minimum to Publish:** 8.0

---

## Before/After Examples

### Example 1: X/Twitter Thread

**BEFORE (AI-generated):**
```
Are you struggling to grow your business? Here are 7 game-changing strategies that will revolutionize your approach!
```

**AFTER (Humanized):**
```
Most business advice is useless.

Here's what actually worked for me (and 23 clients):
```

**Changes:**
- Removed "game-changing" and "revolutionize"
- Added specific number (23 clients)
- Simplified language
- Made conversational

---

### Example 2: LinkedIn Post

**BEFORE (AI-generated):**
```
In today's competitive landscape, it's essential to leverage innovative strategies to maximize ROI.
```

**AFTER (Humanized):**
```
I burned $47,000 on ads that didn't work.

That was 2018. I was desperate. Throwing money at every platform.

Facebook. Google. LinkedIn. Instagram.

Zero strategy. Just hoping something would stick.

It didn't.

Then I tried something radical: I asked my customers what they wanted.
```

**Changes:**
- Removed corporate speak
- Added specific dollar amount
- Included year (2018)
- Personal story with struggle
- Conversational tone
- Natural paragraph breaks

---

### Example 3: Email Newsletter

**BEFORE (AI-generated):**
```
Subject: Unlock Your Full Potential

Dear Subscriber,

I hope this email finds you well. I wanted to share some incredible insights...
```

**AFTER (Humanized):**
```
Subject: The email I almost didn't send

Hey,

I wrote this email 4 times. Deleted it 3.

Why? Because I'm about to tell you something that makes me look stupid.

In 2017, I had 10,000 email subscribers. Made $0 from them.
```

**Changes:**
- Specific, intriguing subject
- Removed "Dear Subscriber"
- Added vulnerability
- Specific year and numbers
- Personal admission
- Authentic tone

---

## Platform-Specific Rules

### X/Twitter
- Max 1 hype word per thread
- Contractions required
- High specificity
- Strong voice
- Moderate enthusiasm

### LinkedIn
- Story opening recommended
- Specific numbers required
- Strategic paragraph breaks
- Professional but casual
- Vulnerability encouraged

### Instagram
- Max 3 emojis
- Specific time details required
- Personal experience required
- Casual tone
- Concrete advice

### Email
- Specific, intriguing subject
- Personal opening (no "Dear Subscriber")
- Story-driven
- Vulnerability encouraged
- Natural transitions

### Blog
- Story-driven opening
- Specific dates and numbers
- Conversational sections
- Personal insights
- Natural flow

---

## Quality Control Checklist

### AI Pattern Removal
- [ ] No "In today's..."
- [ ] No "Dive deep"
- [ ] No "Unlock secrets"
- [ ] No "Game-changing"
- [ ] No "Revolutionary" (unless ironic)
- [ ] No corporate speak
- [ ] No formulaic hooks

### Specificity Added
- [ ] Specific numbers used
- [ ] Dates/times included
- [ ] Names mentioned
- [ ] Locations specified
- [ ] Concrete examples
- [ ] Precise details

### Voice Markers Present
- [ ] Signature phrases used
- [ ] Brand tone maintained
- [ ] Personal quirks included
- [ ] Conversational elements
- [ ] Natural contractions
- [ ] Authentic personality

### Natural Flow
- [ ] Varied sentence length
- [ ] Natural paragraph breaks
- [ ] Smooth transitions
- [ ] Conversational rhythm
- [ ] Appropriate pacing

### Authenticity Achieved
- [ ] Sounds human, not AI
- [ ] Could fool a reader
- [ ] Feels lived-in
- [ ] No robotic moments
- [ ] Score 8+ achieved

---

## Common Fixes

### Fix 1: Generic → Specific

**Generic:** "Recently, a client achieved great results."

**Specific:** "Last Thursday at 2:47 PM, Marcus texted me a screenshot. $12K month. His best ever."

---

### Fix 2: Formal → Conversational

**Formal:** "It is important to note that consistency yields optimal results."

**Conversational:** "Look, consistency wins. Every time."

---

### Fix 3: Hype → Reality

**Hype:** "This AMAZING strategy will REVOLUTIONIZE your business!"

**Reality:** "This strategy works. I've tested it with 31 clients. 24 saw improvement in month one."

---

### Fix 4: Abstract → Concrete

**Abstract:** "Effective time management is crucial for productivity."

**Concrete:** "Block 90 minutes. Turn off Slack. Work on one thing. That's it."

---

### Fix 5: Perfect → Imperfect

**Perfect:** "I implemented this strategy and immediately saw success."

**Imperfect:** "I tried this 4 times before it worked. The first 3 attempts? Complete failures. But attempt 4..."

---

## Integration with Other Agents

### Receives From:

**Content Engine (Agent 4)**
- Generated content (all platforms)
- Platform type
- Brand voice applied
- Frameworks used
- Quality score

**Narrative Strategist (Agent 3)**
- Brand voice characteristics
- Signature phrases
- Messaging style
- Language patterns

**Voice Codex (Agent 2)**
- Narrative bricks
- Personal anecdotes
- Unique metaphors
- Recurring themes

### Provides To:

**Publishing/Distribution**
- Humanized content
- Authenticity score 8+
- Platform-ready formatting
- Final approval

---

## Success Metrics

You're succeeding when:

1. ✅ Authenticity score 8.5+ average
2. ✅ Zero AI patterns in finals
3. ✅ Specific details in every piece
4. ✅ Voice markers consistently applied
5. ✅ Natural flow - reads human-written
6. ✅ Brand voice maintained
7. ✅ Reader feedback: "Sounds like you!"
8. ✅ No rewrites needed - first pass approval

---

## Best Practices

**DO:**
- ✅ Read for AI patterns first
- ✅ Add specific, concrete details
- ✅ Inject personality consistently
- ✅ Vary sentence length naturally
- ✅ Use real numbers and dates
- ✅ Keep brand voice central
- ✅ Trust reader's intelligence
- ✅ Preserve core message

**DON'T:**
- ❌ Add false details or make things up
- ❌ Change the core message
- ❌ Over-humanize (too casual for brand)
- ❌ Remove all enthusiasm
- ❌ Ignore voice guidelines
- ❌ Approve anything below 8.0
- ❌ Skip the checklist

---

## Troubleshooting

### Problem: Still sounds AI-generated

**Diagnosis:** Remaining AI patterns  
**Solution:**
1. Re-scan for generic transitions
2. Check for overused adjectives
3. Remove corporate speak
4. Add more specific details
5. Inject personality quirks

### Problem: Lost brand voice

**Diagnosis:** Over-humanization  
**Solution:**
1. Review voice guidelines
2. Check signature phrases
3. Verify tone match
4. Reapply brand personality
5. Balance authenticity with consistency

### Problem: Score below 8.0

**Diagnosis:** Multiple issues  
**Solution:**
1. Check all 5 scoring criteria
2. Focus on lowest-scoring area
3. Add specificity first
4. Then fix flow
5. Re-score after fixes

---

## File Outputs

### Directory Structure

```
knowledge-base/persistent/humanizer/

humanized-content/
  2025-12/
    x-twitter/
      thread-2025-12-20-humanized.md
    linkedin/
      post-2025-12-20-humanized.md

authenticity-scores/
  2025-12-scores.csv

voice-library/
  signature-phrases.md
  successful-patterns.md
```

---

## Additional Resources

- **Agent Prompt:** `/agents/05-humanizer-agent/agent-prompt.md`
- **Configuration:** `/agents/05-humanizer-agent/config.json`
- **Frontend Interface:** `/frontend/agents/humanizer.html`

---

## Common Questions

**Q: How long does humanization take?**  
A: 5-10 minutes per piece for experienced users. Faster as you learn patterns.

**Q: What if I disagree with the agent's changes?**  
A: You have final approval. Adjust based on your judgment while maintaining authenticity standards.

**Q: Can I humanize in batches?**  
A: Yes! Process 5-10 pieces in a session. Patterns become faster to spot.

**Q: What if content is already pretty good?**  
A: Still check for AI patterns and add specificity. Small improvements compound.

**Q: How do I maintain consistency across humanized content?**  
A: Use the voice library to track successful patterns and signature phrases.

---

*For detailed pattern detection and humanization techniques, review the agent prompt.*

**Last Updated:** 2025-12-20  
**Version:** 1.0  
**Status:** ✅ Active
