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


class PageContainer2 extends React.Component {
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
                    <button type="button" class="btn btn-primary">Helllo!!!!</button>
                 
    <div class="row">
        <nav class ="col-md-2 sidebar">
            <div class="sidebar-sticky">
                <p class="sidebar-head">Tags</p>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                    Food
                    <span class="badge badge-primary badge-pill">14</span>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                    Politics
                    <span class="badge badge-primary badge-pill">2</span>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                    News
                    <span class="badge badge-primary badge-pill">1</span>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                    History
                    <span class="badge badge-primary badge-pill">25</span>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                    Science
                    <span class="badge badge-primary badge-pill">80</span>
                </li>
                <p class = "sidebar-head">Time</p>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                    Today
                    <span class="badge badge-primary badge-pill">1</span>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                    This Week
                    <span class="badge badge-primary badge-pill">15</span>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                    All
                    <span class="badge badge-primary badge-pill">100</span>
                </li>
            </div>
        </nav>
    </div>
        <div>
           {this.state.article_components.map(article => <div>{article}</div>)} 
                         
        </div>
            
    </div>); }}
                   

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
            export default connect(mapStateToProps, mapDispatchToProps)(PageContainer2)