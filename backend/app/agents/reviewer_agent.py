def review_content(content):

    feedback = []

    explanation = content["explanation"]

    mcqs = content["mcqs"]

    # Age appropriateness

    if len(explanation.split()) > 120:

        feedback.append(
            "Sentence 2 is too complex for Grade 4"
        )

    # Concept alignment

    if len(mcqs) < 3:

        feedback.append(
            "Question 3 tests a concept not introduced"
        )

    # Clarity

    if "trigonometry" in explanation.lower():

        feedback.append(
            "Some terminology is too advanced for the selected grade"
        )

    if feedback:

        return {
            "status": "fail",
            "feedback": feedback
        }

    return {

        "status": "pass",

        "feedback": [

            "Content is age appropriate",

            "Concept explanations are clear",

            "Questions align with the lesson"
        ]
    }