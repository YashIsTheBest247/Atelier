from pydantic import BaseModel

class LessonRequest(BaseModel):
    grade: int
    topic: str