from flask import request, jsonify, Blueprint
from flask_login import login_required, login_user, current_user, logout_user
from models import User
from database import Database
import requests
from bs4 import BeautifulSoup
import json



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

@bp.route("/quickadd", methods=["GET"])
def quickadd():
    return jsonify(message="It's working!!!!"), 200

@bp.route("/getarticles", methods=["GET"])
def getarticles():
    database = Database()
    database.connect()
    #use dummy userId for now 
    article_query_results = database.userArticles('dummy')
    return jsonify(articles=article_query_results)

@bp.route("/getarticlesinfo", methods=["POST"])
def getarticlesinfo():
    json_payload = request.get_json()
    
    articles = json.loads(json_payload['articles'])
    print(articles, "HEY")
    article_fullinfo = []
    for article in articles:
        print(article)
        # const urlMetadata = require('url-metadata');
        proxyurl = "https://cors-anywhere.herokuapp.com/";
        # r = requests.get("http://example.com/foo/bar")
        response = requests.get(proxyurl+article)
        print(response, "responseee")
        soup = BeautifulSoup(response.text)

        metas = soup.find_all('meta')

        print [ meta.attrs['content'] for meta in metas if 'name' in meta.attrs and meta.attrs['name'] == 'description' ]
            
    return jsonify(articles=article_fullinfo)

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
