# CREDIBILITY AGENT - PROCESSING LOGIC

## Overview

This document defines the decision-making logic, algorithms, and processing workflows for the Credibility Agent.

---

## Core Processing Pipeline

```
INPUT → VALIDATION → EXTRACTION → CLASSIFICATION → SCORING → STORAGE → OUTPUT
```

---

## 1. INPUT VALIDATION

### Email Input Validation

```python
def validate_email_input(email_data):
    """
    Validates email input before processing
    
    Returns: (is_valid, error_message)
    """
    
    # Check required fields
    if not email_data.get('body'):
        return (False, "Email body is empty")
    
    if not email_data.get('from'):
        return (False, "Sender information missing")
    
    if not email_data.get('date'):
        return (False, "Email date missing")
    
    # Check minimum content length
    if len(email_data['body']) < 50:
        return (False, "Email too short to contain meaningful proof")
    
    # Check for spam indicators
    spam_keywords = ['click here', 'buy now', 'limited offer', 'act fast']
    if any(keyword in email_data['body'].lower() for keyword in spam_keywords):
        return (False, "Email appears to be promotional spam")
    
    return (True, None)
```

### Manual Entry Validation

```python
def validate_manual_entry(entry_data):
    """
    Validates manual proof entry
    
    Returns: (is_valid, missing_fields, warnings)
    """
    
    missing = []
    warnings = []
    
    # Required fields
    if not entry_data.get('client'):
        missing.append('client')
    
    if not entry_data.get('result'):
        missing.append('result')
    
    if not entry_data.get('quote'):
        missing.append('quote')
    
    if missing:
        return (False, missing, warnings)
    
    # Optional but recommended
    if not entry_data.get('context'):
        warnings.append('Context missing - proof will be less usable')
    
    if not entry_data.get('tags'):
        warnings.append('No tags selected - will auto-classify')
    
    # Quality checks
    if len(entry_data['quote']) < 20:
        warnings.append('Quote is very short - consider adding more detail')
    
    if not any(char.isdigit() for char in entry_data['result']):
        warnings.append('No metrics in result - consider adding numbers')
    
    return (True, [], warnings)
```

---

## 2. PROOF EXTRACTION

### Text Analysis for Proof Signals

```python
import re
from typing import List, Dict

def extract_proof_signals(text: str) -> Dict:
    """
    Analyzes text to identify proof signals and components
    
    Returns: {
        'has_proof': bool,
        'confidence': float (0-1),
        'signals': List[str],
        'metrics': List[Dict],
        'emotions': List[str],
        'quotes': List[str]
    }
    """
    
    signals = []
    metrics = []
    emotions = []
    quotes = []
    
    # Metric patterns
    metric_patterns = [
        r'(\d+)%',  # Percentages
        r'\$(\d+[,\d]*)',  # Dollar amounts
        r'(\d+[,\d]*)\s*(hours?|days?|weeks?|months?)',  # Time
        r'from\s+(\$?\d+[,\d]*)\s+to\s+(\$?\d+[,\d]*)',  # Before/after
        r'increased?\s+by\s+(\d+)%?',  # Increase
        r'grew\s+(\$?\d+[,\d]*)',  # Growth
        r'saved?\s+(\d+)',  # Savings
    ]
    
    for pattern in metric_patterns:
        matches = re.findall(pattern, text, re.IGNORECASE)
        if matches:
            metrics.extend(matches)
            signals.append('quantified_result')
    
    # Timeline patterns
    timeline_patterns = [
        r'in\s+(\d+)\s+(days?|weeks?|months?|years?)',
        r'within\s+(\d+)\s+(days?|weeks?|months?)',
        r'after\s+(\d+)\s+(days?|weeks?|months?)',
    ]
    
    for pattern in timeline_patterns:
        if re.search(pattern, text, re.IGNORECASE):
            signals.append('specific_timeline')
    
    # Emotional keywords
    emotion_keywords = {
        'confidence': ['confident', 'finally', 'no longer afraid', 'feel equipped', 'empowered'],
        'relief': ['weight off', 'easier', 'breathe', 'stress-free', 'peace of mind'],
        'excitement': ['excited', 'thrilled', 'amazing', 'incredible', 'can\'t believe'],
        'gratitude': ['thank you', 'grateful', 'appreciate', 'changed everything', 'life-changing'],
        'transformation': ['transformed', 'complete turnaround', 'night and day', 'totally different']
    }
    
    for emotion_type, keywords in emotion_keywords.items():
        for keyword in keywords:
            if keyword.lower() in text.lower():
                emotions.append(emotion_type)
                signals.append('emotional_resonance')
                break
    
    # Quote extraction (text in quotes)
    quote_pattern = r'["""](.*?)["""]'
    quotes = re.findall(quote_pattern, text)
    if quotes:
        signals.append('direct_quote')
    
    # Before/After patterns
    if re.search(r'before|used to|was\s+\w+\s+but now', text, re.IGNORECASE):
        signals.append('transformation_language')
    
    # Result indicators
    result_keywords = ['result', 'outcome', 'achieved', 'accomplished', 'success', 'win']
    if any(keyword in text.lower() for keyword in result_keywords):
        signals.append('result_indicator')
    
    # Calculate confidence
    confidence = calculate_confidence(signals, metrics, emotions, quotes)
    
    return {
        'has_proof': confidence > 0.3,
        'confidence': confidence,
        'signals': list(set(signals)),
        'metrics': metrics,
        'emotions': list(set(emotions)),
        'quotes': quotes
    }

def calculate_confidence(signals, metrics, emotions, quotes):
    """
    Calculate confidence that text contains usable proof
    
    Score factors:
    - Quantified metrics: +0.3
    - Timeline mentioned: +0.2
    - Emotional resonance: +0.2
    - Direct quote: +0.1
    - Result indicator: +0.1
    - Transformation language: +0.1
    """
    
    score = 0.0
    
    if 'quantified_result' in signals:
        score += 0.3
    
    if 'specific_timeline' in signals:
        score += 0.2
    
    if 'emotional_resonance' in signals:
        score += 0.2
    
    if 'direct_quote' in signals:
        score += 0.1
    
    if 'result_indicator' in signals:
        score += 0.1
    
    if 'transformation_language' in signals:
        score += 0.1
    
    return min(score, 1.0)
```

