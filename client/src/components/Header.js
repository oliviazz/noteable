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
    const { loggedIn } = this.props

    const onChange = event => {
      this.setState({value: event.target.value});
    }

    const onSubmit = event => {   
      alert(this.state.value);
  }
    

    return (
      <div className="header-div">
      <header>
          <Navbar className = "navBarMain">
            <Navbar.Header>
              <div className = "logoText">
                <Navbar.Brand className = "logo">
                  <a href="#home">Noteable</a>
                </Navbar.Brand>
              <Navbar.Toggle />
              </div>
            </Navbar.Header>
            <Nav>
                <NavItem eventKey={1} href="/quickadd">
                    Add Article
                </NavItem>
                <NavItem eventKey={2} href="#">
                    Groups
                </NavItem>
                <NavItem eventKey={3} href="/mypage">
                    My Noteable
                </NavItem>

                <Navbar.Form pullRight>
                    <FormGroup>
                        <FormControl type="text" placeholder="Search" name="searchTerm" value={this.state.value} onChange = {onChange}/>
                    </FormGroup>{' '}
                    <Button type="submit" onClick={(e) => onSubmit()}>Submit</Button>
                </Navbar.Form>
          </Nav>
        </Navbar>
    </header>
    </div>
    );
  }
}
const mapStateToProps = state => ({
  loggedIn: state.loggedIn
})

export default connect(mapStateToProps)(Header)
