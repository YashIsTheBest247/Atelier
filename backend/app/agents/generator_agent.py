import json
from app.services.openai_service import client


def generate_lesson(grade, topic, feedback=None):

    extra = ""

    if feedback:
        extra = f"Improve based on feedback: {feedback}"

    prompt = f"""
    Generate educational content for Grade {grade}
    on the topic '{topic}'.

    Return ONLY valid JSON.

    Format:
    {{
      "explanation": "...",
      "mcqs": [
        {{
          "question": "...",
          "options": ["A", "B", "C", "D"],
          "answer": "B"
        }}
      ]
    }}

    {extra}
    """

    response = client.chat.completions.create(
        model="gpt-4o-mini",
        messages=[
            {
                "role": "user",
                "content": prompt
            }
        ],
        temperature=0.7
    )

    content = response.choices[0].message.content

    # Remove markdown json formatting if present
    content = content.replace("```json", "")
    content = content.replace("```", "")
    content = content.strip()

    return json.loads(content)