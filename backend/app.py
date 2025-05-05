# app.py
from fastapi import FastAPI
from pydantic import BaseModel
from transformers import pipeline
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from openai import OpenAI
from dotenv import load_dotenv
import os

# ENV file load
load_dotenv()

# API Key read
client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # 또는 ["http://localhost:3000"] 프론트 주소로 제한
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class InputText(BaseModel):
    text: str

@app.post("/analyze")
def analyze_text(data: InputText):
    prompt = f"""
다음 한국어 뉴스 기사를 읽고 두 가지 작업을 수행하세요.

1. 📝 **요약**: 내용을 간단하고 명확하게 요약하세요.
2. 😊 **감정 분석**: 전체 기사 분위기를 아래 중 하나로 분류하세요: 긍정적, 중립적, 부정적.

뉴스 기사:
\"\"\"
{data.text}
\"\"\"

결과는 JSON 형태로 다음과 같이 출력하세요:
{{ "summary": "...", "sentiment": "..." }}
"""

    response = client.chat.completions.create(
    model="gpt-3.5-turbo",
    messages=[
        {"role": "system", "content": "너는 똑똑한 뉴스 분석가야."},
        {"role": "user", "content": prompt}
    ]
)

    # JSON 파싱
    import json
    output = response.choices[0].message.content.strip()
    result = json.loads(output)

    return result