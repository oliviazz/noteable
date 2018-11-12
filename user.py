#!/usr/bin/env python
#-----------------------------------------------------------------------
# database.py
# Author: Olivia Zhang, Zoë Barnswell, Lyra Katzman 
#-----------------------------------------------------------------------

from article import Article

#-----------------------------------------------------------------------

class User:
    # Users have a first and last name, a username and password, as well
    # as a userID and list of friends
    def __init__(self, firstName, lastName, userID, username, password):
        self.firstName = firstName
        self.lastName = lastName
        self.userID = userID
        self.username = username
        self.password = password
        self.friends = []
        self.tags = []
        # Article ID
        self.articles = []
        # User specific ID
        self.userArticles = []
    
    def getUserID():
        return self.userID
    
    def addArticle(article):
        
    def removeArticle(article):