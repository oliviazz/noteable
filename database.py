#!/usr/bin/env python
#-----------------------------------------------------------------------
# database.py
# Author: Olivia Zhang, Zoë Barnswell, Lyra Katzman 
#-----------------------------------------------------------------------

from sqlite3 import connect
from sys import stderr
from os import path
from user import User
from article import Article

#-----------------------------------------------------------------------

class Database:
    
    def __init__(self):
        self._connection = None
        self.numUsers = 0;
        self.numArticles = 0;


    def connect(self):      
        DATABASE_NAME = 'database.sqlite'
        if not path.isfile(DATABASE_NAME):
            print >>stderr, "database: connection failed" 
        self._connection = connect(DATABASE_NAME)
                    
    def disconnect(self):
        self._connection.close()
    
    # Adds user to the user table in database
    def addUser(self, firstName, lastName, username, password):
        # SELF.? JUST NUMUSERS?
        self.numUsers = self.numUsers + 1
        userID = 'u' + str(self.numUsers)
        user = User(firstName, lastName, userID, username, password)
        # SQL STATEMENT - add user to the table
    
    # Adds article to the article table in database    
    def addArticle(self, user, url):
        self.numArticles = self.numArticles + 1
        # Unique articleIDs are the hash of the url
        articleID = hash(url)
        userArticleID = 'au' + str(self.numArticles)
        article = Article(articleID, userArticleID)
        # SQL STATMENT - add article to the table
        # if articleID already exists, 
    
    # Removes an article from a user's archive. If no user has this
    # article saved, remove it from the article table.
    def removeArticle(self, user, article):
        user.removeArticle(article)
        # SQL STATEMENT
    
    def main(argv):
    
#-----------------------------------------------------------------------
    if __name__ == '__main__':
        main(argv)