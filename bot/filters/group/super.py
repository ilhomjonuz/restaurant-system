from aiogram.types import Message, CallbackQuery, ChatType
from aiogram.dispatcher.filters import BoundFilter


class SuperGroupFilter(BoundFilter):

    async def check(self, update: Message | CallbackQuery,  *args) -> bool:
        return update.chat.type == ChatType.SUPERGROUP
