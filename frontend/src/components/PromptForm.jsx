import { useState, useEffect } from "react";
import { generatePrompt } from "../api";
import { REQUIRED_FIELDS } from "../validation";

const MODELS = {
  image: ["dalle-3", "midjourney-v6", "sdxl"],
  video: ["runway-gen3", "pika", "sora"],
  voice: ["openai-voice", "elevenlabs"],
};

function PromptForm({ modality, setResult }) {
  const [form, setForm] = useState({});
  const [model, setModel] = useState("");
  const [loading, setLoading] = useState(false);

  // Reset form when modality changes
  useEffect(() => {
    setForm({});
    setModel("");
    setResult("");
  }, [modality, setResult]);

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  // ---------- VALIDATION LOGIC ----------
  function validate(formData, modality, model) {
    const errors = [];

    const rules = REQUIRED_FIELDS[modality];
    if (!rules) return errors;

    // Common required fields
    rules.common.forEach((field) => {
      if (!formData[field]) {
        errors.push(`${field} is required`);
      }
    });

    // Model-specific required fields
    const modelRules = rules.models[model];
    if (modelRules) {
      modelRules.forEach((field) => {
        if (!formData[field]) {
          errors.push(`${field} is required for ${model}`);
        }
      });
    }

    return errors;
  }
  // -------------------------------------

  async function handleSubmit() {
    if (!model) {
      alert("Please select a model");
      return;
    }

    const errors = validate(form, modality, model);
    if (errors.length > 0) {
      alert(errors.join("\n"));
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
          goal: "user defined",
          subject: form.subject || "",
        },
      });

      setResult(response.prompt || response.error);
    } catch (err) {
      setResult("Failed to generate prompt");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="card">
      <h3>{modality.toUpperCase()} PROMPT</h3>

      {/* COMMON FIELD */}
      <input
        name="subject"
        placeholder="Subject"
        value={form.subject || ""}
        onChange={handleChange}
      />

      {/* IMAGE FIELDS */}
      {modality === "image" && (
        <>
          <input
            name="style"
            placeholder="Style (e.g. cinematic, photorealistic)"
            value={form.style || ""}
            onChange={handleChange}
          />
          <input
            name="camera"
            placeholder="Camera (e.g. 50mm close-up)"
            value={form.camera || ""}
            onChange={handleChange}
          />
        </>
      )}

      {/* VIDEO FIELDS */}
      {modality === "video" && (
        <>
          <input
            name="scene"
            placeholder="Scene description"
            value={form.scene || ""}
            onChange={handleChange}
          />
          <input
            name="action"
            placeholder="Action happening"
            value={form.action || ""}
            onChange={handleChange}
          />
          <input
            name="duration_seconds"
            placeholder="Duration (seconds)"
            value={form.duration_seconds || ""}
            onChange={handleChange}
          />
          <input
            name="camera_motion"
            placeholder="Camera motion (optional)"
            value={form.camera_motion || ""}
            onChange={handleChange}
          />
        </>
      )}

      {/* VOICE FIELDS */}
      {modality === "voice" && (
        <>
          <input
            name="accent"
            placeholder="Accent"
            value={form.accent || ""}
            onChange={handleChange}
          />
          <input
            name="emotion"
            placeholder="Emotion"
            value={form.emotion || ""}
            onChange={handleChange}
          />
          <input
            name="pace"
            placeholder="Pace (slow / medium / fast)"
            value={form.pace || ""}
            onChange={handleChange}
          />
        </>
      )}

      {/* MODEL SELECTOR */}
      <select value={model} onChange={(e) => setModel(e.target.value)}>
        <option value="">Select model</option>
        {MODELS[modality].map((m) => (
          <option key={m} value={m}>
            {m}
          </option>
        ))}
      </select>

      {/* SUBMIT */}
      <button onClick={handleSubmit} disabled={loading}>
        {loading ? "Generating..." : "Generate Prompt"}
      </button>
    </div>
  );
}

export default PromptForm;
