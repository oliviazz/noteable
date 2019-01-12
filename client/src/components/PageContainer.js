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



class PageContainer extends React.Component {
        // 
        // Set some initial properties we want to 
        // access across functions
        // ---------------------------------------
        constructor(props) {
            super(props)
            this.state = {
                'cleaned_article_names': [],
                'articles': [],
                'full_article_info':[],
                'article_components':[]
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

            this._user = '12345'

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
                let comp = []
                console.log(this._ismounted)
                // {API} Load the articles from the database by calling getarticle
                if (typeof this._source != typeof undefined) {
                    this._source.cancel('Operation canceled due to new request.')
                }
                this._source = axios.CancelToken.source();

                this.serverRequest = axios.get('/api/getarticles', {'user': JSON.stringify(this._user)})
                    .then(res => {
                        if (this._ismounted && res.data) {
                            this._retrieved_articles = res.data.articles
                        }
                        try {
                            if (this._ismounted && this._retrieved_articles) {

                                for (var i = 0; i < this._retrieved_articles.length; i++) {
                                    article = this._retrieved_articles[i]
                                    let defunct_urls = ["hellozoe!.com", "lol.com2", "cos333.com",
                                        "itsanewwebsiteurl.com", "dfafa.com", "articleURL", "articleURLs", "exampleartickeolivia.com"
                                    ]
                                    if (defunct_urls.includes(article[6])) {
                                        continue;
                                    }
                                    this._article_urls.push(article[6]);
                                }

                                this.setState({"articles":this._article_urls})

                                /// This.state.articles has the FULL article info
                                // this.setState({"articles":this._full_article_info})


                                axios.post('/api/getarticlesinfo', { 'articles': JSON.stringify(this.state.articles), 'user': JSON.stringify(this._user)})
                                        .then(res => {
                                            if (this._ismounted && res.data) {
                                               this.setState({'full_article_info':res.data.all_article_info})
                                           
                                               for(var article in this.state.full_article_info){
                                                    var article_info = this.state.full_article_info[article]
                                                    comp.push(< Article title = { article }
                                                        link = {article_info['url']}
                                                        descrip = {article_info['descrip']}
                                                        image = {article_info['image']}
                                                        title = {article_info['title']}
                                                        />);
                                                }
                                                this.setState({'article_components':comp})
                                                document.getElementById("loader").remove();
                                            }
                                        })    
                            }
                        } catch (err) {
                            console.log("Error in loading articles from database", err);
                        }
                    })
                this.setState({
                    art: comp
                })

            }
            // Keep track internally of mounted state
            // to avoid erros
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
                        <h3>time</h3>
                        <ButtonToolbar>
                            <ToggleButtonGroup type="radio" name = "time_range" value={1} onChange={this.handleChange}>
                              <ToggleButton className = "navButton" value="week">This Week</ToggleButton><br></br>
                              <ToggleButton className = "navButton" value="month">This Month</ToggleButton><br></br>
                              <ToggleButton className = "navButton" value="3months">Last 3 Months</ToggleButton><br></br>
                              <ToggleButton className = "navButton" value="year">This Year</ToggleButton><br></br>
                            </ToggleButtonGroup>
                        </ButtonToolbar>
                    </Col>
                    <Col xs={4} md={4}>
                        <h2>{this._user}'s Noteable</h2><br></br><br></br>
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