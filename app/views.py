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
    article = json_payload['article_url']
    #return jsonify(message=article), 200

    database = Database()
    database.connect()
    print(article)

    try:
        database.insertArticle('dummy', 'articleTitle', 'articleIcon', 'articleBlurb', 'articleAuthor', 'articleDate', article, 'tags')
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
      
        database.deleteArticle(userID='dummy', articleID=article_id)
 
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
    #use dummy userId for now 
    article_query_results = database.userArticles('dummy')
    print(article_query_results, " ok")
    return jsonify(articles=article_query_results)

@bp.route("/getarticlesinfo", methods=["POST"])
def getarticlesinfo():
    json_payload = request.get_json()
    
    articles = json.loads(json_payload['articles'])
    print(articles, "HEY")
    article_full_info = {}
    for article in articles:
        article = str(article)
        my_info = {'title': '', 'url':'', 'descrip':'', 'image':''}
        # const urlMetadata = require('url-metadata');
        proxyurl = "https://cors-anywhere.herokuapp.com/";
        headers = {'x-requested-with': 'XMLHttpRequest'}
        response = requests.get(proxyurl+article, headers=headers)
        soup = BeautifulSoup(response.text, "lxml")
        
        title = soup.find("meta",  property="og:title")
        url = soup.find("meta",  property="og:url")
        descrip = soup.find("meta", property="og:description")
        image = soup.find("meta", property="og:image")

        # print(title["content"] if title else "No meta title given")
        # print(url["content"] if url else "No meta url given")
        # print(image["content"] if image else "No meta image given")
        # print(descrip["content"] if descrip else "No meta descrip given")
        
        if title: my_info['title'] = title['content']
        if url: my_info['url'] = url['content']
        if descrip: my_info['descrip'] = descrip['content']
        if image: my_info['image'] = image['content']

        article_full_info[article] = my_info

    #print(article_full_info)
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
