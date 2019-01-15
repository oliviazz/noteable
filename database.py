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
    # HELPER FUNCTIONS FOR NUMBERS!!!! DO NOT USE EXTERNALLY
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

        stmtStr = 'CREATE TABLE users(firstName TEXT NOT NULL, lastName TEXT NOT NULL, username TEXT NOT NULL UNIQUE, userID TEXT NOT NULL UNIQUE, numArticles integer, UNIQUE(username, userID))'

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

        stmtStr = 'CREATE TABLE groups(groupname TEXT NOT NULL UNIQUE, groupID TEXT NOT NULL UNIQUE, UNIQUE (groupname, groupID))'

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

    #-----------------------------------------------------------------------
    #
    # Parameters: 
    #
    #-----------------------------------------------------------------------

    def allGroups(self):
        cursor = self._connection.cursor()

        stmtStr = "SELECT * FROM groups"
        
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
    # Parameters: None
    # Does: Selects all friend pairings and returns all (shows up double) -
    # THIS IS NOT INTENDED FOR EXTERNAL USE
    # Returns: All friend pairings
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

    #-----------------------------------------------------------------------
    #
    # Parameters: just cursor and groupname
    # Does: creates a temp array of all of the users in a group
    # Returns: nothing
    #
    #-----------------------------------------------------------------------

    def printUsersInGroup(self, groupname):
        groupID = self.getGroupID(groupname)
        cursor = self._connection.cursor()
        self.allUsersInGroup(groupID, cursor)

        stmtStr = "SELECT * FROM temp.tempUserTable"
        
        try:
            cursor.execute(stmtStr)
            self._connection.commit()
        except Exception, e:
            print >>stderr, e
            return (False, e)

        curse = cursor.fetchall()
        cursor.close()
        return curse

    #-----------------------------------------------------------------------
    #
    # Parameters: just cursor and groupname
    # Does: creates a temp array of all of the users in a group
    # Returns: nothing
    #
    #-----------------------------------------------------------------------

    def allUsersInGroup(self, groupname, cursor):
        groupID = self.getGroupID(groupname)
        stmtStr = "CREATE TEMPORARY TABLE tempUserTable AS SELECT userID2 FROM friends WHERE userID1 = ? "

        try:
            cursor.execute(stmtStr, [str(groupID)])
            self._connection.commit()
        except Exception, e:
            print >>stderr, e
            return (False, e)

    #-----------------------------------------------------------------------
    #
    # Parameters: None
    # Does: Selects all users and returns all -
    # THIS IS NOT INTENDED FOR EXTERNAL USE
    # Returns: All users
    #
    #-----------------------------------------------------------------------

    def allUsers(self):
        cursor = self._connection.cursor()

        stmtStr = "SELECT users.firstName, users.lastName, users.username FROM users"

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
    # Parameters: None
    # Does: Selects all articles in the entire system and returns all -
    # THIS IS NOT INTENDED FOR EXTERNAL USE
    # Returns: All articles literally ever by any user
    #
    #-----------------------------------------------------------------------

    def allArticles(self):
        cursor = self._connection.cursor()

        stmtStr = "SELECT * FROM articles"
        
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
    # Parameters: None
    # Does: Selects literally everything in the database -
    # THIS IS NOT INTENDED FOR EXTERNAL USE
    # Returns: All articles literally ever ALL USERS
    #
    #-----------------------------------------------------------------------
    def allUsersArticlesTags(self):
        cursor = self._connection.cursor()

        stmtStr = "SELECT userID, articleID, tag FROM user_article_tags"
        
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
    # Parameters:
    # Firstname: String
    # Lastname: String
    # Username: String
    # Does: Creates a userID (always begins with 'u') and then inserts it 
    # into database
    # Returns: All articles literally ever ALL USERS
    #
    #-----------------------------------------------------------------------

    # Adds user to the user table in database
    def insertUser(self, firstName, lastName, username):
        userID = hash(username)

        cursor = self._connection.cursor()

        stmtStr = "INSERT INTO users(firstName, lastName, username, userID) VALUES (?, ?, ?, ?)"
        
        try:
            cursor.execute(stmtStr, [str(firstName), str(lastName), str(username), str(userID)])
            self._connection.commit()
        except Exception, e:
            return (False, "This username is already taken. Please Choose Another")

        cursor.close()
        return(True)

    #-----------------------------------------------------------------------
    #
    # Parameters: UserID --> String
    # Does: Deletes all instances of a user from literally everywhere
    # Returns: nada
    #
    #-----------------------------------------------------------------------

    # Deletes user from user table in databasez
    def deleteUser(self, username):
        userID = self.getUserID(username)

        cursor = self._connection.cursor()

        # deletes user from user-base
        stmtStr = "DELETE FROM users WHERE userID = ?"
        
        try:
            cursor.execute(stmtStr, [str(userID)])
            self._connection.commit()

        except Exception, e:
            print >>stderr, e
            return (False, e)

        # deletes user from user_article_tags instances
        stmtStr = "DELETE FROM user_article_tags WHERE userID = ?"
        
        try:
            cursor.execute(stmtStr, [str(userID)])
            self._connection.commit()

        except Exception, e:
            print >>stderr, e
            return (False, e)

        # deletes user all friends
        stmtStr = "DELETE FROM friends WHERE userID1 = ? OR userID2 = ?"
        
        try:
            cursor.execute(stmtStr, [str(userID), str(userID)])
            self._connection.commit()

        except Exception, e:
            print >>stderr, e
            return (False, e)

        # deletes user all pendingFriends
        stmtStr = "DELETE FROM pendingFriends WHERE userID1 = ? OR userID2 = ?"
        
        try:
            cursor.execute(stmtStr, [str(userID), str(userID)])
            self._connection.commit()

        except Exception, e:
            print >>stderr, e
            return (False, e)

        cursor.close()
        return(True)

    #-----------------------------------------------------------------------
    #
    # Parameters: groupID --> String
    # Does: Ensures that this group exists
    # Returns: True is user exists, False if user does exist    
    # To be used internally
    #-----------------------------------------------------------------------

    def checkGroup(self, groupID):
        cursor = self._connection.cursor()

        stmtStr = "SELECT EXISTS(SELECT 1 FROM groups WHERE groupID = (?))"

        try:
            cursor.execute(stmtStr, [str(groupID)])
            self._connection.commit()
        except Exception, e:
            print >>stderr, e
            return (False, e)

        groupExists = cursor.fetchall()

        try:
            returnable = groupExists[0][0] == 1
            cursor.close()
            return returnable
        except:
            cursor.close()
            return ""

    #-----------------------------------------------------------------------
    #
    # Parameters: UserID --> String
    # Does: Ensures that this user exists
    # Returns: True is user exists, False if user does exist    
    #
    #-----------------------------------------------------------------------

    def checkUser(self, userID):
        cursor = self._connection.cursor()

        stmtStr = "SELECT EXISTS(SELECT 1 FROM users WHERE userID = (?))"

        try:
            cursor.execute(stmtStr, [str(userID)])
            self._connection.commit()
        except Exception, e:
            print >>stderr, e
            return (False, e)
        
        userExists = cursor.fetchall()


        try:
            returnable = userExists[0][0] == 1
            cursor.close()
            return returnable
        except:
            cursor.close()
            return ""

    #-----------------------------------------------------------------------
    #
    #  GROUP FEATURES 
    #
    #----------------------------------------------------------------------- 

    #-----------------------------------------------------------------------
    #
    # Parameters: Groupname 
    # Does: Inserts group into group table
    # Returns: nada importante    
    #
    #----------------------------------------------------------------------- 

    # Adds group to the group table in database
    def insertGroup(self, groupname):
        groupID = hash(groupname)
        cursor = self._connection.cursor()

        stmtStr = "INSERT OR IGNORE INTO groups(groupname, groupID) VALUES (?, ?)"
        
        try:
            cursor.execute(stmtStr, [str(groupname), str(groupID)])
            self._connection.commit()

        except Exception, e:
            print >>stderr, e
            return (False, e)

        cursor.close()
        return(True)

    #-----------------------------------------------------------------------
    #
    # Parameters: groupname --> string
    # Does: Equivalent of get articles from user, just for a group
    # Returns: All articles from said group  
    #
    #----------------------------------------------------------------------- 

    def getArticlesFromGroup(self, groupname):
        groupID = self.getGroupID(groupname)
        cursor = self._connection.cursor()

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

        curse = cursor.fetchall()
        cursor.close()
        return curse

    #-----------------------------------------------------------------------
    #
    # Parameters: groupname --> string
    # Does: Equivalent of get articles from user, just for a group
    # Returns: All articles from said group  
    #
    #----------------------------------------------------------------------- 

    def internallyInsertToGroup(self, groupname, username, cursor):
        userID = self.getUserID(username)
        groupID = self.getUserID(groupname)

        stmtStr = "INSERT INTO friends(userID1, userID2) VALUES (?, ?)"

        try:
            cursor.execute(stmtStr, [str(groupID), str(userID)])
            self._connection.commit()
        except Exception, e:
            print >>stderr, e
            return (False, e)  

    #-----------------------------------------------------------------------
    def displayAllGroupsFromUsername(self, username):
        userID = self.getUserID(username)
        cursor = self._connection.cursor()

        stmtStr = "CREATE TEMPORARY TABLE allGroupFriends AS SELECT DISTINCT userID1 FROM friends WHERE userID2 = ?"

        try:
            cursor.execute(stmtStr, [str(userID)])
            self._connection.commit()
        except Exception, e:
            print >>stderr, e
            return (False, e)

        stmtStr = "SELECT groups.groupname FROM groups, temp.allGroupFriends WHERE groups.groupID = allGroupFriends.userID1"
        
        try:
            cursor.execute(stmtStr)
            self._connection.commit()
        except Exception, e:
            print >>stderr, e
            return (False, e)

        curse = cursor.fetchall()
        cursor.close()
        return curse

    #-----------------------------------------------------------------------
    def displayAllArticlesFromAllGroupsFromUsername(self, username):
        userID = self.getUserID(username)

        cursor = self._connection.cursor()

        stmtStr = "CREATE TEMPORARY TABLE allFriends AS SELECT DISTINCT userID1 FROM friends WHERE userID2 = ?"

        try:
            cursor.execute(stmtStr, [str(userID)])
            self._connection.commit()
        except Exception, e:
            print >>stderr, e
            return (False, e)

        stmtStr = "CREATE TEMPORARY TABLE allGroups AS SELECT DISTINCT groups.groupID FROM groups, temp.allFriends WHERE groups.groupID = allFriends.userID1"

        try:
            cursor.execute(stmtStr)
            self._connection.commit()
        except Exception, e:
            print >>stderr, e
            return (False, e)

        stmtStr = "CREATE TEMPORARY TABLE allArticleIDs AS SELECT DISTINCT user_article_tags.articleID FROM user_article_tags, temp.allGroups WHERE user_article_tags.userID = allGroups.groupID"

        try:
            cursor.execute(stmtStr)
            self._connection.commit()
        except Exception, e:
            print >>stderr, e
            return (False, e)

        stmtStr = "SELECT articles.articleIcon, articles.articleTitle, articles.articleAuthor, articles.articleBlurb, articles.articleURL, articles.articleDate FROM articles, temp.allArticleIDs WHERE allArticleIDs.articleID = articles.articleID "

        try:
            cursor.execute(stmtStr)
            self._connection.commit()
        except Exception, e:
            print >>stderr, e
            return (False, e)

        curse = cursor.fetchall()
        cursor.close()
        return curse

    #-----------------------------------------------------------------------
    #
    # Parameters: userID --> string to add to groupName, groupName --> string
    # Does: Ensures that the users aren't already in the group, and that the
    # group and user exist, and then adds the user to the group in the same
    # way as adding a user as a friend. Just adds one way, though, with 
    # groupName ALWAYS as userID1 for "friends" table, and userID2 ALWAYS
    # as userID2 for "friends" table
    # Returns: nada, baby
    #
    #----------------------------------------------------------------------- 


    def addUserToGroup(self, username, groupname):
        userID = self.getUserID(username)
        groupID =  self.getGroupID(groupname)

        cursor = self._connection.cursor()

        #check that user1, user2 exist, and that they are not already friends
        check1 = self.checkUser(userID)
        checkGroup = self.checkGroup(groupID)
        check3 = self.checkFriends(groupname, username)

        if check1 == True and checkGroup == True and check3 != True:
            self.internallyInsertFriend(groupID, userID, cursor)

        cursor.close()

    #-----------------------------------------------------------------------
    #
    # Parameters: userID --> string to add to groupName, groupName --> string
    # Does: Ensures that the users aren't already in the group, and that the
    # group and user exist, and then adds the user to the group in the same
    # way as adding a user as a friend. Just adds one way, though, with 
    # groupName ALWAYS as userID1 for "friends" table, and userID2 ALWAYS
    # as userID2 for "friends" table
    # Returns: nada, baby
    #
    #----------------------------------------------------------------------- 

    def deleteUserFromGroup(self, username, groupname):
        userID = self.getUserID(username)
        groupID =  self.getGroupID(groupname)

        cursor = self._connection.cursor()

        #check that user1, user2 exist, and that they are not already friends
        check1 = self.checkUser(userID)
        checkGroup= self.checkGroup(groupID)
        
        if check1 == True and checkGroup == True:
            self.deleteFriend(groupname, username)

        cursor.close()

    #-----------------------------------------------------------------------
    #
    # Parameters: all the same stuff as addArticle, and also the groupName
    # Does: adds the article to a group, but doesn't have anything to do
    # with the user adding it. If a user adds an article to a group, the
    # article is added to the group NOT user the userName, but rather under
    # the groupName
    # Returns: nada, baby
    #
    #----------------------------------------------------------------------- 

    def addArticleToGroup(self, groupname, articleTitle, articleIcon, articleBlurb, articleAuthor, articleDate, articleURL, tags):
        self.insertArticle(groupname, articleTitle, articleIcon, articleBlurb, articleAuthor, articleDate, articleURL, tags)
        
    #-----------------------------------------------------------------------
    #
    #  ARTICLE FEATURES 
    #
    #-----------------------------------------------------------------------

    #-----------------------------------------------------------------------
    #
    # Parameters: all strings, with the tags as a string SEPARATED BY SPACES
    # e.x.: "Design News Politics". 
    # Does: Inserts an article into both the articles table (if the URL
    # doesn't exist yet)
    # Returns: true if successful, false if not. Also false if somehow
    # the user adding the article does not exist.
    #
    #-----------------------------------------------------------------------    

    # Adds article to the article table in database    
    def insertArticle(self, username, articleTitle, articleIcon, articleBlurb, articleAuthor, articleDate, articleURL, tags):
        cursor = self._connection.cursor()
        #userID = self.getUserID(username)
        userID = hash(username)
        groupID = self.getGroupID(username)

        ID = ""

        if self.checkUser(userID) == True:
            ID = userID
        elif self.checkGroup(groupID) == True:
            ID = groupID

        if (self.checkUser(userID) == True or self.checkGroup(groupID) == True):
            # Unique articleIDs are the hash of the url
            articleID = hash(articleURL)
            article = Article(articleID, articleTitle, articleIcon, articleBlurb, articleAuthor, articleDate, articleURL)
            stmtStr = "INSERT OR IGNORE INTO articles(articleID, articleTitle, articleIcon, articleBlurb, articleAuthor, articleDate, articleURL, numUses) VALUES (?, ?, ?, ?, ?, ?, ?, ?)"
            try:
                cursor.execute(stmtStr, [str(article.articleID), str(article.articleTitle), str(article.articleIcon), str(article.articleBlurb), str(article.articleAuthor), str(article.articleDate), str(article.articleURL), 0])
                self._connection.commit()
            except Exception, e:
                print >>stderr, e
                print "except"
                return (False, e)

            self.updateTags(ID, articleID, tags)
            cursor.close()

        else:
            cursor.close()
            return (False, 'This user or group does not exist')

        return (True)

    #-----------------------------------------------------------------------
    #
    # Parameters: userID of user deleting the article, and the articleID
    # of the article being deleted. Just hash the articleURL before passing
    # it into the articleID parameter and you should be good to go.
    # Does: Deletes article from user_article_tags, but FOR NOW
    # keeps it in the articles table for potential future use
    # Returns: true if successful, false if not.
    #
    #-----------------------------------------------------------------------    

    def deleteArticle(self, username, articleID):
        userID = self.getUserID(username)

        cursor = self._connection.cursor()

        stmtStr = "DELETE FROM user_article_tags WHERE articleID = ? AND userID = ?"
        try:
            cursor.execute(stmtStr, [str(articleID), str(userID)])
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

    #-----------------------------------------------------------------------
    #
    # Parameters: userID --> string of the current user, and cursor for 
    # accessing temp tables
    # Does: Internally checks if this user has any pending friend requests.
    # This function's purpose is to aid the 'displayPending()' function,
    # and not to be called by anybody. 
    # Returns: nada
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
    #
    # Parameters: userID --> string of the current user
    # Does: Externally checks for pending friend requests and then gives the 
    # user the information about this person (beyond what 'internallyCheckPending')
    # might be able to give to the user (which is why we use this method instead)
    # Then selects the firstname, lastname, and userID to return to the user
    # Returns: a list of ALL pending friend requests w/ firstname + lastname (for now)
    #
    #----------------------------------------------------------------------- 

    def displayPending(self, username):
        userID = self.getUserID(username)

        cursor = self._connection.cursor()

        self.internallyCheckPending(userID, cursor)

        stmtStr = "SELECT users.firstname, users.lastname, users.username FROM users, temp.userIDList WHERE users.userID = userIDList.userID1"
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
    #
    # Parameters: two users, both strings - first is the CURRENT USERID FROM GOOGLE 
    # and the second is the username2, parsed from the text on the page
    # Does: Checks if two users are friends by only checking one direction
    # of selection with the table 'friends'. Does not include pending 
    # requests
    # Returns: Returns 'True' if friends, 'False' if not 
    # IMPORTANT: USERNAME1 MUST ALWAYS BE THE GROUPNAME, USERNAME2 MUST BE THE USER IF YOU ARE CHECKING FOR GROUPS
    #----------------------------------------------------------------------- 

    def checkFriends(self, username1, username2):
        cursor = self._connection.cursor()
        userID1 = self.getUserID(username1)
        userID2 = self.getUserID(username2)

        user1 = self.checkUser(userID1)
        user2 = self.checkUser(userID2)

        if (user1 == False):
            userID1 = self.getGroupID(username1)
            user1 = self.checkGroup(userID1)

        if (user1 == True and user2 == True):
            stmtStr = "SELECT EXISTS(SELECT 1 FROM friends WHERE userID1 = (?) AND userID2 = (?))"

            try:
                cursor.execute(stmtStr, [str(userID1), str(userID2)])
                self._connection.commit()
            except Exception, e:
                print >>stderr, e
                return (False, e)

            status = cursor.fetchall()

            try:
                returnable = (status[0][0] == 1)
                cursor.close()
                return returnable
            except:
                cursor.close()
                return False

    #-----------------------------------------------------------------------
    #
    # Parameters: a display username
    # Does: opposite of getuserID
    #
    #-----------------------------------------------------------------------

    def getUsername(self, userID):
        cursor = self._connection.cursor()

        stmtStr = "SELECT users.username FROM users WHERE userID = (?)"

        try:
            cursor.execute(stmtStr, [str(userID)])
            self._connection.commit()
        except Exception, e:
            print >>stderr, e
            return (False, e)

        userID2 = cursor.fetchall()

        try:
            returnable = userID2[0][0]
        except:
            cursor.close()
            return "No User Found"
        cursor.close()
        return userID2

    #-----------------------------------------------------------------------
    #
    # Parameters: a display username
    # Does: converts a display groupname to the corresponding groupID
    # Returns: Returns 'True' if friends, 'False' if not 
    #
    #-----------------------------------------------------------------------

    def getGroupID(self, groupname):
        cursereturn = []
        cursor = self._connection.cursor()
        stmtStr = "SELECT groups.groupID FROM groups WHERE groupname = (?)"

        try:
            cursor.execute(stmtStr, [str(groupname)])
            self._connection.commit()
        except Exception, e:
            print >>stderr, e
            return (False, e)

        groupID = cursor.fetchall()

        try:
            returnable = groupID[0][0]
            cursor.close()
            return returnable
        except:
            cursor.close()
            return ""

        

    #-----------------------------------------------------------------------
    #
    # Parameters: a display username
    # Does: converts a display username to the corresponding userID
    # Returns: Returns 'True' if friends, 'False' if not 
    #
    #-----------------------------------------------------------------------

    def getUserID(self, username):
        cursor = self._connection.cursor()

        stmtStr = "SELECT users.userID FROM users WHERE username = (?)"

        try:
            cursor.execute(stmtStr, [str(username)])
            self._connection.commit()
        except Exception, e:
            print >>stderr, e
            return (False, e)

        userID = cursor.fetchall()

        try:
            returnable = userID[0][0]
            cursor.close()
            return returnable
        except:
            cursor.close()
            return []

    #-----------------------------------------------------------------------
    #
    # Parameters: two users, both strings
    # Does: Checks if friends before doing anything. Then checks if the 
    # second user friended the first. If so, add the friend pair to the
    # friend table. If not, add the friend pair (in one direction) to the 
    # pendingfriends table.
    # Returns: nada, baby
    #
    #----------------------------------------------------------------------- 

    def addFriend(self, username1, username2):

        #check that user1, user2 exist, and that they are not already friends
        userID1 = self.getUserID(username1)
        userID2 = self.getUserID(username2)

        check1 = self.checkUser(userID1)
        check2 = self.checkUser(userID2)

        print username1
        print check1
        print username2
        print check2

        check3 = self.checkFriends(username1, username2)
        print check3

        cursor = self._connection.cursor()

        if check1 == True and check2 == True and check3 != True and userID1 != userID2:
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
        return (True)

    #-----------------------------------------------------------------------
    #
    # Parameters: None
    # Does: Selects all friend pairings and returns all (shows up double) -
    # THIS IS NOT INTENDED FOR EXTERNAL USE
    # Returns: All friend pairings
    #
    #-----------------------------------------------------------------------

    def allUserFriends(self, username):
        userID =  self.getUserID(username)

        cursor = self._connection.cursor()

        stmtStr = "CREATE TEMPORARY TABLE friendUserIDS AS SELECT userID2 FROM friends WHERE userID1 = ? "

        try:
            cursor.execute(stmtStr, [str(userID)])
            self._connection.commit()
        except Exception, e:
            print >>stderr, e
            return (False, e)

        stmtStr = "SELECT users.firstName, users.lastName, users.username FROM users, temp.friendUserIDS WHERE friendUserIDS.userID2 = users.userID"
        
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
    # Parameters: two users
    # Does: FOR INTERNAL USE ONLY!!! Used by addFriend to add a new friendship
    # to pending friend
    # Returns: nada
    #
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
    #
    # Parameters: two users
    # Does: FOR INTERNAL USE ONLY!!! Used by addFriend to add a new two-way
    # friendship to the friends table
    # Returns: nada
    #
    #----------------------------------------------------------------------- 

    def internallyInsertFriend(self, userID1, userID2, cursor):
        stmtStr = "INSERT OR IGNORE INTO friends(userID1, userID2) VALUES (?, ?)"
        try:
            cursor.execute(stmtStr, [str(userID1), str(userID2)])
            self._connection.commit()
        except Exception, e:
            print >>stderr, e
            return (False, e)   

    #-----------------------------------------------------------------------
    #
    # Parameters: two users
    # Does: FOR INTERNAL USE ONLY!!! Used by addFriend to delete pending
    # friend requests once two people become friends
    # Returns: nada
    #
    #----------------------------------------------------------------------- 

    def internallyDeletePending(self, userID1, userID2, cursor):
        # print "before"
        stmtStr = "DELETE FROM pendingfriends WHERE userID1 = (?) and userID2 = (?)"
        try:
            cursor.execute(stmtStr, [str(userID1), str(userID2)])
            self._connection.commit()
        except Exception, e:
            print >>stderr, e
            return (False, e)
        #print "after"

    #-----------------------------------------------------------------------
    #
    # Parameters: two users
    # Does: Delete all pending or friends with this person. Sorry man.
    # Returns: Nothing
    #
    #----------------------------------------------------------------------- 

    def deleteFriend(self, username1, username2):
        userID1 = self.getUserID(username1)
        userID2 = self.getUserID(username2)
        
        if (self.checkUser(userID1) != True):
            userID1 = self.getGroupID(username1)

        cursor = self._connection.cursor()
        self.internallyDeletePending(userID1, userID2, cursor)
        self.internallyDeletePending(userID2, userID1, cursor)
        
        stmtStr = "DELETE FROM friends WHERE userID1 = (?) and userID2 = (?)"
        try:
            cursor.execute(stmtStr, [str(userID1), str(userID2)])
            self._connection.commit()
        except Exception, e:
            print >>stderr, e
            return (False, e)

        stmtStr = "DELETE FROM friends WHERE userID1 = (?) and userID2 = (?)"
        try:
            cursor.execute(stmtStr, [str(userID2), str(userID1)])
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

    #-----------------------------------------------------------------------
    #
    # Parameters: 
    # Does: FOR INTERNAL USE ONLY!!! Just adds to database all of the tags in
    # the tag list. Tag me, baby
    # Returns: Nothing
    #
    #----------------------------------------------------------------------- 

    def insertTags(self):  
        cursor = self._connection.cursor()
        allTags = self.daTagList()

        for tag in allTags:
            print tag
            stmtStr = "INSERT INTO tags(tagName) VALUES (?)"
            cursor.execute(stmtStr, [str(tag)])
            self._connection.commit()

        cursor.close()

    #-----------------------------------------------------------------------
    #
    # Parameters: 
    # Does: Legit just a list of all the potential tags. Can be used externally, just know 
    # that it is in weird python list format.
    # Returns: List of all tags in weird python list format
    #
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
        print(allEntries, '---------- dsfsdfdsf ------------ 1')
        cursor.close()
        print(allEntries, '2-----f-df-saf-dsaf-ds-f-fa')
        return allEntries

    #-----------------------------------------------------------------------
    #
    # Parameters: userID, articleID, and a STRING LIST OF DESIRED TAGS
    # Does: Replaces old tags w/ new tags for the given user
    # Returns: Nada
    # TO BE USED INTERNALLYYYYYY
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
    #
    # Parameters: none
    # Does: Legit nothing. No not use this method plz. Plz only use if you
    # are re-initializing the legit sqlite file. Otherwise use allTags. 
    # This is very slow and again, plz don't use.
    # Returns: Literally tags. It is daTagList
    #
    #----------------------------------------------------------------------- 

    def daTagList(self):
        tagList = ['News', 'Politics', 'Food', 'Business', 'Reading', 'Technology', 'Blogs', 'Money', 'Productivity', 'Games',
        'School', 'Environment', 'Media', 'Travel', 'Sports', 'Religion', 'Health', 'Weather', 'Celebrity', 'Science', 
        'Design', 'Art', 'Comedy', 'Film', 'Music', 'Fashion', 'Race', 'World', 'Economy', 'Later', 'Popular', 'College',
        'History', 'Entrepreneurship', 'Animals', 'Architecture', 'Holidays', 'Kids', 'Entertainment', 'Baking', 'Cooking', 'AI', 
        'Journalism', 'Advice', 'Creative', 'Lists', 'World', 'USA', 'NYC']
        return tagList

    #-----------------------------------------------------------------------
    #
    #  SEARCH FEATURES
    #
    #-----------------------------------------------------------------------

    #-----------------------------------------------------------------------
    #
    # Parameters: both users (strings) and optional search! by! tag!
    # Does: Same bad boy as own articles, just makes sure first that 
    # you are rly truly friends w this other individual. Don't want u being
    # sneaky and all that.
    # Returns: all of the article ~infoooooo~ if u r friends, and a lil 
    # MESSAGE FOR YOU IF UR TRYNA BE SNEAKY WITHOUT BEING FRIENDS W SOMEBODY
    # FIRST YOU LIL DEVIL
    #
    #-----------------------------------------------------------------------

    def friendArticles(self, userID1, friendusername, tags):
        friendID = self.getUserID(friendusername)

        if (checkFriends(userID1, friendusername)):
            return userTagArticles(friendID, tags)
        else:
            return "You Are Not Friends With This User. Please friend them and check back"

    #-----------------------------------------------------------------------
    #
    # Parameters: just the userID --> string
    # Does: returns all of the articles for a user without tags
    # Returns: article list w/ corresponding info that is important
    #
    #-----------------------------------------------------------------------

    # all of a user's articles
    def userArticles(self, username):
        userID = self.getUserID(username)
        cursor = self._connection.cursor()
        if (checkUser(userID) != True): return ""

        stmtStr = "CREATE TEMPORARY TABLE userArticles AS SELECT DISTINCT articleID FROM user_article_tags WHERE userID = ? "

        try:
            cursor.execute(stmtStr, [str(userID)])
            self._connection.commit()
        except Exception, e:
            print >>stderr, e
            return (False, e)

        stmtStr = "SELECT articles.articleIcon, articles.articleTitle, articles.articleAuthor, articles.articleBlurb, articles.articleURL, articles.articleDate FROM articles, temp.userArticles WHERE userArticles.articleID = articles.articleID "

        try:
            cursor.execute(stmtStr)
            self._connection.commit()
        except Exception, e:
            print >>stderr, e
            return (False, e)

        curse = cursor.fetchall()
        cursor.close()
        return curse

    #-----------------------------------------------------------------------
    #
    # Parameters: given user, current cursor
    # Does: FOR INTERNAL USE ONLY: makes a table with all of the articleID and tag info for a given ONE user
    # Returns: nada
    #
    #-----------------------------------------------------------------------

    def internallyCreateArticleTagFriends(self, userID, cursor):
        stmtStr = "CREATE TEMPORARY TABLE articleTagFriends AS SELECT user_article_tags.articleID, user_article_tags.tag FROM user_article_tags WHERE user_article_tags.userID = ? "
        try:
            cursor.execute(stmtStr, [str(userID)])
            self._connection.commit()
        except Exception, e:
            print >>stderr, e
            return (False, e)

    #-----------------------------------------------------------------------
    #
    # Parameters: given user, current cursor. List of tags, separated by spaces
    # i.e. "Design Entrepreneurship"
    # Does: IMPORTANT FUNCTION!!!!! GET ALL OF THE ARTICLES FOR A GIVEN USER 
    # WITH CORRESPONDING TAGS!!!! 
    # Returns all of the articles with corresponding info
    #
    #-----------------------------------------------------------------------

    # search by any amount of tags
    def userTagArticles(self, username, tags):
        userID = self.getUserID(username)

        curse = []
        cursor = self._connection.cursor()
        splitTags = tags.split(' ')
        print "here"
        if len(splitTags) == 0:
            curse = self.userArticles(username, cursor)
        else:
            self.internallyCopyTags(cursor)
            self.internallyDeleteTags(tags, cursor)
            self.internallyCreateArticleTagFriends(userID, cursor)
            self.internallyDeleteArticlesWithoutTags(cursor)
            curse = self.internallyDisplayArticles(cursor)

        cursor.close()
        return curse
        
    #-----------------------------------------------------------------------
    #
    # Parameters: current cursor"
    # Does: FOR INTERNAL USE ONLY!!!! Just 
    # Returns all of the articles with corresponding info from a given 
    # friend and set of tags
    #
    #-----------------------------------------------------------------------

    def internallyDisplayArticles(self, cursor):
        stmtStr = "SELECT articles.*, group_concat(articleTagFriends.tag) FROM temp.articleTagFriends, articles WHERE articles.articleID = articleTagFriends.articleID GROUP BY articles.articleID"
        try:
            cursor.execute(stmtStr)
            self._connection.commit()
        except Exception, e:
            print >>stderr, e
            return (False, e)

        return cursor.fetchall()

    #-----------------------------------------------------------------------
    #
    # Parameters: current cursor"
    # Does: FOR INTERNAL USE ONLY!!!! Deletes the entries we don't want
    # because they have a given tag
    # Returns: nada
    #
    #-----------------------------------------------------------------------

    def internallyDeleteArticlesWithoutTags(self, cursor):
        stmtStr = "DELETE FROM temp.articleTagFriends WHERE EXISTS (SELECT * FROM temp.tagsCopy WHERE articleTagFriends.tag = tagsCopy.tagName)"
        try:
            cursor.execute(stmtStr)
            self._connection.commit()
        except Exception, e:
            print >>stderr, e
            return (False, e)

    #-----------------------------------------------------------------------
    #
    # Parameters: current cursor, the set of "good" tags
    # Does: FOR INTERNAL USE ONLY!!!! Detes the tags we DO want in order to
    # not end up deleting those entries later on
    # Returns: nothing
    #
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
    #
    # Parameters: current cursor
    # Does: FOR INTERNAL USE ONLY!!!! Just gives you a return of all of the
    # tags in the tags copy temp --> really just for testing
    # Returns: a list of tags from the temp tags table
    #
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
    #
    # Parameters: current cursor
    # Does: FOR INTERNAL USE ONLY!!!! Just copies all the tags
    # Returns: nada
    #
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
    #
    # Parameters: current cursor
    # Does: FOR INTERNAL USE ONLY!!!! creates a temp table of articleID and tags
    # based solely off of friends. for feed use, for friends. for life. </3
    # Returns: nada
    #
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
    #
    # Parameters: current cursor and user that you wanna get friends from
    # Does: FOR INTERNAL USE ONLY!!!! Creates a temp table of alllll of the
    # users that somebody is friends with
    # Returns: nada
    #
    #-----------------------------------------------------------------------

    def internallyFriendList(self, userID1, cursor):
        stmtStr = "CREATE TEMPORARY TABLE userIDFriends AS SELECT userID2 FROM friends WHERE userID1 = ? "
        try:
            cursor.execute(stmtStr, [str(userID1)])
            self._connection.commit()
        except Exception, e:
            print >>stderr, e
            return (False, e)

        stmtStr = "SELECT * FROM temp.userIDFriends"

        try:
            cursor.execute(stmtStr)
            self._connection.commit()
        except Exception, e:
            print >>stderr, e
            return (False, e)

    #-----------------------------------------------------------------------
    #
    # Parameters: just a userID and a string of tags separated by white space
    # Does: Gives the user an entire feed of ALL of their friend activity, and searchable by tags
    # Returns: the list of articles with all corresponding info
    #
    #-----------------------------------------------------------------------

    def feed(self, username, tags):
        userID = self.getUserID(username)
        curse = []

        cursor = self._connection.cursor()
        splitTags = tags.split(' ')
        if len(splitTags) == 0:
            curse = self.userArticles(username, cursor)
        else:
            self.internallyFriendList(userID, cursor)
            self.internallyArticleTagFromUsers(cursor)
            self.internallyCopyTags(cursor)
            self.internallyDeleteTags(tags, cursor)
            self.internallyDeleteArticlesWithoutTags(cursor)
            curse = self.internallyDisplayArticles(cursor)

        cursor.close()
        return curse

    #-----------------------------------------------------------------------

