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

    const leaveGroup = (event) => {
        this.setState({isMember: false})
        axios.post('/api/leavegroup', {groupname: this.props.groupName}).then(res => {
            console.log("Received leave response: ", res.data.results);
        })
    }

    const joinGroup = (event) => {
          this.setState({isMember: true})
          axios.post('/api/joingroup', {groupname: this.props.groupName}).then(res => {
            console.log("Received join response: ", res.data.results);
        })   
    }
    
    
    //               {this.state.isMember ?  <Button bsStyle="info" onClick={joinGroup}> 'Join Group'</Button> : <Button bsStyle="success"> Member </Button>} 
//              {this.state.isMember ?  <Button bsStyle="default"  onClick={leaveGroup}>Leave Group </Button> : <h3 style="visibility:none"></h3>} 
    
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