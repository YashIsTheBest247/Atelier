# Atelier — Agentic Curriculum Studio

An AI-powered educational lesson generation platform built with **React.js** and **FastAPI**.

Atelier uses a multi-agent workflow where:

- A **Generator Agent** creates educational content
- A **Reviewer Agent** evaluates the lesson quality
- A lightweight **Refinement Pass** improves content if necessary

The platform provides an elegant luxury-inspired UI with interactive quizzes, reviewer feedback, and real-time AI workflow visualization.

---

# Features

- AI-powered lesson generation
- Multi-agent architecture
- Reviewer feedback system
- Interactive MCQ quiz interface
- Refinement workflow
- Grade support from 1–12
- Modern luxury UI
- Responsive design
- Real-time loading workflow visualization
- FastAPI backend
- React frontend

---

# Tech Stack

## Frontend

- React.js
- Vite
- Axios
- CSS3

## Backend

- FastAPI
- OpenAI API
- Python
- Pydantic

---

# Project Structure

```bash
atelier-ai/
│
├── backend/
│   ├── app/
│   │   ├── agents/
│   │   │   ├── generator_agent.py
│   │   │   ├── reviewer_agent.py
│   │   │   └── refinement.py
│   │   │
│   │   ├── models/
│   │   │   └── schemas.py
│   │   │
│   │   ├── routes/
│   │   │   └── lesson.py
│   │   │
│   │   ├── services/
│   │   │   └── openai_service.py
│   │   │
│   │   ├── config.py
│   │   └── main.py
│   │
│   ├── requirements.txt
│   └── .env
│
├── frontend/
│   ├── src/
│   ├── package.json
│   └── vite.config.js
│
└── README.md
```

---

# Agent Workflow

```text
User Input
    ↓
Generator Agent
    ↓
Reviewer Agent
    ↓
(Optional Refinement Pass)
    ↓
Interactive Lesson UI
```

---

# Generator Agent

## Responsibility

Generate educational lesson content for a selected grade and topic.

## Input

```json
{
  "grade": 4,
  "topic": "Types of angles"
}
```

## Output

```json
{
  "explanation": "...",
  "mcqs": [
    {
      "question": "...",
      "options": [
        "A",
        "B",
        "C",
        "D"
      ],
      "answer": "B"
    }
  ]
}
```

---

# Reviewer Agent

## Responsibility

Evaluate lesson quality based on:

- Age appropriateness
- Clarity
- Conceptual correctness

## Output

```json
{
  "status": "pass",
  "feedback": [
    "Content is age appropriate",
    "Concept explanations are clear"
  ]
}
```

---

# Refinement Logic

If the reviewer returns:

```json
{
  "status": "fail"
}
```

the Generator Agent runs again using reviewer feedback to improve the lesson.

Only one refinement pass is allowed.

---

# Frontend Setup

## 1. Navigate to frontend

```bash
cd frontend
```

---

## 2. Install dependencies

```bash
npm install
```

---

## 3. Run frontend

```bash
npm run dev
```

Frontend runs on:

```text
http://localhost:5173
```

---

# Backend Setup

## 1. Navigate to backend

```bash
cd backend
```

---

## 2. Create virtual environment

### Windows

```bash
python -m venv venv
venv\Scripts\activate
```

### Mac/Linux

```bash
python3 -m venv venv
source venv/bin/activate
```

---

## 3. Install dependencies

```bash
pip install -r requirements.txt
```

---

## 4. Create .env file

Create a file named:

```text
.env
```

inside:

```text
backend/
```

Add:

```env
OPENAI_API_KEY=your_openai_api_key_here
```

---

# Example .env

```env
OPENAI_API_KEY=sk-xxxxxxxxxxxxxxxxxxxxxxxx
```

---

# Run Backend

```bash
uvicorn app.main:app --reload
```

Backend runs on:

```text
http://localhost:8000
```

Swagger docs:

```text
http://localhost:8000/docs
```

---

# API Endpoint

## Generate Lesson

### POST

```http
POST /generate
```

---

## Request Body

```json
{
  "grade": 4,
  "topic": "Types of angles"
}
```

---

## Response

```json
{
  "generator_output": {
    "explanation": "...",
    "mcqs": [...]
  },
  "review": {
    "status": "pass",
    "feedback": [...]
  },
  "refined_output": null
}
```

---

# UI Features

- Luxury black/gold design
- Interactive MCQ selection
- Correct/wrong option highlighting
- Animated loading workflow
- Reviewer analysis section
- Responsive layout
- Agent workflow visibility

---

# Screenshots

## Hero Section

- Atelier branding
- Generator → Reviewer → Refiner workflow
- Cinematic typography

## Lesson Interface

- Interactive MCQs
- Real-time answer validation
- Reviewer feedback

---

# Future Improvements

- Authentication
- Lesson history
- PDF export
- AI streaming responses
- Speech narration
- Database integration
- Multi-language support
- Docker deployment

---

# License

MIT License

---

# Author

Built by Yash Munshi