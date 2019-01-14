
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
import LoginContainer from 'components/Login/LoginContainer'
import LogoutContainer from 'components/Logout/LogoutContainer'
import ProtectedContainer from 'components/Protected/ProtectedContainer'
import UserContainer from 'components/UserContainer'
import PageContainer from 'components/PageContainer'
import GroupContainer from 'components/GroupContainer'
import HomeContainer from 'components/Home/HomeContainer'
import Header from 'components/Header'
import ArticleAdd from 'components/ArticleAdd'
import Article from 'components/Article'
import LoadingView from 'components/LoadingView'
import { loadMe } from 'actions/appActions'

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
    
    return (
       <Router>
      <div>
            <div className="header-div">
      <header>
          <Navbar className = "navBarMain">
            <Navbar.Header>
              <div className = "logoText">
                <Navbar.Brand className = "logo">
                  <a href="/">Noteable</a>
                </Navbar.Brand>
              <Navbar.Toggle />
              </div>
            </Navbar.Header>
            <Nav>
                <NavItem eventKey={1} href="/quickadd">
                    Add Article
                </NavItem>

                <NavItem eventKey={2} href="/groups">
                    Groups
                </NavItem>
                <NavItem eventKey={3} href="/mypage">
                    My Noteable
                </NavItem>
                <NavItem eventKey={4} href="/users">
                    Friends
                </NavItem>

                <Navbar.Form pullRight>
                   
                    <Button type="submit" onClick={(e) => onSubmit()}>Submit</Button>
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
     
              <Route exact path="/" component={LoginContainer} />
              <Route path="/login" component={LoginContainer} />
              <Route path="/mypage" component={PageContainer} />
              <Route path="/quickadd" component={ArticleAdd} />
              <Route path="/groups" component={GroupContainer} />
              <Route path="/users" component={UserContainer} />
          
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

function Public() {
  return <h3>Public</h3>;
}

function Protected() {
  return <h3>Protected</h3>;
}

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb) {
    this.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};


function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        fakeAuth.isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
}
  

const AuthButton  = 
      withRouter(
      ({ history }) =>
        fakeAuth.isAuthenticated ? (
          <p>
            Welcome!{" "}
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
