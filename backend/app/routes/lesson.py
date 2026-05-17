from fastapi import APIRouter
from app.models.schemas import LessonRequest
from app.agents.generator_agent import generate_lesson
from app.agents.reviewer_agent import review_content
from app.agents.refinement import refine_lesson

router = APIRouter()

@router.post("/generate")
def generate(data: LessonRequest):

    generated = generate_lesson(
        data.grade,
        data.topic
    )

    review = review_content(generated)

    refined_output = None

    if review["status"] == "fail":

        refined_output = refine_lesson(
            data.grade,
            data.topic,
            review["feedback"]
        )

    return {
        "generator_output": generated,
        "review": review,
        "refined_output": refined_output
    }