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
import PageContainer from 'components/PageContainer'
import ArticleAdd from 'components/ArticleAdd'
import GroupArticleAdd from 'components/Group/GroupArticleAdd'
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


class GroupPageContainer extends React.Component {
        // 
        // Set some initial properties we want to 
        // access across functions
        // ---------------------------------------
        constructor(props) {
            super(props)
            this.state = {
                'full_article_info':[],
                'article_components':[],
                'holder':'', 
                'username':'',
                'displayUsername':'',
                'organized_tags':[]
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
            //this._username = localStorage.getItem('username')
            this.username = 'livya.zhang@gmail.com'
            this._displayUsername = ''
            this._displayGroupId = ''
            this._displayGroupName = ''


            this._active_tag_filters = ''

        

             ///
            

        }

        // Called right after component mounts
        // ---------------------------------------
        componentDidMount() {

                this._username = this.props.username
                // state: {displayUserId: userId, userId: userViewing}

                var passed_state =  this.props.location.state
                if (passed_state){
            
                    this._username = passed_state['userViewing']
                   
                    this._displayGroupName = passed_state['groupName']
                    // this.setState({'username': this._username, 'displayUsername': this._displayUsername})
                    
                    console.log(this._username, ' as viewing and ', this._displayGroupName, ' as the group to be viewed')
                
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

                this.serverRequest = axios.post('api/getgrouparticles', {'groupname': this._displayGroupName})
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
               
            
            }

        
            // ---------------------------------------

        componentWillUnmount() {
            this._ismounted = false;

        }

        handleChange = (selected) => {
            console.log('selected', selected);
            this.setState({selected})
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
            this.groupName = this.props.groupName
            var groupName = this._displayGroupName


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
                   
                     <Row>
                     <Col xs={3} md={2}>
                        <h3>tags</h3>
                 
                        <ButtonToolbar>
                            <ToggleButtonGroup type="checkbox" value={1} onChange={this.handleChange}>
                              <ToggleButton className = "navButton" value={tag_1} onChange={this.handleChange}>{tag_1}</ToggleButton><br></br>
                              <ToggleButton className = "navButton" value={tag_2} onChange={this.handleChange}>{tag_2}</ToggleButton><br></br>
                              <ToggleButton className = "navButton" value={tag_3} onChange={this.handleChange}>{tag_3}</ToggleButton><br></br>
                              <ToggleButton className = "navButton" value={tag_4} onChange={this.handleChange}>{tag_4}</ToggleButton><br></br>
                              <ToggleButton className = "navButton" value={tag_5} onChange={this.handleChange}>{tag_5}</ToggleButton><br></br>
                              <ToggleButton className = "navButton" className = "navButton" value={tag_6}>{tag_6}</ToggleButton><br></br>
                              <ToggleButton className = "navButton" value={tag_7} onChange={this.handleChange}>{tag_7}</ToggleButton><br></br>
                            </ToggleButtonGroup>
                        </ButtonToolbar>
                        <br></br>
                 
                    </Col>
                    <Col xs={4} md={4}>
                         <div className = "usernameDisplay">Group {groupName}'s  notable:  </div>
                         <GroupArticleAdd groupname={groupName} />
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
        export default connect(mapStateToProps, mapDispatchToProps)(GroupPageContainer)