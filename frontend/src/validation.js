/**
 * Validation utilities for prompt generation.
 * Imports validation rules from centralized config.
 */

import { REQUIRED_FIELDS } from "./config";

/**
 * Validate form data against modality and model requirements.
 * @param {Object} formData - The form data to validate
 * @param {string} modality - The selected modality (image/video/voice)
 * @param {string} model - The selected model
 * @returns {string[]} Array of error messages (empty if valid)
 */
export function validatePromptData(formData, modality, model) {
  const errors = [];

  const rules = REQUIRED_FIELDS[modality];
  if (!rules) {
    errors.push(`Invalid modality: ${modality}`);
    return errors;
  }

  // Validate common required fields
  rules.common.forEach((field) => {
    if (!formData[field] || formData[field].toString().trim() === "") {
      errors.push(`${formatFieldName(field)} is required`);
    }
  });

  // Validate model-specific required fields
  const modelRules = rules.models[model];
  if (modelRules) {
    modelRules.forEach((field) => {
      if (!formData[field] || formData[field].toString().trim() === "") {
        errors.push(`${formatFieldName(field)} is required for ${model}`);
      }
    });
  }

  // Type-specific validations
  if (modality === "video" && formData.duration_seconds) {
    const duration = parseInt(formData.duration_seconds, 10);
    if (isNaN(duration) || duration < 1 || duration > 60) {
      errors.push("Duration must be between 1 and 60 seconds");
    }
  }

  return errors;
}

/**
 * Format field name for display in error messages.
 * @param {string} fieldName - The field name to format
 * @returns {string} Formatted field name
 */
function formatFieldName(fieldName) {
  return fieldName
    .split("_")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

/**
 * Check if a specific field is required for the given modality and model.
 * @param {string} fieldName - The field name to check
 * @param {string} modality - The selected modality
 * @param {string} model - The selected model
 * @returns {boolean} True if field is required
 */
export function isFieldRequired(fieldName, modality, model) {
  const rules = REQUIRED_FIELDS[modality];
  if (!rules) return false;

  // Check common requirements
  if (rules.common.includes(fieldName)) return true;

  // Check model-specific requirements
  const modelRules = rules.models[model];
  if (modelRules && modelRules.includes(fieldName)) return true;

  return false;
}

// Re-export for backward compatibility
export { REQUIRED_FIELDS };
