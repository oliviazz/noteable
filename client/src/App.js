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

import LoginContainer from 'components/Login/LoginContainer'
import { login, setErrorMessage } from 'actions/appActions'
import UserAdd from 'components/UserAdd'
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
    this.state = {
      'username': 'livya.zhang@gmail.com'
    }
    this.handleCB=this.handleCB.bind(this);
    
  }
  componentDidMount() {
    this.props.loadUser()
  }

  handleCB(event){
    let value = event.target.value;
    this.setState({
      username:value
    });
  }

  render() {
     

    const username = localStorage.getItem('username');
    console.log(username)
    if (username != ''){
      actualAuth.isAuthenticated = true;
      actualAuth.username = username;

    }
   
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
                  
              </Nav>
            <AuthButton /></Navbar>
      </header>
    </div>
      <div>
        <Route exact path="/" component={PageContainer} mhandleCB={this.handleCB} />
        <LoadingView currentlySending={loadingAuth} mhandleCB={this.handleCB}/>
        <Route path="/mypage" component={PageContainer} mhandleCB={this.handleCB} />
        <Route path="/quickadd" component={ArticleAdd} mhandleCB={this.handleCB}/>
        <Route path="/groups" component={GroupContainer} mhandleCB={this.handleCB}/>
        <Route path="/users" component={UserContainer} mhandleCB={this.handleCB} />
        <Route path="/grouppage" component={GroupPageContainer} mhandleCB={this.handleCB}/>

        <Route path="/login" component={LoginContainer} mhandleCB={this.handleCB}/>
        <Route path="/logout" component={LogoutContainer} mhandleCB={this.handleCB}/>     
      </div>
    </div>
    </Router>
  )}
}


function Public() {
  return <h3>Public</h3>;
}

function Protected() {
  return <h3>Protected</h3>;
}


function handleCB(data) {
    this.setState({
      // hardcoded now
      username: "livya.zhang@gmail.com"
    });
    console.log(data)
  }


const actualAuth = {
  isAuthenticated: false,
  username: '',
  authenticate(cb){
    this.isAuthenticated = true

  },
  signout(cb){
    this.isAuthenticated = false
    this.username = '';
    localStorage.setItem('username', '')
    window.location.reload();
  }
}

function PrivateRoute({ component: Component, ...rest }) {

  return (
    <Route {...rest}
     render={props => actualAuth.isAuthenticated ? 
      ( props =  <Component {...props} username={actualAuth.username} mhandleCB = {handleCB}  />) : 
      (<Redirect  to={{  pathname: "/login", state: { from: props.location} }} />  )
  } />
  
  )
}

// function LoginRoute({ component: Component, ...rest }) {

//  var handleData = 'hi'

//   return (
//     <Route {...rest}
//      render={props => actualAuth.isAuthenticated ? 
//       ( props =  <Component  {...props} username={actualAuth.username} handlerFromParent={handleData} />) : 
//       ( props =  <Component {...props} username={actualAuth.username} handlerFromParent={handleData} /> )
//   } />
  
//   );
// }
  

const AuthButton  = 
      withRouter(
      ({ history }) =>
        actualAuth.isAuthenticated ? (
          <p>
            {actualAuth.username}{" "}
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

