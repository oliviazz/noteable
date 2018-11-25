import React from 'react'
import { connect } from 'react-redux'
import { withRouter, Redirect } from 'react-router-dom'
import Article from 'components/Article'
import LoginForm from 'components/Login/LoginForm'
import { login, setErrorMessage } from 'actions/appActions'
import axios from 'axios'

class PageContainer extends React.Component{

    state = {
        'cleaned_article_names': []
    }
    // constructor(){
        
    // }
    // componentWillMount() {
    //         // Trying with just one URL first 
    //         var my_url = "https://techcrunch.com/2018/11/04/female-founders-have-brought-in-just-2-2-of-us-vc-this-year-yes-again"
    // }

    componentDidMount(){

         axios.get('/api/getarticle')
                .then(res => {
                    this.setState({
                        data: res.data
                    })
                    try{
                        var article_names = [];
                        this.setState({'articles': this.state.data.articles})
                        var results = this.state.articles

                        for (var i = 0; i < results.length; i++) {
                            article_names.push(results[i][1]);
                        }

                        this.setState({'cleaned_article_names': article_names});
                        console.log("Cleaned article names extracted from database: ", this.state.cleaned_article_names);
                    }
                    catch(err) {
                        console.log("Pause", err);
                    }  
                })
    }
     
    render(){
        const { loggedIn, handleSubmit, currentlySending, formState, errorMessage } = this.props
        let article_names = this.state.cleaned_article_names
        const temp_descrip = "This is a holder, to be replaced by actual descriptions that are ideally auto-generated!"
        const title_1 = "Local hero saves wallaby"

    //snip 
        const urlMetadata = require('url-metadata');
        const proxyurl = "https://cors-anywhere.herokuapp.com/";

        let articleItems = [];
        
        let targetUrl = '';
        let cur_article_data_long = {}
        let cur_article_data = {'url':'', 'title':'', 'img':'','descrip':'', 'sitename':'', 'author':''}
        

        try {
            for (var i = 0; i < article_names.length; i++) {
                // articleItems.push(<Article title = {article_names[i]} preview = {temp_descrip}/>);
                targetUrl = article_names[i];
                let bad = ["hellozoe!.com", "lol.com2", "cos333.com", "itsanewwebsiteurl.com"]
                if (bad.includes(targetUrl)){
                    continue;
                }
                
                urlMetadata(proxyurl+targetUrl).then(
                    function (metadata) { // success handler
                   
                        cur_article_data['url'] = metadata.url;
                        cur_article_data['image'] = metadata.image;
                        cur_article_data['title'] = metadata.title;
                        cur_article_data['descrip'] = metadata.description;
                        cur_article_data['author'] = metadata.author;
                        cur_article_data['sitename'] = metadata.site_name;

                        articleItems.push(<Article 
                            title = {metadata.title}
                            link= {metadata.url} 
                            img = {metadata.image}
                            descrip = {metadata.description}
                            author = {metadata.author}
                            sitename = {metadata.site_name}
                            />);

                        // articleItems.push(<Article 
                        //     title = {cur_article_data['title']} 
                        //     link={cur_article_data['url']}
                        //     img = {cur_article_data['image']}
                        //     descrip = {cur_article_data['descrip']}
                        //     author = {cur_article_data['author']}
                        //     sitename = {cur_article_data['sitename']} 
                        //     />);
                    },
                    function (error) { // failure handler
                        console.log("There was an error in trying to parse metadata");
                        console.log(error);
                    }) 
            }
        }
        catch(e){
            console.log("Error")
            console.log(e)
        }
        
        console.log({articleItems})

        return(<div>{articleItems}</div>);
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PageContainer))
