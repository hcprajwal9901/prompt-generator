import { useState, useEffect } from "react";
import { generatePrompt, APIError } from "../api";
import { validatePromptData, isFieldRequired } from "../validation";
import { MODELS, FIELD_DEFINITIONS, TEMPLATES } from "../config";
import "../styles/ImprovedForm.css";

/**
 * Improved prompt form with dynamic fields, templates, and better UX.
 */
function ImprovedPromptForm({ modality, setResult, onSuccess, onError }) {
  const [form, setForm] = useState({});
  const [model, setModel] = useState("");
  const [loading, setLoading] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState("");

  useEffect(() => {
    setForm({});
    setModel("");
    setSelectedTemplate("");
    setResult("");
  }, [modality, setResult]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleTemplateSelect = (e) => {
    const templateKey = e.target.value;
    setSelectedTemplate(templateKey);

    if (templateKey && TEMPLATES[modality][templateKey]) {
      const template = TEMPLATES[modality][templateKey];
      setForm(template.values);
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

    setLoading(true);

    try {
      const response = await generatePrompt({
        modality,
        model,
        payload: {
          ...form,
          modality,
          goal: form.goal || "user defined",
          subject: form.subject || "",
        },
      });

      setResult(response.prompt);
      onSuccess("Prompt generated successfully!");

      return response;
    } catch (err) {
      if (err instanceof APIError) {
        onError(err.message);
      } else {
        onError("Failed to generate prompt. Please try again.");
      }
      return null;
    } finally {
      setLoading(false);
    }
  };

  const renderField = (field) => {
    const isRequired = isFieldRequired(field.name, modality, model);
    const value = form[field.name] || "";

    const commonProps = {
      id: field.name,
      name: field.name,
      value,
      onChange: handleChange,
      placeholder: field.placeholder,
      required: isRequired,
      "aria-required": isRequired,
      "aria-label": field.label,
    };

    switch (field.type) {
      case "textarea":
        return (
          <textarea
            {...commonProps}
            rows={4}
            className="form-textarea"
          />
        );

      case "number":
        return (
          <input
            {...commonProps}
            type="number"
            min={field.min}
            max={field.max}
            className="form-input"
          />
        );

      case "select":
        return (
          <select {...commonProps} className="form-select">
            <option value="">Select {field.label}</option>
            {field.options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        );

      case "text":
      default:
        return (
          <input
            {...commonProps}
            type="text"
            className="form-input"
          />
        );
    }
  };

  const fields = FIELD_DEFINITIONS[modality] || [];
  const models = MODELS[modality] || [];
  const templates = TEMPLATES[modality] || {};

  return (
    <form className="improved-form card" onSubmit={handleSubmit}>
      <div className="form-header">
        <h3>{modality.toUpperCase()} PROMPT</h3>
      </div>

      {Object.keys(templates).length > 0 && (
        <div className="form-group">
          <label htmlFor="template-select" className="form-label">
            Quick Start Template
          </label>
          <select
            id="template-select"
            value={selectedTemplate}
            onChange={handleTemplateSelect}
            className="form-select"
            aria-label="Select a template"
          >
            <option value="">Start from scratch</option>
            {Object.entries(templates).map(([key, template]) => (
              <option key={key} value={key}>
                {template.name}
              </option>
            ))}
          </select>
        </div>
      )}

      {fields.map((field) => (
        <div key={field.name} className="form-group">
          <label htmlFor={field.name} className="form-label">
            {field.label}
            {isFieldRequired(field.name, modality, model) && (
              <span className="required-indicator" aria-label="required">
                {" "}
                *
              </span>
            )}
          </label>
          {renderField(field)}
        </div>
      ))}

      <div className="form-group">
        <label htmlFor="model-select" className="form-label">
          Model <span className="required-indicator">*</span>
        </label>
        <select
          id="model-select"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          className="form-select"
          required
          aria-label="Select AI model"
        >
          <option value="">Select model</option>
          {models.map((m) => (
            <option key={m.value} value={m.value}>
              {m.label} - {m.description}
            </option>
          ))}
        </select>
      </div>

      <button
        type="submit"
        className="form-submit"
        disabled={loading}
        aria-label={loading ? "Generating prompt" : "Generate prompt"}
      >
        {loading ? (
          <>
            <span className="spinner" aria-hidden="true"></span>
            Generating...
          </>
        ) : (
          "Generate Prompt"
        )}
      </button>
    </form>
  );
}

export default ImprovedPromptForm;
