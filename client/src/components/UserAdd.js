// ---------------------------------------
// Component housing URL submission form
// Written in react native.js 
//
// Team Noteable -  Olivia, Zoe, and Lyra
//----------------------------------------
import React from 'react'
import axios from 'axios';
import Row from 'react-bootstrap/lib/Row';
import Grid from 'react-bootstrap/lib/Grid';
import Col from 'react-bootstrap/lib/Col';
import Button from 'react-bootstrap/lib/Button';
import { changeForm } from 'actions/appActions'
import { connect } from 'react-redux'

// ###################################################
// # UserAdd Component 
// #
// # Input to add a new user to the community  
// #  
// ###################################################
class UserAdd extends React.Component {


  constructor() {
    super()
    this.my_selectedOption = ""
    this.user = "12345"
    this.state = {
      'wrong_login': true
    }
    
  
  }
  handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
  }

    state = {
      selectedOption: null,
    }

    handleChange_searchtag = (selectedOption) => {

      
    }

    handleChange_tag = (selectedOption) => {
      var tag_string = ""
      console.log(selectedOption, "selected option")
      for (var item in selectedOption){
        console.log(selectedOption[item]['value'], 'selected')
        tag_string += selectedOption[item]['value'] + " "
      }
      tag_string = tag_string.substring(0, tag_string.length - 1);
      this.my_selectedOption = tag_string
    }


  render() {
      const { selectedOption } = this.my_selectedOption;
      const true_holder = true;
      const status = 'Enter Article URL';
      console.log(this.state.wrong_login)
      const logIn = event => {
          if(false){
           
              this.props.history.push('/mypage')   
          }
          else{
            this.setState({'wrong_login': !this.state.wrong_login})
          }
      }
      const createAccount = event => {
          event.preventDefault()
          var user_data  = {
              first_name:'Liv', 
              last_name:'Z', 
              username :'livz', 
              userId: 54321
          }

          axios.post('/api/createuser', {data: user_data})
          .then(res => {
                  console.log("Received response: ", res.data);
              })
      }
        return (
            <div>
            <Grid>
            <Row>
                    <Col xs={2} md={2}>
                    </Col>
                    <Col xs={5} md={4}>
                        <h1> Noteable </h1> 
                        <h2> {this.state.wrong_login ? 'Log in' : 'Welcome! Redirecting Now'} </h2>
                        <div className = "status" > { status } < /div>
                        <form onSubmit = { createAccount } >

                        <Button> Login with Google </Button> <br></br>
                        <Button type="submit"> Make New Account</Button>
                        
                        </form> 
                    </Col>
        </Row>
        </Grid>
            </div> 

        );
    }
}


const mapStateToProps = state => ({
    loggedIn: state.loggedIn
})

const mapDispatchToProps = dispatch => ({
    handleChange: values => dispatch(changeForm(values))
})

export default connect(mapStateToProps, mapDispatchToProps)(UserAdd)