### Component Extraction

```python
def extract_components(text: str, proof_signals: Dict) -> Dict:
    """
    Extract structured components from text
    
    Returns: {
        'client': str,
        'result': str,
        'quote': str,
        'context': str,
        'metrics': List[Dict]
    }
    """
    
    components = {
        'client': extract_client(text),
        'result': extract_result(text, proof_signals),
        'quote': extract_best_quote(text, proof_signals),
        'context': extract_context(text),
        'metrics': extract_structured_metrics(text, proof_signals)
    }
    
    return components

def extract_result(text: str, signals: Dict) -> str:
    """
    Extract the main result/outcome statement
    """
    
    # Look for sentences with result indicators and metrics
    sentences = text.split('.')
    
    scored_sentences = []
    for sentence in sentences:
        score = 0
        
        # Contains metric
        if any(str(m) in sentence for m in signals.get('metrics', [])):
            score += 3
        
        # Contains result keyword
        result_keywords = ['result', 'outcome', 'achieved', 'grew', 'increased', 'saved']
        if any(keyword in sentence.lower() for keyword in result_keywords):
            score += 2
        
        # Contains timeline
        if 'specific_timeline' in signals.get('signals', []):
            if re.search(r'in\s+\d+|within\s+\d+|after\s+\d+', sentence, re.IGNORECASE):
                score += 2
        
        if score > 0:
            scored_sentences.append((sentence.strip(), score))
    
    if scored_sentences:
        # Return highest scoring sentence
        scored_sentences.sort(key=lambda x: x[1], reverse=True)
        return scored_sentences[0][0]
    
    # Fallback: return first sentence with a number
    for sentence in sentences:
        if any(char.isdigit() for char in sentence):
            return sentence.strip()
    
    return ""

def extract_best_quote(text: str, signals: Dict) -> str:
    """
    Extract the most impactful quote
    """
    
    # Prefer text in actual quotes
    if signals.get('quotes'):
        # Score each quote
        scored = []
        for quote in signals['quotes']:
            score = 0
            
            # Length (prefer substantial quotes)
            if 20 < len(quote) < 200:
                score += 2
            
            # Contains emotion
            if any(emotion in quote.lower() for emotion in ['thank', 'amazing', 'transformed', 'finally']):
                score += 3
            
            # Contains metric
            if any(char.isdigit() for char in quote):
                score += 1
            
            scored.append((quote, score))
        
        if scored:
            scored.sort(key=lambda x: x[1], reverse=True)
            return scored[0][0]
    
    # Fallback: extract emotional sentence
    sentences = text.split('.')
    for sentence in sentences:
        if any(emotion in signals.get('emotions', []) for emotion in sentence.lower().split()):
            return sentence.strip()
    
    return ""
```

