# Python bazaviy imidjidan foydalanamiz
FROM python:3.10

# Ishchi katalogni yaratamiz
WORKDIR /app

# Kerakli fayllarni konteynerga nusxalaymiz
COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

# Barcha loyihani nusxalaymiz
COPY . .

# Botni ishga tushiramiz
CMD ["python", "app.py"]
