import React from 'react'
import { connect } from 'react-redux'
import { withRouter, Redirect } from 'react-router-dom'
import Article from 'components/Article'
import LoginForm from 'components/Login/LoginForm'
import { login, setErrorMessage } from 'actions/appActions'
import axios from 'axios'

class PageContainer extends React.Component{

    constructor(props) {
        super(props)
        this.state = {
            'cleaned_article_names': [],
            'articles':[]
        }
        this._ismounted = true;
        this. _full_article_info = [];
        this._article_urls = [];
        this._ArticleItems = [];
  }

    componentDidMount(){
        this._ismounted =  true; 
        var article_names = [];
        const urlMetadata = require('url-metadata');
        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        var article_url = ""
        let cleaned_article_names = []
    
        // Load the articles from the database
        axios.get('/api/getarticle')
                .then(res => {
                    if (this._ismounted && res.data){
                        this.setState({
                            data: res.data
                        })
                    }

                    try{
                        if (this._ismounted =  true && this.state.data && this.state.data.articles){
                            this.setState({'articles': this.state.data.articles})
                            for (var i = 0; i < this.state.articles.length; i++) {
                                // Push just the urls 
                                article_url = this.state.articles[i][1];
                                let defunct_urls = ["hellozoe!.com", "lol.com2", "cos333.com", "itsanewwebsiteurl.com", "dfafa.com"]
                                if (defunct_urls.includes(article_url)){
                                    continue;
                                }

                                this._article_urls.push(article_url);
                             
                                urlMetadata(proxyurl+article_url).then(
                                    function (metadata) {
                                        console.log(metadata);
                                        this._full_article_info.push(metadata);
                                    },
                                    function (error) { // failure handler
                                        console.log("There was an error in trying to parse metadata");
                                        console.log(error);

                                    }) 
                            }

                            console.log(this._article_urls, " hm")
                            console.log(this._full_article_info, "f a i 1")
                                // part 2
                            const { loggedIn, handleSubmit, currentlySending, formState, errorMessage } = this.props
                         
                            const temp_descrip = "This is a holder, to be replaced by"
                            const title_1 = "Local hero saves wallaby"
                            console.log(this._full_article_info, " full article info");   




                            // for (var article in this._full_article_info){
                            //     this._ArticleItems.push( <Article 
                            //                         title = {this._full_article_info[article]['title']}
                            //                         link = {this._full_article_info[article]['link']} 
                            //                         image = {this._full_article_info[article]['image']}
                            //                         descrip = {this._full_article_info[article]['descrip']}
                            //                         author = {this._full_article_info[article]['author']}
                            //                         sitename = {this._full_article_info[article]['sitename']}
                            //                     />);
                            // }


                            for (var i = 0; i < this._article_urls.length; i++) {
                                 console.log(this._article_urls[i],this._article_urls[i], "works")
                                 this._ArticleItems.push(<Article title = {this._article_urls[i]} link = {this._article_urls[i]}/>);
                          
                            }
                            console.log("code!")

                            console.log(this._ArticleItems, " hello 2 2!");
                            console.log(article_names)

                            }
                    }
                    
                    catch(err) {
                        console.log("Error in loading articles from database", err);
                    }  
                })
}
      
componentWillUnmount(){
    this._ismounted =  false;
    
  }
     
render(){

        

        // return(<div>{articleItems}</div>);{stations.map(station => <div> {station} </div>)} 

        // return(<div> 
        //     {this._ArticleItems.map(article => <div>{article}</div>)}
        //      </div>);

        let hello = []
        hello.push(<Article title="Wikapedia" link="wikapedia.org"  image= "https://cdn-images-1.medium.com/max/1200/1*kt9otqHk14BZIMNruiG0BA.png"/>)
        hello.push(<Article title="Wikapedia" link="wikapedia.org"  image= "https://cdn-images-1.medium.com/max/1200/1*kt9otqHk14BZIMNruiG0BA.png"/>)
        
        let hello2 = this._ArticleItems

        console.log(hello2, " hello does it exist ")
        console.log(hello, " this is original")
        return(
            <div> 
            {hello.map(article => <div>{article}</div>)}
            {hello2.map(article => <div>{article}</div>)}
             </div>);
 
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
export default connect(mapStateToProps, mapDispatchToProps)(PageContainer)


