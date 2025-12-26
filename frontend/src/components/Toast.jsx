import { useEffect } from "react";
import "../styles/Toast.css";

/**
 * Toast notification component.
 * @param {Object} props
 * @param {string} props.id - Unique toast ID
 * @param {string} props.message - Message to display
 * @param {'success' | 'error' | 'info' | 'warning'} props.type - Toast type
 * @param {function} props.onClose - Callback when toast is closed
 * @param {number} [props.duration=5000] - Auto-close duration in ms
 */
function Toast({ id, message, type = "info", onClose, duration = 5000 }) {
  useEffect(() => {
    if (duration > 0) {
      const timer = setTimeout(() => {
        onClose(id);
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [id, duration, onClose]);

  const getIcon = () => {
    switch (type) {
      case "success":
        return "✓";
      case "error":
        return "✕";
      case "warning":
        return "⚠";
      case "info":
      default:
        return "ℹ";
    }
  };

  return (
    <div className={`toast toast-${type}`} role="alert" aria-live="polite">
      <span className="toast-icon">{getIcon()}</span>
      <span className="toast-message">{message}</span>
      <button
        className="toast-close"
        onClick={() => onClose(id)}
        aria-label="Close notification"
      >
        ×
      </button>
    </div>
  );
}

/**
 * Toast container component to manage multiple toasts.
 * @param {Object} props
 * @param {Array} props.toasts - Array of toast objects
 * @param {function} props.removeToast - Function to remove a toast
 */
export function ToastContainer({ toasts, removeToast }) {
  return (
    <div className="toast-container" aria-label="Notifications">
      {toasts.map((toast) => (
        <Toast key={toast.id} {...toast} onClose={removeToast} />
      ))}
    </div>
  );
}

export default Toast;
