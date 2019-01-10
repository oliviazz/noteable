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
    #-----------------------------------------------------------------------
    #
    # NUMBERS GAME
    #
    #-----------------------------------------------------------------------
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
        print "CountNum 48:" + countNum
        return(countNum)

    #-----------------------------------------------------------------------
    def getUsesNumFromArticle(self, cursor, userID, action):
        stmtStr = "SELECT count(DISTINCT userID) FROM user_article_tags WHERE articleID = (?)"
        try:
            cursor.execute(stmtStr, [str(userID)])
            self._connection.commit()
        except Exception, e:
            print >>stderr, e
            return (False, e)

        numList = cursor.fetchall()
        if len(numList) > 0:
            if len(numList[0]) > 0:
                print numList[0][0]
                return numList[0][0]
            else: return 0
        else: return 0

    #-----------------------------------------------------------------------

    def getArticleNumFromUser(self, cursor, userID, action):
        stmtStr = "SELECT count(DISTINCT articleID) FROM user_article_tags WHERE userID = (?)"
        try:
            cursor.execute(stmtStr, [str(userID)])
            self._connection.commit()
        except Exception, e:
            print >>stderr, e
            return (False, e)

        numList = cursor.fetchall()
        if len(numList) > 0:
            if len(numList[0]) > 0:
                print numList[0][0]
                return numList[0][0]
            else: return 0
        else: return 0


    #-----------------------------------------------------------------------
    #
    # SETUP AND BREAKDOWN
    #
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


        stmtStr = 'CREATE TABLE user_article_tags(userID TEXT NOT NULL, articleID TEXT NOT NULL, tag TEXT, UNIQUE (userID, articleID, tag))'

        try:
            cursor.execute(stmtStr)
            self._connection.commit()
 
        except Exception, e:
            print >>stderr, e
            return None

        stmtStr = 'CREATE TABLE groups(groupName TEXT NOT NULL, groupID TEXT NOT NULL, userID TEXT, UNIQUE (groupName, groupID, userID))'

        try:
            cursor.execute(stmtStr)
            self._connection.commit()
 
        except Exception, e:
            print >>stderr, e
            return None

        stmtStr = 'CREATE TABLE friends(userID1 TEXT NOT NULL, userID2 TEXT NOT NULL, UNIQUE (userID1, userID2))'

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
    #
    # DISPLAY ALL
    #
    #-----------------------------------------------------------------------

    def allFriendPairings(self):
        cursor = self._connection.cursor()

        stmtStr = "SELECT userID1, userID2 FROM friends"
        
        try:
            cursor.execute(stmtStr)
            self._connection.commit()
        except Exception, e:
            print >>stderr, e
            return (False, e)

        allEntries = cursor.fetchall() 

        cursor.close()
        return allEntries

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

        cursor.close()
        return allEntries

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

        cursor.close()
        return allEntries

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

        cursor.close()
        return allEntries

    #-----------------------------------------------------------------------
    #
    #  USER FEATURES
    #
    #-----------------------------------------------------------------------
    # find all the articles for a certain user

    def userArticles(self, userID):
        cursor = self._connection.cursor()
        hashList = []
        urlList = []

        stmtStr = "CREATE TEMPORARY TABLE articleIDList AS SELECT DISTINCT articleID FROM user_article_tags WHERE userID = ?"

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
        userID = 'u' + str(num + 1)
        # userID = str(num + 1)

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

    # Deletes user from user table in databasez
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

    # Deletes user from user table in databasez
    def checkUser(self, userID):
        cursor = self._connection.cursor()

        friendList = []
        cursor = self._connection.cursor()

        stmtStr = "SELECT EXISTS(SELECT 1 FROM users WHERE userID = (?))"

        try:
            cursor.execute(stmtStr, [str(userID)])
            self._connection.commit()
        except Exception, e:
            print >>stderr, e
            return (False, e)
       
        return cursor.fetchall()[0][0]

        cursor.close()

    #-----------------------------------------------------------------------
    #
    #  GROUP FEATURES 
    #
    #-----------------------------------------------------------------------  

    # Adds user to the user table in database
    def getArticlesFromGroup(self, groupname):
        cursor = self._connection.cursor()

        num = self.numUsers(cursor)
        groupID = 'g' + str(num + 1)
        # userID = str(num + 1)

        stmtStr = "INSERT OR IGNORE INTO groups(groupName, groupID) VALUES (?, ?)"
        
        try:
            cursor.execute(stmtStr, [str(groupname), str(groupID)])
            self._connection.commit()

        except Exception, e:
            print >>stderr, e
            return (False, e)

        stmtStr = "INSERT OR IGNORE INTO user_article_tags(userID, articleID, tag) VALUES (?, ?, ?) "
                
        try:
            cursor.execute(stmtStr, [str(groupID), str(articleID), ""])
            self._connection.commit()
        except Exception, e:
            print >>stderr, e
            return (False, e)

        cursor.close()
        return(True)

    #-----------------------------------------------------------------------
    def insertGroup(self, groupname):
        cursor = self._connection.cursor()
        stmtStr = "SELECT groupID FROM groups WHERE groupName = ?"

        try:
            cursor.execute(stmtStr, [str(groupname)])
            self._connection.commit()
        except Exception, e:
            print >>stderr, e
            return (False, e)
        
        num = cursor.fetchall()
        groupID = num

        stmtStr = "CREATE TEMPORARY TABLE articleIDList AS SELECT DISTINCT articleID FROM user_article_tags WHERE userID = ?"

        try:
            cursor.execute(stmtStr, [str(groupID)])
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
    def addToGroups(self, userID, groupName):
        cursor = self._connection.cursor()

        stmtStr = "INSERT INTO groups(groupName, userID) VALUES (?, ?)"

        try:
            cursor.execute(stmtStr, [str(groupName), str(userID)])
            self._connection.commit()
        except Exception, e:
            print >>stderr, e
            return (False, e)
       
        cursor.close()
        return(True)

    #-----------------------------------------------------------------------
    def allUsersInGroup(self, userID, groupName):
        cursor = self._connection.cursor()

        stmtStr = "INSERT INTO groups(groupName, userID) VALUES (?, ?)"

        try:
            cursor.execute(stmtStr, [str(groupName), str(userID)])
            self._connection.commit()
        except Exception, e:
            print >>stderr, e
            return (False, e)
       
        cursor.close()
        return(True)

    #-----------------------------------------------------------------------
    #
    #  ARTICLE FEATURES 
    #
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

        self.updateTags(userID, articleID, tags)
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
    #
    #  FRIEND FEATURES 
    #
    #-----------------------------------------------------------------------  

    def allFriendsofUser(self, userID):
        friendList = []
        cursor = self._connection.cursor()

        stmtStr = "SELECT userID1 FROM friends WHERE userID2 = (?)"

        try:
            cursor.execute(stmtStr, [str(userID)])
            self._connection.commit()
        except Exception, e:
            print >>stderr, e
            return (False, e)
       
        friendList1 = cursor.fetchall()

        stmtStr = "SELECT userID2 FROM friends WHERE userID1 = (?)"

        try:
            cursor.execute(stmtStr, [str(userID)])
            self._connection.commit()
        except Exception, e:
            print >>stderr, e
            return (False, e)
       
        friendList2 = cursor.fetchall()

        print friendList1
        print friendList2

        cursor.close()
        return(True)

    #-----------------------------------------------------------------------
    def displayPending(self, userID1):
        cursor = self._connection.cursor()
        pending = self.checkPending(userID1)

        for friend in pending:
            stmtStr = "SELECT username, firstname, lastname FROM users WHERE userID = (?)"
            try:
                cursor.execute(stmtStr, [str(friend)])
                self._connection.commit()

            except Exception, e:
                print >>stderr, e
                return (False, e)

        allnewfriends = cursor.fetchall()
        cursor.close()
        return(allnewfriends)

    #-----------------------------------------------------------------------
    def checkPending(self, userID1):
        friendList = []
        cursor = self._connection.cursor()

        stmtStr = "SELECT userID1 FROM friends WHERE userID2 = (?)"

        try:
            cursor.execute(stmtStr, [str(userID1)])
            self._connection.commit()
        except Exception, e:
            print >>stderr, e
            return (False, e)

        allpendingIDs = []

        friendList1 = cursor.fetchall()
        for friend in friendList1:
            checked = self.checkFriends(userID1, friend[0])
            if (checked != True):
                allpendingIDs.append(friend[0])

        cursor.close()

        return allpendingIDs

    #-----------------------------------------------------------------------
    def checkFriends(self, userID1, userID2):
        friendList = []
        cursor = self._connection.cursor()

        stmtStr = "SELECT userID1, userID2 FROM friends WHERE userID1 = (?) AND userID2 = (?)"

        try:
            cursor.execute(stmtStr, [str(userID1), str(userID2)])
            self._connection.commit()
        except Exception, e:
            print >>stderr, e
            return (False, e)
       
        friendList1 = cursor.fetchall()

        stmtStr = "SELECT userID1, userID2 FROM friends WHERE userID2 = (?) AND userID1 = (?)"

        try:
            cursor.execute(stmtStr, [str(userID1), str(userID2)])
            self._connection.commit()
        except Exception, e:
            print >>stderr, e
            return (False, e)
       
        friendList2 = cursor.fetchall()

        cursor.close()

        if (len(friendList1) > 0):
            if (len(friendList2) > 0):
                return(True)

        else:
            return(False)

    #-----------------------------------------------------------------------
    def addFriend(self, userID1, userID2):
        check1 = self.checkUser(userID1)
        check2 = self.checkUser(userID2)

        if check1 == 1 and check2 == 1:
            cursor = self._connection.cursor()

            stmtStr = "INSERT INTO friends(userID1, userID2) VALUES (?, ?)"

            try:
                cursor.execute(stmtStr, [str(userID1), str(userID2)])
                self._connection.commit()
            except Exception, e:
                print >>stderr, e
                return (False, e)
           
            cursor.close()
            return(True)

        else:
            if (check1 == 0):
                print 'user1 does not exist'
            elif (check2 == 0):
                print 'user2 does not exist'

    #-----------------------------------------------------------------------
    def deleteFriend(self, userID1, userID2):
        cursor = self._connection.cursor()
        # this is so you only add a friend in one direction to avoid duplicates

        if userID1 <= userID2:
            smaller = userID1
            bigger = userID2
        elif userID1 == userID2:
            return(False, "cannot add self as friend")
        else:
            smaller = userID2
            bigger = userID1

        stmtStr = "DELETE FROM friends WHERE userID1 = (?) AND userID2 = (?)"

        try:
            cursor.execute(stmtStr, [str(smaller), str(bigger)])
            self._connection.commit()
        except Exception, e:
            print >>stderr, e
            return (False, e)
       
        cursor.close()
        return(True)

    #-----------------------------------------------------------------------
    #
    #  FRIEND FEATURES 
    #
    #-----------------------------------------------------------------------  

    def updateTags(self, userID, articleID, newTags):
        cursor = self._connection.cursor()
        stmtStr = "DELETE FROM user_article_tags WHERE userID = (?) AND articleID = (?)"

        try:
            cursor.execute(stmtStr, [str(userID), str(articleID)])
            self._connection.commit()
        except Exception, e:
            print >>stderr, e
            return (False, e)

        listoftags = newTags.split(' ')
        if len(listoftags) > 0:
            for tag in listoftags:
                stmtStr = "INSERT OR IGNORE INTO user_article_tags(userID, articleID, tag) VALUES (?, ?, ?) "
                
                try:
                    cursor.execute(stmtStr, [str(userID), str(articleID), str(tag)])
                    self._connection.commit()
                except Exception, e:
                    print >>stderr, e
                    return (False, e)
        else:
            stmtStr = "INSERT OR IGNORE INTO user_article_tags(userID, articleID, tag) VALUES (?, ?, ?) "
                
            try:
                cursor.execute(stmtStr, [str(userID), str(articleID), ""])
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
    # c.oneTimeOnly()
    # c.deleteFriend("dummy3", "dummy4")
    # c.addFriend("dummy3", "dummy5")
    # c.addFriend("dummy3", "dummy6")
    # c.addFriend("dummy3", "dummy4")

    # c.addFriend("dummy4", "dummy3")
    # c.allFriendsofUser("dummy3")
    # c.addToGroups("dummy3", "smarties")
    # print c.displayPending('dummy3')
    # c.insertUser('firstName', 'lastName', 'username', 'dummy3')
    # c.insertUser('firstName', 'lastName', 'username', 'dummy4')
    # c.insertUser('firstName', 'lastName', 'username', 'dummy5')
    # c.insertUser('firstName', 'lastName', 'username', 'dummy7')
    # print c.allFriendPairings()
    c.disconnect()


