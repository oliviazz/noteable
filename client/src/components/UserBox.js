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

import Select from 'react-select';


class UserBox extends React.Component {

  constructor() {
    super()
    
  }

  state = {
    selectedOption: null,
  }

  handleChange = (selectedOption) => {
    this.my_selectedOption = selectedOption;
    console.log(`Option selected:`, selectedOption);
  }

  render() {
    const { selectedOption } = ''
    const true_holder = true;
    
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
                <Panel.Title componentClass="h2">{this.props.firstname}'s noteable</Panel.Title>
              </Panel.Heading>
            
              <Panel.Body>
                <img src={this.props.image} className="img-responsive center-block"/> 
                <br></br>
    
              </Panel.Body>
     
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

export default connect(mapStateToProps, mapDispatchToProps)(UserBox)