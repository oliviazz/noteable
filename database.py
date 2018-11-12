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
    def insertUser(self, firstName, lastName, username, password):
        # SELF.? JUST NUMUSERS?
        self.numUsers = self.numUsers + 1
        userID = 'u' + str(self.numUsers)
        user = User(firstName, lastName, userID, username, password)

    # # Adds user to the user table in database
    # def deleteUser(self, firstName, lastName, username, password):

    # Adds article to the article table in database    
    def insertArticle(self, user, url, tags):
        self.numArticles = self.numArticles + 1
        # Unique articleIDs are the hash of the url
        articleID = hash(url)
        articleID = 
        article = Article(articleID, articleTitle, articleIcon, articleBlurb, articleAuthor, articleDate, articleURL)
        # SQL STATMENT - add article to the table
        # if articleID already exists, 
    
    # Removes an article from a user's archive. If no user has this
    # article saved, remove it from the article table.
    def deleteArticle(self, user, article):
        user.removeArticle(article)
        # SQL STATEMENT

    # Adds user to the user table in database
    def search(self, requirements):
    

    #-----------------------------------------------------------------3------
        
    def main(argv):

        DATABASE_NAME = 'database.sqlite'
        connect(DATABASE_NAME)

        cursor = connection.cursor()

        #do functions here
        if ()

        cursor.execute(stmtStr, args)
        connection.commit()

        #print stuff

        cursor.close()
        disconnect(DATABASE_NAME)
        
    #-----------------------------------------------------------------------

    if __name__ == '__main__':
        main(argv)