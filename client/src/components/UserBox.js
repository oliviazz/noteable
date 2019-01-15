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
import { Route, BrowserRouter as Router } from 'react-router-dom'
import { withRouter } from "react-router-dom";

import Select from 'react-select';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';
import Button from 'react-bootstrap/lib/Button';


class UserBox extends React.Component {

  constructor() {
    super()
    this._username = ''
    this._userviewing = ''

    this.state = {
      selectedOption: null,
      isFriend:false,
    }
  }


  handleChange = (selectedOption) => {
    this.my_selectedOption = selectedOption;
    console.log(`Option selected:`, selectedOption);
  }

  componentDidMount() {
    this.setState({isFriend:this.props.areFriends})
    this._username = this.props.username
  }

  render() {
    const { selectedOption } = ''
    const true_holder = true;

    const sendRequest = event =>{
      alert('added')
      
      axios.post('api/addFriend', {'username': this.props.username, 'username2': this.props.userviewing})
                    .then(res => {
                        var friend_status = res.data.friends
                        console.log(res.data.friends, "added??")

                  
                        this.setState({
                          isFriend:friend_status
                                
                        })

                    })

    }
    
    // this.serverRequest = axios.post('api/checkfriends', {'userId': this._myuserId, 'viewing_username': this._username})
    //                 .then(res => {
    //                     var friend_status = res.data.friends

                  
    //                     this.setState({
    //                       isfriend:friend_status
                                
    //                     })

    //                 })
    var userId = this.props.userId
    var userViewing = this.props.username
    this.state.isFriend = this.props.arefriends
    console.log(userId, userViewing, " one user!!")
    return (
      <div>
         <div className = "container">
         
            <Panel>
              <Panel.Heading>
                <Panel.Title componentClass="h2">{this.props.firstname} {this.props.lastname}'s noteable</Panel.Title>
              </Panel.Heading>
            
              <Panel.Body>
              <h4>{this.props.username}</h4>
              <h5>{this.props.userId}</h5>
              <h5>{this.props.arefriends}</h5>

              {this.state.isFriend ?  <Button bsStyle="success" disabled>Friends!</Button> : <Button onClick={sendRequest}> 'Add Friend'</Button>} 
                <br></br>
              <Link to={{
                pathname: '/mypage',
                state: {username: {userId},
                        displayUsername: {userViewing}}
                    
              }}> View {this.props.firstname}'s Noteable' </Link>
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