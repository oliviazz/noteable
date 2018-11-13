<<<<<<< HEAD
[![Maintainability](https://api.codeclimate.com/v1/badges/2c00592733bb3efc9a3d/maintainability)](https://codeclimate.com/github/matt-sm/create-react-flask/maintainability)

# create-react-app + flask
If you really want to create a client react app with session-based authentication.

It does seem counter-intuative to use a stateful server with a stateless Single Page App, but there may be situations (eg. required to integrate with an existing session-based Api) where you can't use tokens.  

Notes:
* for cookies to work, the Api must be hosted on the same domain as the site. On localhost, Api calls are be proxied to `localhost:5000`.
* with the source of truth being the server, when the app first loads it tries to ping an endpoint to determine if the cookie is still valid, and set the correct `lsLoggedIn` value in state. The front end does not track cookie expiry, etc.
* if `isLoggedIn: true` and the cookie does expire, the server will return a `401` and the app redux state will change to `isLoggedIn: false`

React structure inspired by this [container pattern](http://lucasmreis.github.io/blog/simple-react-patterns/).

Auth managed via [flask-login](https://github.com/maxcountryman/flask-login).

Redux actions/reducers based on [login-flow](https://github.com/mxstbr/login-flow).

## Start the frontend:
```
cd client
nvm use
npm install
npm start
```
## Start the backend:
```
virtualenv venv
source venv/bin/activate
pip install -r requirements.txt
python run.py
```

## Run prettier:
```
npm run prettier
```
=======
**Edit a file, create a new file, and clone from Bitbucket in under 2 minutes**

When you're done, you can delete the content in this README and update the file with details for others getting started with your repository.

*We recommend that you open this README in another tab as you perform the tasks below. You can [watch our video](https://youtu.be/0ocf7u76WSo) for a full demo of all the steps in this tutorial. Open the video in a new tab to avoid leaving Bitbucket.*

---

## Edit a file

You’ll start by editing this README file to learn how to edit a file in Bitbucket.

1. Click **Source** on the left side.
2. Click the README.md link from the list of files.
3. Click the **Edit** button.
4. Delete the following text: *Delete this line to make a change to the README from Bitbucket.*
5. After making your change, click **Commit** and then **Commit** again in the dialog. The commit page will open and you’ll see the change you just made.
6. Go back to the **Source** page.

---

## Create a file

Next, you’ll add a new file to this repository.

1. Click the **New file** button at the top of the **Source** page.
2. Give the file a filename of **contributors.txt**.
3. Enter your name in the empty file space.
4. Click **Commit** and then **Commit** again in the dialog.
5. Go back to the **Source** page.

Before you move on, go ahead and explore the repository. You've already seen the **Source** page, but check out the **Commits**, **Branches**, and **Settings** pages.

---

## Clone a repository

Use these steps to clone from SourceTree, our client for using the repository command-line free. Cloning allows you to work on your files locally. If you don't yet have SourceTree, [download and install first](https://www.sourcetreeapp.com/). If you prefer to clone from the command line, see [Clone a repository](https://confluence.atlassian.com/x/4whODQ).

1. You’ll see the clone button under the **Source** heading. Click that button.
2. Now click **Check out in SourceTree**. You may need to create a SourceTree account or log in.
3. When you see the **Clone New** dialog in SourceTree, update the destination path and name if you’d like to and then click **Clone**.
4. Open the directory you just created to see your repository’s files.

Now that you're more familiar with your Bitbucket repository, go ahead and add a new file locally. You can [push your change back to Bitbucket with SourceTree](https://confluence.atlassian.com/x/iqyBMg), or you can [add, commit,](https://confluence.atlassian.com/x/8QhODQ) and [push from the command line](https://confluence.atlassian.com/x/NQ0zDQ).
>>>>>>> b2278bd2f9aee33c09ac4e488b1b42dbb20de3d9
