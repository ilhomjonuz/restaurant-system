from aiogram.types import ReplyKeyboardMarkup, KeyboardButton
from aiogram.types import WebAppInfo

from data import config


async def user_menu():
    markup = ReplyKeyboardMarkup(resize_keyboard=True, row_width=1)
    markup.add(
        KeyboardButton(
            text="Online menu",
            web_app=WebAppInfo(url=config.WEB_APP_URL)
        )
    )
    return markup
