# System Validation Directive

## Goal
Ensure the **BusinessBuildAgenticSystem** is fully operational and consistent across all 7 agents and the frontend.

## 3-Layer Context
- **Layer 1 (Directive)**: This document.
- **Layer 2 (Orchestration)**: The agent running this validation and interpreting results.
- **Layer 3 (Execution)**: `validate_system.py`

## Validation Procedure

### 1. Automated Validation
Run the system validation script to check file integrity and directory structure.
```bash
python validate_system.py
```

### 2. Success Criteria
- [ ] All 7 agents have required files (`agent-prompt.md`, `config.json`, `README.md`).
- [ ] Dashboard `index.html` and 6 agent HTML files are present in `frontend/`.
- [ ] `knowledge-base` structure exists and matches `CONTEXT.md` schema.
- [ ] `.tmp` directory exists.

### 3. Self-Annealing Loop (Repair)
If validation fails:
1. **Identify**: Check the `[FAIL]` messages in the script output.
2. **Fix**: Create missing files or directories using `BUILD-GUIDE.md` as reference.
3. **Verify**: Re-run `python validate_system.py`.
4. **Update**: If a new failure mode is discovered (e.g., a missing asset dependency), update this directive or the relevant agent's README.
