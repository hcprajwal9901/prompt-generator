import "../styles/ModernModalitySelector.css";

const modalities = [
  {
    id: "image",
    name: "Image",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <polyline points="21 15 16 10 5 21" />
      </svg>
    ),
    gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    description: "Generate prompts for AI image models",
    features: ["DALL-E 3", "Midjourney", "Stable Diffusion"],
  },
  {
    id: "video",
    name: "Video",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polygon points="23 7 16 12 23 17 23 7" />
        <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
      </svg>
    ),
    gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    description: "Generate prompts for AI video models",
    features: ["Runway", "Pika", "Sora"],
  },
  {
    id: "voice",
    name: "Voice",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
        <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
        <line x1="12" y1="19" x2="12" y2="23" />
        <line x1="8" y1="23" x2="16" y2="23" />
      </svg>
    ),
    gradient: "linear-gradient(135deg, #4ade80 0%, #22c55e 100%)",
    description: "Generate prompts for AI voice models",
    features: ["OpenAI Voice", "ElevenLabs"],
  },
];

/**
 * Modern Modality Selector with animated cards
 */
function ModernModalitySelector({ modality, onModalityChange }) {
  return (
    <div className="modality-selector">
      <div className="selector-header">
        <h2 className="selector-title">Choose Your Creative Medium</h2>
        <p className="selector-subtitle">
          Select a modality to start generating optimized AI prompts
        </p>
      </div>

      <div className="modality-cards">
        {modalities.map((mod, index) => (
          <button
            key={mod.id}
            className={`modality-card glass-card ${
              modality === mod.id ? "active" : ""
            }`}
            onClick={() => onModalityChange(mod.id)}
            style={{
              animationDelay: `${index * 0.1}s`,
            }}
            aria-pressed={modality === mod.id}
            aria-label={`Select ${mod.name} modality`}
          >
            {/* Gradient Background */}
            <div
              className="card-gradient"
              style={{ background: mod.gradient }}
            ></div>

            {/* Card Content */}
            <div className="card-content">
              <div className="card-icon">{mod.icon}</div>
              <h3 className="card-title">{mod.name}</h3>
              <p className="card-description">{mod.description}</p>

              {/* Features List */}
              <div className="card-features">
                {mod.features.map((feature) => (
                  <span key={feature} className="feature-tag">
                    {feature}
                  </span>
                ))}
              </div>
            </div>

            {/* Active Indicator */}
            {modality === mod.id && (
              <div className="active-indicator">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
            )}

            {/* Hover Glow */}
            <div className="card-glow" style={{ background: mod.gradient }}></div>
          </button>
        ))}
      </div>
    </div>
  );
}

export default ModernModalitySelector;
