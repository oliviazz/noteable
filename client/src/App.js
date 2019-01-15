
// #-----------------------------------------------------------------------
// # app.js
// # Author: Olivia Zhang, Zoë Barnswell, Lyra Katzman 
// #-----------------------------------------------------------------------

import React from 'react'
import { 
        Route, 
        BrowserRouter as Router, 
        withRouter,
        Link,
        Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import LogoutContainer from 'components/Logout/LogoutContainer'
import ProtectedContainer from 'components/Protected/ProtectedContainer'
import UserContainer from 'components/UserContainer'
import PageContainer from 'components/PageContainer'
import GroupContainer from 'components/GroupContainer'
import GroupPageContainer from 'components/GroupPageContainer'
import HomeContainer from 'components/Home/HomeContainer'
import Header from 'components/Header'
import ArticleAdd from 'components/ArticleAdd'
import Article from 'components/Article'
import LoadingView from 'components/LoadingView'
import { loadMe } from 'actions/appActions'

import LoginForm from 'components/Login/LoginForm'
import { login, setErrorMessage } from 'actions/appActions'
import UserAdd from 'components/UserAdd'
import GoogleLogin from 'react-google-login';

import Row from 'react-bootstrap/lib/Row';
import Grid from 'react-bootstrap/lib/Grid';
import Col from 'react-bootstrap/lib/Col';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';
import axios from 'axios';
import Button from 'react-bootstrap/lib/Button';
import Nav from 'react-bootstrap/lib/Nav';
import Navbar from 'react-bootstrap/lib/Navbar';
import NavDropdown from 'react-bootstrap/lib/NavDropdown';
import MenuItem from 'react-bootstrap/lib/MenuItem';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import FormControl from 'react-bootstrap/lib/FormControl';
import NavItem from 'react-bootstrap/lib/NavItem';
import 'App.css'


class App extends React.Component {

  constructor(props){
    super(props)
    
  }
  componentDidMount() {
    this.props.loadUser()
  }

 

render() {
    console.log('is logged in', actualAuth.isAuth)
    const { loadingAuth } = this.props
    const onChange = event => {
      this.setState({value: event.target.value});
    }

    const onSubmit = event => {   
    
      console.log(this.props)
      try {
        this.props.history.push({
          pathname: '/users',
          state: {searchTerm: this.state.value}
         })
        
      }
      catch(error) {
          console.log(error)
      }
    }
    
    // <Navbar.Form pullRight>
    //   <Button type="submit" onClick={(e) => onSubmit()}>Submit</Button>
    // </Navbar.Form>
    
    return (
       <Router>
      <div>
            <div className="header-div">
      <header>
          <Navbar className = "navBarMain">
            <Navbar.Header>
              <div className = "logoText">
                <Navbar.Brand className = "logo"><a href="/">Noteable</a></Navbar.Brand>
              <Navbar.Toggle />
              </div>
            </Navbar.Header>
            <Nav>
                <NavItem eventKey={1} href="/quickadd">Add Article</NavItem>
                <NavItem eventKey={2} href="/groups">Groups</NavItem>
                <NavItem eventKey={3} href="/mypage">My Noteable</NavItem>
                <NavItem eventKey={4} href="/users">Friends</NavItem>
                <Navbar.Form pullRight><Button type="submit" onClick={(e) => onSubmit()}>Submit</Button>
                </Navbar.Form>

          </Nav>
          <AuthButton />
        </Navbar>
    </header>
    </div>

     
        <div>
        <AuthButton />
       
          {!loadingAuth && (
            <div>
     
              <PrivateRoute exact path="/" component={LoginContainer} />
              <PrivateRoute path="/login" component={LoginContainer} />
              <PrivateRoute path="/mypage" component={PageContainer} />
            
              <PrivateRoute path="/quickadd" component={ArticleAdd} />
              <PrivateRoute path="/groups" component={GroupContainer} />
              <PrivateRoute path="/users" component={UserContainer} />
              <PrivateRoute path="/grouppage" component={GroupPageContainer} />
          
              <Route path="/logout" component={LogoutContainer} />
              <Route path="/protected" component={ProtectedContainer} />

              <PrivateRoute path="/protected" component={Protected} />
              <PrivateRoute path="/protected" component={Protected} />
            </div>
          )}
          <LoadingView currentlySending={loadingAuth} />
        </div>
    
      </div>
      </Router>
    )
  }
}

class LoginContainer extends React.Component {


  constructor(props) {
        super(props);
        this.state = {
           loginError: false,
           redirect: false
        };
        this.signup = this.signup.bind(this);
        this._username = ''
    }

 

 

  login(res, type) {
    let postData;

    if (type === 'google' && res.w3.U3) {
        postData = {
          name: res.w3.ig,
          provider: type,
          email: res.w3.U3,
          first_name: res.w3.ofa,
          last_name: res.w3.wea,
          provider_id: res.El,
          token: res.Zi.access_token,
          provider_pic: res.w3.Paa
        }
    }

    if (postData) {
          axios.post('api/checkuserexists', {pre_user_Id: postData['email']})
          .then(res => {
                    if (res.data['exists']){
                        console.log('Welcome!')
                        this._username = postData['email']
                        
                        this.props.history.push({
                                    pathname: '/quickadd',
                                    state: {username: this._username, displayUsername: this._username} // your data array of objects
                                  }) 
                    }
                    else{
                      alert('Error: User not found ')
                    }
          })
    }
  }

  

  signup(res, type){
        // postData connects to database, and must include all info needed
        let postData;

        if (type === 'google' && res.w3.U3) {
            postData = {
              name: res.w3.ig,
              provider: type,
              email: res.w3.U3,
              first_name: res.w3.ofa,
              last_name: res.w3.wea,
              provider_id: res.El,
              token: res.Zi.access_token,
              provider_pic: res.w3.Paa
            };
        }

        if (postData) {
      
          console.log("Working", postData)

          axios.post('api/checkuserexists', {pre_user_Id: postData['email']})
          .then(res => {
                    console.log('Checking for existence of user ', postData['email'])
                    if (! res.data['exists']){
                        // ask for username
                        console.log('bro u wrong')

                          var relevantData = {
                            'firstName':  postData['first_name'],
                            'lastName': postData['last_name'],
                            'pre_userId': postData['email'], 
                            'username': postData['email']
                          }
                          this._username = postData['email']

                          axios.post('/api/createuser', {data: relevantData})
                          .then(res => {
                                  console.log("Received response: ", res.data);
                                  this.props.history.push({
                                    pathname: '/quickadd',
                                    state: {username: this._username, displayUsername: this._username} // your data array of objects
                                  }) 
                          })
                    }
                    else{
                      alert('Error: user already exists with that Google account. Please Log in Instead. ')
                      console.log('tried to sign up for existing user')
                    }

                   
          })
        }
      }
    
   


  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' } }
    const { redirectToReferrer } = this.state

    if (redirectToReferrer === true) {
      return <Redirect to={from} />
    }

    const { loggedIn, handleSubmit, currentlySending, formState, errorMessage } = this.props

    // return (
    //   <div>
    //   <UserAdd />
        // if (this.state.redirect || sessionStorage.getItem('userData')) {
        //     return (<Redirect to={'/home'}/>)
        // }
      
      const responseGoogleLogin = (response) => {
            // 17:20 for google info demo
 
            console.log(response);
            this.login(response, 'google');
        }
      const responseGoogleSignUp = (response) => {

        
            console.log(response);
            this.signup(response, 'google');

      }

      const responseGoogle = (response) => {
        alert('Error: please try again')
      }

        return (
        <div >
        <Grid>
                    
            <Row>
               <Col xs={1} md={1}>
               </Col>
               <Col xs={8} md={8}>
                    <h1> Welcome to Noteable </h1> <br></br>
                    <GoogleLogin
                      clientId="911550655554-bbrflokkvhha58qunc6d51o2f2focvta.apps.googleusercontent.com"
                      buttonText="Sign Up with Google"
                      onSuccess={responseGoogleSignUp}
                      onFailure={responseGoogle}/>
                      <br></br>
                      <h5> If you already have an account: </h5>
                   
                    <GoogleLogin
                      clientId="911550655554-bbrflokkvhha58qunc6d51o2f2focvta.apps.googleusercontent.com"
                      buttonText="Login with Google"
                      onSuccess={responseGoogleLogin}
                      onFailure={responseGoogle}/>
               </Col>
            </Row>
        </Grid> 
        </div>
        
        );
    }
}