if __name__ == '__main__':
    # # test user is 2018
    c = Database()
    # c.oneTimeOnly()

    c.connect()
    # Initialize Tags Setup
    # c.insertTags()

    # Test: Insert Users Dummy1-10
    # c.insertUser('firstName', 'lastName', 'username1')
    # c.insertUser('firstName', 'lastName', 'username2')
    # c.insertUser('firstName', 'lastName', 'username3')
    # c.insertUser('firstName', 'lastName', 'username4')
    # c.insertUser('firstName', 'lastName', 'username5')
    # c.insertUser('firstName', 'lastName', 'username6')
    # c.insertUser('firstName', 'lastName', 'username7')
    # c.insertUser('firstName', 'lastName', 'username8')
    # c.insertUser('firstName', 'lastName', 'username11')
    # c.insertUser('firstName', 'lastName', 'username12')
    # c.insertUser('firstName', 'lastName', 'username13')
    # c.insertUser('firstName', 'lastName', 'username9')
    # c.insertUser('firstName', 'lastName', 'username15')
    # c.insertUser('firstName', 'lastName', 'livz')

    # print c.allUsers()
    # c.deleteUser('userID1')
    # print c.allUsers()
    # c.insertUser('firstName', 'lastName', 'username1', 'userID1')
    # print c.allUsers()

    # Test: Insert/Delete Articles and User_Article_Tags and updating tags
    # c.insertArticle('livz', 'articleTitle', 'articleIcon', 'articleBlurb', 'articleAuthor', 'articleDate', 'articleURL987', 'Design Food Music')
