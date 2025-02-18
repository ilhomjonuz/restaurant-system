from aiogram.types import Message
from aiogram.dispatcher.filters.builtin import CommandStart
from filters import PrivateFilter

from loader import dp
from keyboards.reply import user_menu


@dp.message_handler(PrivateFilter(), CommandStart())
async def private_start(message: Message):
    await message.reply(
        f"Assalomu alaykum {message.from_user.full_name}, botimizga xush kelibsiz!",
        reply_markup=await user_menu()
    )
