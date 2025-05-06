
# 📰 News Summarizer
![Python](https://img.shields.io/badge/Python-3.11-blue)
![Vite](https://img.shields.io/badge/Vite-%20fast%20build-orange)
![License](https://img.shields.io/badge/License-MIT-green)
![Made by Lily](https://img.shields.io/badge/made%20by-Lily-lightgrey)

AI 기반 뉴스 요약 웹 애플리케이션  
Paste or link → Get a summarized & sentiment-analyzed result 💡

---

## 🚀 Features

- 📌 **뉴스 요약**: OpenAI API 기반 기사 요약
- 🔗 **링크 & 텍스트 입력** 모두 지원
- 🎨 **모던 UI**: React + Vite + TailwindCSS
- ⚙️ **FastAPI 백엔드**: 비동기 처리 및 구조 분리
- 💡 **감정 분석**

---

## 🖥️ Tech Stack

| Frontend | Backend | AI/Infra |
|----------|---------|----------|
| React (Vite) | FastAPI | OpenAI API |
| Tailwind CSS | Pydantic |  |
| Axios | Uvicorn | dotenv, pyenv |

---

## 📂 Project Structure

```
📦 frontend/
 ┣ 📂 src/
 ┃ ┣ 📂 pages/
 ┃ ┣ 📂 components/
 ┃ ┣ 📂 api/
 ┃ ┗ 📄 main.jsx
📦 backend/
 ┣ 📂 app/
 ┃ ┣ 📂 routes/
 ┃ ┣ 📂 schemas/
 ┃ ┣ 📂 services/
 ┃ ┗ 📄 main.py
```

---

## 🛠️ Setup

### Frontend

```bash
cd frontend
npm install
npm run dev
```

### Backend

```bash
cd backend
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
uvicorn app.main:app --reload
```

---

## 💬 Usage

- `localhost:3000` 접속 후
  - URL 입력 or 텍스트 붙여넣기
  - 요약 및 감정 결과 확인

---

## 📌 TODO

- [ ] 프론트 정리: UX/에러/로딩 처리
- [ ] 뉴스 카테고리 분류 추가
- [ ] 뉴스 본문 자동 추출 정확도 개선
- [ ] 감정 분석 추가 (KoBERT or OpenAI)
- [ ] huggingface 연동

---

## 📄 License

MIT

---

## ✨ Author

> 조주은 Cho Ju Eun (Lily)  
> Notion: 
> Email: wndms0224@gmail.com
