# Text Prompting Guidelines for Production-Ready Outputs

## Introduction

### What is Text Prompting?

Text prompting is the art and science of communicating with large language models (LLMs) through natural language instructions. Unlike traditional programming, which relies on explicit code syntax, text prompting leverages the language understanding capabilities of AI models to accomplish complex tasks—from code generation to content creation—using conversational or instructional language.

### Why It Matters in Production Systems

In production environments, the quality of prompts directly impacts:
- **Output quality and consistency**: Well-crafted prompts reduce errors and hallucinations
- **Cost efficiency**: Precise prompts reduce token usage and unnecessary regenerations
- **Reliability**: Structured prompts enable predictable, repeatable results
- **Scalability**: Reusable prompt templates accelerate team workflows
- **Compliance**: Constraint engineering ensures outputs meet regulatory and brand standards

### Casual vs Production Prompting

| Aspect | Casual Prompting | Production Prompting |
|--------|------------------|----------------------|
| **Purpose** | Exploration, quick answers | Automated workflows, business logic |
| **Consistency** | Variable results acceptable | Deterministic output required |
| **Error tolerance** | High tolerance | Low or zero tolerance |
| **Documentation** | None or minimal | Detailed specifications |
| **Testing** | Ad-hoc | Systematic validation |
| **Constraints** | Few or none | Multiple enforced constraints |
| **Audience** | Individual users | Teams, systems, end-users |
| **Format** | Any format acceptable | Strict, parseable formats |

---

## Week 1 Learning Breakdown

### Day 1: Foundations of Prompt Engineering

#### How AI Language Models Work (High Level)

Large language models process text by predicting the most likely next token (word or subword) based on patterns learned during training. When you provide a prompt, the model:

1. **Tokenizes** your input (breaks it into manageable pieces)
2. **Processes** tokens through neural layers, computing probabilities
3. **Generates** output by selecting high-probability tokens sequentially
4. **Stops** when encountering an end-of-sequence marker or reaching max tokens

Key insight: The model doesn't "think" but pattern-matches. Your job is to activate the right patterns through precise prompting.

#### Anatomy of a Good Prompt

A production-ready prompt contains:

1. **Context**: Background information the model needs
2. **Task Definition**: Clear, specific instruction of what to do
3. **Input Format**: Structure of the data being provided
4. **Output Format**: Exact format and structure required
5. **Constraints**: Limitations, rules, or boundaries
6. **Examples** (optional): Few-shot demonstrations for complex tasks

#### Good vs Bad Prompt Examples

**Bad Prompt (Vague):**
```
Write me a function to process data
```

**Good Prompt (Production-Ready):**
```
Write a Python function that:
- Takes a list of dictionaries as input, each with keys: 'id' (int), 'name' (str), 'age' (int)
- Filters records where age >= 18
- Returns a list of dictionaries sorted by name alphabetically
- Include type hints and docstring
- Raise ValueError if input is not a list

Example usage:
```python
users = [
  {'id': 1, 'name': 'Alice', 'age': 25},
  {'id': 2, 'name': 'Bob', 'age': 17},
  {'id': 3, 'name': 'Charlie', 'age': 30}
]
result = process_users(users)
# Expected: [{'id': 1, 'name': 'Alice', 'age': 25}, {'id': 3, 'name': 'Charlie', 'age': 30}]
```
```

**Bad Prompt (Content Generation):**
```
Write a blog post about AI
```

**Good Prompt (Content Generation):**
```
Write a blog post with the following specifications:
- Topic: "How Prompt Engineering Improves LLM Output Quality"
- Target audience: Software developers new to AI
- Length: 1200-1500 words
- Tone: Professional but accessible
- Structure: Introduction, 3 main sections with subheadings, conclusion, 2-3 practical examples
- Include: At least one code example showing prompt comparison
- Exclude: Marketing jargon, overly technical ML concepts

Outline:
1. Introduction (100-150 words)
2. Understanding the Basics (300-400 words)
3. Practical Techniques (400-500 words)
4. Common Mistakes (300-400 words)
5. Conclusion (100-150 words)
```

---

### Day 2: Structured Output Control

#### Why Structure Matters

Structured outputs are essential for:
- **Parsing**: Code can automatically parse and validate the response
- **Consistency**: Repeated prompts produce outputs in the same format
- **Integration**: Outputs can feed directly into other systems
- **Validation**: Easy to check if output meets requirements

#### Formatting Outputs: Markdown

**Prompt:**
```
Generate a weekly project status report in Markdown format.

Project: Mobile App Redesign
Period: Week of December 20-26, 2025
Status: On Track

Include:
- H2 headings for sections
- Bullet points for accomplishments and risks
- Bold for key metrics
- A summary table with columns: Task, Status, Owner, Due Date

Provide ONLY the Markdown, no additional text.
```

