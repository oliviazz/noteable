// ---------------------------------------
// Component rendered showing "My Page"
// Written in react native.js 
//
// Team Noteable -  Olivia, Zoe, and Lyra
//----------------------------------------

import React from 'react'
import { connect } from 'react-redux'
import { withRouter, Redirect } from 'react-router-dom'
import Article from 'components/Article'
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


class PageContainer extends React.Component {
        // 
        // Set some initial properties we want to 
        // access across functions
        // ---------------------------------------
        constructor(props) {
            super(props)
            this.state = {
                'full_article_info':[],
                'article_components':[],
                'tags_components':[],
                'holder':'', 
                'username':'',
                'displayUsername':''
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

            //userId represents the person whose page you're viewing. eventually we'll have to replace w/ username and later on in the text 
            // calculate the Id frm the username
            this._username = ''
            this._displayUsername = ''


            this._active_tag_filters = ''

             ///
            

        }

        // Called right after component mounts
        // ---------------------------------------
        componentDidMount() {
                var passed_state =  this.props.location.state
                if (passed_state){
            
                    this._username = passed_state['username']
                    this._displayUsername = passed_state['displayUsername']

                    // this.setState({'username': this._username, 'displayUsername': this._displayUsername})
                    
                    console.log('Passed user Id, now set: ', this._username, ' as viewing and ', this._displayUsername, ' as the page ot be viewed')
                
                }
                else{
                    console.log(passed_state, " no passed variables found")

                }

                const { loggedIn, handleSubmit, currentlySending, formState, errorMessage } = this.props


                this._ismounted = true;
                var article_names = [];
                var article = ""
                let components = []
                var loader = document.getElementById('loader')
                loader.setAttribute('style', 'display:visible')
            
                // {API} Load the articles from the database by calling getarticle
                if (typeof this._source != typeof undefined) {
                    this._source.cancel('Operation canceled due to new request.')
                }
                this._source = axios.CancelToken.source();

                this.serverRequest = axios.post('api/getarticles', {'username': this._username})
                    .then(res => {
                        this.setState({'full_article_info': res.data.results})
                        for(var article in this.state.full_article_info){
                            var info = this.state.full_article_info[article]
                            components.push(< Article title = { info['title'] }
                                        link = {info['url']}
                                        descrip = {info['blurb']}
                                        image = {info['icon']}
                                        tag = {info['tag']}
                    
                                    />);
                            }
                        
                         this.setState({
                                article_components: components
                            })

                    })
                var loader = document.getElementById('loader')
                loader.setAttribute('style', 'display:none')
                var tags = []

                axios.post('/api/alltags').then(res => {
                    tags = res.data.results
                    var formatted_tags = []
                    console.log("Received response: tags ", tags);
                    // for(var i = 0; i < Object.keys(tags).length; i++) {
                    //     formatted_tags.push(<ToggleButton className = "navButton" onChange={this.handleChange}>Hello</ToggleButton>)
                    // }
                    // console.log(formatted_tags)
                    // console.log('formatted tags the first time')
                    // this.setState({tags_components:formatted_tags})
                    // {this.state.tags_components.map(tag => <div>{tag}</div>)}

                })            
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
            

            /// 
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
            // this.tags = []
            // make api call and save returned "tags" as a call 
            // this.serverRequest = axios.post('api/alltags')
            //         .then(res => {
            //             this.tags = res.data.results 


            //         })

            // const tag_1 = 'food'
            // const tag_2 = 'tech'
            // const tag_3 = 'business'
            // const tag_4 = 'funny'
            // const tag_5 = 'politics'
            // const tag_6 = 'health'
            // const tag_7 = 'music'
            console.log(this.state.tags_components)
            return(
                <div> 
                <Grid>
                   
                     <Row>
                     <Col xs={3} md={2}>
                        <div className="tagsHeader">tags</div>
                        <ButtonToolbar>
                            <ToggleButtonGroup type="checkbox">
                                <ToggleButton className = "navButton tagsButton" onChange={this.handleChange}>Advice</ToggleButton>
                                <ToggleButton className = "navButton tagsButton" onChange={this.handleChange}>Art</ToggleButton>
                                <ToggleButton className = "navButton tagsButton" onChange={this.handleChange}>Blogs</ToggleButton>
                                <ToggleButton className = "navButton tagsButton" onChange={this.handleChange}>Business</ToggleButton>
                                <ToggleButton className = "navButton tagsButton" onChange={this.handleChange}>College</ToggleButton>
                                <ToggleButton className = "navButton tagsButton" onChange={this.handleChange}>Comedy</ToggleButton>
                                <ToggleButton className = "navButton tagsButton" onChange={this.handleChange}>Cooking</ToggleButton>
                                <ToggleButton className = "navButton tagsButton" onChange={this.handleChange}>Design</ToggleButton>
                                <ToggleButton className = "navButton tagsButton" onChange={this.handleChange}>Economy</ToggleButton>
                                <ToggleButton className = "navButton tagsButton" onChange={this.handleChange}>Entrepreneurship</ToggleButton>
                                <ToggleButton className = "navButton tagsButton" onChange={this.handleChange}>Environment</ToggleButton>
                                <ToggleButton className = "navButton tagsButton" onChange={this.handleChange}>Fashion</ToggleButton>
                                <ToggleButton className = "navButton tagsButton" onChange={this.handleChange}>Film</ToggleButton>
                                <ToggleButton className = "navButton tagsButton" onChange={this.handleChange}>Games</ToggleButton>
                                <ToggleButton className = "navButton tagsButton" onChange={this.handleChange}>Health</ToggleButton>
                                <ToggleButton className = "navButton tagsButton" onChange={this.handleChange}>History</ToggleButton>
                                <ToggleButton className = "navButton tagsButton" onChange={this.handleChange}>Holidays</ToggleButton>
                                <ToggleButton className = "navButton tagsButton" onChange={this.handleChange}>Journalism</ToggleButton>
                                <ToggleButton className = "navButton tagsButton" onChange={this.handleChange}>Media</ToggleButton>
                                <ToggleButton className = "navButton tagsButton" onChange={this.handleChange}>Money</ToggleButton>
                                <ToggleButton className = "navButton tagsButton" onChange={this.handleChange}>Politics</ToggleButton>
                                <ToggleButton className = "navButton tagsButton" onChange={this.handleChange}>Productivity</ToggleButton>
                                <ToggleButton className = "navButton tagsButton" onChange={this.handleChange}>Race</ToggleButton>
                                <ToggleButton className = "navButton tagsButton" onChange={this.handleChange}>Reading</ToggleButton>
                                <ToggleButton className = "navButton tagsButton" onChange={this.handleChange}>Religion</ToggleButton>
                                <ToggleButton className = "navButton tagsButton" onChange={this.handleChange}>Sports</ToggleButton>
                                <ToggleButton className = "navButton tagsButton" onChange={this.handleChange}>Technology</ToggleButton>
                                <ToggleButton className = "navButton tagsButton" onChange={this.handleChange}>Travel</ToggleButton>
                            </ToggleButtonGroup>
                        </ButtonToolbar>
                        <br></br>
                 
                    </Col>
                    <Col xs={4} md={4}>
                         <div className = "usernameDisplay">{this._username}'s notable:  </div>
                        <img id = "loader" src="loading.gif" ></img>
                        {this.state.article_components.map(article => <div>{article}</div>)} 
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
        export default connect(mapStateToProps, mapDispatchToProps)(PageContainer)