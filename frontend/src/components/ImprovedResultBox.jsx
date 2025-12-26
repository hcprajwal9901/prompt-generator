import { useState } from "react";
import "../styles/ImprovedResultBox.css";

/**
 * Improved result display with copy, export, and history management.
 */
function ImprovedResultBox({
  result,
  modality,
  model,
  inputs,
  onCopySuccess,
  onAddToHistory,
}) {
  const [showActions, setShowActions] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(result);
      onCopySuccess("Copied to clipboard!");
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
    onCopySuccess("Exported as text file!");
  };

  const handleExportJSON = () => {
    const data = {
      modality,
      model,
      inputs,
      prompt: result,
      timestamp: new Date().toISOString(),
    };

    const blob = new Blob([JSON.stringify(data, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `prompt-${modality}-${Date.now()}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    onCopySuccess("Exported as JSON file!");
  };

  const handleSaveToHistory = () => {
    onAddToHistory({
      modality,
      model,
      inputs,
      prompt: result,
    });
    onCopySuccess("Saved to history!");
  };

  if (!result) {
    return null;
  }

  return (
    <div className="result-box card">
      <div className="result-header">
        <div className="result-header-left">
          <h3>Generated Prompt</h3>
          {model && (
            <span className="result-model-badge">
              {model}
            </span>
          )}
        </div>
        <div className="result-actions">
          <button
            onClick={handleCopy}
            className="action-btn action-btn-primary"
            title="Copy to clipboard"
            aria-label="Copy prompt to clipboard"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
            </svg>
            Copy
          </button>

          <div className="dropdown">
            <button
              onClick={() => setShowActions(!showActions)}
              className="action-btn action-btn-secondary"
              title="More actions"
              aria-label="Show more actions"
              aria-expanded={showActions}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="1" />
                <circle cx="12" cy="5" r="1" />
                <circle cx="12" cy="19" r="1" />
              </svg>
            </button>

            {showActions && (
              <div className="dropdown-menu" role="menu">
                <button
                  onClick={handleSaveToHistory}
                  className="dropdown-item"
                  role="menuitem"
                >
                  Save to History
                </button>
                <button
                  onClick={handleExportText}
                  className="dropdown-item"
                  role="menuitem"
                >
                  Export as TXT
                </button>
                <button
                  onClick={handleExportJSON}
                  className="dropdown-item"
                  role="menuitem"
                >
                  Export as JSON
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="result-content">
        <pre className="result-text">{result}</pre>
      </div>
    </div>
  );
}

export default ImprovedResultBox;
