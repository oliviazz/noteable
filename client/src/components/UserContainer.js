// ---------------------------------------
// Component rendered showing "My Page"
// Written in react native.js 
//
// Team Noteable -  Olivia, Zoe, and Lyra
//----------------------------------------

import React from 'react'
import { connect } from 'react-redux'
import { withRouter, Redirect } from 'react-router-dom'
import Group from 'components/Group/Group'
import UserBox from 'components/UserBox'
import { login, setErrorMessage } from 'actions/appActions'
import axios from 'axios'

import Button from 'react-bootstrap/lib/Button';
import Row from 'react-bootstrap/lib/Row';
import Grid from 'react-bootstrap/lib/Grid';
import Col from 'react-bootstrap/lib/Col';
import NavItem from 'react-bootstrap/lib/NavItem';
import Nav from 'react-bootstrap/lib/Nav';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar';
import ToggleButton from 'react-bootstrap/lib/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/lib/ToggleButtonGroup';



class UserContainer extends React.Component {
        // 
        // Set some initial properties we want to 
        // access across functions
        // ---------------------------------------
        constructor(props) {
            super(props)
            this.state = {
                'full_article_info':[],
                'friend_usernames':[],
                'friend_firstnames':[],
                'friend_lastnames':[],
                'friend_components':[],
                'display': 'all'
            }

            this._retrieved_articles = [];

            this._ismounted = true;
            // Stores valid article URLs
            this._article_urls = [];
            // Stores metadata of all valid article URLs 
            this._full_article_info = [];
            // Stores the rendered Article components
            this._ArticleComponents = [];

            this._gotfulldata = false;

            this.username = localStorage.getItem('username')

            this._active_tag_filters = ''
        }

