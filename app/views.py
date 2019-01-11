from flask import request, jsonify, Blueprint
from flask_login import login_required, login_user, current_user, logout_user
from models import User
from database import Database
import requests
from bs4 import BeautifulSoup
import json
import metadata_parser
import unicodedata


bp = Blueprint('blueprint', __name__, template_folder='templates')


@bp.route("/", methods=["GET"])
def index():
    return jsonify(message="Hello World!"), 200


@bp.route("/login", methods=["POST"])
def login():
    json_payload = request.get_json()
    user_entry = User.get(json_payload['username'])
    if (user_entry):
        user = User(*user_entry)
        if (user.password == json_payload['password']):  # not for prod
            login_user(user)
            return jsonify(isLoggedIn=current_user.is_authenticated), 200

    return jsonify(authorization=False), 403


@bp.route("/protected", methods=["GET"])
@login_required
def protected():
    return jsonify(message="Hello Protected World!"), 200

  

@bp.route("/addarticle", methods=["POST"])
def addarticle():

    json_payload = request.get_json()
    print(json_payload, "JSON PAYLOAD!!!!")
    article = json_payload['article_url']
    #return jsonify(message=article), 200

    database = Database()
    database.connect()
    print(article, " article")

    try:
        database.insertArticle('dummy2', 'articleTitle', 'articleIcon', 'articleBlurb', 'articleAuthor', 'articleDate', article, 'tags')
        database.disconnect()
        return jsonify(message="Posted article: " + article), 200
    except:
        return jsonify(message="Error in posting article!"), 400

@bp.route("/deletearticle", methods=["POST"])
def deletearticle():
    json_payload = request.get_json()
    article = str(json_payload['article_url'])
    #return jsonify(message=article), 200

    database = Database()
    database.connect()
    print(article, "hey!!!!")

    try:
        article_id = hash(article)
      
        database.deleteArticle(userID='dummy2', articleID=article_id)
       
        database.disconnect()

        return jsonify(message="Deleted article: " + article), 200
    except Exception, err:
        print('Error in deleting article: ', str(err))
        return jsonify(message="Error in deleting article article!"), 400

@bp.route("/quickadd", methods=["GET"])
def quickadd():
    return jsonify(message="It's working!!!!"), 200

@bp.route("/getarticles", methods=["GET"])
def getarticles():

    database = Database()
    database.connect()
    print('hello we reached the function')
    json_payload = request.get_json()
    print(json_payload)
    user = json.loads(json_payload['user'])
    

    #use dummy userId for now 
    article_query_results = database.userArticles(user)
    print(article_query_results, user, " what the")
    return jsonify(articles=article_query_results)

def article_needs_info(article):
    # IF some threshold of fields is blank
   
    # if Both fields are blank
    if (article[1] == 'articleTitle' and article[2] == 'articleIcon'):
        return True
    else:
        return False

@bp.route("/getarticlesinfo", methods=["POST"])
def getarticlesinfo():
    print('hey!!')
    json_payload = request.get_json()
    
    articles = json.loads(json_payload['articles'])
    #print(articles, "HEY")
    article_full_info = {}
    database = Database()
    database.connect()

    for article in articles:
        article = [str(i) for i in article]
        print(article, " question mark")
        # scrape info only if article doesn't have database already
        # if (article_needs_info(article)):
        print(article, " needs information")
        article_url = article[6]
        my_info = {'title': '', 'url':'', 'descrip':'', 'image':''}
        # const urlMetadata = require('url-metadata');
        proxyurl = "https://cors-anywhere.herokuapp.com/";
        headers = {'x-requested-with': 'XMLHttpRequest'}
        response = requests.get(proxyurl+article_url, headers=headers)
        
        #### these are what we find
        soup = BeautifulSoup(response.text, "lxml")
        title = soup.find("meta",  property="og:title")
        url = soup.find("meta",  property="og:url")
        descrip = soup.find("meta", property="og:description")
        image = soup.find("meta", property="og:image")

        # Replace -------------
        # article_id = hash(url)
        # database.deleteArticle('dummy', article_id )
        # database.insertArticle(self, 'dummy', title, image, descrip, articleAuthor, articleDate, url, tags)
        # Replace ------------- 

        if title: my_info['title'] = title['content']
        if url: my_info['url'] = url['content']
        if descrip: my_info['descrip'] = descrip['content']
        if image: my_info['image'] = image['content']

        article_full_info[article_url] = my_info
        
        # else:
        #     database.userArticles('dummy2')
        #     # package database result into a dictionary 
        #     my_info = {'title': '', 'url':'', 'descrip':'', 'image':''}
        #     my_info['image'] = 


    # article_query_results = database.userArticles('dummy2')
    # print(article_query_results, " ok")
    # for article in article_query_results:
    #     article = [str(i) for i in article]
        
    #     my_info['url'] = article[6]
    #     my_info['image'] = article[5]
    #     my_info['title'] = article[2]
    #     my_info['descrip'] = article[3]
    #     my_info['author'] = article[4]
    #     my_info['date']= article[5]

    #     url = article[6]
    #     article_full_info[url] = my_info

    


    print(type(article_full_info))

    return jsonify(all_article_info=article_full_info)
     


def quickadd():
    return jsonify(message="It's working!!!!"), 200

@bp.route("/quickaddpost", methods=["POST"])
def quickaddpost():
    return jsonify(message="It's working!"), 200

# Define HTML endpoints, and for this (ie when post to adduser) you do the database function here 
# post request on the add page, add the article, send the post request into the backend server 
# server stores the url in the database 
# then when you go to the userpase (user/article) should also have url on the backend listening to the get request 
# goes to the get request, in the function get the user article database 
# every page must correspond to some route on your backend 

@bp.route("/me", methods=["GET"])
def me():
    return jsonify(isLoggedIn=current_user.is_authenticated)


@bp.route("/logout", methods=["GET"])
def logout():
    logout_user()
    return jsonify(isLoggedIn=current_user.is_authenticated)
