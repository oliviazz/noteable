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
                'user_components':[]
            }

            this._retrieved_articles = [];

            this._ismounted = true;
            // Stores valid article URLs
            this._article_urls = [];
            // Stores metadata of all valid article URLs 
            this._full_article_info = [];

            this._gotfulldata = false;

            this._userViewingId = '54321'

            this._user = 'livz'

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
                let components = []
            
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

        handleChange = (selected) => {
            console.log('selected', selected);
            this.setState({selected})
        }


        load_page_results = (selected) => {
            console.log('reloading this!!!')
            

            // make a http request 

        }

        render() {

            this.state.user_components.push(<UserBox username = {'Person 1'} userId = '12345' userViewing = {this._userViewingId} /> )
            
            this.state.user_components.push(<UserBox username = {'Person 2'} userId = '54321' userViewing = {this._userViewingId} /> )
            

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

            return(
                <div> 
                <Grid>
                    
                     <Row>
                     <Col xs={1} md={1}>
                    
                   
                    </Col>

                        
                    <Col xs={8} md={8}>
                        <h2>User Results</h2> 
                        {this.state.user_components.map(user => <div>{user}</div>)} 
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