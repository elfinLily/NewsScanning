from fastapi import APIRouter, HTTPException
from app.schemas.request import InputText
from app.services.openai_client import summarize_text_from_article

router = APIRouter()

# 크롤링이 막히는 경우가 있어 예외처리 필수
@router.post("/summarize_url")
def summarize_url(data: InputText):
    try:
        return summarize_text_from_article(data.text)
    except Exception as e:
        raise HTTPException(status_code=400, detail=f"요약 실패: {str(e)}")
