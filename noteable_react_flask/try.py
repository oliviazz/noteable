
from sqlite3 import connect
from sys import stderr
from os import path
from database import Database


database = Database()
database.connect()

article="google.com"


database.addArticle(article_url="google.com", article_title="Holder article!", article_descrip="Wow! It's a holder description!")
n = database.getArticles(userid="1234")
print(n, "hi")
database.disconnect()


# try:
# 	database.addArticle(article_url=article, article_title="Holder article!", article_descrip="Wow! It's a holder description!")
# 	database.disconnect()
# except:
# 	print('not working')
