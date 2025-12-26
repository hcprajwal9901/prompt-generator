# 7-Day Text Prompting Training Plan

## Overview

This is a structured Week 1 curriculum for learning text prompting. Each day builds on previous concepts with practical, hands-on prompt generation exercises.

---

## Day 1: Foundations of Prompt Engineering

### Learning Objectives
- Understand how AI language models work
- Learn the anatomy of a good prompt
- Distinguish between casual and production prompts

### Key Topics
1. How LLMs process text (tokenization, prediction, generation)
2. Five essential components of production prompts:
   - Context
   - Task Definition
   - Input Format
   - Output Format
   - Constraints
3. Good vs. bad prompt comparison
4. Real-world examples for code and content

### Prompts You'll Generate
- **Bad-to-Good Refactoring**: Convert vague prompts into production-ready ones
- **Python Function Generation**: "Write a function that filters user data by age"
- **Blog Post Template**: "Write about how prompt quality improves LLM outputs"
- **Quick Task Prompts**: Simple, focused prompts for immediate use

### Practice Exercise
Take 3 vague prompts and rewrite them using the 5-component framework.

---

## Day 2: Structured Output Control

### Learning Objectives
- Control output format (Markdown, JSON, tables, code)
- Enforce consistent structure in responses
- Enable automated parsing and validation

### Key Topics
1. Why structure matters in production
2. Formatting techniques:
   - Markdown (headers, bullets, tables)
   - JSON (key-value pairs, arrays)
   - XML-like tags (custom structure)
   - Tables (comparison, data organization)
   - Code blocks (multiple languages)
3. Enforcing structure through prompts
4. Output validation requirements

### Prompts You'll Generate
- **Status Report**: Weekly project update in Markdown format
- **Data Extraction**: Extract info and return as valid JSON
- **Comparison Table**: Framework comparison with structured columns
- **Configuration File**: Dockerfile or config in specific format
- **Validation Prompt**: Generate output that validates before returning

### Practice Exercise
Generate the same content in 3 different formats (Markdown, JSON, XML) and compare parsing difficulty.

---

## Day 3: Role-Based Prompting

### Learning Objectives
- Assign personas to control model behavior
- Leverage expert simulation for quality outputs
- Match role to use case

### Key Topics
1. Why roles matter (knowledge base, tone, perspective)
2. Persona assignment strategies
3. Expert simulation techniques
4. Role selection matrix:
   - Code review → Senior Code Reviewer
   - Content editing → Professional Editor
   - Teaching → Expert Educator
   - Brainstorming → Creative Director
5. Combining roles with other techniques

### Prompts You'll Generate
- **Code Review**: Senior engineer reviewing code for quality
- **Content Editing**: Professional editor improving blog post
- **Teaching Explanation**: Expert educator explaining complex concept
- **Marketing Copy**: Copywriter for B2B SaaS
- **Technical Documentation**: Senior architect writing system design

### Practice Exercise
Write the same prompt with 3 different roles and compare output quality and style.

---

## Day 4: Chain-of-Thought Reasoning

### Learning Objectives
- Use step-by-step reasoning to improve accuracy
- Know when to expose vs. hide reasoning
- Apply reasoning patterns for logic-heavy tasks

### Key Topics
1. What is chain-of-thought (CoT) prompting
2. When to use CoT:
   - Logic and math problems
   - Complex deduction
   - Accuracy-critical tasks
   - Debugging and verification
3. When NOT to use CoT:
   - User-facing outputs
   - Performance-critical applications
   - Simple tasks
4. Safe prompting patterns:
   - Verification step
   - Multiple perspectives
   - Constraint-based reasoning

### Prompts You'll Generate
- **Math Problem**: Solve with step-by-step reasoning shown
- **Code Debug**: Trace logic to identify bug
- **Decision Analysis**: Multiple perspectives on business decision
- **Verification Prompt**: Generate and verify answer
- **Hidden Reasoning**: Output only final answer (no reasoning shown)

### Practice Exercise
Write the same problem prompt with and without CoT, compare output quality and token usage.

---

## Day 5: Few-Shot Learning

### Learning Objectives
- Teach models through examples
- Understand zero-shot vs. few-shot
- Apply few-shot for consistency

### Key Topics
1. Zero-shot limitations
2. Few-shot learning advantages
3. How many examples? (typically 2-4 for production)
4. Few-shot applications:
   - Style transfer
   - Format consistency
   - Domain-specific tasks
   - Edge case handling
5. Example quality matters

### Prompts You'll Generate
- **Blog Titles**: Generate TechCrunch-style titles (with style examples)
- **Code Validation**: Validate form inputs (with function examples)
- **Customer Classification**: Classify sentiment with examples
- **Product Descriptions**: Marketing copy matching brand voice
- **Email Templates**: Generate in specific company tone

