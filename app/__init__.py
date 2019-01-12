
#!/usr/bin/env python
#-----------------------------------------------------------------------
# init.py
# Author: Olivia Zhang, Zoe Barnswell, Lyra Katzman 
#-----------------------------------------------------------------------
from flask import Flask
from flask_login import LoginManager


from database import Database
from views import bp

app = Flask(__name__)
app.secret_key = 'super secret string'  # Change this!

login_manager = LoginManager()
database = Database()
database.connect()
# requirements = {'-dept': dept, '-coursenum':coursenum, '-area': area, '-title':title}
# result_classes = database.search(requirements)
# print (len(result_classes))
database.disconnect()

@login_manager.user_loader
def load_user(user_id):
    user_entry = User.get(user_id)
    return User(*user_entry)


login_manager.init_app(app)
app.register_blueprint(bp, url_prefix='/api')

from app import views # noqa

