import { useState, useEffect } from "react";
import { generatePrompt, APIError } from "../api";
import { validatePromptData } from "../validation";
import { MODELS, FIELD_DEFINITIONS, TEMPLATES } from "../config";
import "../styles/ModernPromptForm.css";

function ModernPromptForm({
  modality,
  setResult,
  onGenerateStart,
  onSuccess,
  onError,
  isGenerating,
}) {
  const [form, setForm] = useState({});
  const [model, setModel] = useState("");
  const [selectedTemplate, setSelectedTemplate] = useState("");

  useEffect(() => {
    setForm({});
    setModel("");
    setSelectedTemplate("");
  }, [modality]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleTemplateSelect = (e) => {
    const templateKey = e.target.value;
    setSelectedTemplate(templateKey);
    if (templateKey && TEMPLATES[modality][templateKey]) {
      setForm(TEMPLATES[modality][templateKey].values);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!model) {
      onError("Please select a model");
      return;
    }

    const errors = validatePromptData(form, modality, model);
    if (errors.length > 0) {
      onError(errors.join("\n"));
      return;
    }

    onGenerateStart();

    try {
      const response = await generatePrompt({
        modality,
        model,
        payload: { ...form, modality, goal: form.goal || "user defined", subject: form.subject || "" },
      });

      onSuccess(response.prompt, model, form);
    } catch (err) {
      onError(err instanceof APIError ? err.message : "Failed to generate prompt");
    }
  };

  const fields = FIELD_DEFINITIONS[modality] || [];
  const models = MODELS[modality] || [];
  const templates = TEMPLATES[modality] || {};

  return (
    <form className="modern-form glass-card" onSubmit={handleSubmit}>
      <div className="form-header">
        <div className="form-icon-wrapper">
          <div className="form-icon">✨</div>
        </div>
        <div>
          <h3 className="form-title">{modality.toUpperCase()} Prompt Builder</h3>
          <p className="form-subtitle">Craft the perfect prompt for your AI model</p>
        </div>
      </div>

      {Object.keys(templates).length > 0 && (
        <div className="form-group">
          <label className="form-label">
            <span className="label-icon">🎨</span>
            Quick Start Template
          </label>
          <select
            value={selectedTemplate}
            onChange={handleTemplateSelect}
            className="form-select"
          >
            <option value="">Start from scratch</option>
            {Object.entries(templates).map(([key, template]) => (
              <option key={key} value={key}>{template.name}</option>
            ))}
          </select>
        </div>
      )}

      <div className="form-fields">
        {fields.map((field) => (
          <div key={field.name} className="form-group">
            <label htmlFor={field.name} className="form-label">
              {field.label}
              {field.required && <span className="required">*</span>}
            </label>
            {field.type === "textarea" ? (
              <textarea
                id={field.name}
                name={field.name}
                value={form[field.name] || ""}
                onChange={handleChange}
                placeholder={field.placeholder}
                className="form-textarea"
                rows={4}
              />
            ) : field.type === "select" ? (
              <select
                id={field.name}
                name={field.name}
                value={form[field.name] || ""}
                onChange={handleChange}
                className="form-select"
              >
                <option value="">Select {field.label}</option>
                {field.options.map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            ) : (
              <input
                id={field.name}
                name={field.name}
                type={field.type || "text"}
                value={form[field.name] || ""}
                onChange={handleChange}
                placeholder={field.placeholder}
                className="form-input"
                min={field.min}
                max={field.max}
              />
            )}
          </div>
        ))}

        <div className="form-group">
          <label htmlFor="model-select" className="form-label">
            <span className="label-icon">🤖</span>
            AI Model <span className="required">*</span>
          </label>
          <select
            id="model-select"
            value={model}
            onChange={(e) => setModel(e.target.value)}
            className="form-select"
            required
          >
            <option value="">Select AI model</option>
            {models.map((m) => (
              <option key={m.value} value={m.value}>
                {m.label} - {m.description}
              </option>
            ))}
          </select>
        </div>
      </div>

      <button
        type="submit"
        className="form-submit gradient-button"
        disabled={isGenerating}
      >
        {isGenerating ? (
          <>
            <div className="spinner"></div>
            Generating...
          </>
        ) : (
          <>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
            </svg>
            Generate Prompt
          </>
        )}
      </button>
    </form>
  );
}

export default ModernPromptForm;
