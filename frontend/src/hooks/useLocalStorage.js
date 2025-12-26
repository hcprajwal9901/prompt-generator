import { useState } from "react";

/**
 * Custom hook for syncing state with localStorage.
 * @param {string} key - localStorage key
 * @param {any} initialValue - Initial value if no stored value exists
 * @returns {[any, function]} Current value and setter function
 */
export function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(`Error loading ${key} from localStorage:`, error);
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;

      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(`Error saving ${key} to localStorage:`, error);
    }
  };

  return [storedValue, setValue];
}

/**
 * Hook for managing prompt history in localStorage.
 * @param {number} maxItems - Maximum number of history items to keep
 * @returns {Object} History management functions
 */
export function usePromptHistory(maxItems = 50) {
  const [history, setHistory] = useLocalStorage("prompt-history", []);

  const addToHistory = (item) => {
    const newItem = {
      ...item,
      id: `history-${Date.now()}`,
      timestamp: new Date().toISOString(),
      favorite: false,
    };

    setHistory((prev) => {
      const updated = [newItem, ...prev].slice(0, maxItems);
      return updated;
    });

    return newItem.id;
  };

  const removeFromHistory = (id) => {
    setHistory((prev) => prev.filter((item) => item.id !== id));
  };

  const toggleFavorite = (id) => {
    setHistory((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, favorite: !item.favorite } : item
      )
    );
  };

  const clearHistory = () => {
    setHistory([]);
  };

  const getFavorites = () => {
    return history.filter((item) => item.favorite);
  };

  return {
    history,
    addToHistory,
    removeFromHistory,
    toggleFavorite,
    clearHistory,
    getFavorites,
  };
}
