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


        }

        // Called right after component mounts
        // ---------------------------------------
        componentDidMount() {
                const { loggedIn, handleSubmit, currentlySending, formState, errorMessage } = this.props

                this._ismounted = true;
                var article_names = [];
                var article_url = ""
                let cleaned_article_names = []
                let full_info = []
                let comp = []
                console.log(this._ismounted)
                // {API} Load the articles from the database by calling getarticle
                if (typeof this._source != typeof undefined) {
                    this._source.cancel('Operation canceled due to new request.')
                }
                this._source = axios.CancelToken.source();

                this.serverRequest = axios.get('/api/getarticles', { cancelToken: this._source.token })
                    .then(res => {
                        if (this._ismounted && res.data) {
                            console.log("made it!")
                            this._retrieved_articles = res.data.articles
                            console.log(res.data ," hey!")
                        }

                        try {
                            if (this._ismounted && this._retrieved_articles) {

                                // this._gotfulldata = false;
                                for (var i = 0; i < this._retrieved_articles.length; i++) {
                                    article_url = this._retrieved_articles[i]

                                    let defunct_urls = ["hellozoe!.com", "lol.com2", "cos333.com",
                                        "itsanewwebsiteurl.com", "dfafa.com", "articleURL", "articleURLs", "exampleartickeolivia.com"
                                    ]
                                    if (defunct_urls.includes(article_url)) {
                                        continue;
                                    }
                                    this._article_urls.push(article_url);
                                
                                }
                                this.setState({"articles":this._article_urls})
                                console.log(this.state.articles, "sanity check")

                                    axios.post('/api/getarticlesinfo', { 'articles': JSON.stringify(this.state.articles)})
                                        .then(res => {
                                            if (this._ismounted && res.data) {

                                               console.log(res.data.all_article_info)
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
                                                console.log(comp, "COMPONENTS")
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

        // Defines the HTML code atually returned and shown
        // in the component
        // ---------------------------------------    
        render() {
                return(<div> 
                    <Grid>
     <Row>
     <Col xs={4} md={3}>
        <p>Tags</p>
        <Nav  stacked>
            
                  <NavItem eventKey={2} href="#">
                    Food
                      <Glyphicon glyph="star" /> 
                  </NavItem>
                   <NavItem eventKey={2} href="#">
                    Photography
                  </NavItem>
                   <NavItem eventKey={2} href="#">
                    Travel
                  </NavItem>
                   <NavItem eventKey={2} href="#">
                    Funny
                  </NavItem>
                
        </Nav>
        <p>Time</p>
        <Nav  stacked>
            
                  <NavItem eventKey={2} href="#">
                    All Time
                    
                  </NavItem>
                   <NavItem eventKey={2} href="#">
                   Last Month
                  </NavItem>
                   <NavItem eventKey={2} href="#">
                   Last Week
                  </NavItem>
                   <NavItem eventKey={2} href="#">
                    Today
                  </NavItem>
                
        </Nav>
    </Col>
    <Col xs={6} md={4}>
        {this.state.article_components.map(article => <div>{article}</div>)} 
    </Col>


    </Row>
</Grid>;
                  
                    
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