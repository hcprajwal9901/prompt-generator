# 7-Day Image Prompting Training Plan

## Overview

This is a structured **Week 2 curriculum for learning image prompting**.  
Each day builds on previous concepts with practical, hands-on prompt specification exercises.

The goal is to train interns to:

- Describe visual intent clearly in plain English
- Think in terms of **visual parameters**
- Produce prompts that scale to **production and dataset creation**

---

## Day 1: Visual Language Fundamentals

### Learning Objectives

- Understand how image generation models interpret text
- Learn the anatomy of a good image prompt
- Distinguish between vague descriptions and production-ready visual specifications

### Key Topics

1. How image models interpret text descriptions
2. Core components of image prompts:
   - Subject
   - Attributes
   - Environment
   - Style
   - Composition
3. Literal vs abstract language
4. Good vs bad visual descriptions
5. Real-world examples (people, objects, scenes)

### Prompts You'll Generate

- **Vague-to-Precise Conversion**: Rewrite abstract descriptions into literal ones
- **Single Subject Prompt**: Describe one person or object clearly
- **Scene Description**: Subject + environment
- **Attribute Control**: Same subject, different attributes

### Practice Exercise

Take 3 vague image ideas and rewrite them using clear nouns, attributes, and locations.

---

## Day 2: Style and Aesthetic Control

### Learning Objectives

- Control how images look without changing what they contain
- Understand visual styles and domains
- Avoid style mixing and ambiguity

### Key Topics

1. What “style” means in image generation
2. Common visual domains:
   - Photorealistic
   - Illustration
   - Anime
   - 3D render
   - Sketch
3. Separating content from appearance
4. When style matters and when it does not
5. Style consistency in production systems

### Prompts You'll Generate

- **Same Subject, Different Styles**
- **Style-Locked Prompt**: One subject, one fixed style
- **Style Error Example**: Identify mixed-style failures
- **Style Refactoring**: Clean up noisy style descriptions

### Practice Exercise

Generate the same subject in 3 different styles and compare clarity and consistency.

---

## Day 3: Composition and Layout

### Learning Objectives

- Control framing, perspective, and visual balance
- Understand camera-like concepts in image prompts
- Improve subject readability

### Key Topics

1. Framing types:
   - Close-up
   - Medium shot
   - Wide shot
2. Perspective:
   - Front view
   - Side view
   - Top-down view
3. Visual balance and subject placement
4. Why composition must be explicit

### Prompts You'll Generate

- **Framing Variations**: Same subject, different framing
- **Perspective Control**: Same subject, different viewpoints
- **Balanced Scene Prompt**
- **Composition Debugging**: Fix unclear compositions

### Practice Exercise

Create 3 prompts for the same subject using different framing and perspectives.

---

## Day 4: Character and Subject Design

### Learning Objectives

- Maintain consistency across multiple images
- Understand identity drift and why it breaks datasets
- Design reusable character descriptions

### Key Topics

1. What character consistency means
2. Fixed vs variable attributes
3. Identity reuse across prompts
4. Common mistakes in character design
5. Dataset implications of inconsistency

### Prompts You'll Generate

- **Character Definition Prompt**
- **Same Character, New Scene**
- **Consistency Check Prompt**
- **Broken Character Example** (what not to do)

### Practice Exercise

Define one character and generate 3 prompts without changing any attributes.

---

## Day 5: Negative Prompting

### Learning Objectives

- Learn how to exclude unwanted elements
- Reduce common image generation errors
- Improve output cleanliness

### Key Topics

1. Why negative prompts are required
2. Common failure patterns:
   - Blur
   - Distortion
   - Extra limbs
   - Text artifacts
3. Writing negatives as exclusions, not instructions
4. Reusable negative prompt sets

### Prompts You'll Generate

- **Base Prompt + Negatives**
- **Before/After Negative Prompt Comparison**
- **Minimal Negative Set**
- **Over-constrained Negative Example**

### Practice Exercise

Take one prompt and improve its output by adding a clean negative list.

---

## Day 6: Advanced Image Parameters

### Learning Objectives

- Understand technical controls without overloading prompts
- Learn format and reproducibility concepts
- Separate creative intent from technical metadata

### Key Topics

1. Aspect ratios:
   - Square (1:1)
   - Landscape (16:9)
   - Portrait (9:16)
2. Resolution and quality intent
3. Seeds and reproducibility
4. What interns should vs should not control

### Prompts You'll Generate

- **Same Prompt, Different Aspect Ratios**
- **Format-Specific Prompt**
- **Reproducibility-Aware Prompt**
- **Over-parameterized Prompt Cleanup**

### Practice Exercise

Create one prompt and adapt it for square, wide, and portrait outputs.

---

## Day 7: Image Prompting Capstone

### Learning Objectives

- Combine all techniques from Days 1–6
- Build production-ready image prompts
- Create controlled visual datasets

### Key Topics

1. Synthesizing subject, style, composition, and negatives
2. Single-variable control
3. Prompt reuse and versioning
4. Production prompt patterns
5. Dataset-oriented thinking

### Prompts You'll Generate

- **Capstone Prompt 1**: Single high-quality image
- **Capstone Prompt 2**: Same subject, multiple views
- **Capstone Prompt 3**: Same subject, controlled variation
- **Dataset Prompt Set**: 10–20 images with one variable

### Practice Exercise

Create one complete prompt that:

- Has a fixed subject
- Uses one style
- Specifies composition
- Includes negatives
- Changes only one variable

---

## Prompt Categories by Day

### Day 1: Basic Visual Prompts

- Single subject descriptions
- Simple scenes
- Attribute control

### Day 2: Style-Controlled Prompts

- Art style variation
- Aesthetic locking

### Day 3: Composition Prompts

- Camera framing
- Perspective control

### Day 4: Identity Prompts

- Character consistency
- Subject reuse

### Day 5: Clean Output Prompts

- Error reduction
- Artifact exclusion

### Day 6: Technical Prompts

- Format control
- Reproducibility awareness

### Day 7: Production Prompts

- Dataset creation
- Multi-image consistency
