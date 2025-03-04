from environs import Env

env = Env()
env.read_env()

BOT_TOKEN = env.str("BOT_TOKEN")
ADMINS = env.list("ADMINS", default=[])
WEB_APP_URL = env.str("WEB_APP_URL")