**Expected Output:**
```markdown
## Weekly Project Status Report

### Accomplishments
- Completed UI redesign for dashboard (100% complete)
- Integrated new authentication module
- Resolved 12 critical bugs from backlog

### Metrics
- Velocity: **42 story points**
- Bugs Closed: **12**
- Code Coverage: **87%**

### Upcoming Work
| Task | Status | Owner | Due Date |
|------|--------|-------|----------|
| API Integration | In Progress | Alice | Dec 28 |
| Testing Phase | Planned | Bob | Jan 2 |
| Documentation | Planned | Charlie | Jan 5 |

### Risks
- Database migration scheduled for Dec 29 may impact timeline
- Two team members on leave Dec 27-29
```

#### Formatting Outputs: JSON

**Prompt:**
```
Extract structured data from the following text and return as valid JSON.

Text: "Alice Johnson, age 32, works as a Senior Developer at TechCorp. She has 8 years of experience and specializes in Python and JavaScript."

Return JSON with fields:
- name (string)
- age (integer)
- title (string)
- company (string)
- experience_years (integer)
- skills (array of strings)

Return ONLY valid JSON, no additional text or markdown blocks.
```

**Expected Output:**
```json
{
  "name": "Alice Johnson",
  "age": 32,
  "title": "Senior Developer",
  "company": "TechCorp",
  "experience_years": 8,
  "skills": ["Python", "JavaScript"]
}
```

#### Formatting Outputs: Tables & Bullet Lists

**Prompt:**
```
Create a comparison table of three JavaScript frameworks: React, Vue, and Angular.

Requirements:
- 5 comparison criteria (your choice, but include Learning Curve and Community Size)
- Format as a Markdown table
- Rate Learning Curve as Easy/Medium/Hard
- Rate Community Size as Small/Medium/Large
- Keep descriptions to one sentence

Return ONLY the Markdown table, no preamble.
```

#### Enforcing Structure in Prompts

**Technique: XML-Like Tags**

```
Generate a product description following this XML structure:

<product>
  <name>Product Name</name>
  <tagline>One-sentence value proposition</tagline>
  <description>2-3 sentence description</description>
  <features>
    <feature>Feature 1</feature>
    <feature>Feature 2</feature>
    <feature>Feature 3</feature>
  </features>
  <target_audience>Who this is for</target_audience>
  <price_range>Estimated price</price_range>
</product>

Create this for a new AI-powered writing assistant for marketers.
```

**Technique: Step-by-Step Enumeration**

```
Generate a recipe for chocolate chip cookies with this exact structure:

1. Ingredients (list only)
2. Instructions (numbered steps)
3. Baking Parameters (temperature and time)
4. Yield (servings/units)
5. Storage Instructions
6. Troubleshooting Tips (common issues and solutions)

Use clear headers for each section.
```

#### Enforcing Structure: Code Examples

**Bad Prompt:**
```python
# Generate a Python class for a bank account
```

**Good Prompt:**
```python
# Generate a Python BankAccount class with EXACTLY this structure:
# - __init__(self, account_holder: str, initial_balance: float)
# - deposit(self, amount: float) -> None
# - withdraw(self, amount: float) -> bool
# - get_balance(self) -> float
# Requirements:
# - Prevent negative balances
# - Raise ValueError if amount is negative
# - Withdraw returns True if successful, False if insufficient funds
# - Include docstrings for all methods
# - Include type hints
```

---

### Day 3: Role-Based Prompting

#### Persona Assignment

Assigning a role helps the model adopt the appropriate knowledge base, tone, and perspective.

**Prompt without role:**
```
Explain how to debug a JavaScript application
```

**Prompt with role:**
```
You are a Senior JavaScript Engineer with 12 years of experience and expertise in full-stack development. Explain how to debug a JavaScript application, focusing on:
- Techniques a professional developer would use
- Production debugging scenarios
- Common pitfalls juniors encounter

Keep the explanation practical and assume the audience understands async/await and closures.
```

#### Expert Simulation

**Prompt:**
```
You are a Professional Content Editor for a major publishing house. Your expertise includes:
- Copy editing and style consistency
- Story structure and pacing
- Character development
- Market trends in fiction

Review this opening paragraph for a mystery novel and provide specific, actionable feedback:

[INSERT PARAGRAPH]

Focus on:
1. Hook strength (does it grab attention?)
2. Clarity and prose quality
3. Genre appropriateness
4. Suggestions for improvement
```

#### When and Why to Use Roles

| Use Case | Role | Why |
|----------|------|-----|
| Code review | Senior Code Reviewer | Ensures professional standards, security focus |
| Content editing | Professional Editor | Improves tone, consistency, readability |
| Teaching | Expert Educator | Adjusts complexity, adds examples, provides context |
| Brainstorming | Creative Director | Encourages innovative, outside-the-box thinking |
| Compliance | Compliance Officer | Ensures regulatory requirements are met |