function Public() {
  return <h3>Public</h3>;
}

function Protected() {
  return <h3>Protected</h3>;
}

// function needLogin(){

//         return (
//         <div ><Grid>
//            <Row><Col xs={1} md={1}></Col>
//                <Col xs={8} md={8}>
//                     <h1> Welcome to Noteable </h1> <br></br>
//                     <GoogleLogin
//                       clientId="911550655554-bbrflokkvhha58qunc6d51o2f2focvta.apps.googleusercontent.com"
//                       buttonText="Sign Up with Google"
//                       onSuccess={responseGoogleSignUp}
//                       onFailure={responseGoogle}/>
//                       <br></br>
//                       <h5> If you already have an account: </h5>
//                     <GoogleLogin
//                       clientId="911550655554-bbrflokkvhha58qunc6d51o2f2focvta.apps.googleusercontent.com"
//                       buttonText="Login with Google"
//                       onSuccess={responseGoogleLogin}
//                       onFailure={responseGoogle}/>
//                </Col>
//             </Row>
//         </Grid> </div>
//         );

// }
const actualAuth = {
  //isAuth: returnUser(),
  isAuth: true,
  username: 'ozhang@princeton.edu',
  authenticate(cb){
    this.isAuth = true

  },
  signout(cb){
    this.isAuth = false
  }
}


const fakeAuth = {
  isAuthenticated: true,
  username: '',
  authenticate(cb) {
    this.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb) {
    this.isAuthenticated = false;
    this.username = '';
    setTimeout(cb, 100);
  }
};


function PrivateRoute({ component: Component, ...rest }) {
  console.log('props', rest)
  var username = 'ozhang@princeton.edu'

  return (

    <Route {...rest}
     render={props => fakeAuth.isAuthenticated ? 
      ( props =  <Component {...props} username={actualAuth.username} />) : 
      (<Redirect  to={{  pathname: "/login", state: { from: props.location } }} />  )
  } />
  
  );
}
  

const AuthButton  = 
      withRouter(
      ({ history }) =>
        fakeAuth.isAuthenticated ? (
          <p>
            Welcome {actualAuth.username}!{" "}
            <button
              onClick={() => {
                fakeAuth.signout(() => history.push("/"));
              }}
            >
              Sign out
            </button>
          </p>
        ) : (
          <p>You are not logged in.</p>
        )
    );
   

const mapStateToProps = state => ({
  loadingAuth: state.loadingAuth
})

const mapDispatchToProps = dispatch => ({
  loadUser: () => dispatch(loadMe())
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
