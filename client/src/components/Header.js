import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class Header extends React.Component {
  render() {
    const { loggedIn } = this.props

    return (
      <header>
            <h1>Noteable</h1>
            <Link to="/">| Home |</Link>
        
          {!loggedIn ? (
         
              <Link to="/login">| Login |</Link>
        
          ) : (
          
              <Link to="/logout">| Logout |</Link>
          
          )}
            <Link to="/quickadd">| Add Article |</Link>
             <Link to="/mypage">| My Page |</Link>


            
            <input placeholder="Search" type="text"></input> <button>submit</button>
        <hr />
      </header>
    )
  }
}
const mapStateToProps = state => ({
  loggedIn: state.loggedIn
})

export default connect(mapStateToProps)(Header)
