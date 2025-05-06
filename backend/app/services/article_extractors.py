from newspaper import Article

def extract_text_from_url(url: str) -> str:
    article = Article(url, language='ko')
    article.download()
    article.parse()
    return article.text
