// ---------------------------------------
// Component rendered showing "My Page"
// Written in react native.js 
//
// Team Noteable -  Olivia, Zoe, and Lyra
//----------------------------------------

import React from 'react'
import { connect } from 'react-redux'
import { withRouter, Redirect } from 'react-router-dom'
import Group from 'components/Group'
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
                'user_components':[],
                'display': 'all',
                'render_components': []
            }

            this.render_components = []
            this.searchTerm = ''

            this.view = ''
            this._username = 'lkatzman@princeton.edu'


        }

        // Called right after component mounts
        // ---------------------------------------
        componentDidMount() {
                const { loggedIn, handleSubmit, currentlySending, formState, errorMessage } = this.props
                this._username = this.props.username
                this._ismounted = true;
                var article_names = [];
                var article = ""
                let cleaned_article_names = []
                let full_info = []

                var components = []
                var users
                console.log('Did the state change', this.state.display)

                if (this.state.display == 'all'){
                     axios.post('/api/allusers').then(res => {
                        users = res.data.results;
                        console.log("Received response: ", res.data.results);
                        for(var i = 0; i < Object.keys(users).length; i++){
                            components.push(<UserBox username = {users[i]['username']} userPage = 'insertURL.com'/>)
                        }
                        this.setState({user_components:components})
                    })
                }
                else if (this.state.display = 'friends'){
                    axios.post('/api/allfriends').then(res => {
                        users = res.data.results;
                        console.log("Received response: ", res.data.results);
                        for(var i = 0; i < Object.keys(users).length; i++){
                            components.push(<UserBox username = {users[i]['username']} userPage = 'insertURL.com'/>)
                        }
                        this.setState({user_components:components})
                    })

                }
                else if(this.state.display = "search_results"){
                    users = []
                    axios.post('/api/allusers').then(res => {
                        for (var i = 0; i < Object.keys(res.data.results).length; i++){
                            if(res.data.results[i]['username'].includes(JSON.stringify(this.state.search), 0)){
                                users.push(res.data.results[i]['username']);
                            }
                        }
                        console.log("Received response: ", users);
                        for(var i = 0; i < 4; i++){
                                components.push(<UserBox username = {users[i]} userPage = 'insertURL.com'/>)
                        }
                        this.setState({user_components:components})
                    })
                }
            
                // {API} Load the articles from the database by calling getarticle
                if (typeof this._source != typeof undefined) {
                    this._source.cancel('Operation canceled due to new request.')
                }
                this._source = axios.CancelToken.source();
            }

        
            // ---------------------------------------

        componentWillUnmount() {
            this._ismounted = false;

        }
   

        // showPending() {
        //     // setting state triggers a re-rendering of component
        //     this.render_components = []
        //     alert(this.render_components.length, "pending")
       
        //     console.log('pending')
       
        // }

        handleChange = (selected) => {
            console.log('selected', selected);
            this.setState({selected})
        }

        render() {
            console.log("RENDER")
            var users;
            var friends;

            var components;
            console.log(this.state.display, this.render_components.length, "rerenderng!")    
            if (this.render_components.length != 0){
                return
            } 
            if (this.state.display == 'friends' && this.render_components.length == 0){
                     axios.post('/api/allfriends', {'username': this._username}).then(res => {
                        components = []
                        friends = res.data.results;
                        console.log("Received response: ", res.data.results);
                        var len_dict = Object.keys(friends).length
                        if (len_dict == 0)
                            return
                        console.log(len_dict)
                        for(var i = 0; i < len_dict; i++){
                            axios.post('/api/checkfriends', {'username': this._username, 'username2':users[i]['username']})
                            .then(res => {
                                var areFriends = res.data.results
                                console.log(i, "wtffff")
                                components = []
                                components.push(
                                    <UserBox firstname={users[i]['firstname']} 
                                    lastname = {users[i]['lastname']} 
                                    username = {users[i]['username']} 
                                    userviewing = {this._username}
                                    areFriends = {areFriends} />);
                                console.log(this._username, ' and ', users[i]['username'], 'are friends: ', areFriends)
                        })
                            console.log('iteration')
                        }
                        alert('wtf')
                        console.log("components", components)

                        // components.push(<UserBox firstname={friends[i]['firstname']} lastname = {friends[i]['lastname']} username = {friends[i]['username']} userviewing = {this._username} />);
                              
                    
                        this.render_components = components
                        if (this.render_components.length == 0){
                            return
                        }
                        this.setState({render_components: components})
                    })
            }

            else if (this.state.display == 'all' && this.render_components.length == 0){
                console.log('nice!')
                    axios.post('/api/allusers').then(res => {
                        components = []
                        users = res.data.results;
                        console.log("Received response: ", res.data.results);
                        var len_dict = Object.keys(users).length
                          if (len_dict == 0)
                            return
                        console.log(len_dict)
                        for(var i = 0; i < len_dict; i++){
                           
                            var u = users[i]['username']
                     
                            var u_fn = users[i]['firstname']
                            var u_ln = users[i]['lastname']
                            console.log(users[i]['username'],'new user', this._username, u, u_fn, u_ln, 'dfdafa')

                            axios.post('/api/checkfriends', {'username': this._username, 'username2':users[i]['username']})
                            .then(res => {
                                
                                var areFriends = res.data.results
                                console.log(this._username, ' and ', u, 'are friends: ', areFriends)
                                components = []
                                components.push(
                                    <UserBox firstname={u_fn} 
                                    lastname = {u_ln} 
                                    username = {u} 
                                    userviewing = {this._username}
                                    arefriends = {areFriends} />);
                            })
                        }



                         this.render_components = components
                          if (this.render_components.length == 0){
                            return
                        }
                         this.setState({render_components: components})
                    })

            }

            else if (this.state.display == 'pending' && this.render_components.length == 0){
                console.log('nice!')
                    axios.post('/api/displaypending', {'username': this._username}).then(res => {
                        components = []
                        users = res.data.results;
                        console.log("Received response: ", res.data.results);
                        var len_dict = Object.keys(users).length
                          if (len_dict == 0)
                            return
                        console.log(len_dict)
                        for(var i = 0; i < len_dict; i++){
                            axios.post('/api/checkfriends', {'username': this._username, 'username2':users[i]['username']})
                            .then(res => {
                                var areFriends = res.data.results
                                console.log(this._username, ' and ', users[i]['username'], 'are friends: ', areFriends)
                                components = []
                                components.push(
                                    <UserBox firstname={users[i]['firstname']} 
                                    lastname = {users[i]['lastname']} 
                                    username = {users[i]['username']} />);
                            })
                        }

                         this.render_components = components
                          if (this.render_components.length == 0){
                            return
                        }
                         this.setState({render_components: components})
                    })

            }

   
            const loadPage = (event) => {
                alert('hey')
                // how to pass a varible to this??

            }

            const onChange = (event) => {
                alert('heyyy')
            }

            const showPending = (event) => {
                this.render_components = []
                this.setState({'display':'pending'})
                   
            }

            const showFriends = (event) => {
                this.render_components = []
                this.setState({'display':'friends'})
            }

            const showAllUsers = (event) => {
                this.render_components = []
                this.setState({'display':'all'})
            }

            const searchUsers = (event) => {
                alert('searching for user')
                this.setState({'display': 'search_results'})
                
                var users = []
                var foundusers = []
                var components = []

                    axios.post('/api/allusers').then(res => {
                        users = res.data.results;
                        for(var j = 0; j < Object.keys(users).length; j++){          
                            if(users[j]['username'].includes(JSON.stringify(this.state.searchTerm), 0)){
                                foundusers.push(users[j]);
                            }
                        }
                        for(var i = 0; i < Object.keys(foundusers).length; i++){
                                components.push(<UserBox username = {foundusers[i]['username']} userPage = 'insertURL.com'/>)
                        }
                        this.setState({user_components:components})
                    })
            }

            return(
                <div> 
                <Grid>
                     <Row>
                    
                     <Col xs={3} md={2} className = "buttonToolbar">
                
                        <ButtonToolbar>
                             <div className = "usersToolbar tagsHeader">users toolbar </div>
                            <Button onClick={showAllUsers} className="usersButton groupButton"> Show All Users </Button> 
                                <br></br><br></br><br></br>
                            <Button onClick={showPending} className="pendingButton groupButton"> Show My Friends </Button> 
                                <br></br><br></br><br></br>
                            <Button onClick={showFriends} className="showpending groupButton"> Show My Pending Requests </Button> 
                                <br></br><br></br><br></br>
                            <br></br><br></br><br></br>
                            <input id="friend_search"  className = 'input-lg peButton groupButton' type="text" placeholder="Find User" name="searchTerm" value={this.state.value} onChange = { (e) => this.handleChange(e)}/><br></br>
                            <Button onClick={searchUsers} className = "groupButton"> Search Users </Button>

                        </ButtonToolbar>
                        <Col xs={4} md={4}>
                            <div className = "usernameDisplay groupdisplay"><div className="groupUser">{this._user}'s</div> <div className="groupsNoteable">Noteable:</div> </div> 
                            <div className = "usernameDisplay groupdisplay showingBlankGroups">showing {this.state.display} users </div>
                            {this.state.user_components.map(user => <div>{user}</div>)} 
                        </Col>
                    </Col>

                    </Row>
                </Grid>      
            </div >);



            //     <div> 
            //     <Grid>
                    
            //          <Row>
            //          <Col xs={1} md={1}>

            //         </Col>
            //         <h5>{this._username}</h5>
            //         <Button bsStyle='success' onClick={showPending}>Show Pending </Button>
            //         <Button bsStyle='info' onClick={showFriends}> Show Friends </Button>
            //         <Col xs={8} md={8}>
            //             <h2>User Results: Showing {this.state.display} Users </h2> 
            //             {this.render_components.map(user => <div>{user}</div>)} 
            //         </Col>
            //         </Row>
            //     </Grid>      
            // </div >);
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