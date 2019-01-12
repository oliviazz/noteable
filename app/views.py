from flask import request, jsonify, Blueprint
from flask_login import login_required, login_user, current_user, logout_user
from models import User
from database import Database
import requests
from bs4 import BeautifulSoup
import json
import unicodedata
import datetime
from urllib import urlopen


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


@bp.route("/checkuserexists", methods=["POST"])
def checkuserexists():
    json_payload = request.get_json()
    userId = json_payload['user_Id']
    print(userId, 'userId and google code')
    
    database = Database()
    database.connect()
    userExists = database.checkUser(userId)

    return jsonify(exists = userExists), 200

  
    


@bp.route("/createuser", methods=["POST"])
def createuser():
    json_payload = request.get_json()
    user_data = json_payload['data']
    print(user_data, 'user data')
    database = Database()
    database.connect()
    database.insertUser(str(user_data['first_name']), str(user_data['last_name']), str(user_data['username']), str(user_data['userId']))
    return jsonify(message="Hello Protected World!"), 200

  

@bp.route("/addarticle", methods=["POST"])
def addarticle():
    
    json_payload = request.get_json()
    print(json_payload, " addarticle json payload")
    userId = str(json_payload['userId'])
    article = str(json_payload['article_url'])
    tags = str(json_payload['tags'])
  
    print(userId, article, tags)
    database = Database()
    database.connect()


    my_info = {'title': '', 'url':'', 'descrip':'', 'image':'', 'author':''}

    working = False
    try:
        trimmed_url = article[1:-1].encode('utf-8')
        soup = BeautifulSoup(urlopen(trimmed_url).read(), "lxml")
            
        title = soup.find("meta",  property="og:title")
        url = soup.find("meta",  property="og:url")
        descrip = soup.find("meta", property="og:description")
        image = soup.find("meta", property="og:image")
        author = soup.find('meta', {'name': 'byl'})


        if title: 
            my_info['title'] = title['content']
            working = True
        if url: my_info['url'] = url['content']
        if descrip: my_info['descrip'] = descrip['content']
        if image: my_info['image'] = image['content']
        if author:my_info['author'] = author['content']

        time = datetime.datetime.today().strftime('%Y-%m-%d')
        
    except Exception as e:
        print(e)
        return jsonify(message='Error!'), 400


    print(my_info, userId)
    try:

        database.insertArticle(userID=userId, articleTitle=my_info['title'], articleIcon=my_info['image'], 
                                articleBlurb=my_info['descrip'], articleAuthor=my_info['author'], articleDate=time,
                                articleURL=my_info['url'], tags=tags)

        print(database.userTagArticles(userId, ""))
        print('above are my tags')
    except Exception as e:
        print(e, "adding error!")

    
    database.disconnect()
    return jsonify(message="Posted article: " + article + '; Metadata collection: ' + str(working) ), 200

@bp.route("/deletearticle", methods=["POST"])
def deletearticle():
    print('DElete Article')
    json_payload = request.get_json()
    article = str(json_payload['article_url'])
    userId = json_payload['userId']
    print(article, userId)
    #userId = 12345
    #return jsonify(message=article), 200

    database = Database()
    database.connect()
    print(article, "hey!!!! hashes")

    try:
        articleId = hash(article)
      
        database.deleteArticle(userID=userId, articleID=articleId)
 
        database.disconnect()

        return jsonify(message="Deleted article: " + article), 200
    except Exception, err:
        print('Error in deleting article: ', str(err))
        return jsonify(message="Error in deleting article article!"), 400



@bp.route("/getarticles", methods=["POST"])
def getarticles():

    database = Database()
    database.connect()

    json_payload = request.get_json()

    print(json_payload, "payload in get articles")
    userId = json_payload['userId']
    print(userId)
    # userId = "54321"
    

    #database.insertArticle(userId, 'articleTitle', 'articleIcon', 'articleBlurb', 'articleAuthor', 'articleDate', 'hello.com', 'baking')
    
    # hardcoding rn
    
    tags = ""
    article_query_results = database.userTagArticles(userId, tags)

    
    print(article_query_results, " these are the results")
    formatted_results = {}
    for i in range(0, len(article_query_results)):

        # 0: article
        # 1: tag (individual, lol)
        # 2: user ID? 
        # 3: title
        # 4: icon
        # 5: blurb
        # 6: author
        # 7
        # 8: url
        article_id = str(article_query_results[i][0])

        article_url = str(article_query_results[i][8])
    

        formatted_results[article_url] = {
            'tag': article_query_results[i][1],
            'title': article_query_results[i][3],
            'icon': article_query_results[i][4], 
            'blurb': article_query_results[i][5],
            'author': article_query_results[i][6],
            'url': article_url,
            'date': article_query_results[i][7]
        }

        #ormatted_results = sorted(formatted_results, key=formatted_results['date'])
        print(formatted_results, "FORMATTED???")

    print('all done')
    return jsonify(results=formatted_results)

# @bp.route("/getarticlesinfo", methods=["GET"])
# def getarticlesinfo():
#     json_payload = request.get_json()
    
#     #articles = json.loads(json_payload['articles'])
#     articles = ['https://www.vogue.com/article/slam-jam-luca-benini-interview-pitti-uomo']
#     # check if article url has an entry
#     print("HEY")
#     article_full_info = {}
#     for article in articles:
#         # if (has_info(article)):
#         #     continue
       
#         # article = str(article)
#         my_info = {'title': '', 'url':'', 'descrip':'', 'image':''}
#         try:
#             proxyurl = "https://cors-anywhere.herokuapp.com/";
#             # headers = {'x-requested-with': 'XMLHttpRequest'}
#             # response = requests.get(proxyurl+article, headers=headers)
#             print('here>>')
#             soup = BeautifulSoup(urlopen(article).read())
            
#             title = soup.find("meta",  property="og:title")
#             url = soup.find("meta",  property="og:url")
#             descrip = soup.find("meta", property="og:description")
#             image = soup.find("meta", property="og:image")


#             if title: my_info['title'] = title['content']
#             if url: my_info['url'] = url['content']
#             if descrip: my_info['descrip'] = descrip['content']
#             if image: my_info['image'] = image['content']

#             print(title, url, descrip, image)

            
#         except Exception, err:
#             print('Error in retrieving stuff: ', str(err))
#         # print(title["content"] if title else "No meta title given")
#         # print(url["content"] if url else "No meta url given")
#         # print(image["content"] if image else "No meta image given")
#         # print(descrip["content"] if descrip else "No meta descrip given")
    

#         article_full_info[article] = my_info
#     print(article_full_info)

#     #print(article_full_info)
#     return jsonify(all_article_info=article_full_info)
     
# def has_info(article):

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
