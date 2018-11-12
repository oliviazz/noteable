import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { changeForm } from 'actions/appActions'
import  axios from 'axios';

class ArticleAdd extends React.Component {
 
  handleSubmit(event){
    
    
    
   
    
  }

  handleChange(e){
   this.setState({[e.target.name]: e.target.value})
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

    const submitArticle = event => {
      event.preventDefault()
      alert(this.state.article_url);
      axios.post(`https://localhost:3000/mypage`, { article_url: this.state.article_url })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
    
    
  }


    return (
      <div>
      <h1>Noteable</h1>
      <div className="status">{status}</div>
      <form onSubmit={submitArticle}>
      <input className = "article_input" name = "article_url" ref = "article_add_place" type="text" onChange={(e) => this.handleChange(e)}></input>
      <br></br>
      <input type="button" value={labelname1}></input>
      <input type = "button" value={labelname2}></input>
      <input  type = "button" value={labelname3}></input>
      <br></br>
      <input type="submit" ></input>
      </form>
      </div>
    );
  }
}


const mapStateToProps = state => ({
  loggedIn: state.loggedIn
})

const mapDispatchToProps = dispatch => ({
  handleChange: values => dispatch(changeForm(values))
})

export default connect(mapStateToProps, mapDispatchToProps)(ArticleAdd)