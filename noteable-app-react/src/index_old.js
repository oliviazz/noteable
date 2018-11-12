

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

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
      <a href = "google.com">
        Hello
      </a>
      </div>

    );
  }
}

class article_add extends React.Component {
  renderSquare(i) {
    return <Square value={i} />;
  }

  render() {
    const status = 'Next player: X';

    return (
      <div>
      <h1>Noteable</h1>
      <input type=text>
      <input type=submit>
      
      </div>
    );
  }
}

class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <div className="game-board">
          <article_add />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Home />,
  document.getElementById('root')
);
