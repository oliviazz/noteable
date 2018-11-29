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


class PageContainer extends React.Component{
    // 
    // Set some initial properties we want to 
    // access across functions
    // ---------------------------------------
    constructor(props) {
        super(props)
        this.state = {
            'cleaned_article_names': [],
            'articles':[]
        }
        this._ismounted = true;
        // Stores valid article URLs
        this._article_urls = [];
        // Stores metadata of all valid article URLs 
        this._full_article_info = [];
        // Stores the rendered Article components
        this._ArticleComponents = [];
  }

    // Called right after component mounts
    // ---------------------------------------
    componentDidMount(){
        const { loggedIn, handleSubmit, currentlySending, formState, errorMessage } = this.props

        this._ismounted =  true; 
        var article_names = [];
        const urlMetadata = require('url-metadata');
        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        var article_url = ""
        let cleaned_article_names = []
        let full_info = []
        let comp = []
    
        // {API} Load the articles from the database by calling getarticle
        axios.get('/api/getarticle')
                .then(res => {
                    if (this._ismounted && res.data){
                        // Save the response through use of state variable
                        this.setState({
                            data: res.data
                        })
                    }

                    try{
                        if (this._ismounted =  true && this.state.data && this.state.data.articles){
                            
                            this.setState({'articles': this.state.data.articles})
                            console.log(this.state.articles, " Sanity check to see articles from database ");
                            // Push just the valid urls and save in this._article_urls
                            for (var i = 0; i < this.state.articles.length; i++) { 
                                article_url = this.state.articles[i];

                                let defunct_urls = ["hellozoe!.com", "lol.com2", "cos333.com", 
                                                    "itsanewwebsiteurl.com", "dfafa.com", "articleURL", "articleURLs", "exampleartickeolivia.com"]
                                if (defunct_urls.includes(article_url)){
                                    continue;
                                }
                                this._article_urls.push(article_url);
                                
                                console.log(article_url)
                                // Rtrieve the metadata for each article
                                try{
                                urlMetadata(proxyurl+article_url).then(
                                    function (metadata) {
                                        let i = 1;
                                        console.log(metadata)
                                        full_info.push(metadata)
                                        // console.log(full_info, " DSFSAF")
                                        // let temp_info = {
                                        //     "url":metadata.url,
                                        //     "image":metadata.image,
                                        //     "description": metadata.description,
                                        //     "title": metadata.title

                                        // };
                                        console.log(full_info, " T I ")
                                        // console.log(this._full_article_info, " Fill article info")

                                        // let n = (<Article title = {metadata.title} 
                                        //     link = {metadata.url}
                                        //     author = {metadata.author} />);
                                        // console.log( " hey")
                                        // console.log(this._full_article_info)
                                        // Think the problem
                                        comp.push(<Article 
                                            title = {metadata.title} 
                                            link = {metadata.url}
                                            author = {metadata.author}
                                            key = {i++}
                                            />);
                                    },
                                    function (error) { // failure handler
                                        console.log("There was an error in trying to parse metadata");
                                        console.log(error);

                                    }) 
                            }
                            catch {
                                console.log("invalid URL!")
                            }
                        }
                        }
                    }

                    
                    catch(err) {
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

componentWillUnmount(){
    this._ismounted =  false;
    
  }

// Defines the HTML code atually returned and shown
// in the component
// ---------------------------------------    
render(){
        // Example article array to test rendering 
        let hello = []
        hello.push(<Article title="Wikapedia" link="wikapedia.org"  image= "https://cdn-images-1.medium.com/max/1200/1*kt9otqHk14BZIMNruiG0BA.png"/>)
        hello.push(<Article title="Wikapedia" link="wikapedia.org"  image= "https://cdn-images-1.medium.com/max/1200/1*kt9otqHk14BZIMNruiG0BA.png"/>)
        
        // Now try with actual data
        let hello2 = this.state.art;
        console.log(this.state.art, " comp")


     

        if (hello2){
            console.log('vaid')
            return(
            <div> 
                {this.state.art.map(article => <div>{article} </div> )}
            </div>
            );
        }

        else {
            console.log('invaid')
            return(
            <div> 
                {hello.map(article => <div> {article} </div>)}
            </div>
            );
        }
 
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