#    c.insertArticle('livz', 'articleTitle', 'articleIcon', 'articleBlurb', 'articleAuthor', 'articleDate', 'articleURL', 'Design Food Architecture')
#    c.insertArticle('livz', 'articleTitle', 'articleIcon', 'articleBlurb', 'articleAuthor', 'articleDate', 'articleURL1', 'Design Architecture Holidays')
    # c.insertArticle('userID1', 'articleTitle', 'articleIcon', 'articleBlurb', 'articleAuthor', 'articleDate', 'articleURL2', 'Design News Politics')
    # c.insertArticle('userID1', 'articleTitle', 'articleIcon', 'articleBlurb', 'articleAuthor', 'articleDate', 'articleURL3', 'Design World USA')
    c.insertArticle('lkatzman@princeton.edu', 'articleTitle', 'articleIcon', 'articleBlurb', 'articleAuthor', 'articleDate', 'https://stackoverflow.com/questions/32347207/how-does-the-toggle-button-work-with-checkboxes', 'Science')
    # articles = c.allArticles()
    # for article in articles:
    #     print article

    # c.insertArticle('livz', 'THISISATEST', 'articleIcon', 'articleBlurb', 'articleAuthor', 'articleDate', 'articleURLTest1', 'Design')
    # print len(c.allUsersArticlesTags())
    # c.deleteArticle('lkatzman@princeton.edu', '-7493312828975800069')
    # print len(c.allUsersArticlesTags())
    # print c.userTagArticles('livz', "")

    # Test: UserArticles
    articles = c.userTagArticles('lkatzman@princeton.edu', 'Science')
    for article in articles:
        print article
        print
    # Test: Add and Test Group Functionality
    # c.insertGroup("group1")
    # c.insertGroup("group2")
    # c.insertGroup("group3")
    # c.insertGroup("group4")
    # c.insertGroup("group5")
    # c.insertGroup("group6")

    # print c.allGroups()
    # c.addArticleToGroup("group1", 'articleTitle', 'articleIcon', 'articleBlurb', 'articleAuthor', 'articleDate', 'articleURL', 'Design Food Music')
    # c.addUserToGroup('livz', 'group1')
    # c.addUserToGroup('livz', 'group2')
    # c.addUserToGroup('livz', 'group3')
#    c.addUserToGroup('livz', 'group5')
#    print c.displayAllGroupsFromUsername('livz')
#    c.deleteUserFromGroup('livz', 'group5')
#    c.disconnect()
#    c.connect()
#    print c.displayAllGroupsFromUsername('livz')


    # print c.allFriendPairings()
    # print c.printUsersInGroup('group1')
    # print c.allUsersArticlesTags()
    # print c.getArticlesFromGroup('group1')

    # Test Friendships
    # print c.allUserFriends('livz')
    # c.displayPending('username9')
    # c.addFriend('livz', 'username9')
    # c.addFriend('username9', 'livz')
    # c.addFriend('userID1', 'username1')
    # print c.feed('livz', 'Design')
    # c.deleteFriend('livz', 'other')

    # Test: 
    # print c.displayAllGroupsFromUsername('username1')
    c.disconnect()