        // Called right after component mounts
        // ---------------------------------------
        componentDidMount() {
                const { loggedIn, handleSubmit, currentlySending, formState, errorMessage } = this.props

                this._ismounted = true;
                var article_names = [];
                var article = ""
                let cleaned_article_names = []
                let full_info = []

                var friendnames = []

                var thisUsername

                var friends
                console.log('Did the state change', this.state.display)

                if (this.state.display == 'all'){
                    friends = []
                     axios.post('/api/allusers').then(res => {
                        friends = res.data.results;
                        for(var i = 0; i < Object.keys(friends).length; i++){
                            thisUsername = <UserBox friendname = {friends[i]['username']} friendPage = 'insertURL.com'/>
                            if (friends[i]['username'] != this.username) friendnames.push(thisUsername)
                        }
                        this.setState({friend_usernames:friendnames})
                    })
                     axios.post('/api/checkfriends', {friendname: JSON.stringify(this.props.friendname), username: JSON.stringify(this.username)}).then(res => {
                      this.state.isFriend = res.data.results
                      this.forceUpdate()
                    })
                }
                else if (this.state.display = 'mine_only'){
                    friends = []
                    axios.post('/api/allfriends', {username: JSON.stringify(this.username)}).then(res => {
                        friends = res.data.results;
                        for(var i = 0; i < Object.keys(friends).length; i++){
                            thisUsername = <UserBox friendname = {friends[i]['username']} friendPage = 'insertURL.com'/>
                            if (friends[i]['username'] != this.username) friendnames.push(thisUsername)
                        }
                        this.setState({friend_usernames:friendnames})
                    })
                    axios.post('/api/checkfriends', {friendname: JSON.stringify(this.props.friendname), username: JSON.stringify(this.username)}).then(res => {
                      this.state.isFriend = res.data.results
                      this.forceUpdate()
                    })

                }
                else if(this.state.display = "search_results"){
                    friends = []
                    var friendname;
                    var searchterm;

                    axios.post('/api/allfriends').then(res => {
                        for (var i = 0; i < Object.keys(res.data.results).length; i++){
                            friendname = res.data.results[i]['username'].replace(/['"]+/g, '')
                            searchterm = JSON.stringify(this.state.searchTerm).replace(/['"]+/g, '')
                            if(friendname.includes(searchterm), 0){
                                thisUsername = <UserBox friendname = {friends[i]['username']} friendPage = 'insertURL.com'/>
                                if (friends[i]['username'] != this.username) friendnames.push(thisUsername)
                            }
                        }
                        for(var i = 0; i < 4; i++){
                                friendnames.push(<UserBox username = {friends[i]} friendPage = 'insertURL.com'/>)
                        }
                        this.setState({friend_usernames:friendnames})
                    })
                    axios.post('/api/checkfriends', {friendname: JSON.stringify(this.props.friendname), username: JSON.stringify(this.username)}).then(res => {
                      this.state.isFriend = res.data.results
                      this.forceUpdate()
                    })
                }
            
                // {API} Load the articles from the database by calling getarticle
                if (typeof this._source != typeof undefined) {
                    this._source.cancel('Operation canceled due to new request.')
                }
                this._source = axios.CancelToken.source();
               
            
            }

        componentWillUnmount() {
            this._ismounted = false;

        }

        handleChange(e) {
            this.setState({
                [e.target.name]: e.target.value
            })
        }


        load_page_results = (selected) => {
            console.log('reloading this!!!')
            

            // make a http request 

        }

      

        // { }
        // extract on tags 
        // save from everything 


        // Defines the HTML code atually returned and shown
        // in the component
        // ---------------------------------------    
        render() {
            const onChange = (event) => {
                alert('heyyy')
            }

            const allUsers = (event) => {
                this.setState({'display': 'all'})
                var components = []
                var friendnames = []
                var thisUsername

                var friends

                axios.post('/api/allusers').then(res => {
                  friends = res.data.results;
                  for(var i = 0; i < Object.keys(friends).length; i++){
                        thisUsername = <UserBox friendname = {friends[i]['username']} friendPage = 'insertURL.com'/>
                         if (friends[i]['username'] != this.username) friendnames.push(thisUsername)
                    }
                    this.setState({friend_usernames:friendnames})
                })
                axios.post('/api/checkfriends', {friendname: JSON.stringify(this.props.friendname), username: JSON.stringify(this.username)}).then(res => {
                  this.state.isFriend = res.data.results
                  this.forceUpdate()
                })
                console.log(friends)
            }

            const myFriends = (event) => {
                console.log(("showmyownfriends"))
                this.setState({'display': 'all'})
                var components = []
                var friendnames = []
                var thisUsername

                var friends
                axios.post('/api/allfriends', {username: JSON.stringify(this.username)}).then(res => {
                  friends = res.data.results;
                  for(var i = 0; i < Object.keys(friends).length; i++){
                        thisUsername = <UserBox friendname = {friends[i]['username']} friendPage = 'insertURL.com'/>
                        if (friends[i]['username'] != this.username) friendnames.push(thisUsername)
                    }
                    this.setState({friend_usernames:friendnames})
                })
                axios.post('/api/checkfriends', {friendname: JSON.stringify(this.props.friendname), username: JSON.stringify(this.username)}).then(res => {
                  this.state.isFriend = res.data.results
                  this.forceUpdate()
                })
            }

            const clearinput = (event) => {
                alert('cleared')
            }

            const searchUsers = (event) => {
                this.setState({'display': 'search_results'})
                this.setState({'display': 'all'})
                var components = []
                var friendnames = []
                var thisUsername

                var friends
                
                var foundfriends = []
                var friendo
                var searchy

                    axios.post('/api/allusers').then(res => {
                        friends = res.data.results;
                        for(var j = 0; j < Object.keys(friends).length; j++){  
                            friendo = friends[j]['username'].replace(/['"]+/g, '') 
                            if (this.state.searchTerm != ""){
                                searchy = JSON.stringify(this.state.searchTerm).replace(/['"]+/g, '')
                            }

                            if(friendo.includes(searchy, 0)){
                                thisUsername = <UserBox friendname = {friends[j]['username']} friendPage = 'insertURL.com'/>
                                if (friends[j]['username'] != this.username) friendnames.push(thisUsername)
                            }
                        }
                        for(var i = 0; i < Object.keys(foundfriends).length; i++){
                                components.push(<UserBox username = {foundfriends[i]['username']} friendPage = 'insertURL.com'/>)
                        }
                        this.setState({friend_usernames:friendnames})
                    })
                    axios.post('/api/checkfriends', {friendname: JSON.stringify(this.props.friendname), username: JSON.stringify(this.username)}).then(res => {
                      this.state.isFriend = res.data.results
                      this.forceUpdate()
                    })
            }


            return(
                <div> 
                <Grid>
                     <Row>
                    
                     <Col xs={3} md={2} className = "buttonToolbar">
                
                        <ButtonToolbar>
                             <div className = "groupsToolbar tagsHeader">friends toolbar </div>
                            <Button onClick={allUsers} className="groupButton"> Show All Users </Button> 
                                <br></br><br></br><br></br>
                            <Button onClick={myFriends} className="groupButton"> Show My Friends </Button> 
                                <br></br><br></br><br></br>
                            <input id="group_search"  className = 'input-lg groupButton' type="text" placeholder="Find New Friend" name="searchTerm" value={this.state.value} onChange = { (e) => this.handleChange(e)}/><br></br>
                            <Button onClick={searchUsers} className="groupButton"> Search Users </Button>
                        </ButtonToolbar>
                    
                   
                    </Col>
                    
                    <Col xs={4} md={4}>
                        <div className = "usernameDisplay groupdisplay"><div className="groupUser">{this.username}'s Noteable </div> <div className="groupsNoteable">Noteable:</div> </div> 
                        <div className = "usernameDisplay groupdisplay showingBlankGroups">showing {this.state.display} users </div>
                        {this.state.friend_usernames.map(friend => <div>{friend}</div>)} 
                    </Col>

                    </Row>
                </Grid>      
            </div >);
            }
        }

        const mapStateToProps = state => ({
            loggedIn: state.loggedIn,
            currentlySending: state.currentlySending,
            formState: state.formState,
            errorMessage: state.errorMessage
        })

        const mapDispatchToProps = dispatch => ({
            handleSubmit: (username, password) => dispatch(login(username, password)),
            clearErrors: () => dispatch(setErrorMessage(''))
        })

            // Make this component exportable to appear in other components
        export default connect(mapStateToProps, mapDispatchToProps)(UserContainer)