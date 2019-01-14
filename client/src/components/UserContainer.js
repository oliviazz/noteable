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

            this.searchTerm = ''

            this.view = ''
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

                // this.serverRequest = axios.post('api/getgroups', {'userId': this._userId, 'searchTerm': this._searchTerm})
                //     .then(res => {
                //         this.setState({'full_article_info': res.data.results})

                //         for(var article in this.state.full_article_info){
                //             var info = this.state.full_article_info[article]
                //             console.log(article, info)
                //             components.push(< Article title = { info['title'] }
                //                         link = {info['url']}
                //                         descrip = {info['blurb']}
                //                         image = {info['icon']}
                //                         tag = {info['tag']}
                                        
                //                     />);
                //             }
                //          this.setState({
                //                 group_components: components
                //         })

                //     })
               
            
            }

        
            // ---------------------------------------

        componentWillUnmount() {
            this._ismounted = false;

        }
        showFiends(){
            this.setState({'display': 'friends'})
            console.log('friends')
        }

        showPending() {
            // setting state triggers a re-rendering of component
            this.setState({'display': 'pending'})
            console.log('pending')
        }

        handleChange = (selected) => {
            console.log('selected', selected);
            this.setState({selected})
        }

        

        

        render() {


            var components;
            console.log(this.state.display)     
            if (this.state.display == 'friends'){
                     axios.post('/api/allfriends').then(res => {
                        components = []
                        var friends = res.data.results;
                        console.log("Received response: ", res.data.results);
                        var len_dict = Object.keys(friends).length
                        console.log(len_dict)
                        for(var i = 0; i < len_dict; i++){
                            components.push(<UserBox firstname={friends[i]['firstname']} lastname = {friends[i]['lastname']} username = {friends[i]['username']} />);
                              
                        }
                        this.setState({render_components:components})
                    })
            }

            else if (this.state.display == 'all'){
                console.log('nice!')
                    axios.post('/api/allusers').then(res => {
                        components = []
                        var users = res.data.results;
                        console.log("Received response: ", res.data.results);
                        var len_dict = Object.keys(users).length
                        console.log(len_dict)
                        for(var i = 0; i < len_dict; i++){
                            components.push(<UserBox firstname={users[i]['firstname']} lastname = {users[i]['lastname']} username = {users[i]['username']} />);
                        }

                        this.setState({render_components:components})
                    })

            }

            else if (this.state.display == 'pending'){
                console.log('nice!')
                    axios.post('/api/allusers').then(res => {
                        components = []
                        var users = res.data.results;
                        console.log("Received response: ", res.data.results);
                        var len_dict = Object.keys(users).length
                        console.log(len_dict)
                        for(var i = 0; i < len_dict; i++){
                            components.push(<UserBox firstname={users[i]['firstname']} lastname = {users[i]['lastname']} username = {users[i]['username']} />);
                        }

                        this.setState({render_components:components})
                    })

            }

            // for (var i = 0; i < 10; i++) { 
            //   this.state.user_components.push(<UserBox username = {'Person ' + (i)} userId = '54321' userViewing = {this._userViewingId} /> )
            // }

            const loadPage = (event) => {
                console.log('hey')
                // how to pass a varible to this??

            }

            const onChange = (event) => {
                alert('heyyy')
            }

            const addGroup = (event) => {
                alert('heyyy')
                // axios request tom ake new group
            }

            const showPending = (event) => {
                console.log('now i will show friend')
            }

            return(
                <div> 
                <Grid>
                    
                     <Row>
                     <Col xs={1} md={1}>
                    
                   
                    </Col>

                    <Button bsStyle='success' onClick={showPending}>Show Pending </Button>
                    <Button bsStyle='info' onClick={showPending}> Show Friends </Button>
                    <Col xs={8} md={8}>
                        <h2>User Results</h2> 
                        {this.state.render_components.map(user => <div>{user}</div>)} 
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