from pydantic import BaseModel

# front에서 들어오는 request
class InputText(BaseModel):
    text: str
