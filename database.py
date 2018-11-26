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
        stmtStr = 'CREATE TABLE user(firstName TEXT, lastName TEXT, userID TEXT, username TEXT, numArticles TEXT)'

        try:
            cursor.execute(stmtStr)
            self._connection.commit()
            #PUT ERROR CHECKING -- ALSO CHECK TO SEE IF THE ARTICLE ALREADY EXISTS

        except Exception, e:
            print >>stderr, e
            return (False, e)

        stmtStr = 'CREATE TABLE articles(articleID TEXT, articleTitle TEXT, articleIcon BLOB, articleBlurb TEXT, articleAuthor TEXT, articleDate TEXT, articleURL TEXT, numUses integer)'

        try:
            cursor.execute(stmtStr)
            self._connection.commit()
            #PUT ERROR CHECKING -- ALSO CHECK TO SEE IF THE ARTICLE ALREADY EXISTS

        except Exception, e:
            print >>stderr, e
            return (False, e)

        stmtStr = 'CREATE TABLE tags(tagName TEXT, numUses integer)'

        try:
            cursor.execute(stmtStr)
            self._connection.commit()
            #PUT ERROR CHECKING -- ALSO CHECK TO SEE IF THE ARTICLE ALREADY EXISTS

        except Exception, e:
            print >>stderr, e
            return (False, e)

        stmtStr = 'CREATE TABLE user_article_tags(userID TEXT, articleID TEXT, tags TEXT)'

        try:
            cursor.execute(stmtStr)
            self._connection.commit()
            #PUT ERROR CHECKING -- ALSO CHECK TO SEE IF THE ARTICLE ALREADY EXISTS

        except Exception, e:
            print >>stderr, e
            return (False, e)
        
    def connect(self):      
        DATABASE_NAME = 'database.sqlite'
        if not path.isfile(DATABASE_NAME):
            print >>stderr, "database: connection failed" 
        self._connection = connect(DATABASE_NAME)
                    
    def disconnect(self):
        self._connection.close()
    
    # Adds user to the user table in database
    def insertUser(self, firstName, lastName, username, password):
        cursor = self._connection.cursor()
        # SELF.? JUST NUMUSERS?
        self.numUsers = self.numUsers + 1
        userID = 'u' + str(self.numUsers)
        user = User(firstName, lastName, userID, username, password)
        # Assume the table already exists
        stmtStr = "INSERT INTO user(firstName, lastName, userID, username) VALUES (?, ?, ?, ?, ?)"
        
        try:
            cursor.execute(stmtStr, [str(user)])
            self._connection.commit()
            #PUT ERROR CHECKING -- ALSO CHECK TO SEE IF THE ARTICLE ALREADY EXISTS

        except Exception, e:
            print >>stderr, e
            return (False, e)

        cursor.close()
        self._connection.close()

    # # Deletes user from user table in database
    def deleteUser(self, userID):
        cursor = self._connection.cursor()
        # SELF.? JUST NUMUSERS?
        self.numUsers = self.numUsers + 1
        userID = 'u' + str(self.numUsers)
        user = User(firstName, lastName, userID, username, password)
        # Assume the table already exists
        stmtStr = "DELETE FROM user WHERE userID = ?"
        
        try:
            cursor.execute(stmtStr, [str(userID)])
            self._connection.commit()
            #PUT ERROR CHECKING -- ALSO CHECK TO SEE IF THE ARTICLE ALREADY EXISTS

        except Exception, e:
            print >>stderr, e
            return (False, e)

        cursor.close()
        self._connection.close()


    # Adds article to the article table in database    
    def insertArticle(self, user, articleTitle, articleIcon, articleBlurb, articleAuthor, articleDate, articleURL, tags):
        cursor = self._connection.cursor()
        self.numArticles = self.numArticles + 1
        # Unique articleIDs are the hash of the url
        articleID = hash(url)
        article = Article(articleID, articleTitle, articleIcon, articleBlurb, articleAuthor, articleDate, articleURL)

        stmtStr = "INSERT OR IGNORE INTO article(articleID, articleTitle, articleIcon, articleBlurb, articleAuthor, articleDate, articleURL) VALUES (?, ?, ?, ?, ?, ?, ?)"
        
        try:
            cursor.execute(stmtStr, [str(article)])
            self._connection.commit()
        except Exception, e:
            print >>stderr, e
            return (False, e)

        stmtStr = "INSERT OR IGNORE INTO user_article_tags(userID, articleID, tags) VALUES user, articleID, tags"
        
        try:
            cursor.execute(stmtStr)
            self._connection.commit()
        except Exception, e:
            print >>stderr, e
            return (False, e)

        stmtStr = "UPDATE user(numArticles) VALUES self.numArticles"
        
        try:
            cursor.execute(stmtStr)
            self._connection.commit()
        except Exception, e:
            print >>stderr, e
            return (False, e)

        cursor.close()
        self._connection.close()
    
    # Removes an article from a user's archive. If no user has this
    # article saved, remove it from the article table.
    def deleteArticle(self, user, article):
        articleID = hash(url)
        stmtStr = "DELETE FROM user_article_tags WHERE article = ? AND userID = ?"
        
        try:
            # can i do this???? w/ three args - ask olivia and zoe
            cursor.execute(stmtStr, [str(articleID), str(user)])
            self._connection.commit()
        except Exception, e:
            print >>stderr, e
            return (False, e)

        cursor = self._connection.cursor()
        self.numArticles = self.numArticles - 1

        if self.numArticles = 0:
            stmtStr = "DELETE FROM articles WHERE article = ?"
            try:
                cursor.execute(stmtStr, [str(articleID)])
                self._connection.commit()
            except Exception, e:
                print >>stderr, e
                return (False, e)
        cursor.close()
        self._connection.close()

    def updateTags(self, user, article, tags):
        cursor = self._connection.cursor()
        self.numArticles = self.numArticles + 1

        # Unique articleIDs are the hash of the url
        articleID = hash(url)
        article = Article(articleID, articleTitle, articleIcon, articleBlurb, articleAuthor, articleDate, articleURL)

        stmtStr = "UPDATE user_article_tags SET tags = ? WHERE user_article_tags.articleID = ? AND user_article_tags.userID = user"
        
        # Ensure the execution is successful
        try:
            cursor.execute(stmtStr, [str(tags), str(article), str(user)])
            self._connection.commit()

        except Exception, e:
            print >>stderr, e
            return (False, e)

        cursor.close()
        self._connection.close()

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