### Practice Exercise
Generate 5 variations of the same task using different numbers of examples (0, 1, 2, 3, 4) and measure consistency.

---

## Day 6: Constraint Engineering

### Learning Objectives
- Set boundaries for output
- Control tone, style, and length
- Ensure safety and compliance
- Validate outputs

### Key Topics
1. Word limit constraints
2. Tone control (professional, casual, educational, persuasive)
3. Style constraints (vocabulary, sentence structure, voice)
4. Safety boundaries:
   - Regulatory compliance
   - Security requirements
   - Scope limitations
   - Forbidden approaches
5. Output validation rules

### Prompts You'll Generate
- **Length-Constrained Summary**: Exactly 150 words on machine learning
- **Tone-Controlled Email**: Professional but warm tone
- **Compliance-Safe Marketing**: CAN-SPAM compliant email
- **Scope-Limited Code**: Only specific libraries, specific functionality
- **Style-Constrained Blog**: Specific vocabulary, voice, structure
- **Validated JSON Config**: Must be parseable, no secrets

### Practice Exercise
Generate a marketing email with conflicting constraints (friendly + formal, short + complete) and resolve conflicts in the prompt.

---

## Day 7: Text Prompting Capstone

### Learning Objectives
- Combine all techniques (role + structure + constraints)
- Create complex multi-objective prompts
- Build production-ready prompts

### Key Topics
1. Synthesis of Days 1-6
2. Multi-objective prompts (multiple outputs in one request)
3. Production prompt patterns:
   - Code review automation
   - Data extraction at scale
   - Configuration generation
   - Content creation pipelines
4. Real-world workflow integration
5. Prompt versioning and documentation

### Prompts You'll Generate
- **Capstone 1: Blog Post**: Complete article with role + structure + constraints
- **Capstone 2: Code Review Comments**: Automated review with standards
- **Capstone 3: Data Extraction**: Parse unstructured text to structured JSON
- **Capstone 4: Docker Configuration**: Production-ready Docker setup
- **Capstone 5: Multi-Objective Marketing**: Headline + description + user story in one prompt

### Practice Exercise
Create one comprehensive prompt combining:
- A specific role (persona)
- Multiple output formats
- 4-5 constraints
- Validation requirements
- Examples for consistency

---

## Topics Across All Days

### By Use Case

#### Code Generation
- Day 1: Function with requirements
- Day 2: Output in specific format
- Day 3: Code with role perspective
- Day 4: Code with logic tracing
- Day 5: Code following style examples
- Day 6: Code with safety constraints
- Day 7: Production code with all techniques

#### Content Creation
- Day 1: Blog post basics
- Day 2: Markdown formatting
- Day 3: Brand voice with role
- Day 4: Reasoning in content structure
- Day 5: Consistent style with examples
- Day 6: Tone and length control
- Day 7: Multi-section article with all constraints

#### Technical Documentation
- Day 1: Documentation structure
- Day 2: Markdown formatting standards
- Day 3: Expert perspective
- Day 4: Detailed explanations
- Day 5: Example-driven docs
- Day 6: Scope and audience constraints
- Day 7: Complete API documentation

---

## Prompt Categories by Day

### Day 1: Basic Prompts
- Simple function generation
- Quick summaries
- Basic explanations
- Initial drafts

### Day 2: Structured Prompts
- JSON data extraction
- Markdown reports
- Comparison tables
- Formatted outputs

### Day 3: Role-Based Prompts
- Code reviews
- Content editing
- Technical explanations
- Marketing copy

### Day 4: Reasoning Prompts
- Problem solving
- Debugging
- Analysis
- Decision making

### Day 5: Example-Driven Prompts
- Style consistency
- Pattern replication
- Domain-specific tasks
- Format standardization

### Day 6: Constraint-Based Prompts
- Length-limited content
- Tone-controlled outputs
- Safety-compliant content
- Scope-limited code

### Day 7: Production Prompts
- Multi-objective requests
- Automated workflows
- Enterprise-grade outputs
- Complex integrations

---

## Sample Prompts by Day

### Day 1 Sample
```
Write a Python function that:
- Takes a list of dictionaries with 'id', 'name', 'score'
- Filters entries where score >= 80
- Returns sorted by score descending
- Include docstring and type hints
```

### Day 2 Sample
```
Extract this data as JSON:
Name: Alice, Age: 30, Skills: Python, JavaScript

Return: {"name": "...", "age": ..., "skills": [...]}
```

### Day 3 Sample
```
You are a Senior Code Reviewer. Review this function for:
- Error handling
- Security issues
- Performance
Provide specific, actionable feedback.
```

### Day 4 Sample
```
Solve step-by-step:
Should we migrate to microservices?

Consider: Technical Lead perspective, DevOps perspective, Business perspective
Final recommendation: [based on all perspectives]
```

