import React from 'react'
import { connect } from 'react-redux'
import { withRouter, Redirect } from 'react-router-dom'

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
        this._username = ''
        console.log(this.props, " what r my propsss!!!!")
  
    }

  componentWillMount() {
    this.props.clearErrors()
  }

  login(res, type) {
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
        }
    }

    if (postData) {
          axios.post('api/checkuserexists', {pre_user_Id: postData['email']})
          .then(res => {
                    if (res.data['exists']){
                        console.log('Welcome!')
                        this._username = postData['email']
                        console.log(this.props, " props")
                        this.props.handlerFromParent(this._username);
    
   
                        
                        // this.props.history.push({
                        //             pathname: '/quickadd',
                        //             state: {username: this._username, displayUsername: this._username} // your data array of objects
                        //           }) 
                    }
                    else{
                      alert('Error: User not found ')
                    }
          })
    }
  }

 

  signup(res, type){
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

          axios.post('api/checkuserexists', {pre_user_Id: postData['email']})
          .then(res => {
                    console.log('Checking for existence of user ', postData['email'])
                    if (! res.data['exists']){
                  
                          var relevantData = {
                            'firstName':  postData['first_name'],
                            'lastName': postData['last_name'],
                            'pre_userId': postData['email'], 
                            'username': postData['email']
                          }
                          this._username = postData['email']

                          axios.post('/api/createuser', {data: relevantData})
                          .then(res => {
                                  console.log("Received response: ", res.data);
                                  // console.log(this.props, " props")
                                  // this.props.sendData(this._username);
                                  console.log(this.props, " props")
                                 this.props.handlerFromParent(this._username);
    
                                  // this.props.history.push({
                                  //   pathname: '/quickadd',
                                  //   state: {username: this._username, displayUsername: this._username} // your data array of objects
                                  // }) 
                          })

                    }
                    else{
                      alert('Error: user already exists with that Google account. Please Log in Instead. ')
                      console.log('tried to sign up for existing user')
                    }

                   
          })
        }
      }
    
   


  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' } }
    const { redirectToReferrer } = this.state
    const { loggedIn, handleSubmit, currentlySending, formState, errorMessage } = this.props

    // return (
    //   <div>
    //   <UserAdd />
        // if (this.state.redirect || sessionStorage.getItem('userData')) {
        //     return (<Redirect to={'/home'}/>)
        // }
      
      const responseGoogleLogin = (response) => {
            // 17:20 for google info demo
 
            console.log(response);
            this.login(response, 'google');
        }
      const responseGoogleSignUp = (response) => {

        
            console.log(response);
            this.signup(response, 'google');

      }

      const responseGoogle = (response) => {
        alert('Error: please try again')
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
                      buttonText="Sign Up with Google"
                      onSuccess={responseGoogleSignUp}
                      onFailure={responseGoogle}/>
                      <br></br>
                      <h5> If you already have an account: </h5>
                   
                    <GoogleLogin
                      clientId="911550655554-bbrflokkvhha58qunc6d51o2f2focvta.apps.googleusercontent.com"
                      buttonText="Login with Google"
                      onSuccess={responseGoogleLogin}
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
