from telegram.ext import Updater, CommandHandler

# Bot tokenini BotFather'dan olingan token bilan almashtiring
BOT_TOKEN = "8289908425:AAHiPFWiEdGqjxPfUil8VWwepgBOG3hudqA"

# /start komandasi uchun funksiya
def start(update, context):
    update.message.reply_text("Salom bu bot Instagramda nakrutga beradi ✅")
    update.message.reply_text("Mini appda registratsiya qiling")

def main():
    updater = Updater(BOT_TOKEN, use_context=True)
    dp = updater.dispatcher

    # /start komandasi handler
    dp.add_handler(CommandHandler("start", start))

    # Botni ishga tushirish
    updater.start_polling()
    updater.idle()


if __name__ == "__main__":
    main()

