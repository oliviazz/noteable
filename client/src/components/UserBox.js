// ---------------------------------------
// Component to display one user
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
import Button from 'react-bootstrap/lib/Button'

class UserBox extends React.Component {

  constructor() {
    super()
    this.my_selectedOption = ""
    this.username = localStorage.getItem('username')
    this.state = {
      'isFriend':false
    }
  }

  componentDidMount() {
    axios.post('/api/checkfriends', {friendname: JSON.stringify(this.props.friendname), username: JSON.stringify(this.username)}).then(res => {
      this.state.isFriend = res.data.results
      this.forceUpdate()
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

    const removefriend = (event) => {
      this.setState({isFriend: false})
      console.log("username", this.username)
      console.log("friendname", this.props.friendname)

      axios.post('/api/removefriend', {username: JSON.stringify(this.username), friendname: JSON.stringify(this.props.friendname)}).then(res => {
            console.log("Received response: ", res.data);
            this.forceUpdate()
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
  


    const addfriend = (event) => {
      console.log(this.state.isFriend)
      axios.post('/api/addfriend', {username: JSON.stringify(this.username), friendname: JSON.stringify(this.props.friendname) } )
      .then(res => {
            console.log("Received response: ", res.data);
            this.forceUpdate()
        });
      }

    return (
      <div className = "container">
        <div className="row groupContainer">
            <div className = "row groupInside groupName" target="_blank" rel="noopener noreferrer" name="friendname">{this.props.friendname}</div>
            {this.state.isFriend ? <Button href = {this.props.friendPage} className="groupButton viewGroup showgroupbutton smol"> View Friend </Button> : <Button className="groupButton" disabled> View Friend</Button>}
            {this.state.isFriend ? <Button onClick = {removefriend} className="groupButton viewGroup"> Remove Friend </Button> : <Button className="groupButton" onClick = {removefriend} disabled> Remove Friend</Button>}
            {this.state.isFriend ? <Button onClick = {addfriend} className="groupButton viewGroup" disabled> Add Friend </Button> : <Button className="groupButton" onClick = {addfriend} > Add Friend</Button>}
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