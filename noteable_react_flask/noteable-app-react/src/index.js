

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


class ArticleBox extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value:null,
    }
  }
  
  render() {
    return (
      <div className = "container">
      <div className = "article_box">
      
      <h1> {this.props.title} </h1>
      <h2> {this.props.preview} </h2>

      </div>
      </div>
    );
  }
}

// class Square extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       value:null,
//     }
//   }
  
//   render() {
//     return (
//       <div className = "container">
//       <button className="square" onClick={() => this.setState({value:'X'})}>
//         {this.state.value} 
//       </button>
//       <a href = "googlecom">
//         Hello
//       </a>
//       </div>
//     );
//   }
// }
// class LabelButton extends React.Component{
//   render() {
//     return(
//       <input onClick = "tag_article({this.props.labelname})" type = "button" value={this.props.labelname}></input>
//     )
//     }

// }
class ArticleAdd extends React.Component {
 

  handleSubmit(event){
    alert();
    var object = this.refs.article_add_place
    
    alert("Empty value");
    alert(object.value);
    
  }

  tag_article(tag_name){
    alert('yo!!!')
    alert(tag_name);
  }

  tag_article(){
    alert('hi!!');
  }
  render() {
    const status = 'Enter Article URL';
    const labelname1 = "Eats";
    const labelname2 = "Tech";
    const labelname3 = "Wow";

    return (
      <div>
      <h1>Noteable</h1>
      <div className="status">{status}</div>
      <form onSubmit={this.handleSubmit}>
      <input ref = "article_add_place" type="text"></input>
      <br></br>
      <input type="button" value={labelname1} onClick="tag_article()" ></input>
      <input type = "button" value={labelname2} onClick = "tag_article({labelname2})" ></input>
      <input  type = "button" value={labelname3} onClick = "tag_article({labelname3})"></input>
      <br></br>
      <input type="submit"></input>
      </form>
      </div>
    );
  }
}

class Home extends React.Component {
  render() {
    return (
      <div className="home">
      <ArticleAdd />
      <ArticleBox title="Local Fireman Saves Cat!" />
      <ArticleBox title="Recent Reveal of New Baby"  />
      <ArticleBox title="World Record Broken"  />
      </div>
    );
  }
}
// ========================================

ReactDOM.render(
  <Home />,
  document.getElementById('root')
);
