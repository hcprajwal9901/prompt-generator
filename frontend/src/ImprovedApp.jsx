import { useState } from "react";
import ModalitySelector from "./components/ModalitySelector";
import ImprovedPromptForm from "./components/ImprovedPromptForm";
import ImprovedResultBox from "./components/ImprovedResultBox";
import History from "./components/History";
import { ToastContainer } from "./components/Toast";
import { useToast } from "./hooks/useToast";
import { usePromptHistory } from "./hooks/useLocalStorage";
import "./styles/ImprovedApp.css";

/**
 * Main application component with improved UX and features.
 */
function ImprovedApp() {
  const [modality, setModality] = useState("image");
  const [result, setResult] = useState("");
  const [currentModel, setCurrentModel] = useState("");
  const [currentInputs, setCurrentInputs] = useState({});
  const [showHistory, setShowHistory] = useState(false);

  const { toasts, removeToast, success, error } = useToast();
  const {
    history,
    addToHistory,
    removeFromHistory,
    toggleFavorite,
    clearHistory,
  } = usePromptHistory();

  const handleGenerateSuccess = (prompt, model, inputs) => {
    setResult(prompt);
    setCurrentModel(model);
    setCurrentInputs(inputs);
    success("Prompt generated successfully!");
  };

  const handleAddToHistory = (item) => {
    addToHistory(item);
  };

  const handleReuseFromHistory = (item) => {
    setModality(item.modality);
    setResult(item.prompt);
    setCurrentModel(item.model);
    setCurrentInputs(item.inputs);
    setShowHistory(false);
    success("Loaded from history!");
  };

  const handleClearHistory = () => {
    if (
      window.confirm(
        "Are you sure you want to clear all history? This cannot be undone."
      )
    ) {
      clearHistory();
      success("History cleared!");
    }
  };

  return (
    <div className="app-container">
      <ToastContainer toasts={toasts} removeToast={removeToast} />

      <header className="app-header">
        <div className="header-content">
          <h1 className="app-title">AI Prompt Generator</h1>
          <p className="app-subtitle">
            Generate optimized prompts for any AI model
          </p>
        </div>
        <button
          onClick={() => setShowHistory(true)}
          className="history-btn"
          aria-label="View history"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </svg>
          History
          {history.length > 0 && (
            <span className="history-badge">{history.length}</span>
          )}
        </button>
      </header>

      <main className="app-main">
        <ModalitySelector
          modality={modality}
          setModality={(newModality) => {
            setModality(newModality);
            setResult("");
          }}
          setResult={setResult}
        />

        <ImprovedPromptForm
          modality={modality}
          setResult={setResult}
          onSuccess={(msg) => success(msg)}
          onError={(msg) => error(msg)}
        />

        <ImprovedResultBox
          result={result}
          modality={modality}
          model={currentModel}
          inputs={currentInputs}
          onCopySuccess={(msg) => success(msg)}
          onAddToHistory={handleAddToHistory}
        />
      </main>

      {showHistory && (
        <History
          history={history}
          onRemove={removeFromHistory}
          onToggleFavorite={toggleFavorite}
          onClear={handleClearHistory}
          onReuse={handleReuseFromHistory}
          onClose={() => setShowHistory(false)}
        />
      )}

      <footer className="app-footer">
        <p>
          Built with ❤️ for prompt engineering •{" "}
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub
          </a>
        </p>
      </footer>
    </div>
  );
}

export default ImprovedApp;
