import React from 'react'
import { connect } from 'react-redux'
import { withRouter, Redirect } from 'react-router-dom'
import Article from 'components/Article'
import LoginForm from 'components/Login/LoginForm'
import { login, setErrorMessage } from 'actions/appActions'
import axios from 'axios'

class PageContainer extends React.Component {
    componentWillMount() {

            axios.get('/api/getarticle')
                .then(res => {
                    console.log(this.state);

                    this.setState({
                        data: res.data
                        // now: find how to move from res data to display articcles
                    })
                    // const info = res.data;
                    // this.setState({ info });
                    try{
                        var article_names = [];
                        var results = this.state.data.articles

                        for (var i = 0; i < results.length; i++) {
                            article_names.push(results[i][1]);
                        }

                        this.setState({'cleaned_article_names': article_names});
                        console.log(this.state.cleaned_article_names, "hihihih");
                    }
                    catch(err) {
                        const n = 4;
                        console.log(err);
                    }

                    

                })
               

        }
     


    render() {
        const { loggedIn, handleSubmit, currentlySending, formState, errorMessage } = this.props
        const temp_descrip = "This is a holder, to be replaced by actual descriptions that are ideally auto-generated!"
            // const title_1 = this.state.article_url
        const title_1 = "Local hero saves wallaby"
        // const title_2 = String(this.state.articles[0])
        // const title_3 = String(this.state.articles[1])
        
        let articleItems = [];
        let article_names = [];
        try {
            article_names = this.state.cleaned_article_names;
            console.log(article_names, "we made it")
            for (var i = 0; i < article_names.length; i++) {
                articleItems.push(<Article title = {article_names[i]} preview = {temp_descrip}/>);
            }
        }
        catch(e){
            article_names = [];
        }
        
        
        return <div>{articleItems}</div>;
        // return (

        //         return <div>{menuItems}</div>;

        //     // <
        //     // div >
        //     // <
        //     // h1 > My Page < /h1>  <
        //     // Article title = { title_1 }
        //     // preview = { temp_descrip }
        //     // />  <
        //     // Article title = { title_1 }
        //     // preview = { temp_descrip }
        //     // />  <
        //     // Article title = { title_1 }
        //     // preview = { temp_descrip }
        //     // /> < /
        //     // div >
        // )
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