
from sqlite3 import connect
from sys import stderr
from os import path
from database import Database


database = Database()
database.connect()

article="google.com"
try:
    database.addArticle(article_url=article, article_title="Holder article!", article_descrip="Wow! It's a holder description!")
    database.disconnect()
except:
	print('sad')