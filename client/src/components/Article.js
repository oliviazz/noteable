import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { changeForm } from 'actions/appActions'

class Article extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value:null,
    }
  }



  
  render() {
    return (
      <div className = "container">
      <div className = "article_box">
      
      <h1> {this.props.title} </h1>
      <h2> {this.props.preview} </h2>

      </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Article)