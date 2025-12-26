/**
 * Type definitions for the Prompt Generator application.
 * Using JSDoc for type safety without full TypeScript conversion.
 */

/**
 * @typedef {'image' | 'video' | 'voice'} Modality
 */

/**
 * @typedef {Object} Model
 * @property {string} value - Model identifier
 * @property {string} label - Display name
 * @property {string} description - Model description
 */

/**
 * @typedef {Object} FieldDefinition
 * @property {string} name - Field name
 * @property {string} label - Display label
 * @property {string} placeholder - Placeholder text
 * @property {boolean} [required] - Whether field is required
 * @property {'text' | 'textarea' | 'number' | 'select'} type - Input type
 * @property {number} [min] - Minimum value (for number inputs)
 * @property {number} [max] - Maximum value (for number inputs)
 * @property {string[]} [options] - Options (for select inputs)
 */

/**
 * @typedef {Object} Template
 * @property {string} name - Template name
 * @property {Object.<string, any>} values - Template field values
 */

/**
 * @typedef {Object} PromptRequest
 * @property {Modality} modality - The modality type
 * @property {string} model - The model identifier
 * @property {Object} payload - The prompt data
 */

/**
 * @typedef {Object} PromptResponse
 * @property {string} prompt - The generated prompt
 * @property {string} [model] - The model used
 * @property {Modality} [modality] - The modality used
 * @property {string} [error] - Error message if failed
 */

/**
 * @typedef {Object} PromptHistoryItem
 * @property {string} id - Unique identifier
 * @property {string} timestamp - ISO timestamp
 * @property {Modality} modality - The modality type
 * @property {string} model - The model identifier
 * @property {Object} inputs - Input values used
 * @property {string} prompt - Generated prompt
 * @property {boolean} favorite - Whether marked as favorite
 */

/**
 * @typedef {Object} ToastMessage
 * @property {string} id - Unique identifier
 * @property {'success' | 'error' | 'info' | 'warning'} type - Toast type
 * @property {string} message - Message to display
 * @property {number} [duration] - Display duration in ms
 */

export {};
