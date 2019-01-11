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
    # HELPER FUNCTIONS!!!! DO NOT USE EXTERNALLY
    #
    #-----------------------------------------------------------------------
    def intersection(self, lst1, lst2): 
        lst3 = [value for value in lst1 if value in lst2] 
        return lst3 

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
                print "Numlist[0][0], 68: " + str(numList[0][0])
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
                print "Numlist[0][0], 87: " + str(numList[0][0])
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

        stmtStr = 'CREATE TABLE pendingFriends(userID1 TEXT NOT NULL, userID2 TEXT NOT NULL, UNIQUE (userID1, userID2))'

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
    def insertGroup(self, groupname):
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

        # stmtStr = "INSERT OR IGNORE INTO user_article_tags(userID, articleID, tag) VALUES (?, ?, ?) "
                
        # try:
        #     cursor.execute(stmtStr, [str(groupID), str(articleID), ""])
        #     self._connection.commit()
        # except Exception, e:
        #     print >>stderr, e
        #     return (False, e)

        cursor.close()
        return(True)

    #-----------------------------------------------------------------------
    def getArticlesFromGroup(self, groupname):
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
    def internallyInsertToGroup(self, groupName, userID, cursor):
        stmtStr = "INSERT INTO friends(userID1, userID2) VALUES (?, ?)"

        try:
            cursor.execute(stmtStr, [str(groupName), str(userID)])
            self._connection.commit()
        except Exception, e:
            print >>stderr, e
            return (False, e)  

    #-----------------------------------------------------------------------
    def addUserToGroup(self, userID, groupName):
        #check that user1, user2 exist, and that they are not already friends
        check1 = self.checkUser(userID1)
        checkGroup = self.checkUser(groupName)
        check3 = self.checkFriends(groupName, userID)
        cursor = self._connection.cursor()

        if check1 == 1 and checkGroup == 1 and check3 != 1:
            self.internallyInsertFriend(groupName, userID, cursor)

        cursor.close()

    #-----------------------------------------------------------------------
    def addArticleToGroup(self, userID, groupName, articleTitle, articleIcon, articleBlurb, articleAuthor, articleDate, articleURL, tags):
        check3 = self.checkFriends(groupName, userID)
        if check3 == 1:
            cursor = self._connection.cursor()
            self.insertArticle(groupName, articleTitle, articleIcon, articleBlurb, articleAuthor, articleDate, articleURL, tags)
            cursor.close()
        
    #-----------------------------------------------------------------------
    #
    #  ARTICLE FEATURES 
    #
    #-----------------------------------------------------------------------   

    # Adds article to the article table in database    
    def insertArticle(self, userID, articleTitle, articleIcon, articleBlurb, articleAuthor, articleDate, articleURL, tags):
        if (self.checkUser(userID) == True):
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
        else:
            return (False, 'This user does not exist')

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
    def internallyCheckPending(self, userID1, cursor):
        stmtStr = "CREATE TEMPORARY TABLE userIDList AS SELECT userID1 FROM pendingfriends WHERE userID2 = ? "
        try:
            cursor.execute(stmtStr, [str(userID1)])
            self._connection.commit()
        except Exception, e:
            print >>stderr, e
            return (False, e)

    #-----------------------------------------------------------------------

    def displayPending(self, userID1):
        cursor = self._connection.cursor()
        self.internallyCheckPending(userID1, cursor)

        stmtStr = "SELECT users.firstname, users.lastname, users.username, users.userID FROM users, temp.userIDList WHERE users.userID = userIDList.userID1"
        try:
            cursor.execute(stmtStr)
            self._connection.commit()
        except Exception, e:
            print >>stderr, e
            return (False, e)

        curse = cursor.fetchall()
        print curse
        cursor.close()
        return curse


    #-----------------------------------------------------------------------
    def checkFriends(self, userID1, userID2):
        cursor = self._connection.cursor()
        stmtStr = "SELECT EXISTS(SELECT 1 FROM friends WHERE userID1 = (?) AND userID2 = (?))"

        try:
            cursor.execute(stmtStr, [str(userID2), str(userID1)])
            self._connection.commit()
        except Exception, e:
            print >>stderr, e
            return (False, e)

        return cursor.fetchall()[0][0] == 1
        cursor.close()

    #-----------------------------------------------------------------------
    def addFriend(self, userID1, userID2):
        #check that user1, user2 exist, and that they are not already friends
        check1 = self.checkUser(userID1)
        check2 = self.checkUser(userID2)
        check3 = self.checkFriends(userID1, userID2)
        cursor = self._connection.cursor()

        if check1 == 1 and check2 == 1 and check3 == 0 and userID1 != userID2:
            stmtStr = "SELECT EXISTS(SELECT 1 FROM pendingfriends WHERE userID1 = (?) AND userID2 = (?))"

            try:
                cursor.execute(stmtStr, [str(userID2), str(userID1)])
                self._connection.commit()
            except Exception, e:
                print >>stderr, e
                return (False, e)
           
            if cursor.fetchall()[0][0] == 1:
                self.internallyInsertFriend(userID1, userID2, cursor)
                self.internallyInsertFriend(userID2, userID1, cursor)
                self.internallyDeletePending(userID2, userID1, cursor)
            else:
                self.internallyInsertPendingFriend(userID1, userID2, cursor)

        cursor.close()

    #-----------------------------------------------------------------------
    def internallyInsertPendingFriend(self, userID1, userID2, cursor):
        stmtStr = "INSERT OR IGNORE INTO pendingFriends(userID1, userID2) VALUES (?, ?)"
        try:
            cursor.execute(stmtStr, [str(userID1), str(userID2)])
            self._connection.commit()
        except Exception, e:
            print >>stderr, e
            return (False, e) 

    #-----------------------------------------------------------------------
    def internallyInsertFriend(self, userID1, userID2, cursor):
        stmtStr = "INSERT INTO friends(userID1, userID2) VALUES (?, ?)"
        try:
            cursor.execute(stmtStr, [str(userID1), str(userID2)])
            self._connection.commit()
        except Exception, e:
            print >>stderr, e
            return (False, e)   

    #-----------------------------------------------------------------------
    def internallyDeletePending(self, userID1, userID2, cursor):
        stmtStr = "DELETE FROM pendingfriends WHERE userID1 = (?) and userID2 = (?)"
        try:
            cursor.execute(stmtStr, [str(userID1), str(userID2)])
            self._connection.commit()
        except Exception, e:
            print >>stderr, e
            return (False, e)
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
    #  TAG FEATURES 
    #
    #-----------------------------------------------------------------------
    def insertTags(self):  
        cursor = self._connection.cursor()
        allTags = self.allTags()
        for tag in allTags:
            print tag
            stmtStr = "INSERT INTO tags(tagName) VALUES (?)"
            cursor.execute(stmtStr, [str(tag)])
            self._connection.commit()

        cursor.close()

    #-----------------------------------------------------------------------
    def allTags(self):  
        cursor = self._connection.cursor()

        stmtStr = "SELECT * FROM tags"
        
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

    def allTags(self):
        tagList = ['News', 'Politics', 'Food', 'Business', 'Reading', 'Technology', 'Blogs', 'Money', 'Productivity', 'Games',
        'School', 'Environment', 'Media', 'Travel', 'Sports', 'Religion', 'Health', 'Weather', 'Celebrity', 'Science', 
        'Design', 'Art', 'Comedy', 'Film', 'Music', 'Fashion', 'Race', 'World', 'Economy', 'Later', 'Popular', 'College',
        'History', 'Entrepreneurship', 'Animals', 'Architecture', 'Holidays', 'Kids', 'Entertainment', 'Baking', 'Cooking', 'AI', 
        'Journalism', 'Advice', 'Creative', 'Lists', 'Real Estate', 'World', 'USA', 'NYC']
        return tagList

    def deleteTags(self, tags):
        taglist = self.allTags()
        splittags = tags.split(' ')
        for tag in splittags:
            if tag in taglist:
                taglist.remove(tag)
        return taglist

    #-----------------------------------------------------------------------
    #
    #  SEARCH FEATURES
    #
    #-----------------------------------------------------------------------
    
    # all of a user's articles
    def userArticles(self, userID, tags):
        cursor = self._connection.cursor()

        stmtStr = "CREATE TEMPORARY TABLE articleIDList AS SELECT DISTINCT articleID FROM user_article_tags WHERE userID = ? "

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

        curse = cursor.fetchall()
        print curse
        return curse

    # search by any amount of tags
    def userTagArticles(self, userID, tags):
        deleteTags = self.deleteTags(tags)
        cursor = self._connection.cursor()

        taglist = tags.split(' ')
        if len(taglist) == 0:
            allArticles = self.userArticles(userID, tags)
            cursor.close()
            return allArticles
        else:
            stmtStr = "CREATE TEMPORARY TABLE articleIDList AS SELECT DISTINCT articleID, tag FROM user_article_tags WHERE userID = ?"

            try:
                cursor.execute(stmtStr, [str(userID)])
                self._connection.commit()
            except Exception, e:
                print >>stderr, e
                return (False, e)

            for tag in deleteTags:
                stmtStr = "DELETE FROM temp.articleIDList WHERE tagName = ? "
                try:
                    cursor.execute(stmtStr, [str(tag)])
                    self._connection.commit()
                except Exception, e:
                    print >>stderr, e
                    return (False, e)

            stmtStr = "SELECT DISTINCT * FROM articles, temp.articleIDList WHERE articles.articleID = articleIDList.articleID"
            try:
                cursor.execute(stmtStr)
                print  "yo"
                self._connection.commit()
            except Exception, e:
                print >>stderr, e
                return (False, e)

            allArticles = cursor.fetchall()

            cursor.close()
            return allArticles

    #-----------------------------------------------------------------------
    def internallyDisplayArticles(self, cursor):
        stmtStr = "SELECT * FROM temp.articleTagFriends, articles WHERE articles.articleID = articleTagFriends.articleID"
        try:
            cursor.execute(stmtStr)
            self._connection.commit()
        except Exception, e:
            print >>stderr, e
            return (False, e)

        return cursor.fetchall()

    #-----------------------------------------------------------------------
    def internallyDeleteArticlesWithoutTags(self, cursor):
        stmtStr = "DELETE FROM temp.articleTagFriends WHERE EXISTS (SELECT * FROM temp.tagsCopy WHERE articleTagFriends.tag = tagsCopy.tagName)"
        try:
            cursor.execute(stmtStr)
            self._connection.commit()
        except Exception, e:
            print >>stderr, e
            return (False, e)

        return cursor.fetchall()

    #-----------------------------------------------------------------------
    def internallyDeleteTags(self, allTags, cursor):
        splittags = allTags.split(' ')
        for tag in splittags:
            stmtStr = "DELETE FROM temp.tagsCopy WHERE tagName = ? "
            try:
                cursor.execute(stmtStr, [str(tag)])
                self._connection.commit()
            except Exception, e:
                print >>stderr, e
                return (False, e)

    #-----------------------------------------------------------------------
    def internallyAllTags(self, cursor):
        stmtStr = "SELECT * FROM temp.tagsCopy"

        try:
            cursor.execute(stmtStr)
            self._connection.commit()
        except Exception, e:
            print >>stderr, e
            return (False, e)

        return cursor.fetchall()

    #-----------------------------------------------------------------------
    def internallyCopyTags(self, cursor):
        stmtStr = "CREATE TEMPORARY TABLE tagsCopy AS SELECT * FROM tags"
        try:
            cursor.execute(stmtStr)
            self._connection.commit()
        except Exception, e:
            print >>stderr, e
            return (False, e)

    #-----------------------------------------------------------------------
    def internallyArticleTagFromUsers(self, cursor):
        stmtStr = "CREATE TEMPORARY TABLE articleTagFriends AS SELECT user_article_tags.articleID, user_article_tags.tag FROM user_article_tags, temp.userIDFriends WHERE user_article_tags.userID = userIDFriends.userID2"
        try:
            cursor.execute(stmtStr)
            self._connection.commit()
        except Exception, e:
            print >>stderr, e
            return (False, e)

    #-----------------------------------------------------------------------
    def internallyFriendList(self, userID1, cursor):
        stmtStr = "CREATE TEMPORARY TABLE userIDFriends AS SELECT userID2 FROM friends WHERE userID1 = ? "
        try:
            cursor.execute(stmtStr, [str(userID1)])
            self._connection.commit()
        except Exception, e:
            print >>stderr, e
            return (False, e)

    #-----------------------------------------------------------------------
    def feed(self, userID, tags):
        curse = []
        cursor = self._connection.cursor()
        splitTags = tags.split(' ')
        if len(splitTags) == 0:
            print "no tags, display all"
        else:
            self.internallyFriendList(userID, cursor)
            self.internallyArticleTagFromUsers(cursor)
            self.internallyCopyTags(cursor)
            # print self.internallyAllTags(cursor)
            self.internallyDeleteTags(tags, cursor)
            # print self.internallyAllTags(cursor)
            self.internallyDeleteArticlesWithoutTags(cursor)
            curse = self.internallyDisplayArticles(cursor)

        cursor.close()
        return curse

    #-----------------------------------------------------------------------

if __name__ == '__main__':
    # # test user is 2018
    c = Database()
    c.connect()
    # c.insertArticle('dummy3', 'articleTitle', 'articleIcon', 'articleBlurb', 'articleAuthor', 'articleDate', 'articleURL', 'Food Economy Politics Design')
    # c.insertArticle('dummy3', 'articleTitle', 'articleIcon', 'articleBlurb', 'articleAuthor', 'articleDate', 'articleURL2', 'Food Economy Politics')

    # print c.userTagArticles('dummy3', 'Food')
    # print c.userTagArticles('dummy3', 'Economy Politics')
    # c.displayPending('dummy3')
    # c.displayPending('dummy3')

    # c.displayPending('dummy6')
    # print c.allTags()
    # c.internallyArticleTagFromUsers()
    print c.feed('dummy2', 'Design')
    # print c.checkFriends('dummy3', 'dummy2')
    c.disconnect()