#### Examples with Roles

**Code Generation with Role:**
```
You are a Principal Backend Engineer at a major tech company. Your standards include:
- Security-first approach
- Scalability for 1M+ users
- Comprehensive error handling
- Production-grade logging

Write a Python function to validate user email addresses. Requirements:
- Check RFC 5322 compliance basics (not full spec)
- Rate limit checks (return False if more than 5 attempts in 1 minute)
- Log validation attempts with timestamp and result
- Handle exceptions gracefully

Include docstring, type hints, and inline comments for complex logic.
```

**Content Generation with Role:**
```
You are a Marketing Copywriter for a B2B SaaS company targeting enterprise clients. Your style:
- Professional tone, no slang
- Benefit-focused, not feature-focused
- Data-driven (include metrics when possible)
- Clear call-to-action
- 2-3 sentences maximum per paragraph

Write a homepage headline and subheading for a project management tool that reduces project delays by 40%.
```

---

### Day 4: Chain-of-Thought Reasoning

#### Step-by-Step Reasoning

Chain-of-thought (CoT) prompting asks the model to show its reasoning process before providing the final answer. This improves accuracy, especially for complex tasks.

**Prompt without CoT:**
```
What is the maximum number of 4-digit numbers that can be formed using digits 1-5 without repetition?
```

**Prompt with CoT:**
```
Solve this step-by-step. Show your reasoning at each step.

What is the maximum number of 4-digit numbers that can be formed using digits 1-5 without repetition?

Think through:
1. How many choices for the first digit?
2. How many choices for the second digit (after first is selected)?
3. Continue for third and fourth digits
4. What's the calculation?
5. What's the final answer?

Format your response as:
Step 1: [reasoning]
Step 2: [reasoning]
...
Final Answer: [number]
```

#### When to Ask for Reasoning

Use CoT when:
- Task involves logic, math, or complex deduction
- Output accuracy is critical
- You want to verify the model's thinking
- Debugging why the model produced a certain answer

**Example: Code Logic Review**
```
I'm getting unexpected results from this code. Please:
1. Trace through the logic step-by-step
2. Identify where the issue occurs
3. Explain why it's a problem
4. Provide the corrected code

Code:
```python
def calculate_discount(price, customer_type):
    if customer_type == "premium":
        discount = 0.2
    elif customer_type == "regular":
        discount = 0.1
    return price * discount  # BUG: Should be price * (1 - discount)
```

What's wrong?
```

#### When NOT to Expose Reasoning

Hide reasoning when:
- End-user facing (exposed reasoning may confuse non-technical users)
- Performance critical (reasoning adds tokens and latency)
- Sensitive outputs (financial decisions, medical advice)
- Simple, straightforward tasks

**User-Facing Prompt (Hide Reasoning):**
```
You are a helpful customer service chatbot. Answer the customer's question clearly and concisely.
Do not show your reasoning or internal thinking process. Just provide the answer.

Question: "Why is my order delayed?"

Respond in 2-3 sentences, friendly tone.
```

#### Safe Prompting Patterns for Logic-Heavy Tasks

**Pattern 1: Verification Step**
```
Generate and verify your answer.

Problem: Determine if 17 is a prime number.

Step 1: [Your solution]
Step 2: Verify your answer by checking divisibility

Final Answer: [Yes/No and brief explanation]
```

**Pattern 2: Multiple Perspectives**
```
Analyze this from three angles, then provide your final answer.

Question: Should we migrate our monolithic app to microservices?

Perspective 1 (Technical Lead):
Perspective 2 (DevOps Engineer):
Perspective 3 (CTO/Business):

Recommendation: [Based on all perspectives]
```

**Pattern 3: Constraint-Based Reasoning**
```
Follow these constraints while solving:
- Only use facts stated in the provided text
- Do not infer or assume information
- Flag any ambiguities

Given text: [INSERT TEXT]
Question: [INSERT QUESTION]

Answer: [Your response]
Confidence: [High/Medium/Low]
Assumptions Made: [List any required assumptions]
```

---

### Day 5: Few-Shot Learning

#### Teaching the Model Using Examples

Few-shot learning provides concrete examples to teach the model how to format responses or complete tasks. This is more effective than verbal instructions alone.

#### Zero-Shot vs Few-Shot

**Zero-Shot (No Examples):**
```
Classify this customer review as Positive, Negative, or Neutral:
"The product works okay, but it's expensive compared to competitors."
```

Response might be inconsistent. The model has to infer from general knowledge.

