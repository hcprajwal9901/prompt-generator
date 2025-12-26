import { useState, useCallback } from "react";

let toastId = 0;

/**
 * Custom hook for managing toast notifications.
 * @returns {Object} Toast management functions and state
 */
export function useToast() {
  const [toasts, setToasts] = useState([]);

  const addToast = useCallback((message, type = "info", duration = 5000) => {
    const id = `toast-${++toastId}`;
    const toast = { id, message, type, duration };

    setToasts((prev) => [...prev, toast]);

    return id;
  }, []);

  const removeToast = useCallback((id) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  }, []);

  const success = useCallback(
    (message, duration) => addToast(message, "success", duration),
    [addToast]
  );

  const error = useCallback(
    (message, duration) => addToast(message, "error", duration),
    [addToast]
  );

  const warning = useCallback(
    (message, duration) => addToast(message, "warning", duration),
    [addToast]
  );

  const info = useCallback(
    (message, duration) => addToast(message, "info", duration),
    [addToast]
  );

  return {
    toasts,
    addToast,
    removeToast,
    success,
    error,
    warning,
    info,
  };
}
