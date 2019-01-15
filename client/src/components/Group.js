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
    this.username = 'lkatzman@princeton.edu'
    this.state = {
      'isMember':false
    }


    //this.groupId = this.props.groupId
    //this.userViewing = this.props.username
   
  }

  componentDidMount() {

    this.groupName = this.props.groupName
    
    console.log("Group ", this.groupId, "being viewed by ", this.userViewing)
    console.log("hi1")
    axios.post('/api/checkfriends', {username2: JSON.stringify(this.username), username: JSON.stringify(this.props.groupName)}).then(res => {

    axios.post('/api/checkfriends', {friendname: JSON.stringify(this.groupName), username: JSON.stringify(this.username)}).then(res => {

        this.state.isMember = res.data.results;
    })
  }

  state = {
    selectedOption: null,
  }

  handleChange = (selectedOption) => {
    this.my_selectedOption = selectedOption;
    console.log(`Option selected:`, selectedOption);
  }

  
  render() {

    const { selectedOption } = this.my_selectedOption;
    const true_holder = true;
    const gName = this.props.groupName
    console.log(this.props.groupName)
    console.log('adada')

    // this.group_link_obj = '<Link to={{
    //             pathname: '/grouppage',
    //             state: {userViewing: {this.username},
    //                     displayGroupId: {this.groupId},
    //                     displayGroupName: {this.groupName}}
                    
    //           }}> View {this.props.groupName}'s Noteable' </Link>'

    const handleDelete = (event) => {
        var r = window.confirm('Are you sure you want to delete this article from your page?')
        
        if (r == true){
           this.serverRequest = axios.post('/api/deletearticle', { username: this.username, article_url: this.props.link})
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
        this.setState({isMember: false})
        console.log("leaving now")
        axios.post('/api/leavegroup', {username: JSON.stringify(this.username), groupname: JSON.stringify(this.props.groupName)}).then(res => {
            console.log("Received response: ", res.data.results);
        })
        axios.post('/api/checkfriends', {username2: JSON.stringify(this.username), username: JSON.stringify(this.props.groupName)}).then(res => {
          this.state.isMember = res.data.results;
        })
    }

    const joinGroup = (event) => {
      this.setState({isMember: true})
      axios.post('/api/joingroup', {username: JSON.stringify(this.username), groupname: JSON.stringify(this.props.groupName)}).then(res => {
            console.log("Received response: ", res.data);
        }) 
      }
      axios.post('/api/checkfriends', {username2: JSON.stringify(this.username), username: JSON.stringify(this.props.groupName)}).then(res => {
        this.state.isMember = res.data.results;
      })

    return (
      <div className = "container">
        <div className="row groupContainer">
            <div className = "row groupInside groupName" href={this.group_link_obj} target="_blank" rel="noopener noreferrer" name="groupname">{this.props.groupName}</div>
            <div className = "row groupInside articleBottom ">
              {this.state.isMember ? <Button bsStyle="error" href = {this.props.groupPage} className="showgroupButton viewGroup"> View Group </Button> : <Button className="groupButton" disabled> 'View Group'</Button>} 
              {this.state.isMember ? <Button bsStyle="success" className="groupButton" disabled>Join Group </Button> : <Button onClick={joinGroup} className="groupButton"> 'Join Group'</Button>}
              {this.state.isMember ? <Button bsStyle="error" className="groupButton" onClick={leaveGroup} name='leavegroup'>Leave Group </Button> : <Button onClick={leaveGroup} className="groupButton" disabled> 'Leave Group'</Button>} 
            </div>   
            <Link to={{ pathname: '/grouppage',
                      state: {userViewing: 'lkatzman@princeton.edu',
                      groupName: gName}
                    
                    
              }}> View {this.props.groupName}'s Noteable' </Link>'
      
        </div>
      </div>
    );
  }
}
              // {this.state.isMember ?  <Button bsStyle="error"  className="showgroupButton" onClick={leaveGroup}>Leave Group </Button> : <h3 style="visibility:none"></h3>} 

const mapStateToProps = state => ({
    loggedIn: state.loggedIn
})

const mapDispatchToProps = dispatch => ({
  handleChange: values => dispatch(changeForm(values))
})

export default connect(mapStateToProps, mapDispatchToProps)(Group)