**Few-Shot (With Examples):**
```
Classify customer reviews as Positive, Negative, or Neutral using these examples:

Example 1:
Review: "Excellent product! Exceeded my expectations."
Classification: Positive

Example 2:
Review: "Terrible experience. Customer support was unhelpful."
Classification: Negative

Example 3:
Review: "The product works okay, but it's expensive compared to competitors."
Classification: Neutral

Now classify this review:
Review: "Great quality, but shipping took too long."
Classification:
```

#### Few-Shot for Blog Writing

**Prompt:**
```
Generate blog post titles in the style of TechCrunch, focusing on enterprise software. Follow these examples:

Example 1:
Topic: New AI tool for data analysis
Title: "DataMind's latest AI model cuts analysis time by 60%, drawing backing from Sequoia"

Example 2:
Topic: Database security breach
Title: "Why legacy databases remain the weakest link in enterprise security"

Example 3:
Topic: Cloud cost optimization
Title: "Finops is booming, but most enterprises are still overpaying for cloud"

Now create a title for:
Topic: New API gateway for microservices
Title:
```

#### Few-Shot for Code Generation

**Prompt:**
```
Write JavaScript functions that validate form inputs. Follow this pattern:

Example 1:
Function: validateEmail
```javascript
function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regex.test(email)) {
    return { valid: false, error: 'Invalid email format' };
  }
  return { valid: true, error: null };
}
```

Example 2:
Function: validatePhoneNumber
```javascript
function validatePhoneNumber(phone) {
  const regex = /^\+?1?\d{9,15}$/;
  if (!regex.test(phone.replace(/\D/g, ''))) {
    return { valid: false, error: 'Invalid phone number' };
  }
  return { valid: true, error: null };
}
```

Now write:
Function: validatePassword

Requirements:
- Minimum 8 characters
- At least one uppercase letter
- At least one number
- At least one special character
- Return object with valid (boolean) and error (string or null)
```

#### When Few-Shot is Most Effective

- **Style transfer**: Teaching a specific tone or format
- **Complex logic**: Demonstrating the exact approach expected
- **Edge cases**: Showing how to handle boundary conditions
- **Domain-specific**: Industry or specialized terminology
- **Consistency**: Ensuring multiple outputs follow the same pattern

---

### Day 6: Constraint Engineering

#### Word Limits

**Without Constraint:**
```
Write a summary of the machine learning workflow
```

**With Constraint:**
```
Write a 150-word summary of the machine learning workflow. 

Include: problem definition, data collection, model training, evaluation.
Exclude: detailed math, software implementation details.

Count: [You must use approximately 150 words. Too short or too long will be rejected.]
```

**Implementation Tip**: Always use "approximately" for word counts to account for tokenization differences.

#### Tone Control

**Prompt with Tone Constraints:**
```
Write an email to a client explaining a project delay.

Tone Requirements:
- Professional but warm
- Take responsibility without over-apologizing
- Forward-looking (focus on solutions)
- No corporate jargon
- 3-5 sentences

Constraints:
- Do NOT blame external factors
- Do NOT use phrases like "per our previous conversation"
- Must include: new timeline, one mitigation measure
```

#### Style Constraints

**Blog Post Example:**
```
Write a technical blog post about REST API design principles.

Style Constraints:
- Level: Intermediate developers (understand HTTP, JSON)
- Format: Markdown with code examples
- Tone: Educational, not promotional
- Structure: Introduction, 3 main sections, conclusion
- Sentence style: Mix simple and complex sentences
- Vocabulary: Technical but avoid unnecessary jargon
- Avoid: "it's important", "basically", "simply"
- Use: Active voice, specific examples, practical advice

Length: 1000-1200 words
```

#### Safety and Scope Boundaries

**Scope Constraints:**
```
Write Python code for data processing.

Scope:
- ONLY process CSV files
- ONLY implement filtering and sorting
- ONLY use pandas library
- Do NOT implement: API calls, database operations, machine learning

Requirements:
- Function signature: def process_data(filepath: str) -> pd.DataFrame
- Include error handling for invalid file paths
- Add docstring with examples
```

**Safety Constraints:**
```
Generate a marketing email template.

Safety Requirements:
- MUST comply with CAN-SPAM regulations
- MUST include unsubscribe option
- MUST NOT use misleading subject lines
- MUST NOT make unverified product claims
- MUST NOT include attachments with suspicious content

Include: [From], [To], [Subject], [Body], [Footer with unsubscribe]
```

#### Output Validation

**Prompt with Validation:**
```
Generate a JSON configuration file for a web server.

Requirements:
- Valid JSON syntax (test with JSON parser)
- MUST include: port, host, ssl settings
- MUST NOT include: API keys, passwords, secrets
- All keys MUST be lowercase with underscores

Validate your output before submitting. If invalid, regenerate.

Schema:
{
  "port": <number>,
  "host": "<string>",
  "ssl_enabled": <boolean>,
  "max_connections": <number>
}
```

