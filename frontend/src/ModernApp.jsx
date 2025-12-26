import { useState, useEffect } from "react";
import ModernModalitySelector from "./components/ModernModalitySelector";
import ModernPromptForm from "./components/ModernPromptForm";
import ModernResultBox from "./components/ModernResultBox";
import ModernHistory from "./components/ModernHistory";
import { ToastContainer } from "./components/Toast";
import ThemeToggle from "./components/ThemeToggle";
import { useToast } from "./hooks/useToast";
import { usePromptHistory } from "./hooks/useLocalStorage";
import "./styles/DesignSystem.css";
import "./styles/ModernApp.css";

/**
 * Ultra-Modern AI Prompt Generator
 * Features: Glassmorphism, animations, particles, advanced UX
 */
function ModernApp() {
  const [modality, setModality] = useState("image");
  const [result, setResult] = useState("");
  const [currentModel, setCurrentModel] = useState("");
  const [currentInputs, setCurrentInputs] = useState({});
  const [showHistory, setShowHistory] = useState(false);
  const [theme, setTheme] = useState("dark");
  const [isGenerating, setIsGenerating] = useState(false);

  const { toasts, removeToast, success, error } = useToast();
  const {
    history,
    addToHistory,
    removeFromHistory,
    toggleFavorite,
    clearHistory,
  } = usePromptHistory();

  // Apply theme to document
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const handleGenerateSuccess = (prompt, model, inputs) => {
    setResult(prompt);
    setCurrentModel(model);
    setCurrentInputs(inputs);
    setIsGenerating(false);
    success("✨ Prompt generated successfully!");
  };

  const handleGenerateStart = () => {
    setIsGenerating(true);
  };

  const handleGenerateError = (message) => {
    setIsGenerating(false);
    error(message);
  };

  const handleAddToHistory = (item) => {
    addToHistory(item);
    success("💾 Saved to history!");
  };

  const handleReuseFromHistory = (item) => {
    setModality(item.modality);
    setResult(item.prompt);
    setCurrentModel(item.model);
    setCurrentInputs(item.inputs);
    setShowHistory(false);
    success("♻️ Loaded from history!");
  };

  const handleClearHistory = () => {
    if (
      window.confirm(
        "Are you sure you want to clear all history? This cannot be undone."
      )
    ) {
      clearHistory();
      success("🗑️ History cleared!");
    }
  };

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <div className="modern-app">
      {/* Animated Background */}
      <div className="background-gradient"></div>
      <div className="background-pattern"></div>

      {/* Toast Notifications */}
      <ToastContainer toasts={toasts} removeToast={removeToast} />

      {/* Header */}
      <header className="modern-header">
        <div className="header-content">
          <div className="logo-section">
            <div className="logo-icon">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient
                    id="logoGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#667eea" />
                    <stop offset="100%" stopColor="#764ba2" />
                  </linearGradient>
                </defs>
                <path
                  d="M20 5L35 12.5V27.5L20 35L5 27.5V12.5L20 5Z"
                  fill="url(#logoGradient)"
                />
                <circle cx="20" cy="20" r="6" fill="white" opacity="0.9" />
              </svg>
            </div>
            <div className="logo-text">
              <h1 className="app-title gradient-text">Prompt Forge</h1>
              <p className="app-subtitle">AI-Powered Prompt Engineering</p>
            </div>
          </div>

          <div className="header-actions">
            <button
              onClick={() => setShowHistory(true)}
              className="header-btn glass-card"
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
              <span>History</span>
              {history.length > 0 && (
                <span className="badge">{history.length}</span>
              )}
            </button>

            <ThemeToggle theme={theme} onToggle={toggleTheme} />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="modern-main">
        <div className="content-wrapper">
          {/* Modality Selector */}
          <ModernModalitySelector
            modality={modality}
            onModalityChange={(newModality) => {
              setModality(newModality);
              setResult("");
            }}
          />

          {/* Form and Result Side by Side */}
          <div className="workspace-grid">
            {/* Left: Form */}
            <div className="workspace-left">
              <ModernPromptForm
                modality={modality}
                setResult={setResult}
                onGenerateStart={handleGenerateStart}
                onSuccess={handleGenerateSuccess}
                onError={handleGenerateError}
                isGenerating={isGenerating}
              />
            </div>

            {/* Right: Result */}
            <div className="workspace-right">
              <ModernResultBox
                result={result}
                modality={modality}
                model={currentModel}
                inputs={currentInputs}
                isGenerating={isGenerating}
                onCopySuccess={(msg) => success(msg)}
                onAddToHistory={handleAddToHistory}
              />
            </div>
          </div>

          {/* Stats Bar */}
          <div className="stats-bar glass-card">
            <div className="stat-item">
              <div className="stat-icon">⚡</div>
              <div className="stat-content">
                <div className="stat-value">10</div>
                <div className="stat-label">AI Models</div>
              </div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <div className="stat-icon">🎨</div>
              <div className="stat-content">
                <div className="stat-value">{history.length}</div>
                <div className="stat-label">Generated</div>
              </div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <div className="stat-icon">⭐</div>
              <div className="stat-content">
                <div className="stat-value">
                  {history.filter((h) => h.favorite).length}
                </div>
                <div className="stat-label">Favorites</div>
              </div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <div className="stat-icon">🔥</div>
              <div className="stat-content">
                <div className="stat-value">∞</div>
                <div className="stat-label">Possibilities</div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* History Modal */}
      {showHistory && (
        <ModernHistory
          history={history}
          onRemove={removeFromHistory}
          onToggleFavorite={toggleFavorite}
          onClear={handleClearHistory}
          onReuse={handleReuseFromHistory}
          onClose={() => setShowHistory(false)}
        />
      )}

      {/* Floating Action Button */}
      <button
        className="fab glass-card"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Scroll to top"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M18 15l-6-6-6 6" />
        </svg>
      </button>
    </div>
  );
}

export default ModernApp;
