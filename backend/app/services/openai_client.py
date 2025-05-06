from openai import OpenAI
from app.services.article_extractors import extract_text_from_url
import os
import json

client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

#chatGPT - 3.5-turbo model을 통한 뉴스 기사 요약 및 감정 분석
def summarize_text(text: str) -> dict:
    prompt = f"""
다음 한국어 뉴스 기사를 읽고 두 가지 작업을 수행하세요.

1. 📝 **요약**: 내용을 간단하고 명확하게 요약하세요.
2. 😊 **감정 분석**: 전체 기사 분위기를 아래 중 하나로 분류하세요: 긍정적, 중립적, 부정적.

뉴스 기사:
\"\"\"
{text}
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
    return json.loads(response.choices[0].message.content.strip())

# url을 통한 기사 요약
def summarize_text_from_article(url: str) -> dict:
    text = extract_text_from_url(url)
    return summarize_text(text)