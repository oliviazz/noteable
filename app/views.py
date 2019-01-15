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

# ---------------------------------------------------------------------------------------------------------------------------------------------------#
# HELPER FUNCTIONS                                                                                                                                   #
#                                                                                                                                                    #
#                                                                                                                                                    #
#                                                                                                                                                    #
#                                                                                                                                                    #
# ---------------------------------------------------------------------------------------------------------------------------------------------------#
def displayArticlesHelper(article_query_results):
    print("RESULTS, " + str(article_query_results), " these are the results")
    formatted_results = {}
    for i in range(0, len(article_query_results)):
        'CREATE TABLE articles(articleURL TEXT NOT NULL, numUses integer)'

        # 0: articleID
        # 1: title
        # 2: icon
        # 3: blurb
        # 4: author
        # 5: date
        # 6: URL
        # 7: numuses
        # 8: tags, separated by comma

        article_id = str(article_query_results[i][0])

        article_url = str(article_query_results[i][6])
    
        formatted_results[article_url] = {
            'title': article_query_results[i][1],
            'icon': article_query_results[i][2], 
            'blurb': article_query_results[i][3],
            'author': article_query_results[i][4],
            'date': article_query_results[i][6],
            'tag': article_query_results[i][8],
            'url': article_query_results[i][6]
        }

        #ormatted_results = sorted(formatted_results, key=formatted_results['date'])
       
    return formatted_results

def modularAddArticle(json_payload, username):
    article = str(json_payload['article_url'])
    tags = str(json_payload['tags'])
    print 'Verifying that article and tags parsed', article, tags
  
    database = Database()
    database.connect()

    my_info = {'title':'', 'url':'', 'descrip':'', 'image':'', 'author':''}

    working = False
    try:
        #trimmed_url = article[1:-1].encode('ascii', errors='ignore')
        trimmed_url  = article.replace('"', '').replace("'", '')

        print "trimmed_url: " + str(trimmed_url)
        trimmed_url = trimmed_url.encode('ascii', errors='ignore')
        print "trimmed_url 2: " + str(trimmed_url) 
        soup = BeautifulSoup(urlopen(trimmed_url).read(), "lxml")
        title = soup.find("meta",  property="og:title")
        print title
        url = soup.find("meta",  property="og:url")
        descrip = soup.find("meta", property="og:description")
        image = soup.find("meta", property="og:image")
        author = soup.find('meta', {'name': 'byl'})

        if title: 
            my_info['title'] = title['content'].encode('ascii', errors='ignore')
            working = True
        if url: my_info['url'] = url['content'].encode('ascii', errors='ignore')
        if descrip: my_info['descrip'] = descrip['content'].encode('ascii', errors='ignore')
        if image: my_info['image'] = image['content'].encode('ascii', errors='ignore')
        if author:my_info['author'] = author['content'].encode('ascii', errors='ignore')

        time = datetime.datetime.today().strftime('%Y-%m-%d').encode('ascii', errors='ignore')

        database.insertArticle(username, articleTitle=my_info['title'], articleIcon=my_info['image'], 
                                articleBlurb=my_info['descrip'], articleAuthor=my_info['author'], articleDate=time,
                                articleURL=my_info['url'], tags=tags)

        print(database.userTagArticles(username, ""), "LEt's see if this worked!")
        print('above are my tags')
        print('verifiting that the info was successfully parsed \n\n ', my_info, username)
        database.disconnect()
        return jsonify(message="Posted article: " + article + '; Metadata collection: ' + str(working) ), 200


        
    except Exception as e:
        print(e)
        database.disconnect()
        return jsonify(message='Error!'), 400


    
   

        
   

    
   
   
    

# ---------------------------------------------------------------------------------------------------------------------------------------------------#
# LOGIN/USER                                                                                                                                         #
#                                                                                                                                                    #
#                                                                                                                                                    #
#                                                                                                                                                    #
#                                                                                                                                                    #
# ---------------------------------------------------------------------------------------------------------------------------------------------------#
@bp.route("/", methods=["GET"])
def index():
    return jsonify(message="Hello World!"), 200


@bp.route("/login", methods=["POST"])
def login():
    json_payload = request.get_json()
    # user_entry = User.get(json_payload['username'].replace('\"', ''))
    username = 'livz'
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
    preUserId = str(json_payload['pre_user_Id'])
    userId = hash(preUserId)
    
    database = Database()
    database.connect()

    userExists = database.checkUser(userId)

    return jsonify(exists = userExists), 200

  
    
@bp.route("/createuser", methods=["POST"])
def createuser():
    json_payload = request.get_json()
    user_data = json_payload['data']
    print(user_data, ' \n\nuser data')
    database = Database()
    database.connect()
    username = user_data['username'].replace('\"', '')
    database.insertUser(str(user_data['firstName']), str(user_data['lastName']), str(username))
    return jsonify(message=("User" + username + "successfully entered")), 200

