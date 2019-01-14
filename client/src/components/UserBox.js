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
    
    
  }

  state = {
    selectedOption: null,
    isfriend:false
  }

  handleChange = (selectedOption) => {
    this.my_selectedOption = selectedOption;
    console.log(`Option selected:`, selectedOption);
  }

  render() {
    const { selectedOption } = ''
    const true_holder = true;

    const sendRequest = event =>{
      alert('added')
      this.setState({isfriend: true})
      // axios.post('api/addFriend', {'userId': this._myuserId, 'viewing_username': this._username})
      //               .then(res => {
      //                   var friend_status = res.data.friends

                  
      //                   this.setState({
      //                     isfriend:friend_status
                                
      //                   })

      //               })

    }
    
    // this.serverRequest = axios.post('api/checkfriends', {'userId': this._myuserId, 'viewing_username': this._username})
    //                 .then(res => {
    //                     var friend_status = res.data.friends

                  
    //                     this.setState({
    //                       isfriend:friend_status
                                
    //                     })

    //                 })
    var userId = this.props.userId
    var userViewing = this.props.userViewing 

    console.log(userId, userViewing, " one user!!")
    return (
      <div>
         <div className = "container">
         
            <Panel>
              <Panel.Heading>
                <Panel.Title componentClass="h2">{this.props.firstname}'s noteable</Panel.Title>
              </Panel.Heading>
            
              <Panel.Body>
              <h4>{this.props.username}</h4>
              <h5>{this.props.userId}</h5>
              

              {this.state.isfriend ?  <Button bsStyle="success" disabled>You are Friends!</Button> : <Button onClick={sendRequest}> 'Friend'</Button>} 
                <br></br>
              <Link to={{
                pathname: '/mypage',
                state: {displayUserId: {userId}, userId: userViewing}

              }}> View {this.props.username}'s Noteable' </Link>
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