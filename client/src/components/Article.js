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
import Panel from 'react-bootstrap/lib/Panel';
import { Redirect } from 'react-router-dom'

import { withRouter } from "react-router-dom";



class Article extends React.Component {

  constructor() {
    super()
    
  
  }
  
  render() {
    const handleDelete = (event) => {
      event.preventDefault()
      var r = window.confirm('Are you sure you want to delete this article from your page?')
      if (r==true){
         this.serverRequest = axios.post('/api/deletearticle', { article_url: this.props.link })
          .then(res => {
              if(res.data){
                 console.log(res.data)
                 console.log('delete successful')
               }
          })
          window.location.reload();

           
      }
      else{
        console.log('dsafa')
        return
      }
     

      
  }
    return (
      <div>
         <div className = "container">
         
            <Panel>
            <Panel.Heading>

              <Panel.Title componentClass="h3">{this.props.title}
               <button onClick={handleDelete}>X</button></Panel.Title>
             
            </Panel.Heading>
            <a href={this.props.link} target="_blank" rel="noopener noreferrer">
            <Panel.Body>
            
              <span className ="link-spanner"></span>
              {this.props.descrip}
              <h4> {this.props.sitename} </h4>
              <br></br>
              <br></br>
              <br></br>
              <img src={this.props.image} className="img-responsive center-block"/>   

             
              </Panel.Body>
               </a>

            </Panel>
          
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