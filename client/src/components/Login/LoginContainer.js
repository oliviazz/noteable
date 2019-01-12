import React from 'react'
import { connect } from 'react-redux'
import { withRouter, Redirect } from 'react-router-dom'

import LoginForm from 'components/Login/LoginForm'
import { login, setErrorMessage } from 'actions/appActions'
import UserAdd from 'components/UserAdd'
import GoogleLogin from 'react-google-login';
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
import axios from 'axios';

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

  login(res, type) {


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
      
          console.log("Working", postData)
          axios.post('api/checkuserexists', {user_Id: postData['token']})
          .then(res => {
                    console.log('Checking for token', postData['token'])
                    if (! res.data['exists']){

                          relevantData = {
                            'userId':
                            'firstName':
                            'lastName':
                            'email':
                          }
                          axios.post('/api/createuser', {data: user_data})
                          .then(res => {
                                  console.log("Received response: ", res.data);
                                  this.props.history.push({
                                    pathname: '/mypage',
                                    state: {userId: this._userId, displayUserId: this._userId} // your data array of objects
                                  }) 
                          })
                    }
                    console.log("does it exist?", res.data['exists'])
                    // this.props.history.push({
                    //   pathname: '/mypage',
                    //   state: {userId: this._userId, displayUserId: this._userId} // your data array of objects
                    // }) 


          })
        }

           // axios.post('/api/createuser', {data: user_data})
           //  .then(res => {
           //          console.log("Received response: ", res.data);
           //          this.props.history.push({
           //            pathname: '/mypage',
           //            state: {userId: this._userId, displayUserId: this._userId} // your data array of objects
           //          }) 
           //  })
         


           
      }
      
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
 
            console.log(response);
            this.signup(response, 'google');
        }
      const responseGoogleSignUp = (response) => {

        
            console.log(response);
            this.login(response, 'google');

      }

        return (
        <div>
        <Grid>
                    
            <Row>
               <Col xs={1} md={1}>
               </Col>
               <Col xs={8} md={8}>
                    <h1> Welcome to Noteable </h1> <br></br>
                    <GoogleLogin
                      clientId="911550655554-bbrflokkvhha58qunc6d51o2f2focvta.apps.googleusercontent.com"
                      buttonText="Login with Google"
                      onSuccess={responseGoogle}
                      onFailure={responseGoogle}/>
                      <br></br>
                    <GoogleLogin
                      clientId="911550655554-bbrflokkvhha58qunc6d51o2f2focvta.apps.googleusercontent.com"
                      buttonText="Sign Up with Google"
                      onSuccess={responseGoogle}
                      onFailure={responseGoogle}/>
               </Col>
            </Row>
        </Grid> 
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
