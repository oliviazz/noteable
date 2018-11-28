import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { changeForm } from 'actions/appActions'
import axios from 'axios';



class Article extends React.Component {
  
  render() {
    return (
      <div>
         <div className = "container">
            <div className = "article_box">
            <h1> {this.props.title} </h1>
            <h2> {this.props.descrip} </h2>
            <a href={this.props.link} target="_blank" rel="noopener noreferrer">
              <span className ="link-spanner"></span>
            </a>
            
            <h4> {this.props.sitename} </h4>
            <div className="preview_img">
              <img src={this.props.image} /> 
            </div>
            <h4> {this.props.author}</h4>
            </div>
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Article)