#!/usr/bin/env python
#-----------------------------------------------------------------------
# article.py
# Author: Olivia Zhang, Zoe Barnswell, Lyra Katzman 
#-----------------------------------------------------------------------

#-----------------------------------------------------------------------

class Article:
    # 
    def __init__(self, articleID, articleTitle, articleIcon, articleBlurb, articleAuthor, articleDate, articleURL):
        # A new articleID is created every time a new unique article is
        # added to the database
        self.articleID = articleID
        self.articleTitle = articleTitle
        self.articleIcon = articleIcon
        self.articleBlurb = articleBlurb
        self.articleAuthor = articleAuthor
        self.articleDate = articleDate
        self.articleURL = articleURL
        self.numUses = 0