# Python 3.10 bazaviy imidj
FROM python:3.10

# Ishchi katalogni yaratamiz
WORKDIR /app

# Kerakli fayllarni konteynerga nusxalaymiz
COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

# Barcha loyihani nusxalaymiz
COPY . .

# Django migration va Gunicorn bilan serverni ishga tushirish
CMD ["sh", "-c", "python manage.py migrate && gunicorn --workers 4 --bind 0.0.0.0:8002 core.wsgi:application"]
