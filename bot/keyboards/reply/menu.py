from aiogram.types import ReplyKeyboardMarkup, KeyboardButton
from aiogram.types import WebAppInfo


async def user_menu():
    markup = ReplyKeyboardMarkup(resize_keyboard=True, row_width=1)
    markup.add(
        KeyboardButton(
            text="Online menu",
            web_app=WebAppInfo(url="https://430d-90-156-198-10.ngrok-free.app/products/products-list/")
        )
    )
    return markup
