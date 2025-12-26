import { useState } from "react";
import "../styles/ModernHistory.css";

function ModernHistory({ history, onRemove, onToggleFavorite, onClear, onReuse, onClose }) {
  const [filterFavorites, setFilterFavorites] = useState(false);
  const [filterModality, setFilterModality] = useState("all");

  const filteredHistory = history.filter((item) => {
    if (filterFavorites && !item.favorite) return false;
    if (filterModality !== "all" && item.modality !== filterModality) return false;
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
    <div className="history-overlay" onClick={onClose}>
      <div className="history-panel glass-card" onClick={(e) => e.stopPropagation()}>
        <div className="history-header">
          <h2>Prompt History</h2>
          <button onClick={onClose} className="close-btn">×</button>
        </div>

        <div className="history-filters">
          <button onClick={() => setFilterFavorites(!filterFavorites)} className={`filter-chip ${filterFavorites ? "active" : ""}`}>
            ⭐ Favorites
          </button>
          <select value={filterModality} onChange={(e) => setFilterModality(e.target.value)} className="filter-select">
            <option value="all">All Types</option>
            <option value="image">Image</option>
            <option value="video">Video</option>
            <option value="voice">Voice</option>
          </select>
          {history.length > 0 && (
            <button onClick={onClear} className="clear-btn">Clear All</button>
          )}
        </div>

        <div className="history-list">
          {filteredHistory.length === 0 ? (
            <div className="history-empty">
              <div className="empty-icon">📚</div>
              <p>No history yet</p>
            </div>
          ) : (
            filteredHistory.map((item) => (
              <div key={item.id} className="history-item glass-card">
                <div className="item-header">
                  <div className="item-meta">
                    <span className={`modality-tag ${item.modality}`}>{item.modality}</span>
                    <span className="model-tag">{item.model}</span>
                    <span className="time-tag">{formatDate(item.timestamp)}</span>
                  </div>
                  <div className="item-actions">
                    <button onClick={() => onToggleFavorite(item.id)} className={`icon-btn ${item.favorite ? "active" : ""}`}>⭐</button>
                    <button onClick={() => onReuse(item)} className="icon-btn">↻</button>
                    <button onClick={() => onRemove(item.id)} className="icon-btn delete">🗑</button>
                  </div>
                </div>
                <div className="item-prompt">{item.prompt}</div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default ModernHistory;
