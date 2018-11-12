import React from 'react'
import { connect } from 'react-redux'
import { withRouter, Redirect } from 'react-router-dom'
import Article from 'components/Article'
import LoginForm from 'components/Login/LoginForm'
import { login, setErrorMessage } from 'actions/appActions'
import axios from 'axios'

class PageContainer extends React.Component {
  componentWillMount() {

    axios.get(`https:/localhost:3000/mypage`)
      .then(res => {
        const info = res.data;
        this.setState({ info });
        console.log(this.state);

      })

    
  }
    // this.props.clearErrors()

    // fetch('http://localhost:3000/mypage/')
    //   .then((response) => response.json())
    //   .then((findresponse)=> {
        
    //       console.log(findresponse);
              // alert(findresponse);
      
      // })

      

  render() {
    const { loggedIn, handleSubmit, currentlySending, formState, errorMessage } = this.props
    const temp_descrip = "In the early hours of Friday night, a humble local hero completes miraculous rescue."
    // const title_1 = this.state.article_url
    const title_1 = "Local hero saves wallaby"
    return (

      <div>
        <h1>My Page</h1>
        <Article title={title_1} preview = {temp_descrip} />
      </div>
    )
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
