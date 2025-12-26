/**
 * Central configuration for the Prompt Generator application.
 * Single source of truth for models, validation rules, and API settings.
 */

// API Configuration
export const API_BASE_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";

// Available models by modality
export const MODELS = {
  image: [
    { value: "dalle-3", label: "DALL-E 3", description: "OpenAI's latest image generator" },
    { value: "midjourney-v6", label: "Midjourney v6", description: "High-quality artistic images" },
    { value: "sdxl", label: "Stable Diffusion XL", description: "Open-source, customizable" },
    { value: "imagen", label: "Google Imagen", description: "Photorealistic generations" },
    { value: "firefly", label: "Adobe Firefly", description: "Commercial-safe content" },
  ],
  video: [
    { value: "runway-gen3", label: "Runway Gen-3", description: "Cinematic video generation" },
    { value: "pika", label: "Pika", description: "Easy-to-use video creator" },
    { value: "sora", label: "OpenAI Sora", description: "Advanced coherent videos" },
  ],
  voice: [
    { value: "openai-voice", label: "OpenAI Voice", description: "Natural text-to-speech" },
    { value: "elevenlabs", label: "ElevenLabs", description: "Ultra-realistic voices" },
  ],
};

// Validation rules for required fields
export const REQUIRED_FIELDS = {
  image: {
    common: ["subject", "style"],
    models: {
      "dalle-3": [],
      "midjourney-v6": [],
      "sdxl": [],
      "imagen": [],
      "firefly": [],
    },
  },
  video: {
    common: ["scene", "action", "duration_seconds"],
    models: {
      "runway-gen3": ["camera_motion"],
      "pika": [],
      "sora": [],
    },
  },
  voice: {
    common: ["accent", "emotion", "pace"],
    models: {
      "openai-voice": [],
      "elevenlabs": [],
    },
  },
};

// Field definitions for dynamic form generation
export const FIELD_DEFINITIONS = {
  image: [
    { name: "subject", label: "Subject", placeholder: "e.g., a cat sitting on a windowsill", required: true, type: "text" },
    { name: "style", label: "Style", placeholder: "e.g., photorealistic, oil painting, anime", required: true, type: "text" },
    { name: "environment", label: "Environment", placeholder: "e.g., modern apartment, forest clearing", type: "text" },
    { name: "lighting", label: "Lighting", placeholder: "e.g., golden hour, dramatic shadows", type: "text" },
    { name: "camera", label: "Camera", placeholder: "e.g., 50mm close-up, wide angle", type: "text" },
    { name: "mood", label: "Mood", placeholder: "e.g., peaceful, energetic, mysterious", type: "text" },
    { name: "aspect_ratio", label: "Aspect Ratio", placeholder: "e.g., 16:9, 1:1, 9:16", type: "text" },
  ],
  video: [
    { name: "scene", label: "Scene", placeholder: "Describe the scene", required: true, type: "text" },
    { name: "action", label: "Action", placeholder: "What's happening?", required: true, type: "text" },
    { name: "duration_seconds", label: "Duration (seconds)", placeholder: "5", required: true, type: "number", min: 1, max: 60 },
    { name: "camera_motion", label: "Camera Motion", placeholder: "e.g., slow pan, tracking shot", type: "text" },
    { name: "lighting", label: "Lighting", placeholder: "e.g., natural daylight, neon", type: "text" },
    { name: "style", label: "Style", placeholder: "e.g., cinematic, documentary", type: "text" },
  ],
  voice: [
    { name: "subject", label: "Text/Script", placeholder: "What should be spoken?", required: true, type: "textarea" },
    { name: "accent", label: "Accent", placeholder: "e.g., American, British, Australian", required: true, type: "text" },
    { name: "emotion", label: "Emotion", placeholder: "e.g., calm, excited, serious", required: true, type: "text" },
    { name: "pace", label: "Pace", placeholder: "slow, medium, fast", required: true, type: "select", options: ["slow", "medium", "fast"] },
    { name: "voice_gender", label: "Voice Gender", placeholder: "male, female, neutral", type: "select", options: ["male", "female", "neutral"] },
    { name: "age_range", label: "Age Range", placeholder: "e.g., young adult, middle-aged, elderly", type: "text" },
    { name: "use_case", label: "Use Case", placeholder: "e.g., podcast, audiobook, announcement", type: "text" },
  ],
};

// Prompt templates
export const TEMPLATES = {
  image: {
    portrait: {
      name: "Portrait Photography",
      values: {
        subject: "a person",
        style: "professional portrait photography",
        lighting: "soft natural light",
        camera: "85mm f/1.8",
        mood: "confident and approachable",
      },
    },
    landscape: {
      name: "Landscape",
      values: {
        subject: "a mountain landscape",
        style: "landscape photography",
        environment: "alpine setting at sunrise",
        lighting: "golden hour",
        camera: "wide angle 24mm",
      },
    },
    fantasy: {
      name: "Fantasy Art",
      values: {
        subject: "a magical creature",
        style: "fantasy digital art",
        environment: "enchanted forest",
        lighting: "mystical glowing lights",
        mood: "ethereal and mysterious",
      },
    },
  },
  video: {
    cinematic: {
      name: "Cinematic Scene",
      values: {
        scene: "a dramatic urban environment",
        action: "person walking in slow motion",
        duration_seconds: 10,
        camera_motion: "slow dolly forward",
        lighting: "moody with strong shadows",
        style: "cinematic film look",
      },
    },
    nature: {
      name: "Nature Documentary",
      values: {
        scene: "wildlife in natural habitat",
        action: "animal interacting with environment",
        duration_seconds: 15,
        camera_motion: "smooth tracking shot",
        lighting: "natural daylight",
        style: "documentary realism",
      },
    },
  },
  voice: {
    podcast: {
      name: "Podcast Host",
      values: {
        subject: "Welcome to today's episode",
        accent: "American",
        emotion: "friendly and conversational",
        pace: "medium",
        voice_gender: "neutral",
        use_case: "podcast",
      },
    },
    audiobook: {
      name: "Audiobook Narrator",
      values: {
        subject: "Chapter one begins",
        accent: "British",
        emotion: "calm and engaging",
        pace: "slow",
        voice_gender: "male",
        use_case: "audiobook",
      },
    },
  },
};