---

### Day 7: Text Prompting Capstone

#### Combining Role + Structure + Constraints

This is a comprehensive production-ready prompt combining everything you've learned.

**Capstone Example: Blog Post Generation**

```
You are a Senior Content Marketing Manager for a B2B SaaS company specializing in developer tools.

Your task: Write a technical blog post for our engineering blog.

Topic: "10 Common Mistakes in API Design and How to Avoid Them"

Requirements:

AUDIENCE & TONE:
- Target: Backend engineers and API architects
- Level: Intermediate to Advanced
- Tone: Authoritative but friendly, avoid marketing language
- Language: Clear, concise, with technical precision

STRUCTURE:
1. Hook/Introduction (100-150 words)
   - Why API design matters
   - What readers will learn
2. Three sections (each 300-400 words):
   - Mistake: [describe the issue]
   - Impact: [why it matters]
   - Solution: [how to fix it and code example]
3. Conclusion (100-150 words)
   - Key takeaways
   - Call to action (read our docs, try our tool)

FORMAT:
- Markdown with H2 for sections, H3 for mistakes
- Include 1 code example per mistake (Python or JavaScript)
- Use bullet points for key points
- Include 1 table comparing before/after

CONSTRAINTS:
- Total length: 1400-1600 words
- MUST include real examples from public APIs
- Do NOT make unverified claims about our tool
- Do NOT use buzzwords: "leverage", "synergy", "cutting-edge"
- Use "you" and "we" appropriately; avoid "one"

VALIDATION:
- Run through Hemingway Editor principles (short sentences where possible)
- Check that each mistake has a concrete solution
- Verify code examples are syntactically correct

Generate ONLY the blog post in Markdown format. No introduction or metadata.
```

#### Multi-Objective Prompts

**Multiple Outputs in One Prompt:**

```
You are a Product Manager for a mobile app. Generate marketing materials for a new feature.

Generate THREE outputs in this exact order:

1. FEATURE HEADLINE
   - One sentence, max 12 words
   - Focus on user benefit, not technology

2. FEATURE DESCRIPTION
   - 2-3 sentences
   - Explain what it is and why users want it
   - Include one concrete use case

3. USER STORY (Markdown format)
   As a [user type]
   I want [capability]
   So that [benefit]

   Include: Acceptance criteria (3-4 bullet points)

Feature: Offline mode for note-taking app
```

#### Real-World Production Prompts

**Production Prompt 1: Code Review Comment Generator**

```
You are an experienced code reviewer with a focus on maintainability and security.

Your task: Generate a code review comment for the following code.

CODE:
```python
def get_user_data(user_id):
    import requests
    response = requests.get(f"https://api.example.com/users/{user_id}")
    data = response.json()
    return data["user_info"]
```

REQUIREMENTS:
- Identify specific issues (not general feedback)
- Suggest concrete improvements
- Provide corrected code snippet
- Be respectful but direct

FORMAT:
Issue: [Title]
Severity: [Critical/High/Medium/Low]
Explanation: [Why this matters]
Suggestion: [How to fix]
Corrected Code:
```python
[improved code]
```

ISSUES TO CHECK:
- Error handling (what if API fails?)
- Security (is the URL safe?)
- Performance (imports inside function)
- Type safety
```

**Production Prompt 2: Data Extraction**

```
You are a data extraction specialist. Extract structured information from unstructured text.

TEXT:
"Alice Johnson, who has been working as a Senior Developer for 8 years, joined TechCorp in 2019. She specializes in Python, JavaScript, and React. Previously, she worked at StartupXYZ for 3 years as a Junior Developer."

EXTRACTION REQUIREMENTS:

1. Create a JSON object with:
   - name
   - current_title
   - company
   - years_at_company
   - total_years_experience
   - skills (array)
   - previous_positions (array of objects with: company, title, duration_years)

2. VALIDATION:
   - All years must be integers
   - Skills must be in title case
   - Ensure no invented data (only extract what's stated)

3. OUTPUT:
   - Valid JSON only
   - No markdown formatting
   - Include null for missing fields
```

**Production Prompt 3: Configuration Generation**

```
You are a DevOps engineer. Generate a production-ready Docker configuration.

APPLICATION DETAILS:
- Name: Analytics Dashboard
- Language: Python 3.11
- Framework: Flask
- Database: PostgreSQL (separate container)
- Port: 5000

REQUIREMENTS:

1. Dockerfile
   - Use official Python 3.11 slim image
   - Install dependencies from requirements.txt
   - Non-root user for security
   - Health check included
   - Expose port 5000

2. docker-compose.yml
   - Two services: web and db
   - Volume mounts for persistence
   - Environment variables (no hardcoded secrets)
   - Health checks for both services
   - Network isolation between containers

3. .dockerignore
   - Standard Python exclusions
   - Development files excluded

CONSTRAINTS:
- MUST NOT include hardcoded credentials
- MUST include comments explaining why each directive is present
- MUST follow Docker best practices (layer caching, minimal images)
- Output must be copy-paste ready

VALIDATION:
- All EXPOSE directives must match the application port
- Services must have proper health checks
- Volumes must persist data correctly
```

