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
import Button from 'react-bootstrap/lib/Button';


class Group extends React.Component {

  constructor() {
    super()
    this.my_selectedOption = ""
    this._userId = '54321'

    
  
  }

  state = {
    selectedOption: null,
    isMember: true
  }

  handleChange = (selectedOption) => {
    this.my_selectedOption = selectedOption;
    console.log(`Option selected:`, selectedOption);
  }

  
  render() {
    const { selectedOption } = this.my_selectedOption;
    const true_holder = true;

    const handleDelete = (event) => {
        var r = window.confirm('Are you sure you want to delete this article from your page?')
        
        if (r == true){
           this.serverRequest = axios.post('/api/deletearticle', { userId: this._userId, article_url: this.props.link})
            .then(res => {
                if(res.data){
                   console.log(res.data)
                   console.log('delete successful')
                 }
            })
            window.location.reload();  
        }
        else{ return }
    }

    const leaveGroup = (event) => {
      alert('haha')
    }

    const joinGroup = (event) => {
          event.preventDefault()
      
          this.setState({isMember: true})
          
             // this.serverRequest = axios.post('/api/', { article_url: this.props.link })
             //  .then(res => {
             //      if(res.data){
             //         console.log(res.data)
             //         console.log('delete successful')
             //       }
             //  })
             //  window.location.reload();  
         
    }
    return (
      <div>
         <div className = "container">
            <Panel>
            <Panel.Heading>

              <Panel.Title componentClass="h3">{this.props.groupName}</Panel.Title>
            
               <Button bsStyle="info" href = {this.props.groupPage} > View Group </Button>
             
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
               {this.state.isMember ?  <Button bsStyle="success" disabled>Member </Button> : <Button onClick={joinGroup}> 'Join Group'</Button>} 
              {this.state.isMember ?  <Button bsStyle="error"  onClick={leaveGroup}>Leave Group </Button> : <h3 style="visibility:none"></h3>} 
               
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

export default connect(mapStateToProps, mapDispatchToProps)(Group)