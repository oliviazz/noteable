#!/usr/bin/env python
#-----------------------------------------------------------------------
# database.py
# Author: Olivia Zhang, Zoe Barnswell, Lyra Katzman 
#-----------------------------------------------------------------------

from sqlite3 import connect
from sys import stderr
from os import path
from user import User
from article import Article

#-----------------------------------------------------------------------

class Database:

    def numUsers(self, cursor):
        stmtStr = 'SELECT count(*) FROM users'

        try:
            cursor.execute(stmtStr)
            self._connection.commit()

        except Exception, e:
            print >>stderr, e
            return None

        countList = cursor.fetchone()
        countNum = countList[0]
        print countNum
        return(countNum)

    #-----------------------------------------------------------------------

    def numArticles(self, cursor):
        stmtStr = 'SELECT count(*) FROM articles'

        try:
            cursor.execute(stmtStr)
            self._connection.commit()

        except Exception, e:
            print >>stderr, e
            return None

        countList = cursor.fetchone()
        countNum = countList[0]
        print countNum
        return(countNum)

    #-----------------------------------------------------------------------

    def oneTimeOnly(self):
        try:
            conn = connect("noteable.sqlite")
        except Exception, e:
            print(e)

        self._connection = conn

        cursor = conn.cursor()

        stmtStr = 'CREATE TABLE users(firstName TEXT NOT NULL, lastName TEXT NOT NULL, userID TEXT NOT NULL UNIQUE, username TEXT NOT NULL, numArticles integer)'

        try:
            cursor.execute(stmtStr)
            self._connection.commit()

        except Exception, e:
            print >>stderr, e
            return None

        stmtStr = 'CREATE TABLE articles(articleID TEXT NOT NULL UNIQUE, articleTitle TEXT NOT NULL, articleIcon TEXT, articleBlurb TEXT NOT NULL, articleAuthor TEXT , articleDate TEXT NOT NULL, articleURL TEXT NOT NULL, numUses integer)'

        try:
            cursor.execute(stmtStr)
            self._connection.commit()

        except Exception, e:
            print >>stderr, e
            return None

        stmtStr = 'CREATE TABLE tags(tagName TEXT NOT NULL UNIQUE, numUses integer)'

        try:
            cursor.execute(stmtStr)
            self._connection.commit()

        except Exception, e:
            print >>stderr, e
            return None

        stmtStr = 'CREATE TABLE user_article_tags(userID TEXT NOT NULL, articleID TEXT NOT NULL, tags TEXT, UNIQUE (userID, articleID))'

        try:
            cursor.execute(stmtStr)
            self._connection.commit()
 
        except Exception, e:
            print >>stderr, e
            return None

        cursor.close()
        self._connection.close()

    #-----------------------------------------------------------------------

    def connect(self):      
        DATABASE_NAME = 'noteable.sqlite'
        if not path.isfile(DATABASE_NAME):
            print >>stderr, "database: connection failed" 
        self._connection = connect(DATABASE_NAME)

    #-----------------------------------------------------------------------
                    
    def disconnect(self):
        self._connection.close()

    #-----------------------------------------------------------------------

    def allUsers(self):
        cursor = self._connection.cursor()

        stmtStr = "SELECT userID FROM users"
        
        try:
            cursor.execute(stmtStr)
            self._connection.commit()
        except Exception, e:
            print >>stderr, e
            return (False, e)

        allEntries = cursor.fetchall() 
        for entry in allEntries:
            print entry
            
        cursor.close()

    #-----------------------------------------------------------------------

    def allArticles(self):
        cursor = self._connection.cursor()

        stmtStr = "SELECT articleID FROM articles"
        
        try:
            cursor.execute(stmtStr)
            self._connection.commit()
        except Exception, e:
            print >>stderr, e
            return (False, e)

        allEntries = cursor.fetchall() 
        for entry in allEntries:
            print entry

        cursor.close()

    #-----------------------------------------------------------------------

    def allUsersArticlesTags(self):
        cursor = self._connection.cursor()

        stmtStr = "SELECT userID FROM user_article_tags"
        
        try:
            cursor.execute(stmtStr)
            self._connection.commit()
        except Exception, e:
            print >>stderr, e
            return (False, e)

        allEntries = cursor.fetchall() 
        for entry in allEntries:
            print entry

        cursor.close()

    #-----------------------------------------------------------------------

    # def userFriends(self, userID):
    #     cursor = self._connection.cursor()
    #     hashList = []
    #     urlList = []

    #     stmtStr = "CREATE TEMPORARY TABLE allFriendsList AS SELECT friends FROM user WHERE userID = ?"

    #     try:
    #         cursor.execute(stmtStr, [str(userID)])
    #         self._connection.commit()
    #     except Exception, e:
    #         print >>stderr, e
    #         return (False, e)

    #     stmtStr = "SELECT * FROM articleIDList"

    #     try:
    #         cursor.execute(stmtStr)
    #         self._connection.commit()
    #     except Exception, e:
    #         print >>stderr, e
    #         return (False, e)

    #     print cursor.fetchall()

    #     stmtStr = "SELECT * FROM articles, temp.articleIDList WHERE articles.articleID = articleIDList.articleID"

    #     try:
    #         cursor.execute(stmtStr)
    #         self._connection.commit()
    #     except Exception, e:
    #         print >>stderr, e
    #         return (False, e)

    #     return cursor.fetchall()
    #-----------------------------------------------------------------------

    def userArticles(self, userID):
        cursor = self._connection.cursor()
        hashList = []
        urlList = []

        stmtStr = "CREATE TEMPORARY TABLE articleIDList AS SELECT articleID FROM user_article_tags WHERE userID = ?"

        try:
            cursor.execute(stmtStr, [str(userID)])
            self._connection.commit()
        except Exception, e:
            print >>stderr, e
            return (False, e)

        stmtStr = "SELECT * FROM articles, temp.articleIDList WHERE articles.articleID = articleIDList.articleID"

        try:
            cursor.execute(stmtStr)
            self._connection.commit()
        except Exception, e:
            print >>stderr, e
            return (False, e)

        return cursor.fetchall()
        
    #-----------------------------------------------------------------------
    
    # Adds user to the user table in database
    def insertUser(self, firstName, lastName, username, userIDTest):
        cursor = self._connection.cursor()

        num = self.numUsers(cursor)
        # userID = 'u' + str(num + 1)
        userID = str(num + 1)

        print userID
        user = User(firstName, lastName, userID, username)
        stmtStr = "INSERT OR IGNORE INTO users(firstName, lastName, userID, username, numArticles) VALUES (?, ?, ?, ?, ?)"
        
        try:
            cursor.execute(stmtStr, [str(user.firstName), str(user.lastName), str(userIDTest), str(user.username), 0])
            self._connection.commit()

        except Exception, e:
            print >>stderr, e
            return (False, e)

        cursor.close()
        return(True)

    #-----------------------------------------------------------------------

    # # Deletes user from user table in databasez
    def deleteUser(self, userID):
        cursor = self._connection.cursor()

        stmtStr = "DELETE FROM users WHERE userID = ?"
        
        try:
            cursor.execute(stmtStr, [str(userID)])
            self._connection.commit()

        except Exception, e:
            print >>stderr, e
            return (False, e)

        stmtStr = "DELETE FROM user_article_tags WHERE userID = ?"
        
        try:
            cursor.execute(stmtStr, [str(userID)])
            self._connection.commit()

        except Exception, e:
            print >>stderr, e
            return (False, e)

        cursor.close()
        return(True)

    #-----------------------------------------------------------------------

    def getUsesNumFromArticle(self, cursor, articleID, action):
        stmtStr = "SELECT articles.numUses FROM articles WHERE articleID = (?) "
        
        try:
            cursor.execute(stmtStr, [str(articleID)])
            self._connection.commit()
        except Exception, e:
            print >>stderr, e
            return (False, e)

        countList = cursor.fetchall() 
        
        print(countList, 'countlist')
        countNum = countList[0][0] + action

        stmtStr = "UPDATE articles SET numUses = (?) WHERE articleID = (?)"
        
        try:
            cursor.execute(stmtStr, [countNum, str(articleID)])
            self._connection.commit()
        except Exception, e:
            print >>stderr, e
            return (False, e)

        return countNum

    #-----------------------------------------------------------------------

    def getArticleNumFromUser(self, cursor, userID, action):
        stmtStr = "SELECT users.numArticles FROM users WHERE userID = (?) "
        
        try:
            cursor.execute(stmtStr, [str(userID)])
            self._connection.commit()
        except Exception, e:
            print >>stderr, e
            return (False, e)

        countList = cursor.fetchall()
        print(countList, 'countList')
        
        try:
            countNum = countList[0][0] + action
        except:
            countNum = 0
        print(countNum, "countNum")

        stmtStr = "UPDATE users SET numArticles = (?) WHERE userID = (?) "
        
        try:
            cursor.execute(stmtStr, [countNum, str(userID)])
            self._connection.commit()
        except Exception, e:
            print >>stderr, e
            return (False, e)
        print countNum
        
        return countNum

    #-----------------------------------------------------------------------

    # Adds article to the article table in database    
    def insertArticle(self, userID, articleTitle, articleIcon, articleBlurb, articleAuthor, articleDate, articleURL, tags):
        cursor = self._connection.cursor()
        # Unique articleIDs are the hash of the url
        articleID = hash(articleURL)
        article = Article(articleID, articleTitle, articleIcon, articleBlurb, articleAuthor, articleDate, articleURL)

        stmtStr = "INSERT OR IGNORE INTO articles(articleID, articleTitle, articleIcon, articleBlurb, articleAuthor, articleDate, articleURL, numUses) VALUES (?, ?, ?, ?, ?, ?, ?, ?)"
        
        try:
            cursor.execute(stmtStr, [str(article.articleID), str(article.articleTitle), str(article.articleIcon), str(article.articleBlurb), str(article.articleAuthor), str(article.articleDate), str(article.articleURL), 0])
            self._connection.commit()
        except Exception, e:
            print >>stderr, e
            return (False, e)

        stmtStr = "INSERT OR IGNORE INTO user_article_tags(userID, articleID, tags) VALUES (?, ?, ?) "
        
        try:
            cursor.execute(stmtStr, [str(userID), str(articleID), str(tags)])
            self._connection.commit()
        except Exception, e:
            print >>stderr, e
            return (False, e)

        # updateTags(self, userID, articleID, tags)

        self.getUsesNumFromArticle(cursor, articleID, 1)
        self.getArticleNumFromUser(cursor, userID, 1)

        cursor.close()
        return (True)

    #-----------------------------------------------------------------------

    # Removes an article from a user's archive. If no user has this
    # article saved, remove it from the article table.
    def deleteArticle(self, userID, articleID):
        cursor = self._connection.cursor()
        stmtStr = "DELETE FROM user_article_tags WHERE articleID = ? AND userID = ?"

        
        try:
            cursor.execute(stmtStr, [str(articleID), str(userID)])
            self._connection.commit()
        except Exception, e:
            print >>stderr, e
            return (False, e)

        self.getArticleNumFromUser(cursor, userID, -1)
        countNum = self.getUsesNumFromArticle(cursor, articleID, -1)

        if countNum == 0:
            stmtStr = "DELETE FROM articles WHERE articleID = ? "
            try:
                cursor.execute(stmtStr, [str(articleID)])
                self._connection.commit()
            except Exception, e:
                print >>stderr, e
                return (False, e)
        cursor.close()
        return(True)

    #-----------------------------------------------------------------------
     #-----------------------------------------------------------------------
     # def updateFriends(self, userID, newFriends):
     #    cursor = self._connection.cursor()
     #    stmtStr = "SELECT user.friends FROM users WHERE userID = (?)"
     #    allFriends = []r

     #    try:
     #        cursor.execute(stmtStr, [str(userID), str(articleID)])
     #        self._connection.commit()
     #    except Exception, e:
     #        print >>stderr, e
     #        return (False, e)

     #    countList = cursor.fetchall()

     #    for friendList in countList:
     #        for friends in friendList:
     #            if friend not in friends:
     #                allFriends.append(friend)
     #                print friend

     #    for newFriend in [newFriends]:
     #        if newFriend not in allFriends:
     #            allFriends.append(newFriend)
     #            print newFriend

     #    stmtStr = "UPDATE users SET friends = (?) WHERE userID = (?)"
        
     #    try:
     #        cursor.execute(stmtStr, [str(newTags), str(userID), str(articleID)])
     #        self._connection.commit()
     #    except Exception, e:
     #        print >>stderr, e
     #        return (False, e)
        
     #    cursor.close()
     #    return(True)

    #-----------------------------------------------------------------------

    def updateTags(self, userID, articleID, newTags):
        cursor = self._connection.cursor()
        stmtStr = "SELECT user_article_tags.tags FROM user_article_tags WHERE userID = (?) AND articleID = (?)"
        allTags = []

        try:
            cursor.execute(stmtStr, [str(userID), str(articleID)])
            self._connection.commit()
        except Exception, e:
            print >>stderr, e
            return (False, e)

        countList = cursor.fetchall()
        for tagList in countList:
            for tag in tagList:
                if tag not in newTags:
                    allTags.append(tag)
                    print tag

        for newTag in [newTags]:
            if newTag not in allTags:
                allTags.append(newTag)
                print newTag

        stmtStr = "UPDATE user_article_tags SET tags = (?) WHERE articleID = (?) AND userID = (?) "
        
        try:
            cursor.execute(stmtStr, [str(newTags), str(userID), str(articleID)])
            self._connection.commit()
        except Exception, e:
            print >>stderr, e
            return (False, e)
        
        cursor.close()
        return(True)

    #-----------------------------------------------------------------------

if __name__ == '__main__':
    # # test user is 2018
    c = Database()
    c.connect()
    articles = c.userArticles("dummy")
    print articles
    # # # /# # c.insertUser()
    # # # # # c.insertUser("firstName", "lastName", "username")
    # c.insertArticle('dummy', 'articleTitle', 'articleIcon', 'articleBlurb', 'articleAuthor', 'articleDate', 'articleURL', 'tags')

    # # # # # c.deleteUser("u4")
    # # c.insertUser("firstName", "lastName", "username", "dummy")
    # # # c.allArticles()
    # # c.allUsers()
    # articles = c.userArticles('dummy')
    # print articles
    # # # c.updateTags("u2018", "8834987638503293291", ["hello"])
    # # # c.allUsersArticlesTags()
    c.disconnect()