---

## Prompt Templates Library

### Template 1: Code Generation

```
You are a [ROLE: Senior Developer, Technical Architect, etc.] with expertise in [LANGUAGE/DOMAIN].

Task: Write [WHAT to generate]

Requirements:
- Input: [Input format and structure]
- Output: [Exact output format - function signature, return type, etc.]
- Behavior: [What the code should do - 3-5 bullet points]
- Error handling: [How to handle errors]
- Special requirements: [Performance, security, compatibility, etc.]

Constraints:
- Use only standard library / approved packages
- Follow [PEP-8 / JavaScript conventions / etc.]
- Include type hints / docstrings / comments
- Maximum/minimum [X] lines of code

Example usage (if complex):
```code
[Show input and expected output]
```

Code:
```[LANGUAGE]
[Model generates code here]
```
```

### Template 2: Blog/Article Writing

```
You are a Professional [WRITER/EDITOR] specializing in [DOMAIN].

Task: Write a [TYPE: blog post, technical article, tutorial] about [TOPIC]

Target Audience:
- Level: [Beginner/Intermediate/Advanced]
- Role: [Who they are - developers, managers, etc.]
- Prior knowledge: [What they already know]

Content Requirements:
- Main sections: [List 3-4 key points to cover]
- Format: [Markdown with specific heading structure]
- Length: [Word count range]
- Tone: [Professional/Casual/Educational/etc.]
- Examples: [Types and count of examples needed]

Structure:
- Introduction: [What to include]
- Body: [Organization of content]
- Conclusion: [Call to action or summary]

Constraints:
- Avoid: [Specific terms, approaches, or styles to exclude]
- Must include: [Required elements - metrics, case studies, etc.]
- Language: [Formal/conversational/technical level]

Output Format: Markdown only, no additional text.
```

### Template 3: Story/Creative Writing

```
You are a Professional [Fiction Writer/Storyteller] specializing in [GENRE].

Task: Write a [FORM: short story, scene, narrative] about [TOPIC]

Setting:
- Time: [When]
- Place: [Where]
- Atmosphere: [Mood/tone of setting]

Characters:
- Name: [Character name and role]
- Personality: [Key traits]
- Background: [Relevant history]
[Repeat for each character]

Plot Requirements:
- Opening: [How the story begins]
- Conflict: [The central tension/problem]
- Resolution: [How it ends - or leave open if desired]
- Themes: [What the story explores]

Style Requirements:
- Point of view: [First person, third person, etc.]
- Pacing: [Fast/slow/varied]
- Dialogue: [Realistic/stylized/minimal]
- Descriptive detail: [Vivid/minimal/balanced]

Constraints:
- Length: [Word count]
- Tone: [Happy/melancholic/suspenseful/etc.]
- Content warnings: [If applicable, what to include/exclude]

Output: Narrative text in [FORMAT], no metadata.
```

### Template 4: Technical Documentation

```
You are a Technical Writer specializing in [DOMAIN].

Task: Write documentation for [COMPONENT/FEATURE]

Documentation Type: [Reference/Guide/Tutorial/API docs]

Audience:
- Level: [Developer experience level]
- Context: [What they're trying to accomplish]
- Prior knowledge: [Assumed knowledge]

Content Requirements:
- Overview: [What this is and why it matters]
- Sections: [Specific topics to cover]
- Examples: [Complexity level and types]
- Warnings: [Important edge cases or gotchas]

Format:
- Heading structure: [Markdown levels]
- Code blocks: [Languages and number]
- Tables: [Any comparison tables needed]
- Navigation: [Links to related docs]

Constraints:
- Length: [Concise/detailed]
- Technical depth: [Beginner-friendly/advanced]
- Avoid: [Specific jargon or approaches]

Output: Markdown documentation, production-ready.
```

### Template 5: Content Review/Feedback

```
You are a Professional [EDITOR/REVIEWER] with expertise in [DOMAIN].

Task: Review the following [CONTENT TYPE] and provide feedback.

Content:
[INSERT CONTENT TO REVIEW]

Review Criteria:
1. Clarity: [Is it easy to understand?]
2. Accuracy: [Are facts correct?]
3. Completeness: [Is anything missing?]
4. Tone: [Does it match the target?]
5. Structure: [Is organization logical?]

Feedback Format:
For each issue:
- Location: [Where in the text]
- Issue: [What's wrong]
- Severity: [Critical/High/Medium/Low]
- Suggestion: [How to fix]

Output:
1. Summary assessment (2-3 sentences)
2. Detailed feedback by criterion
3. Priority list of changes
4. Overall recommendation
```

