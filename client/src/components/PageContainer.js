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
                'display_article_components':[],
                'tags_components':[],
                'holder':'', 
                'username':'',
                'displayUsername':'',
                'articles_by_tag':{}
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

            //this._active_tag_filter = 'all'
            this._active_tag_filter = 'all'
            var tags = []
                      
                    
            // set up mega_tag_articles
            // ----------------------------------
            this._mega_tag_articles = {}
            //t_list represents list of all possible tags 
            var t_list = ['news', 'politics', 'food', 'business', 'reading', 'technology', 'blogs', 'Money', 'Productivity', 'Games', 'School', 'Environment', 'Media', 'Travel', 'sports', 'Religion', 'health', 'Weather', 'Celebrity', 'science', 'Design', 'Art', 'Comedy', 'film', 'Music', 'fashion', 'race', 'World', 'Economy', 'Later', 'Popular', 'College', 'history', 'entrepreneurship', 'Animals', 'Architecture', 'holidays', 'kids', 'entertainment', 'Baking', 'Cooking', 'AI', 'Journalism', 'Advice', 'Creative', 'Lists', 'World', 'USA', 'NYC', 'tech', 'long_read']
            for (var i = 0; i < t_list.length; i++){
                    var tag = t_list[i]
                    this._mega_tag_articles[tag] = []
                }
            // this._mega_tag_articles instantiated with all keys! 
            // ----------------------------------

            axios.post('/api/alltags').then(res => {
                    tags = res.data.results
                    console.log('all tags bishhhh', tags)
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
                let components = [];
                var tag_dict = {};
                var loader = document.getElementById('loader')
                loader.setAttribute('style', 'display:visible')
            
                // {API} Load the articles from the database by calling getarticle
                if (typeof this._source != typeof undefined) {
                    this._source.cancel('Operation canceled due to new request.')
                }
                this._source = axios.CancelToken.source();

                var mega_tag_articles = {}
                var t_set = new Set()
                this.serverRequest = axios.post('api/getarticles', {'username': this._username})
                    .then(res => {
                        this.setState({'full_article_info': res.data.results})
                        for(var article in this.state.full_article_info){
                            var info = this.state.full_article_info[article]
                            var this_component = < Article title = { info['title'] }
                                        link = {info['url']}
                                        descrip = {info['blurb']}
                                        image = {info['icon']}
                                        tag = {info['tag']}
                                    />

                            components.push(this_component)
                            // Setting up mega tag articles -------------------------------------------------
                            var split_tags = info['tag'].split(",");
//                            
                            for (var i in split_tags) {
                                split_tags[i] = String(split_tags[i].replace(/['"]+/g, ''));
                                var taggo = split_tags[i]
                                console.log(taggo)
                                this._mega_tag_articles[taggo].push(this_component)
                              
                            }
                        }
                            // assume that mega_tag_articles already has all its keys hardcoded
                            // --------------------------------------------------
                            // Add this component to the dicts of all tags its under
                      
                            
                        
                    // This is buggy -- only one article showing up under long read?
                        console.log(this._mega_tag_articles, "!!!!All articles should be added ")
                        this.setState({
                                article_components: components,
                                articles_by_tag: tag_dict, 
                                mega_tag_articles: mega_tag_articles
                        })
                    
                     if (this._active_tag_filter != "all"){
                        console.log('Active tag selected!!! ', this._active_tag_filter)
                        // write logic to check that this._active_tag_filter is a valid trag
                        this.state.display_article_components = this._mega_tag_articles[ this._active_tag_filter]
//                        console.log(this.state.display_article_components, " check its an array of components")
                        this.setState({display_article_components:this._mega_tag_articles[ this._active_tag_filter]})
                    }
                    else if (this._active_tag_filter == "all"){
                        this.setState({display_article_components:this.state.article_components})
                    }

                    console.log(this.state.display_article_components, " heyheyhey")


                    })
            
           
                            // save in dictionary
//                            for (var i = 0; i < Object.keys(tag_list).length; i++){
//                                if (tag_dict.hasOwnProperty(tag_list[i])){
//                                    console.log("CHECK TRUE")
//                                    //tag_dict[tag_list[i]] = []
//                                    tag_dict[tag_list[i]].push(< Article title = { info['title'] }
//                                        link = {info['url']}
//                                        descrip = {info['blurb']}
//                                        image = {info['icon']}
//                                        tag = {info['tag']}
//                                    />);
//                                }
//                                tag_dict[tag_list[i]] = []
//                                tag_dict[tag_list[i]].push(< Article title = { info['title'] }
//                                        link = {info['url']}
//                                        descrip = {info['blurb']}
//                                        image = {info['icon']}
//                                        tag = {info['tag']}
//                                    />);
//                            }
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
            
            var selectButton = (event) =>{
                console.log('hey')
            }
            
            // console.log(this.state.tags_components)
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
                        {this.state.display_article_components.map(article => <div>{article}</div>)} 
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