---

## 3. CLASSIFICATION

### Type Classification

```python
def classify_proof_type(text: str, components: Dict) -> List[str]:
    """
    Classify proof into one or more types
    
    Returns: List of type tags
    """
    
    types = []
    text_lower = text.lower()
    
    # Revenue Win
    revenue_keywords = ['revenue', 'mrr', 'arr', 'sales', 'income', 'profit', 'pricing', '$']
    if any(keyword in text_lower for keyword in revenue_keywords):
        types.append('revenue-win')
    
    # Time Saved
    time_keywords = ['hours', 'time', 'faster', 'efficiency', 'automated', 'streamlined']
    if any(keyword in text_lower for keyword in time_keywords):
        if 'saved' in text_lower or 'faster' in text_lower or 'automated' in text_lower:
            types.append('time-saved')
    
    # Confidence Gain
    confidence_keywords = ['confident', 'finally', 'no longer afraid', 'empowered', 'feel equipped']
    if any(keyword in text_lower for keyword in confidence_keywords):
        types.append('confidence-gain')
    
    # Transformation
    transform_keywords = ['transformed', 'life-changing', 'complete turnaround', 'night and day']
    if any(keyword in text_lower for keyword in transform_keywords):
        types.append('transformation')
    
    # Launch Success
    launch_keywords = ['launched', 'shipped', 'published', 'first', 'debut']
    if any(keyword in text_lower for keyword in launch_keywords):
        types.append('launch')
    
    # Default to general if nothing matched
    if not types:
        types.append('general')
    
    return types

def classify_industry(text: str) -> str:
    """
    Identify industry/niche from context
    """
    
    industry_keywords = {
        'saas': ['saas', 'software', 'app', 'platform', 'dashboard'],
        'coaching': ['coaching', 'coach', 'client sessions', 'accountability'],
        'consulting': ['consulting', 'consultant', 'advisory', 'implementation'],
        'course-creation': ['course', 'students', 'curriculum', 'lesson', 'enrollment'],
        'content-creation': ['content', 'creator', 'audience', 'subscribers', 'followers'],
        'agency': ['agency', 'clients', 'campaigns', 'deliverables'],
        'freelance': ['freelance', 'projects', 'gigs', 'clients'],
        'ecommerce': ['ecommerce', 'store', 'products', 'orders', 'shopify']
    }
    
    text_lower = text.lower()
    
    for industry, keywords in industry_keywords.items():
        if any(keyword in text_lower for keyword in keywords):
            return industry
    
    return 'general'
```

### Sentiment Analysis

```python
def analyze_sentiment(text: str) -> str:
    """
    Determine sentiment: positive, neutral, exceptional
    """
    
    positive_indicators = [
        'thank', 'grateful', 'amazing', 'incredible', 'fantastic',
        'love', 'best', 'perfect', 'exceeded', 'brilliant'
    ]
    
    exceptional_indicators = [
        'life-changing', 'transformed', 'game-changer', 'revolutionary',
        'can\'t believe', 'beyond expectations', 'never seen anything'
    ]
    
    text_lower = text.lower()
    
    # Check for exceptional
    if any(indicator in text_lower for indicator in exceptional_indicators):
        return 'exceptional'
    
    # Check for strong positive
    positive_count = sum(1 for indicator in positive_indicators if indicator in text_lower)
    if positive_count >= 2:
        return 'positive'
    
    # Check for any positive
    if positive_count >= 1:
        return 'positive'
    
    return 'neutral'
```

---

## 4. QUALITY SCORING

