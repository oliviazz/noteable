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
  render() {
    const { loggedIn } = this.props

    return (
      <header>
      <Navbar>
  <Navbar.Header>
    <Navbar.Brand>
      <a href="#home">Noteable</a>
    </Navbar.Brand>
    <Navbar.Toggle />
  </Navbar.Header>
  <Nav>
  <NavItem eventKey={2} href="/quickadd">
        Add Article
      </NavItem>
        <NavItem eventKey={2} href="#">
        Groups
      </NavItem>
        <NavItem eventKey={2} href="/mypage">
        My Page
      </NavItem>
      <Navbar.Form pullRight>
      <FormGroup>
        <FormControl type="text" placeholder="Search" />
      </FormGroup>{' '}
      <Button type="submit">Submit</Button>
    </Navbar.Form>
  </Nav>
</Navbar>;
</header>
    // <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
    //   <MenuItem eventKey={3.1}>Action</MenuItem>
    //   <MenuItem eventKey={3.2}>Another action</MenuItem>
    //   <MenuItem eventKey={3.3}>Something else here</MenuItem>
    //   <MenuItem divider />
    //   <MenuItem eventKey={3.4}>Separated link</MenuItem>
    // </NavDropdown>
   

  
    //   <nav class="navbar navbar-expand-lg navbar-light bg-light">
    //   <a class="navbar-brand" href="#">Navbar</a>
    //   <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
    //     <span class="navbar-toggler-icon"></span>
    //   </button>
    //   <div class="collapse navbar-collapse" id="navbarTogglerDemo02">

    //     <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
    //       <li class="nav-item active">
    //         <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
    //       </li>
    //       <li class="nav-item">
    //          <Link to="/login" className="nav-link">| Login |</Link>
    //       </li>
    //       <li class="nav-item">
    //         <a class="nav-link disabled" href="/quickadd">Disabled</a>
            
    //       </li>
    //     </ul>
    //     <button type="button" id="navbutton" class="btn btn-primary navbar-btn">
    //         +
    //     </button>

    //     <form class="form-inline my-2 my-lg-0">
    //       <input class="form-control mr-sm-2" type="search" placeholder="Search"></input>
    //       <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    //     </form>
    //   </div>
    // </nav>
    // </header>

    );
  }
}
const mapStateToProps = state => ({
  loggedIn: state.loggedIn
})

export default connect(mapStateToProps)(Header)
