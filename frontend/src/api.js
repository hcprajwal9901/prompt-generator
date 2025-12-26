/**
 * API client for the Prompt Generator backend.
 */

import { API_BASE_URL } from "./config";

/**
 * Custom error for API failures.
 */
export class APIError extends Error {
  constructor(message, status, details = null) {
    super(message);
    this.name = "APIError";
    this.status = status;
    this.details = details;
  }
}

/**
 * Make a request to the API.
 * @param {string} endpoint - API endpoint
 * @param {Object} options - Fetch options
 * @returns {Promise<any>} Response data
 * @throws {APIError} If request fails
 */
async function apiRequest(endpoint, options = {}) {
  const url = `${API_BASE_URL}${endpoint}`;

  try {
    const response = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
        ...options.headers,
      },
      ...options,
    });

    const data = await response.json();

    if (!response.ok) {
      throw new APIError(
        data.error || "Request failed",
        response.status,
        data
      );
    }

    return data;
  } catch (error) {
    if (error instanceof APIError) {
      throw error;
    }

    // Network or parsing error
    throw new APIError(
      error.message || "Network error",
      0,
      { originalError: error }
    );
  }
}

/**
 * Generate a prompt for the specified model.
 * @param {import('./types').PromptRequest} data - Request data
 * @returns {Promise<import('./types').PromptResponse>} Generated prompt
 */
export async function generatePrompt(data) {
  return apiRequest("/generate", {
    method: "POST",
    body: JSON.stringify(data),
  });
}

/**
 * Get available models grouped by modality.
 * @returns {Promise<{models: Object}>} Available models
 */
export async function getAvailableModels() {
  return apiRequest("/models", {
    method: "GET",
  });
}

/**
 * Check API health status.
 * @returns {Promise<{status: string, timestamp: string}>} Health status
 */
export async function healthCheck() {
  return apiRequest("/health", {
    method: "GET",
  });
}