# ---------------------------------------------------------------------------------------------------------------------------------------------------#
# GROUP SHIT                                                                                                                                         #
#                                                                                                                                                    #
#                                                                                                                                                    #
#                                                                                                                                                    #
#                                                                                                                                                    #
# ---------------------------------------------------------------------------------------------------------------------------------------------------#

@bp.route("/creategroup", methods=["POST"])
def creategroup():
    json_payload = request.get_json()
    database = Database()
    database.connect()
    database.insertGroup(json_payload['groupname'].replace('\"', ''))
    database.disconnect()
    return jsonify(message="Created group: " + json_payload['groupname'].replace('\"', '')), 200

@bp.route("/joingroup", methods=["POST"])
def joingroup():

    json_payload = request.get_json()
    username = str(json_payload['username'].replace('\"', ''))
    groupname = str(json_payload['groupname'].replace('\"', ''))
    print("username: " + username)
    print("groupname: " + groupname)

    database = Database()
    database.connect()
    database.addUserToGroup(username, groupname)
    database.disconnect()
    return jsonify(message="Added: " + username + " to group " + groupname), 200

@bp.route("/displayallgroups", methods=["POST"])
def displayallgroups():
    database = Database()
    database.connect()
    groups = database.allGroups()
    print groups
    formatted_results = {}
    for i in range(0, len(groups)):
        formatted_results[i] = {'groupname': groups[i][0].replace(",", "")}
    database.disconnect()
    return jsonify(results=formatted_results), 200

@bp.route("/displaymygroups", methods=["POST"])
def displaymygroups():
    database = Database()
    database.connect()
    json_payload = request.get_json()
    username = str(json_payload['username'].replace('\"', ''))
    groups = database.displayAllGroupsFromUsername(username)
    formatted_results = {}
    for i in range(0, len(groups)):
        formatted_results[i] = {'groupname': groups[i][0]}
    database.disconnect()
    return jsonify(results=formatted_results), 200

@bp.route("/displaygrouparticles", methods=["POST"])
def displaygrouparticles():
    database = Database()
    database.connect()

    json_payload = request.get_json()

    print(json_payload, "payload in get articles")
    # PUT THIS BACK LATER
    groupname = json_payload['groupname'].replace('\"', '')
    tags = ""

    article_query_results = database.userTagArticles(groupname, tags)
    print article_query_results

    formatted_results = displayArticlesHelper(article_query_results)

    print('all done')
    return jsonify(results=formatted_results)

@bp.route("/leavegroup", methods=["POST"])
def leavegroup():
    json_payload = request.get_json()
    username = str(json_payload['username'].replace('\"', ''))
    groupname = str(json_payload['groupname'].replace('\"', ''))
    database = Database()
    database.connect()
    database.deleteUserFromGroup(username, groupname)
    database.disconnect()
    return jsonify(message="Removed: " + username + " from group " + groupname), 200


@bp.route("/addarticletogroup", methods=["POST"])
def addarticletogroup():
    json_payload = request.get_json()
    print(json_payload, " addarticle json payload")
    # UPDATE LATER
    groupname = str(json_payload['groupname'].replace('\"', ''))

    result = modularAddArticle(json_payload, groupname)
    return result

# ---------------------------------------------------------------------------------------------------------------------------------------------------#
# FRIEND FUNCTIONS                                                                                                                                   #
#                                                                                                                                                    #
#                                                                                                                                                    #
#                                                                                                                                                    #
#                                                                                                                                                    #
# ---------------------------------------------------------------------------------------------------------------------------------------------------#
@bp.route("/addfriend", methods=["POST"])
def addfriend():
    json_payload = request.get_json()
    username = str(json_payload['username'].replace('\"', ''))
    friendname = str(json_payload['friendname'].replace('\"', ''))

    database = Database()
    database.connect()
    database.addFriend(username, friendname)
    database.disconnect()
    return "addedfriend"
    
@bp.route("/removefriend", methods=["POST"])
def removefriend():
    json_payload = request.get_json()
    username = str(json_payload['username'].replace('\"', ''))
    friendname = str(json_payload['friendname'].replace('\"', ''))
    database = Database()
    database.connect()
    database.deleteFriend(username, friendname)
    database.disconnect()
    return "deletedfriend"

@bp.route("/displaypending", methods=["POST"])
def displaypending():
    json_payload = request.get_json()
    database = Database()
    database.connect()
    username = str(json_payload['username'].replace('\"', ''))
    allpending = database.displayPending(username)

    formatted_results = {}
    for i in range(0, len(allpending)):
        formatted_results[i] = {'firstname': allpending[i][0], 'lastname': allpending[i][1], 'username': allpending[i][2]}
    database.disconnect()
    return jsonify(results=formatted_results), 200

@bp.route("/checkfriends", methods=["POST"])
def checkfriends():
    json_payload = request.get_json()
    username = json_payload['username'].replace('\"', '')
    friendname = json_payload['friendname'].replace('\"', '')
    
    database = Database()
    database.connect()
    friendsLogic = database.checkFriends(username, friendname)

    return jsonify(results=friendsLogic), 200