```python
def score_proof_quality(proof_data: Dict) -> Dict[str, float]:
    """
    Score proof on multiple dimensions
    
    Returns: {
        'specificity': float (0-10),
        'emotional_resonance': float (0-10),
        'usability': float (0-10),
        'overall': float (0-10)
    }
    """
    
    # Specificity Score
    specificity = score_specificity(proof_data)
    
    # Emotional Resonance Score
    emotional = score_emotional_resonance(proof_data)
    
    # Usability Score
    usability = score_usability(proof_data)
    
    # Overall (weighted average)
    overall = (specificity * 0.4) + (emotional * 0.3) + (usability * 0.3)
    
    return {
        'specificity': round(specificity, 1),
        'emotional_resonance': round(emotional, 1),
        'usability': round(usability, 1),
        'overall': round(overall, 1)
    }

def score_specificity(data: Dict) -> float:
    """
    How specific and measurable is the proof?
    
    Factors:
    - Has quantified metrics: +4
    - Has timeline: +2
    - Has before/after: +2
    - Has specific outcome: +2
    """
    
    score = 0
    
    # Check for metrics
    if data.get('metrics') and len(data['metrics']) > 0:
        score += 4
    
    # Check for timeline
    if 'timeline' in str(data.get('result', '')).lower():
        score += 2
    
    # Check for before/after
    result_text = data.get('result', '').lower()
    if 'from' in result_text and 'to' in result_text:
        score += 2
    
    # Check for specific outcome statement
    if len(data.get('result', '')) > 20:
        score += 2
    
    return min(score, 10)

def score_emotional_resonance(data: Dict) -> float:
    """
    How emotionally impactful is the proof?
    
    Factors:
    - Transformation language: +3
    - Gratitude/excitement: +3
    - Personal story: +2
    - Vulnerability/struggle mentioned: +2
    """
    
    score = 0
    text = (data.get('quote', '') + ' ' + data.get('context', '')).lower()
    
    # Transformation
    if any(word in text for word in ['transformed', 'changed everything', 'life-changing']):
        score += 3
    
    # Gratitude/Excitement
    if any(word in text for word in ['thank', 'grateful', 'excited', 'thrilled', 'amazing']):
        score += 3
    
    # Personal story
    if 'I was' in data.get('quote', '') or 'I used to' in data.get('quote', ''):
        score += 2
    
    # Vulnerability
    if any(word in text for word in ['struggle', 'afraid', 'scared', 'overwhelmed', 'stuck']):
        score += 2
    
    return min(score, 10)

def score_usability(data: Dict) -> float:
    """
    How usable is this proof standalone?
    
    Factors:
    - Has all required fields: +3
    - Quote is substantial (50+ chars): +2
    - Context provided: +2
    - Verified/verifiable: +2
    - Clear client identifier: +1
    """
    
    score = 0
    
    # Required fields
    if all(data.get(field) for field in ['client', 'result', 'quote']):
        score += 3
    
    # Substantial quote
    if len(data.get('quote', '')) >= 50:
        score += 2
    
    # Context
    if data.get('context'):
        score += 2
    
    # Verified
    if data.get('verified'):
        score += 2
    
    # Clear client
    if data.get('client') and len(data.get('client', '')) > 3:
        score += 1
    
    return min(score, 10)
```

---

## 5. PATTERN DETECTION

```python
def detect_patterns(proof_library: List[Dict]) -> List[Dict]:
    """
    Analyze proof library to detect patterns
    
    Returns: List of pattern objects
    """
    
    patterns = []
    
    # Group by type
    by_type = {}
    for proof in proof_library:
        proof_type = proof.get('type', 'general')
        if proof_type not in by_type:
            by_type[proof_type] = []
        by_type[proof_type].append(proof)
    
    # Detect pattern if 5+ similar proofs exist
    for proof_type, proofs in by_type.items():
        if len(proofs) >= 5:
            pattern = analyze_type_pattern(proof_type, proofs)
            if pattern:
                patterns.append(pattern)
    
    # Industry patterns
    by_industry = {}
    for proof in proof_library:
        industry = proof.get('industry', 'general')
        if industry not in by_industry:
            by_industry[industry] = []
        by_industry[industry].append(proof)
    
    for industry, proofs in by_industry.items():
        if len(proofs) >= 5:
            pattern = analyze_industry_pattern(industry, proofs)
            if pattern:
                patterns.append(pattern)
    
    return patterns

def analyze_type_pattern(proof_type: str, proofs: List[Dict]) -> Dict:
    """
    Analyze patterns within a proof type
    """
    
    # Extract metrics if available
    metrics = []
    timelines = []
    
    for proof in proofs:
        if proof.get('metrics'):
            metrics.extend(proof['metrics'])
        
        # Extract timeline from result
        timeline_match = re.search(r'(\d+)\s+(days?|weeks?|months?)', 
                                  proof.get('result', ''), re.IGNORECASE)
        if timeline_match:
            timelines.append(timeline_match.group())
    
    return {
        'type': proof_type,
        'count': len(proofs),
        'common_metrics': metrics[:5] if metrics else [],
        'common_timelines': list(set(timelines))[:3],
        'recommendation': f'Create case study for {proof_type}',
        'confidence': 'high' if len(proofs) >= 10 else 'medium'
    }
```

