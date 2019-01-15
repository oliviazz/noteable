
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
import LoginContainer from 'components/Login/LoginContainer'
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
    this._username = ""
    this.getData = this.getData.bind(this);
    
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
      // try {
      //   this.props.history.push({
      //     pathname: '/users',
      //     state: {searchTerm: this.state.value}
      //    })
        
      // }
      // catch(error) { console.log(error) }
    }
    return (
      <Router>
      <div>
      <div className="header-div">
        <header><Navbar className = "navBarMain">
              <Navbar.Header><div className = "logoText"><Navbar.Brand className = "logo"><a href="/">Noteable</a></Navbar.Brand></div>
              </Navbar.Header>
              <Nav>
                  <NavItem eventKey={1} href="/quickadd">Add Article</NavItem>
                  <NavItem eventKey={2} href="/groups">Groups</NavItem>
                  <NavItem eventKey={3} href="/mypage">My Noteable</NavItem>
                  <NavItem eventKey={4} href="/users">Friends</NavItem>
                  <Navbar.Form pullRight>   
                      <FormGroup><FormControl type="text" placeholder="search users" name="searchTerm"  onChange = {onChange}/>
                      </FormGroup><Button type="submit" onClick={(e) => onSubmit()}>Submit</Button>
                  </Navbar.Form>
              </Nav>
            <AuthButton /></Navbar>
      </header>
    </div>
      <div>
        <PrivateRoute exact path="/" component={LoginContainer} />
        <LoadingView currentlySending={loadingAuth} />
        <PrivateRoute path="/mypage" component={PageContainer} />
        <PrivateRoute path="/quickadd" component={ArticleAdd} />
        <PrivateRoute path="/groups" component={GroupContainer} />
        <PrivateRoute path="/users" component={UserContainer} />
        <PrivateRoute path="/grouppage" component={GroupPageContainer} />

        <LoginRoute path="/login" component={LoginContainer} />
        <Route path="/logout" component={LogoutContainer} />     
      </div>
    </div>
    </Router>
    )}

getData(val){
    // do not forget to bind getData in constructor
    console.log(val);
}

}

function Public() {
  return <h3>Public</h3>;
}

function Protected() {
  return <h3>Protected</h3>;
}





const actualAuth = {
  isAuthenticated: true,
  username: 'ozhang@princeton.edu',
  authenticate(cb){
    this.isAuthenticated = true

  },
  signout(cb){
    this.isAuthenticated = false
    this.username = '';
    window.location.reload();
  }
}



function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route {...rest}
     render={props => actualAuth.isAuthenticated ? 
      ( props =  <Component {...props} username={actualAuth.username} />) : 
      (<Redirect  to={{  pathname: "/login", state: { from: props.location } }} />  )
  } />
  
  );
}

function LoginRoute({ component: Component, ...rest }) {



  var handleLanguage = (langValue) => {
        this.setState({language: langValue});
  }

  return (
    <Route {...rest}
     render={props => actualAuth.isAuthenticated ? 
      ( props =  <Component {...props} username={actualAuth.username} sendData={this.getData} bob = "patrick"/>) : 
      ( props =  <Component {...props}  onSelectLanguage={this.handleLanguage} sendData={this.getData} bob = "patrick"/> )
  } />
  
  );
}
  

const AuthButton  = 
      withRouter(
      ({ history }) =>
        actualAuth.isAuthenticated ? (
          <p>
            Welcome {actualAuth.username}!{" "}
            <button
              onClick={() => {
                actualAuth.signout(() => history.push("/login"));
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


