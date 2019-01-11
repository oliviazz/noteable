#!/usr/bin/env python
#-----------------------------------------------------------------------
# user.py
# Author: Olivia Zhang, Zoe Barnswell, Lyra Katzman 
#-----------------------------------------------------------------------

#-----------------------------------------------------------------------

class User:
    # Users have a first and last name, a username and password, as well
    # as a userID and list of friends
    def __init__(self, firstName, lastName, userID):
        self.firstName = firstName
        self.lastName = lastName
        self.userID = userID
        self.numArticles = 0
