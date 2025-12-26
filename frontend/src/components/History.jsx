import { useState } from "react";
import "../styles/History.css";

/**
 * History component for viewing and managing prompt history.
 */
function History({
  history,
  onRemove,
  onToggleFavorite,
  onClear,
  onReuse,
  onClose,
}) {
  const [filterFavorites, setFilterFavorites] = useState(false);
  const [filterModality, setFilterModality] = useState("all");

  const filteredHistory = history.filter((item) => {
    if (filterFavorites && !item.favorite) return false;
    if (filterModality !== "all" && item.modality !== filterModality)
      return false;
    return true;
  });

  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diffMs = now - date;
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    if (diffMins < 1) return "Just now";
    if (diffMins < 60) return `${diffMins}m ago`;
    if (diffHours < 24) return `${diffHours}h ago`;
    if (diffDays < 7) return `${diffDays}d ago`;
    return date.toLocaleDateString();
  };

  return (
    <div className="history-modal-overlay" onClick={onClose}>
      <div
        className="history-modal"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-labelledby="history-title"
        aria-modal="true"
      >
        <div className="history-header">
          <h2 id="history-title">Prompt History</h2>
          <button
            onClick={onClose}
            className="history-close"
            aria-label="Close history"
          >
            ×
          </button>
        </div>

        <div className="history-filters">
          <button
            onClick={() => setFilterFavorites(!filterFavorites)}
            className={`filter-btn ${filterFavorites ? "active" : ""}`}
            aria-pressed={filterFavorites}
          >
            ⭐ Favorites Only
          </button>

          <select
            value={filterModality}
            onChange={(e) => setFilterModality(e.target.value)}
            className="filter-select"
            aria-label="Filter by modality"
          >
            <option value="all">All Modalities</option>
            <option value="image">Image</option>
            <option value="video">Video</option>
            <option value="voice">Voice</option>
          </select>

          {history.length > 0 && (
            <button
              onClick={onClear}
              className="clear-btn"
              aria-label="Clear all history"
            >
              Clear All
            </button>
          )}
        </div>

        <div className="history-list">
          {filteredHistory.length === 0 ? (
            <div className="history-empty">
              <p>No history yet</p>
              <p className="history-empty-subtitle">
                Generated prompts will appear here
              </p>
            </div>
          ) : (
            filteredHistory.map((item) => (
              <div key={item.id} className="history-item">
                <div className="history-item-header">
                  <div className="history-item-meta">
                    <span className="history-item-modality">
                      {item.modality}
                    </span>
                    <span className="history-item-model">{item.model}</span>
                    <span className="history-item-time">
                      {formatDate(item.timestamp)}
                    </span>
                  </div>
                  <div className="history-item-actions">
                    <button
                      onClick={() => onToggleFavorite(item.id)}
                      className={`history-action-btn ${
                        item.favorite ? "favorite-active" : ""
                      }`}
                      title={item.favorite ? "Remove from favorites" : "Add to favorites"}
                      aria-label={item.favorite ? "Remove from favorites" : "Add to favorites"}
                    >
                      ⭐
                    </button>
                    <button
                      onClick={() => onReuse(item)}
                      className="history-action-btn"
                      title="Reuse this prompt"
                      aria-label="Reuse this prompt"
                    >
                      ↻
                    </button>
                    <button
                      onClick={() => onRemove(item.id)}
                      className="history-action-btn history-action-delete"
                      title="Delete"
                      aria-label="Delete this item"
                    >
                      🗑
                    </button>
                  </div>
                </div>
                <div className="history-item-prompt">{item.prompt}</div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default History;