@bp.route("/friendarticles", methods=["POST"])
def friendarticles():
    json_payload = request.get_json()
    # PUT THIS BACK LATER
    username = json_payload['username'].replace('\"', '')
    friendname = json_payload['friendname']

    tags = ""

    database = Database()
    database.connect()
    friendsLogic = database.checkFriends(username, friendname)

    if friendsLogic == True:
        article_query_results = database.userTagArticles(username, tags)
        print article_query_results
        formatted_results = displayArticlesHelper(article_query_results)
        print('all done')
        return jsonify(results=formatted_results)
    else:
        print "you are not friendos"
        return "Would you like to add this user as a friend?"

@bp.route("/allfriends", methods=["POST"])
def allfriends():
    json_payload = request.get_json()
    # PUT THIS BACK LATER
    username = json_payload['username'].replace('\"', '')

    database = Database()
    database.connect()
    friends = database.allUserFriends(username)
    formatted_results = {}
    for i in range(0, len(friends)):
        formatted_results[i] = {'firstname': friends[i][0], 'lastname': friends[i][1], 'username': friends[i][2]}
    database.disconnect()
    return jsonify(results=formatted_results), 200

@bp.route("/allusers", methods=["POST"])
def allusers():
    database = Database()
    database.connect()
    users = database.allUsers()
    formatted_results = {}

    for i in range(0, len(users)):
        formatted_results[i] = {'firstname': users[i][0], 'lastname': users[i][1], 'username': users[i][2]}

    database.disconnect()
    return jsonify(results=formatted_results), 200

@bp.route("/alltags", methods=["POST"])
def alltags():
    database = Database()
    database.connect()
    tags = database.allTags()
    print(tags, "AGGGGGG")
    formatted_results = {}

    for i in range(0, len(tags)):
        formatted_results[i] = {'tagname': tags[i][0]}

    print(formatted_results, "FORMATTED RESULTS")
    database.disconnect()
    return jsonify(results=formatted_results), 200

# ---------------------------------------------------------------------------------------------------------------------------------------------------#
# ARTICLE FUNCTIONS                                                                                                                                  #
#                                                                                                                                                    #
#                                                                                                                                                    #
#                                                                                                                                                    #
#                                                                                                                                                    #
# ---------------------------------------------------------------------------------------------------------------------------------------------------#
@bp.route("/feed", methods=["POST"])
def feed():
    database = Database()
    database.connect()

    json_payload = request.get_json()

    print(json_payload, "payload in get articles")
    # PUT THIS BACK LATER
    # username = json_payload['username'].replace('\"', '')
    username = 'livz'
    
    tags = ""

    article_query_results = database.feed(username, tags)
    print article_query_results

    formatted_results = displayArticlesHelper(article_query_results)

    print('all done')
    return jsonify(results=formatted_results)

@bp.route("/addarticle", methods=["POST"])
def addarticle():
    
    json_payload = request.get_json()
    print(json_payload, " addarticle json payload")
    # UPDATE LATER
    username = str(json_payload['username'].replace('\"', ''))
    print "now, testing that it exists after adding"

    

    result = modularAddArticle(json_payload, username)


    return result


@bp.route("/deletearticle", methods=["POST"])
def deletearticle():
    json_payload = request.get_json()
    print json_payload, "!!!!!!!!"

    username = str(json_payload['username'].replace('\"', ''))
    article = str(json_payload['article_url'])
 
    database = Database()
    database.connect()

    try:
        articleID = hash(article)
        print('--------------')
        #print(database.userTagArticles(username,""))
        database.deleteArticle(username=username, articleID=articleID)
        #print(database.userTagArticles(username, ""))
        print('--------------')
        database.disconnect()

        return jsonify(message="Deleted article: " + article), 200
    except Exception, err:
        print('Error in deleting article: ', str(err))
        database.disconnect()
        return jsonify(message="Error in deleting article article!"), 400



@bp.route("/getarticles", methods=["POST"])
def getarticles():

    database = Database()
    database.connect()

    json_payload = request.get_json()

    print json_payload, "payload for get articles"

    # PUT THIS BACK LATER
    username = json_payload['username'].replace('\"', '')   
    tags = ""

    article_query_results = database.userTagArticles(username, tags)
    print "Article Query Results: ", article_query_results

    formatted_results = displayArticlesHelper(article_query_results)
    database.disconnect()
    print('all done')
    return jsonify(results=formatted_results)

@bp.route("/getgrouparticles", methods=["POST"])
def getgrouparticles():
    database = Database()
    database.connect()

    json_payload = request.get_json()


    print json_payload, "payload for get group articles"

    # PUT THIS BACK LATER
    groupname = json_payload['groupname'].replace('\"', '')   
    tags = ""
    print(groupname, "yooo!!")

    article_query_results = database.getArticlesFromGroup(groupname)
    print("fdafsa--------------------\n", article_query_results)
    formatted_results = displayArticlesHelper(article_query_results)
    database.disconnect()
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