---

## Best Practices & Anti-Patterns

### What to Always Do

1. **Be Specific**: Specify exactly what you want. Vagueness leads to unpredictable outputs.
   ```
   ❌ Write code for user authentication
   ✓ Write a Python function that authenticates users using JWT tokens with a 24-hour expiration
   ```

2. **Provide Context**: Give the model background it needs to understand your request.
   ```
   ❌ How should we structure our database?
   ✓ We're building a SaaS analytics platform for 100k+ users with real-time queries. How should we structure our database?
   ```

3. **Specify Output Format**: Always state the exact format you need.
   ```
   ❌ Tell me about cloud providers
   ✓ Compare AWS, Azure, and GCP in a markdown table with columns: Provider, Cost, Best For, Pros, Cons
   ```

4. **Include Examples**: Show the model what "good" looks like.
   ```
   ❌ Write product descriptions
   ✓ Write product descriptions matching these examples: [EXAMPLES]
   ```

5. **Set Constraints**: Define boundaries and limitations.
   ```
   ❌ Write a tutorial
   ✓ Write a 1000-word tutorial on React hooks for beginners, no prior React knowledge assumed, include 2 code examples
   ```

6. **Test and Iterate**: Validate output and refine prompts.
   ```
   - First attempt gave poor results? Adjust the prompt.
   - Good output? Save the prompt as a template.
   - Try variations to improve consistency.
   ```

### What to Never Do

1. **Don't Be Vague**: The model can't read your mind.
   ```
   ❌ "Fix this code"
   ✓ "Add error handling to this Python function to catch and log network failures"
   ```

2. **Don't Assume Knowledge**: State everything the model needs to know.
   ```
   ❌ "Explain the problem" (What problem?)
   ✓ "Our API returns 500 errors when processing payments over $10,000. Explain why this might happen and how to debug it."
   ```

3. **Don't Mix Multiple Tasks**: One prompt = one primary task.
   ```
   ❌ "Write a blog post about AI, also create a marketing email, and generate social media captions"
   ✓ Send separate, focused prompts for each.
   ```

4. **Don't Rely on Implicit Understanding**: State requirements explicitly.
   ```
   ❌ "Write secure code" (What does secure mean to you?)
   ✓ "Write code that prevents SQL injection, XSS attacks, and doesn't expose sensitive data in error messages"
   ```

5. **Don't Forget Edge Cases**: Mention them explicitly.
   ```
   ❌ "Handle user input validation"
   ✓ "Validate user input: handle null, empty strings, negative numbers, and strings longer than 100 characters"
   ```

6. **Don't Ignore Output Quality**: Always review before using.
   ```
   ❌ "Generate code and use it immediately"
   ✓ "Generate code, review for bugs, test locally, then deploy"
   ```

### Common Mistakes Beginners Make

| Mistake | Why It Fails | Solution |
|---------|-------------|----------|
| Overly casual tone | Model adopts casual responses | Use professional language; state desired tone |
| Asking for everything at once | Output becomes incoherent | Break into multiple prompts |
| No output format specified | Results are unparseable | Always specify format (JSON, Markdown, etc.) |
| Expecting 100% accuracy | Models hallucinate and make mistakes | Always review and validate output |
| Ignoring error messages | Bad prompts repeat | Read error feedback and adjust |
| Insufficient context | Model makes assumptions | Provide background and constraints upfront |
| Asking model to predict future | Models can't predict unknowns | Ask for analysis of current data instead |
| Mixing casual and formal requests | Inconsistent outputs | Keep tone consistent throughout prompt |
| Not iterating | First attempt may be mediocre | Test, review, refine, repeat |
| Treating prompts as one-time | Missing optimization opportunities | Save and reuse successful prompts |

---

## Evaluation Checklist

### How to Judge Prompt Quality

Use this checklist to evaluate whether your prompt will produce high-quality output:

#### Clarity (Prompt is unambiguous)
- [ ] Task is clearly stated in one sentence
- [ ] No jargon or undefined terms
- [ ] Audience is explicitly mentioned
- [ ] Required format is specified
- [ ] Success criteria is clear

#### Completeness (Nothing is missing)
- [ ] All necessary context is provided
- [ ] Constraints are explicitly listed
- [ ] Error cases are addressed
- [ ] Edge cases are mentioned (if applicable)
- [ ] Examples are provided (for complex tasks)

