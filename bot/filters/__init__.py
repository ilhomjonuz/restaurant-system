from aiogram import Dispatcher

from loader import dp
from .private import PrivateFilter, PrivateAdminFilter
from .group import PrivateGroupFilter, SuperGroupFilter


if __name__ == 'filters':
    dp.filters_factory.bind(PrivateFilter)
    dp.filters_factory.bind(PrivateAdminFilter)
    dp.filters_factory.bind(PrivateGroupFilter)
    dp.filters_factory.bind(SuperGroupFilter)
