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


import './mypage.css';

class Header extends React.Component {

  constructor() {
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
        </Navbar>
    </header>
    </div>
    );
  }
}
const mapStateToProps = state => ({
  loggedIn: state.loggedIn,

})

export default connect(mapStateToProps)(Header)
