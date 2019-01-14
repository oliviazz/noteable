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

import LoginForm from 'components/Login/LoginForm'
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
            this._username = 'ozhang@princeton.edu'

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
                let components = []

                var passed_state =  this.props.location.state
                if (passed_state){
            
                    this.searchTerm = passed_state['searchTerm']
                    // this._username = passed_state['username']

                    // this.setState({'username': this._username, 'displayUsername': this._displayUsername})
                    
                    console.log('Passed user Id, now set: ', this._username, ' as viewing and ', this._displayUsername, ' as the page ot be viewed')
                
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
                                alert(u +  'after response')
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
                    
                this.setState({display:'pending'})
                   
            }

            const showFriends = (event) => {
                this.render_components = []
                this.setState({display:'friends'})
            }

            return(
                <div> 
                <Grid>
                    
                     <Row>
                     <Col xs={1} md={1}>

                    </Col>
                    <h5>{this._username}</h5>
                    <Button bsStyle='success' onClick={showPending}>Show Pending </Button>
                    <Button bsStyle='info' onClick={showFriends}> Show Friends </Button>
                    <Col xs={8} md={8}>
                        <h2>User Results: Showing {this.state.display} Users </h2> 
                        {this.render_components.map(user => <div>{user}</div>)} 
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