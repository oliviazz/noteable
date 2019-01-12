import React from 'react'
import { connect } from 'react-redux'
import { withRouter, Redirect } from 'react-router-dom'

import LoginForm from 'components/Login/LoginForm'
import { login, setErrorMessage } from 'actions/appActions'
import UserAdd from 'components/UserAdd'
import GoogleLogin from 'react-google-login';
// import {PostData} from '../../services/PostData';


class LoginContainer extends React.Component {


  constructor(props) {
        super(props);
        this.state = {
           loginError: false,
           redirect: false
        };
        this.signup = this.signup.bind(this);
    }

  componentWillMount() {
    this.props.clearErrors()
  }


  signup(res, type) {
        // postData connects to database, and must include all info needed
        let postData;

        if (type === 'google' && res.w3.U3) {
            postData = {
              name: res.w3.ig,
              provider: type,
              email: res.w3.U3,
              first_name: res.w3.ofa,
              last_name: res.w3.wea,
              provider_id: res.El,
              token: res.Zi.access_token,
              provider_pic: res.w3.Paa
            };
        }

        if (postData) {
          console.log('sounds good!')
          console.log(postData)
            // PostData('/mypage', postData).then((result) => {
            //    console.log("line 35");
            //    let responseJson = result;
            //    console.log(responseJson);
            // // if(responseJson.userData){}
            //     //userData contains token***
            //    sessionStorage.setItem("userData", JSON.stringify(responseJson));
            //    this.setState({redirect: true});
            //     //}
            // });
        } else {}
    }


  render() {
    const { loggedIn, handleSubmit, currentlySending, formState, errorMessage } = this.props

    // return (
    //   <div>
    //   <UserAdd />
        // if (this.state.redirect || sessionStorage.getItem('userData')) {
        //     return (<Redirect to={'/home'}/>)
        // }

        const responseGoogle = (response) => {
            // 17:20 for google info demo
            console.log("google console");
            console.log(response);
            this.signup(response, 'google');
        }

        return (

        <div className="row body">
        <div className="medium-12 columns">
        <div className="medium-12 columns">
        <h2 id="welcomeText">Welcome to Noteable</h2>

        <GoogleLogin
        clientId="911550655554-bbrflokkvhha58qunc6d51o2f2focvta.apps.googleusercontent.com"
        buttonText="Login with Google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}/>

        </div>
        </div>
        </div>
        );
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginContainer))