#### Specificity (No room for interpretation)
- [ ] Length requirements are set (if applicable)
- [ ] Tone is defined
- [ ] Scope boundaries are clear
- [ ] Dependencies or prerequisites are listed
- [ ] Forbidden approaches are mentioned

#### Structure (Output is organized)
- [ ] Output format is specified (JSON, Markdown, etc.)
- [ ] If structured: schema or template is provided
- [ ] Section headings/organization is defined
- [ ] Order of information is specified
- [ ] Delimiter or formatting rules are stated

#### Feasibility (Model can execute)
- [ ] Request is within LLM capabilities
- [ ] No impossible requirements (e.g., "real-time data")
- [ ] Computation is reasonable (not 10k+ words for a one-shot prompt)
- [ ] Role/expertise assigned is realistic
- [ ] No contradictory constraints

### Production Readiness Checklist

Before using generated output in production:

#### Content Validation
- [ ] Output matches all specified requirements
- [ ] No hallucinated information (verify facts)
- [ ] No security vulnerabilities (if code)
- [ ] No proprietary information leaked
- [ ] Tone and style match brand guidelines

#### Code-Specific Validation
- [ ] Syntax is correct (runs without errors)
- [ ] Logic is sound (tested with examples)
- [ ] Error handling is complete
- [ ] Performance is acceptable
- [ ] Security best practices are followed
- [ ] Follows code style guide
- [ ] Includes documentation/comments

#### Content-Specific Validation
- [ ] Grammar and spelling are correct
- [ ] Facts are verified against authoritative sources
- [ ] No plagiarism (check against public sources)
- [ ] Tone is appropriate for audience
- [ ] Structure is logical
- [ ] All requirements are met

#### Integration Validation
- [ ] Format is correct for downstream systems
- [ ] Dependencies are available
- [ ] No breaking changes introduced
- [ ] Backward compatibility maintained
- [ ] Can be parsed/validated programmatically

---

## Conclusion

### Summary

Text prompting is both an art and a science. Mastery requires:

1. **Understanding LLM capabilities**: Know what models can and cannot do
2. **Clarity and specificity**: Replace vagueness with explicit requirements
3. **Structured communication**: Use roles, examples, and constraints effectively
4. **Continuous improvement**: Test, validate, and iterate on prompts
5. **Production discipline**: Validate output before deployment

The techniques covered in this guide—from basic anatomy to advanced prompting strategies—form a complete framework for generating production-ready outputs across code generation, content creation, and documentation.

### Next Steps

1. **Practice**: Start with your most common tasks and develop prompt templates
2. **Document**: Save and refine prompts as you discover what works
3. **Measure**: Track output quality and iterate based on results
4. **Collaborate**: Share successful prompts with your team
5. **Advance**: Experiment with multi-step workflows combining multiple prompts

### Key Takeaways

- **Specific beats vague** every time
- **Examples teach better than instructions** alone
- **Constraints enable consistency** and predictability
- **Production prompts require validation** before use
- **Reusable templates** save time and improve quality

The investment in mastering prompt engineering pays dividends in speed, quality, and reliability of AI-powered outputs.

---

## Appendix: Quick Reference

### Prompt Structure Template (Copy-Paste Ready)

```
You are a [ROLE with relevant expertise].

Task: [Clear, specific task description]

Context: [Background information needed]

Input Format: [How data is provided to you]

Output Format: [Exact format required - JSON, Markdown, code, etc.]

Requirements:
- [Requirement 1]
- [Requirement 2]
- [Requirement 3]

Constraints:
- [Constraint 1]
- [Constraint 2]
- [Length/scope/style constraints]

Examples:
[If complex, provide 1-2 examples of expected input/output]

Validation:
[Any specific checks or validation needed]

Output: [Final instructions about what to return]
```

### Tone Keywords Reference

| Tone | Keywords |
|------|----------|
| Professional | Formal, precise, technical, authoritative, data-driven |
| Casual | Conversational, friendly, approachable, light, informal |
| Educational | Clear, instructional, explanatory, step-by-step, beginner-friendly |
| Persuasive | Compelling, benefit-focused, urgent, confident, action-oriented |
| Analytical | Objective, detailed, evidence-based, thorough, balanced |
| Creative | Imaginative, vivid, engaging, expressive, original |

### Format Quick Reference

| Format | Use Case | Key Elements |
|--------|----------|--------------|
| Markdown | Documentation, blogs, guides | Headings, bullets, code blocks, tables |
| JSON | APIs, data exchange, configuration | Valid syntax, proper nesting, typed values |
| XML/YAML | Configuration, structured data | Proper tagging, indentation, hierarchy |
| CSV | Tabular data, exports | Consistent columns, proper escaping |
| HTML | Web content | Semantic tags, proper nesting, accessibility |

---

**Last Updated**: December 2025  
**Version**: 1.0 (Production Ready)
