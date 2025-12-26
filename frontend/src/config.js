/**
 * Central configuration for the Prompt Generator application.
 * Single source of truth for models, validation rules, and API settings.
 */

// API Configuration
export const API_BASE_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";

// Available models by modality
export const MODELS = {
  text: [
    { value: "gpt-4", label: "GPT-4 / GPT-4.1 / GPT-4o", description: "OpenAI's most capable model" },
    { value: "llama-3", label: "Meta LLaMA 3", description: "Open-source powerhouse" },
    { value: "mistral", label: "Mistral / Mixtral", description: "Efficient European AI" },
    { value: "gemini", label: "Google Gemini", description: "Multimodal intelligence" },
    { value: "claude", label: "Anthropic Claude", description: "Advanced reasoning and analysis" },
  ],
  image: [
    { value: "dalle", label: "DALL·E", description: "OpenAI's image generator" },
    { value: "stable-diffusion", label: "Stable Diffusion", description: "Open-source, customizable" },
    { value: "midjourney", label: "Midjourney", description: "High-quality artistic images" },
    { value: "imagen", label: "Google Imagen", description: "Photorealistic generations" },
    { value: "firefly", label: "Adobe Firefly", description: "Commercial-safe content" },
  ],
  video: [
    { value: "sora", label: "OpenAI Sora", description: "Advanced coherent videos" },
    { value: "runway", label: "Runway Gen-2 / Gen-3", description: "Cinematic video generation" },
    { value: "pika", label: "Pika Labs Pika", description: "Easy-to-use video creator" },
    { value: "veo", label: "Google Veo", description: "High-quality video generation" },
    { value: "stable-video-diffusion", label: "Stable Video Diffusion", description: "Open-source video AI" },
  ],
  audio: [
    { value: "openai-audio", label: "OpenAI Whisper + TTS", description: "Speech recognition & synthesis" },
    { value: "elevenlabs", label: "ElevenLabs", description: "Ultra-realistic voices" },
    { value: "seamless-m4t", label: "Meta SeamlessM4T", description: "Multilingual translation & speech" },
    { value: "indic-tts", label: "AI4Bharat Indic TTS/STT", description: "Indian language support" },
    { value: "coqui-tts", label: "Coqui TTS", description: "Open-source TTS" },
  ],
};

// Validation rules for required fields
export const REQUIRED_FIELDS = {
  text: {
    common: ["goal", "subject"],
    models: {
      "gpt-4": [],
      "llama-3": [],
      "mistral": [],
      "gemini": [],
      "claude": [],
    },
  },
  image: {
    common: ["subject", "style"],
    models: {
      "dalle": [],
      "stable-diffusion": [],
      "midjourney": [],
      "imagen": [],
      "firefly": [],
    },
  },
  video: {
    common: ["scene", "action", "duration_seconds"],
    models: {
      "sora": [],
      "runway": ["camera_motion"],
      "pika": [],
      "veo": [],
      "stable-video-diffusion": [],
    },
  },
  audio: {
    common: ["subject", "accent", "emotion", "pace"],
    models: {
      "openai-audio": [],
      "elevenlabs": [],
      "seamless-m4t": [],
      "indic-tts": [],
      "coqui-tts": [],
    },
  },
};

// Field definitions for dynamic form generation
export const FIELD_DEFINITIONS = {
  text: [
    { name: "goal", label: "Goal", placeholder: "e.g., Write a blog post, Generate code, Analyze data", required: true, type: "text" },
    { name: "subject", label: "Subject", placeholder: "e.g., AI in healthcare, Python web scraper", required: true, type: "textarea" },
    { name: "task_type", label: "Task Type", placeholder: "e.g., creative writing, code generation, analysis", type: "text" },
    { name: "tone", label: "Tone", placeholder: "e.g., formal, casual, technical, friendly", type: "text" },
    { name: "format", label: "Output Format", placeholder: "e.g., markdown, json, plain text, code", type: "text" },
    { name: "length", label: "Length", placeholder: "short, medium, long", type: "select", options: ["short", "medium", "long"] },
    { name: "context", label: "Additional Context", placeholder: "Any background information or constraints", type: "textarea" },
    { name: "style", label: "Writing Style", placeholder: "e.g., concise, detailed, conversational", type: "text" },
  ],
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
  audio: [
    { name: "subject", label: "Text/Script", placeholder: "What should be spoken?", required: true, type: "textarea" },
    { name: "accent", label: "Accent/Language", placeholder: "e.g., American, British, Hindi, Tamil", required: true, type: "text" },
    { name: "emotion", label: "Emotion", placeholder: "e.g., calm, excited, serious", required: true, type: "text" },
    { name: "pace", label: "Pace", placeholder: "slow, medium, fast", required: true, type: "select", options: ["slow", "medium", "fast"] },
    { name: "voice_gender", label: "Voice Gender", placeholder: "male, female, neutral", type: "select", options: ["male", "female", "neutral"] },
    { name: "age_range", label: "Age Range", placeholder: "e.g., young adult, middle-aged, elderly", type: "text" },
    { name: "use_case", label: "Use Case", placeholder: "e.g., podcast, audiobook, announcement", type: "text" },
  ],
};

