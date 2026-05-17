from app.agents.generator_agent import generate_lesson

def refine_lesson(grade, topic, feedback):

    refined = generate_lesson(
        grade,
        topic,
        feedback
    )

    return refined