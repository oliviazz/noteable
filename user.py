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
 
    def getUserID():
        return self.userID
    
