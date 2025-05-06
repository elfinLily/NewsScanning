from fastapi import APIRouter
from app.schemas.request import InputText
from app.services.openai_client import summarize_text, summarize_text_from_article

router = APIRouter()

# 뉴스 텍스트 분석
@router.post("/analyze")
def analyze(data: InputText):
    return summarize_text(data.text)

@router.post("/summarize_url")
def analyze(data: InputText):
    return summarize_text_from_article(data.text)