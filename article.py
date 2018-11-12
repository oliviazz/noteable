#!/usr/bin/env python
#-----------------------------------------------------------------------
# article.py
# Author: Olivia Zhang, Zoë Barnswell, Lyra Katzman 
#-----------------------------------------------------------------------

from user import User

#-----------------------------------------------------------------------

class Article:
    # 
    def __init__(self, articleID, userArticleID):
        # A new articleID is created every time a new unique article is
        # added to the database
        self.articleID = articleID
        # A new user article ID is created every time an article is 
        # added to the database
        self.userArticleIDs = []
        self.usersLiked = []
    
    def addUser(user, userArticleID):
        self.usersLiked.append(user.getUserID())
        self.userArticleIDs.append(userArticleID)