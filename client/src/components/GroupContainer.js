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



class GroupContainer extends React.Component {
        // 
        // Set some initial properties we want to 
        // access across functions
        // ---------------------------------------
        constructor(props) {
            super(props)
            this.state = {
                'full_article_info':[],
                'group_components':[]
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

            this._userId = '54321'

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

      

        // { }
        // extract on tags 
        // save from everything 


        // Defines the HTML code atually returned and shown
        // in the component
        // ---------------------------------------    
        render() {

            for (var i = 0; i < 10; i++) { 
              this.state.group_components.push(<Group groupName = {'Group' + (i)} groupPage = 'google.com' /> )
            }


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



            const tag_1 = 'food'
            const tag_2 = 'tech'
            const tag_3 = 'business'
            const tag_4 = 'funny'
            const tag_5 = 'politics'
            const tag_6 = 'health'
            const tag_7 = 'music'
            return(
                <div> 
                <Grid>
                    <UserBox firstname="olivia"></UserBox>
                     <Row>
                     <Col xs={3} md={2}>
                
                        <ButtonToolbar>
                             <h3>Groups Toolbar </h3>
                            <Button onclick={loadPage('me')}> Show My Groups </Button> 
                                <br></br><br></br><br></br>
                            <input id="group_search"  className = 'input-lg' type="text" placeholder="Find Groups" name="searchTerm" value={this.state.value}/><br></br>
                            <Button onclick={addGroup}> + Make New Group </Button>

                         
                        </ButtonToolbar>
                    
                   
                    </Col>
                    <Col xs={1} md={1}></Col>
                        
                    <Col xs={8} md={8}>
                        <h2>{this._user}'s Noteable</h2> 
                        {this.state.group_components.map(group => <div>{group}</div>)} 
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
        export default connect(mapStateToProps, mapDispatchToProps)(GroupContainer)