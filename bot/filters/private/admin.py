from aiogram.types import Message, CallbackQuery

from .private import PrivateFilter
from data import config


class PrivateAdminFilter(PrivateFilter):

    async def check(self, update: Message | CallbackQuery, *args) -> bool:
        return await super().check(update, *args) and update.from_user.id in config.ADMINS
