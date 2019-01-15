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
                'articles_by_tag':{},
                'clicked':{}
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
            this._username = this.props.username
            this._displayUsername = ''

            var passed_state =  this.props.location.state
            if (passed_state){
                if (this._username != passed_state['username']){
                    console.log('hm, no username passed through props? Props: ', this.props.username)
                    this._username = passed_state['username']
                }
                this._displayUsername = passed_state['displayUsername']

                if (this._displayUsername == ''){
                    // if displayUsername not passed it means you're viewing your own
                    this._displayUsername = this.props.username
                }

                // this.setState({'username': this._username, 'displayUsername': this._displayUsername})
                
                console.log('Passed user Id, username: ', this._username, ' display: ', this._displayUsername)
            
            }
            else{ console.log(passed_state, "No passed variables found") }

            this._active_tag_filter = 'health'
            //this._active_tag_filter = 'all'
            var tags = []
                      
                    
            // set up mega_tag_articles
            // ----------------------------------
            this._mega_tag_articles = {}
            //t_list represents list of all possible tags 
            var t_list = ['news', 'politics', 'food', 'beauty', 'business', 'reading', 'technology', 'blogs', 'Money', 'Productivity', 'Games', 'School', 'Environment', 'Media', 'Travel', 'sports', 'Religion', 'health', 'Weather', 'Celebrity', 'science', 'Design', 'Art', 'Comedy', 'film', 'Music', 'fashion', 'race', 'World', 'Economy', 'Later', 'Popular', 'College', 'history', 'entrepreneurship', 'Animals', 'Architecture', 'holidays', 'kids', 'entertainment', 'Baking', 'Cooking', 'AI', 'Journalism', 'Advice', 'Creative', 'Lists', 'World', 'USA', 'NYC', 'tech', 'long_read']
            for (var i = 0; i < t_list.length; i++){
                    var tag = t_list[i]
                    this._mega_tag_articles[tag] = []
                }
            // this._mega_tag_articles instantiated with all keys! 
            // ----------------------------------

             ///
            

        }
    
    
        // Called right after component mounts
        // ---------------------------------------
        componentDidMount() {
               

                const { loggedIn, handleSubmit, currentlySending, formState, errorMessage } = this.props
               
                
                this._username = 'ozhang@princeton.edu'
                if (this._displayUsername == ''){
                    this._displayUsername = this._username
                }
            
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
                this.serverRequest = axios.post('api/getarticles', {'username': this._displayUsername})
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
                                if (taggo.length > 0){
                                    console.log(taggo, " broken sad")
                                    this._mega_tag_articles[taggo].push(this_component)
                                }
                              
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
            // console.log('selected', selected);
            // this.setState({selected})
        }


        load_page_results = (selected) => {
            

            /// 
            console.log('reloading this!!!')
            

            // make a http request 

        }

        //tagFilter = {}
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

            // const tagFilter(newclicked) = (event) => {
            //         // find where onClick is coming from and extract name property
            //         // var newclicked = 'test'
            //         // Figure out which tags are clicked
            //         if(newclicked in this.state.clicked){
            //             // Remove clicked tag
            //             delete this.state.clicked[newclicked]
            //         }
            //         else {
            //             // add clicked tag
            //             this.state.clicked.push(newclicked)
            //         }
            //         console.log(this.state.clicked)
            //         // Contains union of articles with given tags
            //         // if(Object.keys(this.state.clicked).length > 0){
            //         //     var components = articles_by_tag[clicked[0]]
            //         //     if (Object.keys(this.state.clicked).length > 1){
            //         //         for (var i = 1; i < Object.keys(clicked).length; i++){
            //         //             components = [...new Set([...components, ...articles_by_tag[clicked[i]]])];
            //         //         }
            //         //     }
            //         // }
            //         // this.setState({display_article_components:components})
            // }

            // console.log(this.state.tags_components)
            return(
                <div> 
                <Grid>
                   
                     <Row>
                     <Col xs={3} md={2}>
                        <div className="tagsHeader">tags</div>
                        <ButtonToolbar>
                            <ToggleButtonGroup type="checkbox">
                                <ToggleButton className = "navButton tagsButton" name = "advice" >Advice</ToggleButton>
                                <ToggleButton className = "navButton tagsButton" name = "art">Art</ToggleButton>
                                <ToggleButton className = "navButton tagsButton" name = "blogs">Blogs</ToggleButton>
                                <ToggleButton className = "navButton tagsButton" name = "business">Business</ToggleButton>
                                <ToggleButton className = "navButton tagsButton" name = "college">College</ToggleButton>
                                <ToggleButton className = "navButton tagsButton" name = "comedy">Comedy</ToggleButton>
                                <ToggleButton className = "navButton tagsButton" name = "cooking">Cooking</ToggleButton>
                                <ToggleButton className = "navButton tagsButton" name = "design">Design</ToggleButton>
                                <ToggleButton className = "navButton tagsButton" name = "economy">Economy</ToggleButton>
                                <ToggleButton className = "navButton tagsButton" name = "entrepreneurship">Entrepreneurship</ToggleButton>
                                <ToggleButton className = "navButton tagsButton" name = "environment">Environment</ToggleButton>
                                <ToggleButton className = "navButton tagsButton" name = "fashion">Fashion</ToggleButton>
                                <ToggleButton className = "navButton tagsButton" name = "film">Film</ToggleButton>
                                <ToggleButton className = "navButton tagsButton" name = "games">Games</ToggleButton>
                                <ToggleButton className = "navButton tagsButton" name = "healthy">Health</ToggleButton>
                                <ToggleButton className = "navButton tagsButton" name = "history">History</ToggleButton>
                                <ToggleButton className = "navButton tagsButton" name = "holidays">Holidays</ToggleButton>
                                <ToggleButton className = "navButton tagsButton" name = "journalism">Journalism</ToggleButton>
                                <ToggleButton className = "navButton tagsButton" name = "media">Media</ToggleButton>
                                <ToggleButton className = "navButton tagsButton" name = "money">Money</ToggleButton>
                                <ToggleButton className = "navButton tagsButton" name = "politics">Politics</ToggleButton>
                                <ToggleButton className = "navButton tagsButton" name = "productivity">Productivity</ToggleButton>
                                <ToggleButton className = "navButton tagsButton" name = "race">Race</ToggleButton>
                                <ToggleButton className = "navButton tagsButton" name = "reading">Reading</ToggleButton>
                                <ToggleButton className = "navButton tagsButton" name = "religion">Religion</ToggleButton>
                                <ToggleButton className = "navButton tagsButton" name = "sports">Sports</ToggleButton>
                                <ToggleButton className = "navButton tagsButton" name = "technology">Technology</ToggleButton>
                                <ToggleButton className = "navButton tagsButton" name = "travel">Travel</ToggleButton>
                            </ToggleButtonGroup>
                        </ButtonToolbar>
                        <br></br>
                 
                    </Col>
                    <Col xs={4} md={4}>
                         <div className = "usernameDisplay">{this._username}'s notable:  </div>
                         <h4> Displaying results with {this._active_tag_filter} as filter</h4>
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