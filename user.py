#!/usr/bin/env python
#-----------------------------------------------------------------------
# database.py
# Author: Olivia Zhang, Zoe Barnswell, Lyra Katzman 
#-----------------------------------------------------------------------

from article import Article

#-----------------------------------------------------------------------

class User:
    # Users have a first and last name, a username and password, as well
    # as a userID and list of friends
    usercount = 100
    def __init__(self, username, password, firstName="", lastName=""):
        self.username = username
        self.userID = usercount + 1
        self.password = password

        self.firstName = firstName
        self.lastName = lastName
        self.friends = []
 
    def getUserID():
        return self.userID

    def main(argv):

        n =User(username="olivia123", password="startstar")
        print(self.getUserID())
        
    #-----------------------------------------------------------------------

if __name__ == '__main__':
    main(argv)


    
