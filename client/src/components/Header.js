import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/lib/Button';
import Nav from 'react-bootstrap/lib/Nav';
import Navbar from 'react-bootstrap/lib/Navbar';
import NavDropdown from 'react-bootstrap/lib/NavDropdown';
import MenuItem from 'react-bootstrap/lib/MenuItem';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import FormControl from 'react-bootstrap/lib/FormControl';
import NavItem from 'react-bootstrap/lib/NavItem';
import { 
        Route, 
        BrowserRouter as Router, 
        withRouter,
        Redirect } from 'react-router-dom'


import './mypage.css';

class Header extends React.Component {

  constructor(props) {
    super()
    this.state = {
      searchTerm: ""
    }
    
  
  }

  render() {
    // const { loggedIn } = this.props

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
      <div className="header-div">
      <header>
          <Navbar className = "navBarMain">
            <Navbar.Header>
              <div className = "logoText">
                <Navbar.Brand className = "logo">
                  <div className = "NoteableLogo">
                    <a href="/">Noteable</a>
                  </div>
                </Navbar.Brand>
              <Navbar.Toggle />
              </div>
            </Navbar.Header>
            <Nav>
                <NavItem eventKey={1} href="/quickadd">
                    + article
                </NavItem>

                <NavItem eventKey={2} href="/groups">
                    groups
                </NavItem>
                <NavItem eventKey={3} href="/mypage">
                    my noteable
                </NavItem>
                <NavItem eventKey={4} href="/users">
                    friends
                </NavItem>

                <Navbar.Form pullRight>
                    <FormGroup>
                        <FormControl type="text" placeholder="search users" name="searchTerm" value={this.state.value} onChange = {onChange}/>
                    </FormGroup>{' '}
                    <Button type="submit" onClick={(e) => onSubmit()}>submit</Button>
                </Navbar.Form>
          </Nav>
          <AuthButton />
        </Navbar>
    </header>
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
  loggedIn: state.loggedIn,

})

export default connect(mapStateToProps)(Header)
