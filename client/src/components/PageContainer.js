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
                'full_article_info':[]
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
                const urlMetadata = require('url-metadata');
                const proxyurl = "https://cors-anywhere.herokuapp.com/";
                var article_url = ""
                let cleaned_article_names = []
                let full_info = []
                let comp = []

                // {API} Load the articles from the database by calling getarticle
                if (typeof this._source != typeof undefined) {
                    this._source.cancel('Operation canceled due to new request.')
                }
                this._source = axios.CancelToken.source();
                this.serverRequest = axios.get('/api/getarticles', { cancelToken: this._source.token })
                    .then(res => {
                        if (this._ismounted && res.data) {
                            this._retrieved_articles = res.data.articles
                        }

                        try {
                            if (this._ismounted = true && this._retrieved_articles) {

                                this._gotfulldata = false;
                                for (var i = 0; i < this._retrieved_articles.length; i++) {
                                    article_url = this._retrieved_articles[i]

                                    let defunct_urls = ["hellozoe!.com", "lol.com2", "cos333.com",
                                        "itsanewwebsiteurl.com", "dfafa.com", "articleURL", "articleURLs", "exampleartickeolivia.com"
                                    ]
                                    if (defunct_urls.includes(article_url)) {
                                        continue;
                                    }
                                    this._article_urls.push(article_url);
                                    // // Migrating this 
                                    // try {
                                    //     urlMetadata(proxyurl + article_url).then(
                                    //         function(metadata) {
                                    //             let i = 1;
                                    //             console.log(metadata)
                                                
                                    //             this.state.full_article_info.push(metadata)
                                    //             this._gotfulldata = true;
                                    //         },
                                    //         function(error) { // failure handler
                                    //             console.log("There was an error in trying to parse metadata");
                                    //         })
                                    // } catch {
                                    //     console.log("invalid URL!")
                                    // }
                                }
                                this.setState({"articles":this._article_urls})
                                 console.log(this.state.articles, "sanity check")
                                    axios.post('/api/getarticlesinfo', { 'articles': JSON.stringify(this.state.articles)})
                                        .then(res => {
                                            if (this._ismounted && res.data) {
                                               console.log('yoo')
                                            }
                                        })
                                console.log(this.state.full_article_info, " ok state rendered");
                                    
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
                // Example article array to test rendering 
                let hello = [];
                let article_components = [];
                
                console.log(this.state.articles, " full article info first");
                for (var i = 0; i < this.state.articles.length; i++){
                    article_components.push(< Article title = { this.state.articles[i] }
                                    link = {this.state.articles[i]}
                                    author = "Author"
                                    image = "Image"
                                    />);
                }
                return(< div > {article_components.map(article => <div>{article}</div>)} </div >);
                }
            }
                    // --------------------------------------------------------------
                    // --------------------------------------------------------------


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