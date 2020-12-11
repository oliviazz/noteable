// ---------------------------------------
// Component rendered showing "My Page"
// Written in react native.js 
//
// Team Noteable -  Olivia, Zoe, and Lyra
//----------------------------------------

// ###################################################
// # PageContainer Component 
// #
// # Place to store "feed". (should analyze break down even further...)
// ###################################################

// - import statements 
import React from 'react'
import { connect } from 'react-redux'
import Article from 'components/Article'
import { login, setErrorMessage } from 'actions/appActions'
import axios from 'axios'

import Button from 'react-bootstrap/lib/Button';
import Row from 'react-bootstrap/lib/Row';
import Grid from 'react-bootstrap/lib/Grid';
import Col from 'react-bootstrap/lib/Col';
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar';


// (!------> indicates comments/things to change from December 2020) 

// - import statements 
class PageContainer extends React.Component {
        constructor(props) {
            super(props)
            //======================= set state variables 
            this.state = {
                'full_article_info':[],
                'article_components':[],
                'display_article_components':[],
                'tags_components':[],
                'holder':'', 
                // 'username':'',
                // 'displayUsername':'',
                'articles_by_tag':{},
                'clicked':{},
                '_active_tag_filter':'all'
            }

            //~~~~ this for things that don't change 
            //~~~~ minimize number of data stores to only what is needed; calculate otherwise

            //======================= see other variables that don't participate in the data flow
            this._retrieved_articles = [];
            this._ismounted = true;
            // Stores valid article URLs
            // this._article_urls = [];   // ~~~~~~> why was this created
            // // Stores metadata of all valid article URLs 
            // // this._full_article_info = [];
            // this._ArticleComponents = [];
            
            this._active_tag_filter = 'all'
            this._gotfulldata = false;
            this.components = []
            //this._username = localStorage.getItem('username')
            this._username = 'livya.zhang@gmail.com'
            this._displayUsername = this._username
            this.toggleDisplay=this.toggleDisplay.bind(this);
            this.mega_tag_articles = {}
            //userId represents the person whose page you're viewing. eventually we'll have to replace w/ username and later on in the text 

            //======================= see if state variables are passed

            var passed_state =  this.props.location.state
            
            if (passed_state){
                if (this._username != passed_state['username']){
                    console.log('no username passed through props? Props: ', this.props.username)
                    this._username = passed_state['username']
                }
                this._displayUsername = passed_state['displayUsername']
                if (this._displayUsername == ''){
                    this._displayUsername = this.props.username
                }
                console.log('Passed user Id, username: ', this._username, ' display: ', this._displayUsername)
            
            }
            else{ console.log(passed_state, "No passed variables found") }
            
            
        
            //======================= set up mega_tag_articles

            // idea is to make a dictionary with value for each tag key the relevant aticles
            this._mega_tag_articles = {}
            //t_list represents list of all possible tags 

            // (!------> indicates comments/things to change from December 2020) 
            // Should programmatically pass this in from a parent container
            var t_list = ['news', 'politics', 'food', 'beauty', 'business', 'reading', 'technology', 'blogs', 'Money', 'Productivity', 'Games', 'School', 'Environment', 'Media', 'Travel', 'sports', 'Religion', 'health', 'Weather', 'Celebrity', 'science', 'Design', 'Art', 'Comedy', 'film', 'Music', 'fashion', 'race', 'World', 'Economy', 'Later', 'Popular', 'College', 'history', 'entrepreneurship', 'Animals', 'Architecture', 'holidays', 'kids', 'entertainment', 'Baking', 'Cooking', 'AI', 'Journalism', 'Advice', 'Creative', 'Lists', 'World', 'USA', 'NYC', 'tech', 'long_read']
            // instantiate tag container
            for (var i = 0; i < t_list.length; i++){
                    var tag = t_list[i]
                    this._mega_tag_articles[tag] = []
                }

            console.log(this._mega_tag_articles)
        }
    
    
        // Called right after component mounts
        // ---------------------------------------
        componentDidMount() {
                const { loggedIn, handleSubmit, currentlySending, formState, errorMessage } = this.props
                if (this._displayUsername == ''){
                    this._displayUsername = this._username
                }   
            
                // let components = [];
                var tag_dict = {};
                var loader = document.getElementById('loader')
                loader.setAttribute('style', 'display:visible')
            
                // {API} Load the articles from the database by calling getarticle
                if (typeof this._source != typeof undefined) {
                    this._source.cancel('Operation canceled due to new request.')
                }

                this._source = axios.CancelToken.source();

                var mega_tag_articles = {}

                // making the actual call 
                this.serverRequest = axios.post('api/getarticles', {'username': this._displayUsername})
                    .then(res => {
                        console.log("Results from get article", res.data.results)
                        
                        // this.setState({'full_article_info': res.data.results})

                        for(var article in res.data.results){
                            var info = res.data.results[article]
                            var this_component = < Article title = { info['title'] }
                                        link = {info['url']}
                                        descrip = {info['blurb']}
                                        image = {info['icon']}
                                        tag = {info['tag']}
                                    />

                            this.components.push(this_component)
                            // Setting up mega tag articles -------------------------------------------------
                            var split_tags = info['tag'].split(",");
//                            
                            for (var i in split_tags) {
                                split_tags[i] = String(split_tags[i].replace(/['"]+/g, ''));
                                console.log(split_tags, "split tags")
                                var cur_tag = split_tags[i]
                                if (cur_tag.length > 0){
                                    console.log(cur_tag, " current tag logged ")

                                    // sometimes does nt exist
                                    //this._mega_tag_articles[cur_tag].push(this_component)
                                }
                              
                            }
                            this.setState({'full_article_info': res.data.results})
                        }
                          
                            
                        
                    // This is buggy -- only one article showing up under long read?
                        console.log(this._mega_tag_articles, "All articles should be added ")

                        // (!------> indicates comments/things to change from December 2020) 
                        // lot of unecessary set states here causing re-rendering and loops
                        // should only set state when wanted to re=render.
                        // generate everything on did mount, and then all that should be in render is 
                        // cases when 1) article is deleted (this.articlecomponent changes) and 2) when 
                        // the tag is changed, so display changes 
                        
                        this.setState({
                                article_components: this.components,
                                articles_by_tag: tag_dict, 
                                mega_tag_articles: mega_tag_articles
                        })
                    
                     if (this._active_tag_filter != "all"){
                        console.log('Active tag selected!!! ', this._active_tag_filter)
                        // write logic to check that this._active_tag_filter is a valid trag
                        if (!this._active_tag_filter in this._mega_tag_articles){
                            console.log('error')
                        }
                        else
                        this.state.display_article_components = this._mega_tag_articles[ this._active_tag_filter]
//                        console.log(this.state.display_article_components, " check its an array of components")
                        this.setState({display_article_components:this._mega_tag_articles[ this._active_tag_filter]})
                    }

                    else if (this._active_tag_filter == "all"){
                        this.setState({display_article_components:this.state.article_components})
                    }

                    console.log(this.state.display_article_components, " heyheyhey")


                    })
                    // To fix: tag dictionary
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

        toggleDisplay(event){
                let value = event.target.value;
                console.log(value)
                this.setState({
                    '_active_tag_filter':event.target.value
                  
                });

                console.log(this.state, "ok state")
                
                this.setState({
                    display_article_components:this._mega_tag_articles[this.state._active_tag_filter]
                })
        }
        //tagFilter = {}
        // { }
        // extract on tags 
        // save from everything 
        // Defines the HTML code atually returned and shown
        // in the component
        // ---------------------------------------    
        render() {

                //----- set short time message 
                this.timeOfDay = "morning"
                let myDate = new Date()
                this.month = myDate.getMonth()+1
                this.day = myDate.getDate()
                this.year = myDate.getFullYear()
                this.dateString = myDate.toString();
                console.log(this.dateString, this.month, this.day, this.year)

                let cur_hour = myDate.getHours()
                console.log(cur_hour)
                if (cur_hour < 12){
                    this.timeOfDay = "morning";
                }
                else if (cur_hour > 12 && cur_hour < 17){
                    this.timeOfDay = "afternoon";

                }
                else {
                    this.timeOfDay = "night"
                }


               if (this._active_tag_filter != "all"){
                        console.log('Active tag selected!!! ', this._active_tag_filter)
                        // write logic to check that this._active_tag_filter is a valid trag
                        // lol you're not supposed to setState 
                        this.state.display_article_components = this._mega_tag_articles[ this._active_tag_filter]
//                        console.log(this.state.display_article_components, " check its an array of components")
                        //this.setState({display_article_components:this._mega_tag_articles[ this._active_tag_filter]})
                    }
                    else if (this._active_tag_filter == "all"){
                        //this.setState({display_article_components:this.state.article_components})
                        this.state.display_article_components = this.state.article_components
                    }
        
            this._active_tag_filter = this.state._active_tag_filter
            // currently glitching -- commented for now, revisit this tag solutiion 

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
                     <Col xs={4} md={2}>
                        <div className="tagsHeader">Tags</div>
                        {/* this could be done programmatically using the loop, from passed in tags array*/}
                        <ButtonToolbar>
                            <Button className = "navButton tagsButton" onClick = {this.toggleDisplay} value = "news">News </Button>
                            <Button className = "navButton tagsButton" onClick = {this.toggleDisplay} value = "for_later">For Later </Button>
                            <Button className = "navButton tagsButton" onClick = {this.toggleDisplay} value = "food">Food </Button>
                            {/* <Button className = "navButton tagsButton" onClick = {this.toggleDisplay} value = "business">Business</Button> */}
                            <Button className = "navButton tagsButton" onClick = {this.toggleDisplay} value = "humor">Humor </Button>
                            <Button className = "navButton tagsButton" onClick = {this.toggleDisplay} value = "science">Science</Button>
                            <Button className = "navButton tagsButton" onClick = {this.toggleDisplay} value = "noteable">Noteable </Button>
                            <Button className = "navButton tagsButton" onClick = {this.toggleDisplay} value = "politics">Politics</Button>
                        </ButtonToolbar>
                        <br></br>
                 
                    </Col>
                    <h2 className = "greetingMessage">It's the {this.timeOfDay} of {this.month}/{this.day}/{this.year}. Happy Reading! </h2>
                    <h3 className = "usernameDisplay">{this._username}'s notable:  </h3>
                    <Col xs={8} md={4}>
                         
                    <h4> Displaying results with {this._active_tag_filter} as filter</h4>
                        <img id = "loader" src="loading.gif" ></img>
                        { 
                            this.state.display_article_components.map(article => <div>{article}</div>)
                        } 
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