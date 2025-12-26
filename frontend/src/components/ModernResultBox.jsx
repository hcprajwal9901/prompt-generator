import "../styles/ModernResultBox.css";

function ModernResultBox({ result, modality, model, inputs, isGenerating, onCopySuccess, onAddToHistory }) {
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(result);
      onCopySuccess("📋 Copied to clipboard!");
    } catch (err) {
      onCopySuccess("Failed to copy");
    }
  };

  const handleExportText = () => {
    const blob = new Blob([result], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `prompt-${modality}-${Date.now()}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    onCopySuccess("💾 Exported as TXT!");
  };

  const handleExportJSON = () => {
    const data = { modality, model, inputs, prompt: result, timestamp: new Date().toISOString() };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `prompt-${modality}-${Date.now()}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    onCopySuccess("💾 Exported as JSON!");
  };

  if (isGenerating) {
    return (
      <div className="modern-result glass-card generating">
        <div className="result-loading">
          <div className="loading-spinner"></div>
          <h3>Generating your prompt...</h3>
          <p>Optimizing for {model}</p>
        </div>
      </div>
    );
  }

  if (!result) {
    return (
      <div className="modern-result glass-card empty">
        <div className="result-empty">
          <div className="empty-icon">✨</div>
          <h3>Your prompt will appear here</h3>
          <p>Fill out the form and click "Generate Prompt" to get started</p>
        </div>
      </div>
    );
  }

  return (
    <div className="modern-result glass-card">
      <div className="result-header">
        <div className="result-header-left">
          <h3>Generated Prompt</h3>
          {model && <span className="model-badge">{model}</span>}
        </div>
        <div className="result-actions">
          <button onClick={handleCopy} className="action-btn primary" title="Copy">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="9" y="9" width="13" height="13" rx="2" />
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
            </svg>
          </button>
          <button onClick={() => onAddToHistory({ modality, model, inputs, prompt: result })} className="action-btn" title="Save">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" />
              <polyline points="17 21 17 13 7 13 7 21" />
              <polyline points="7 3 7 8 15 8" />
            </svg>
          </button>
          <button onClick={handleExportText} className="action-btn" title="Export TXT">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
          </button>
          <button onClick={handleExportJSON} className="action-btn" title="Export JSON">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="16" y1="13" x2="8" y2="13" />
              <line x1="16" y1="17" x2="8" y2="17" />
              <polyline points="10 9 9 9 8 9" />
            </svg>
          </button>
        </div>
      </div>
      <div className="result-content">
        <pre className="result-text">{result}</pre>
      </div>
    </div>
  );
}

export default ModernResultBox;