---

## 6. DECISION TREES

### Should This Be Extracted?

```
START
├─ Contains result/outcome? 
│  ├─ NO → Skip
│  └─ YES → Continue
│     ├─ Has metrics OR timeline?
│     │  ├─ NO → Check emotional content
│     │  │  ├─ Strong emotion? → Extract (medium confidence)
│     │  │  └─ Weak/none → Skip
│     │  └─ YES → Extract (high confidence)
│           ├─ Has both metrics AND timeline?
│           │  ├─ YES → PRIORITY (very high confidence)
│           │  └─ NO → Extract (high confidence)
```

### What Type Is This?

```
START: Analyze text content
├─ Contains "$", "revenue", "MRR"? → revenue-win
├─ Contains "time", "hours", "faster"? → time-saved
├─ Contains "confident", "finally", "empowered"? → confidence-gain
├─ Contains "launched", "shipped", "published"? → launch
├─ Contains "transformed", "life-changing"? → transformation
└─ None of above → general
```

### Should This Generate a Case Study?

```
START
├─ 5+ similar proof assets?
│  ├─ NO → Not yet
│  └─ YES → Continue
│     ├─ Same type AND same industry?
│     │  ├─ YES → Generate case study
│     │  └─ NO → Check other groupings
│           ├─ Same metrics pattern?
│           │  ├─ YES → Generate case study
│           │  └─ NO → Wait for more data
```

---

## 7. ERROR HANDLING

```python
class ProofProcessingError(Exception):
    """Base exception for proof processing"""
    pass

class ValidationError(ProofProcessingError):
    """Invalid input data"""
    pass

class ExtractionError(ProofProcessingError):
    """Could not extract proof from text"""
    pass

class ClassificationError(ProofProcessingError):
    """Could not classify proof"""
    pass

def safe_process_proof(input_data, input_type):
    """
    Safely process proof with comprehensive error handling
    """
    
    try:
        # Validate
        if input_type == 'email':
            is_valid, error = validate_email_input(input_data)
        elif input_type == 'manual':
            is_valid, missing, warnings = validate_manual_entry(input_data)
        else:
            raise ValidationError(f"Unknown input type: {input_type}")
        
        if not is_valid:
            raise ValidationError(error if input_type == 'email' else f"Missing: {missing}")
        
        # Extract
        proof_signals = extract_proof_signals(input_data.get('text', ''))
        if not proof_signals['has_proof']:
            raise ExtractionError(f"No proof detected (confidence: {proof_signals['confidence']})")
        
        # Create proof asset
        proof_asset = create_proof_asset(input_data, proof_signals)
        
        # Classify
        proof_asset['type'] = classify_proof_type(input_data['text'], proof_asset)
        proof_asset['industry'] = classify_industry(input_data['text'])
        proof_asset['sentiment'] = analyze_sentiment(input_data['text'])
        
        # Score
        scores = score_proof_quality(proof_asset)
        proof_asset.update(scores)
        
        return {
            'success': True,
            'proof_asset': proof_asset,
            'warnings': []
        }
    
    except ValidationError as e:
        return {
            'success': False,
            'error': 'validation',
            'message': str(e)
        }
    
    except ExtractionError as e:
        return {
            'success': False,
            'error': 'extraction',
            'message': str(e)
        }
    
    except Exception as e:
        return {
            'success': False,
            'error': 'unknown',
            'message': f"Unexpected error: {str(e)}"
        }
```

---

## Summary

This logic specification defines:

✅ Input validation rules
✅ Extraction algorithms for proof signals
✅ Classification decision trees
✅ Quality scoring formulas
✅ Pattern detection methods
✅ Error handling strategies

All logic is deterministic and testable, ensuring consistent proof processing across all input sources.
