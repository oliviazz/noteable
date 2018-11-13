

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';


class Square extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value:null,
    }
  }
  
  render() {
    return (
      <div className = "container">
      <button className="square" onClick={() => this.setState({value:'X'})}>
        {this.state.value} 
      </button>
      <a href = "googlecom">
        Hello
      </a>
      </div>
    );
  }
}

class Feed extends React.Component {
  renderSquare(i) {
    return <Square value={i} />;
  }

  handleSubmit(event){
    alert('hi')
  }
  render() {
    const status = 'Enter Ardsfsdfdsaicle URL';

    return (
      <div>
      <h1>Noteable</h1>
      <div className="status">{status}</div>
      <form onSubmit={this.handleSubmit}>
      <input type="text"></input>
      <input type = "submit" value="News"></input>
      <input type = "submit" value="Eats"></input>
      <input type = "submit" value="Tech"></input>
      <br></br>
      <input type="submit"></input>
      </form>
      </div>
    );
  }
}

class MyPage extends React.Component {
  render() {
    return (
      <div className="home">
        <div className="game-board">
          <Feed />
        </div>
      </div>
    );
  }
}
// ========================================

ReactDOM.render(
  <MyPage />,
  document.getElementById('root')
);