// Prompt templates
export const TEMPLATES = {
  text: {
    blog: {
      name: "Blog Post",
      values: {
        goal: "Write a blog post",
        subject: "The impact of AI on modern healthcare",
        task_type: "creative writing",
        tone: "professional",
        format: "markdown",
        length: "medium",
      },
    },
    code: {
      name: "Code Generation",
      values: {
        goal: "Generate a function",
        subject: "Sort an array of objects by date in Python",
        task_type: "code generation",
        tone: "technical",
        format: "python",
        length: "short",
      },
    },
    analysis: {
      name: "Data Analysis",
      values: {
        goal: "Analyze and summarize",
        subject: "Market trends in renewable energy sector",
        task_type: "analysis",
        tone: "formal",
        format: "markdown",
        length: "long",
      },
    },
    email: {
      name: "Professional Email",
      values: {
        goal: "Write a professional email",
        subject: "Request for project timeline extension",
        task_type: "business writing",
        tone: "formal",
        format: "plain text",
        length: "short",
      },
    },
    socialMedia: {
      name: "Social Media Post",
      values: {
        goal: "Create a social media post",
        subject: "Launch of our new eco-friendly product line",
        task_type: "marketing",
        tone: "casual",
        format: "plain text",
        length: "short",
      },
    },
    story: {
      name: "Creative Story",
      values: {
        goal: "Write a short story",
        subject: "A time traveler discovers an ancient civilization",
        task_type: "creative writing",
        tone: "engaging",
        format: "markdown",
        length: "long",
      },
    },
    tutorial: {
      name: "Tutorial/Guide",
      values: {
        goal: "Create a tutorial",
        subject: "How to build a REST API with Node.js",
        task_type: "technical writing",
        tone: "friendly",
        format: "markdown",
        length: "medium",
      },
    },
    summary: {
      name: "Text Summary",
      values: {
        goal: "Summarize the following",
        subject: "Key points from a 50-page research paper on climate change",
        task_type: "summarization",
        tone: "neutral",
        format: "bullet points",
        length: "short",
      },
    },
    translation: {
      name: "Translation Task",
      values: {
        goal: "Translate text",
        subject: "Business proposal from English to Spanish",
        task_type: "translation",
        tone: "formal",
        format: "plain text",
        length: "medium",
      },
    },
    poem: {
      name: "Poetry",
      values: {
        goal: "Write a poem",
        subject: "The beauty of autumn leaves falling",
        task_type: "creative writing",
        tone: "emotional",
        format: "verse",
        length: "short",
      },
    },
  },
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
    product: {
      name: "Product Photography",
      values: {
        subject: "a luxury watch on marble surface",
        style: "commercial product photography",
        lighting: "studio lighting with soft shadows",
        camera: "macro 100mm",
        mood: "elegant and premium",
        environment: "minimalist white background",
      },
    },
    cyberpunk: {
      name: "Cyberpunk Scene",
      values: {
        subject: "futuristic cityscape at night",
        style: "cyberpunk digital art",
        lighting: "neon lights and holographic displays",
        environment: "dense urban dystopian city",
        mood: "dark and atmospheric",
      },
    },
    anime: {
      name: "Anime Character",
      values: {
        subject: "anime girl with flowing hair",
        style: "anime illustration",
        lighting: "dramatic backlight",
        environment: "cherry blossom garden",
        mood: "peaceful and serene",
      },
    },
    architecture: {
      name: "Architecture",
      values: {
        subject: "modern glass skyscraper",
        style: "architectural photography",
        lighting: "blue hour twilight",
        camera: "tilt-shift lens",
        environment: "urban downtown area",
        mood: "impressive and grand",
      },
    },
    food: {
      name: "Food Photography",
      values: {
        subject: "gourmet pasta dish",
        style: "food photography",
        lighting: "natural window light",
        camera: "50mm f/1.4",
        environment: "rustic wooden table",
        mood: "appetizing and fresh",
      },
    },
    scifi: {
      name: "Sci-Fi Concept",
      values: {
        subject: "advanced spacecraft in orbit",
        style: "science fiction concept art",
        lighting: "dramatic star lighting",
        environment: "deep space with nebula",
        mood: "awe-inspiring and futuristic",
      },
    },
    abstract: {
      name: "Abstract Art",
      values: {
        subject: "flowing colorful shapes",
        style: "abstract digital art",
        lighting: "gradient color transitions",
        mood: "dynamic and energetic",
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
    product: {
      name: "Product Demo",
      values: {
        scene: "modern minimalist studio",
        action: "product rotating with feature highlights",
        duration_seconds: 8,
        camera_motion: "360 degree rotation",
        lighting: "clean studio lighting",
        style: "commercial product video",
      },
    },
    action: {
      name: "Action Sequence",
      values: {
        scene: "intense chase through city streets",
        action: "fast-paced pursuit with dynamic movements",
        duration_seconds: 12,
        camera_motion: "handheld tracking with quick cuts",
        lighting: "high contrast dramatic lighting",
        style: "action movie aesthetic",
      },
    },
    timelapse: {
      name: "Time-lapse",
      values: {
        scene: "city skyline transitioning from day to night",
        action: "clouds moving, lights turning on",
        duration_seconds: 20,
        camera_motion: "locked off static shot",
        lighting: "changing from daylight to twilight",
        style: "time-lapse photography",
      },
    },
    drone: {
      name: "Drone Footage",
      values: {
        scene: "coastal landscape with ocean waves",
        action: "waves crashing on rocky shore",
        duration_seconds: 15,
        camera_motion: "smooth aerial flyover",
        lighting: "golden hour sunset",
        style: "aerial cinematography",
      },
    },
    tutorial: {
      name: "Tutorial/How-to",
      values: {
        scene: "well-lit workspace with tools",
        action: "hands demonstrating step-by-step process",
        duration_seconds: 10,
        camera_motion: "overhead static shot",
        lighting: "bright even lighting",
        style: "educational tutorial",
      },
    },
    vlog: {
      name: "Vlog Style",
      values: {
        scene: "outdoor location or home setting",
        action: "person talking to camera",
        duration_seconds: 8,
        camera_motion: "handheld casual movement",
        lighting: "natural available light",
        style: "casual vlog aesthetic",
      },
    },
    animation: {
      name: "Animation",
      values: {
        scene: "colorful abstract environment",
        action: "animated shapes and transitions",
        duration_seconds: 10,
        camera_motion: "smooth programmed movements",
        lighting: "vibrant stylized lighting",
        style: "motion graphics animation",
      },
    },
  },
  audio: {
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
    multilingual: {
      name: "Multilingual Speech",
      values: {
        subject: "नमस्ते, आज हम बात करेंगे",
        accent: "Hindi",
        emotion: "friendly",
        pace: "medium",
        voice_gender: "female",
        use_case: "announcement",
      },
    },
    commercial: {
      name: "Commercial/Ad",
      values: {
        subject: "Introducing the revolutionary new product",
        accent: "American",
        emotion: "energetic and persuasive",
        pace: "medium",
        voice_gender: "male",
        use_case: "advertisement",
      },
    },
    meditation: {
      name: "Meditation Guide",
      values: {
        subject: "Take a deep breath and relax your shoulders",
        accent: "American",
        emotion: "calm and soothing",
        pace: "slow",
        voice_gender: "female",
        use_case: "meditation",
      },
    },
    gaming: {
      name: "Gaming Character",
      values: {
        subject: "The battle begins now, warrior!",
        accent: "British",
        emotion: "intense and dramatic",
        pace: "fast",
        voice_gender: "male",
        use_case: "gaming",
      },
    },
    news: {
      name: "News Anchor",
      values: {
        subject: "Breaking news from around the world",
        accent: "American",
        emotion: "professional and authoritative",
        pace: "medium",
        voice_gender: "neutral",
        use_case: "news broadcast",
      },
    },
    tutorial: {
      name: "Tutorial Instructor",
      values: {
        subject: "In this tutorial, we'll learn step by step",
        accent: "American",
        emotion: "helpful and clear",
        pace: "slow",
        voice_gender: "female",
        use_case: "tutorial",
      },
    },
    documentary: {
      name: "Documentary Narrator",
      values: {
        subject: "Deep in the Amazon rainforest, life thrives",
        accent: "British",
        emotion: "informative and captivating",
        pace: "medium",
        voice_gender: "male",
        use_case: "documentary",
      },
    },
    children: {
      name: "Children's Story",
      values: {
        subject: "Once upon a time in a magical land",
        accent: "American",
        emotion: "cheerful and playful",
        pace: "medium",
        voice_gender: "female",
        use_case: "children's content",
      },
    },
    assistant: {
      name: "AI Assistant",
      values: {
        subject: "How can I help you today?",
        accent: "American",
        emotion: "friendly and helpful",
        pace: "medium",
        voice_gender: "neutral",
        use_case: "virtual assistant",
      },
    },
  },
};
