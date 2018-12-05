// ---------------------------------------
// Component to display one article
// Written in react native.js 
//
// Team Noteable -  Olivia, Zoe, and Lyra
//----------------------------------------


import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { changeForm } from 'actions/appActions'
import axios from 'axios';



class Article extends React.Component {
  
  render() {
      const style = {
                  backgroundImage: "url("+this.props.image+")",
                  backgroundSize: "100% 100%"
          }
    return (
  
         // <div className = "container">

         //    <div className = "article_box">
         //    <h1> {this.props.title} </h1>
         //    <h2> {this.props.descrip} </h2> <h3>{this.props.key}</h3>
         //    <a href={this.props.link} target="_blank" rel="noopener noreferrer">
         //      <span className ="link-spanner"></span>
         //    </a>

              

            <div style={style}>
            <a className ="divLink" href={this.props.link} target="_blank" rel="noopener noreferrer">
            <div className = "container">
            
            
                    <h2>{this.props.title}</h2>
                    <button> X </button>
                    <h4> {this.props.sitename}</h4>
                    
                    
            </div>
            </a>
           
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