### Day 5 Sample
```
Write blog titles like these examples:
1. "How REST APIs cut development time by 40%"
2. "Why TypeScript prevents bugs at scale"

Now write for: "New AI model for data analysis"
```

### Day 6 Sample
```
Write a compliance email (CAN-SPAM compliant):
- Max 200 words
- Professional tone
- Include unsubscribe link
- No misleading claims
```

### Day 7 Sample
```
You are a Content Marketing Manager.
Generate THREE outputs:
1. Blog headline (max 10 words)
2. Description (2-3 sentences)
3. User story with acceptance criteria

Topic: New API documentation tool
Constraints: Professional tone, benefit-focused, 1200-word blog post
```

---

## Skill Progression

| Day | Core Skill | Difficulty | Output Quality |
|-----|-----------|-----------|-----------------|
| 1 | Clarity & Specificity | Beginner | Basic |
| 2 | Structure Control | Beginner | Formatted |
| 3 | Persona & Tone | Intermediate | Styled |
| 4 | Reasoning & Logic | Intermediate | Accurate |
| 5 | Consistency & Style | Intermediate | Consistent |
| 6 | Constraints & Safety | Advanced | Production-Ready |
| 7 | Integration & Synthesis | Advanced | Enterprise-Grade |

---

## Success Metrics

### By Day

**Day 1**: Can write a complete prompt with all 5 components

**Day 2**: Can enforce output format and validate structure

**Day 3**: Can select appropriate role and integrate with task

**Day 4**: Can determine when reasoning is needed and hide when appropriate

**Day 5**: Can create 2-3 teaching examples that improve consistency

**Day 6**: Can set and enforce 4-5 constraints simultaneously

**Day 7**: Can create a production prompt combining all 6 techniques

---

## Daily Time Allocation (Recommended)

| Day | Learning | Practice | Review | Total |
|-----|----------|----------|--------|-------|
| Day 1 | 30 min | 45 min | 15 min | 90 min |
| Day 2 | 30 min | 45 min | 15 min | 90 min |
| Day 3 | 30 min | 45 min | 15 min | 90 min |
| Day 4 | 30 min | 45 min | 15 min | 90 min |
| Day 5 | 30 min | 45 min | 15 min | 90 min |
| Day 6 | 45 min | 60 min | 15 min | 120 min |
| Day 7 | 30 min | 90 min | 30 min | 150 min |

**Total Week 1**: ~10 hours of active learning and practice

---

## Deliverables by Day

### Day 1
- [ ] 3 refactored prompts (bad → good)
- [ ] 1 complete prompt using 5-component framework
- [ ] Reflection on why each component matters

### Day 2
- [ ] Prompt generating Markdown output
- [ ] Prompt generating JSON output
- [ ] Prompt generating table output
- [ ] Validation rules defined

### Day 3
- [ ] Prompt with role for code review
- [ ] Prompt with role for content editing
- [ ] Comparison: same task with 2 different roles

### Day 4
- [ ] Prompt with chain-of-thought (reasoning shown)
- [ ] Prompt hiding reasoning (user-facing)
- [ ] Multi-perspective analysis prompt

### Day 5
- [ ] Prompt with 0 examples (zero-shot)
- [ ] Prompt with 3 examples (few-shot)
- [ ] Comparison of consistency between the two

### Day 6
- [ ] Prompt with word limit constraint
- [ ] Prompt with tone constraint
- [ ] Prompt with compliance constraint
- [ ] Prompt with validation rules

### Day 7
- [ ] 1 capstone prompt combining all techniques
- [ ] 3 production-ready prompts for real workflows
- [ ] Prompt documentation for team reuse

---

## Additional Resources

### Quick Reference Links
- Prompt Structure Template (Appendix of main guide)
- Tone Keywords Reference (Appendix)
- Format Quick Reference (Appendix)
- Best Practices Checklist
- Evaluation Checklist
- Production Readiness Checklist

### Template Library Available
1. Code Generation Template
2. Blog/Article Writing Template
3. Story/Creative Writing Template
4. Technical Documentation Template
5. Content Review/Feedback Template

---

## Notes for Instructors

- **Emphasis**: Each day builds on previous days; don't skip ahead
- **Practice**: Students should generate 3-5 real prompts per day
- **Review**: Each day, review yesterday's prompts and refine
- **Real-World**: By Day 7, students should have production-ready prompts they can use
- **Iteration**: Encourage saving successful prompts as reusable templates
- **Feedback**: Validate student prompts using the Evaluation Checklist

---

**Curriculum Version**: 1.0  
**Target Audience**: Students and professionals learning text prompting  
**Duration**: 1 week (10 hours)  
**Prerequisite**: Basic familiarity with AI/LLMs  
**Outcome**: Ability to write production-ready prompts for code, content, and documentation
