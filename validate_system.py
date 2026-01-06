import os
import sys

def check_path(path, is_dir=True):
    if os.path.exists(path):
        if is_dir and os.path.isdir(path):
            return True, f"[OK] Directory exists: {path}"
        elif not is_dir and os.path.isfile(path):
            return True, f"[OK] File exists: {path}"
        else:
            return False, f"[FAIL] Path exists but is not a {'directory' if is_dir else 'file'}: {path}"
    else:
        return False, f"[FAIL] Path missing: {path}"

def validate_agents(base_dir):
    agents = [
        "00-daily-business-copilot",
        "01-credibility-agent",
        "02-voice-codex-agent",
        "03-narrative-strategist-agent",
        "04-content-engine-agent",
        "05-humanizer-agent",
        "06-speaking-coach-agent"
    ]
    required_files = ["agent-prompt.md", "config.json", "README.md"]
    results = []
    all_ok = True
    
    print("\n--- Validating Agents ---")
    for agent in agents:
        agent_dir = os.path.join(base_dir, "agents", agent)
        ok, msg = check_path(agent_dir)
        results.append(msg)
        if not ok:
            all_ok = False
            continue
        
        for req_file in required_files:
            file_path = os.path.join(agent_dir, req_file)
            ok, msg = check_path(file_path, is_dir=False)
            results.append(msg)
            if not ok:
                all_ok = False
                
    return all_ok, results

def validate_frontend(base_dir):
    required_files = [
        "frontend/index.html",
        "frontend/agents/credibility.html",
        "frontend/agents/voice-codex.html",
        "frontend/agents/narrative-strategist.html",
        "frontend/agents/content-engine.html",
        "frontend/agents/humanizer.html",
        "frontend/agents/speaking-coach.html"
    ]
    results = []
    all_ok = True
    
    print("\n--- Validating Frontend ---")
    for req_file in required_files:
        file_path = os.path.join(base_dir, req_file)
        ok, msg = check_path(file_path, is_dir=False)
        results.append(msg)
        if not ok:
            all_ok = False
            
    return all_ok, results

def validate_kb(base_dir):
    required_dirs = [
        "knowledge-base/persistent/credibility/proof-assets",
        "knowledge-base/persistent/voice-codex/bricks",
        "knowledge-base/persistent/narrative-strategist/positioning",
        "knowledge-base/persistent/content-engine/published",
        "knowledge-base/persistent/humanizer/scores",
        "knowledge-base/persistent/speaking-coach/events",
        "knowledge-base/sessions",
        ".tmp"
    ]
    results = []
    all_ok = True
    
    print("\n--- Validating Knowledge Base & Temp ---")
    for req_dir in required_dirs:
        dir_path = os.path.join(base_dir, req_dir)
        ok, msg = check_path(dir_path)
        results.append(msg)
        if not ok:
            all_ok = False
            
    return all_ok, results

def main():
    base_dir = os.path.dirname(os.path.abspath(__file__))
    
    agents_ok, agents_results = validate_agents(base_dir)
    frontend_ok, frontend_results = validate_frontend(base_dir)
    kb_ok, kb_results = validate_kb(base_dir)
    
    for res in agents_results + frontend_results + kb_results:
        print(res)
        
    if agents_ok and frontend_ok and kb_ok:
        print("\n[SUCCESS] Full System Validation Passed!")
        sys.exit(0)
    else:
        print("\n[FAILURE] System Validation Failed!")
        sys.exit(1)

if __name__ == "__main__":
    main()
