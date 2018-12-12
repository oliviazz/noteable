import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class Header extends React.Component {
  render() {
    const { loggedIn } = this.props

    return (
      // <header>
      //       <h1>Noteable</h1>
      //       <Link to="/" className="headerLink">| Home |</Link>
        
      //     {!loggedIn ? (
         
      //         <Link to="/login" className="headerLink">| Login |</Link>
        
      //     ) : (
          
      //         <Link to="/logout" className="headerLink">| Logout |</Link>
          
      //     )}
      //       <Link to="/quickadd" className="headerLink">| Add Article |</Link>
      //        <Link to="/mypage" className="headerLink">| My Page |</Link>


            
      //       <input placeholder="Search" type="text"></input> <button>submit</button>
      //   <hr />
      // </header>

          <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarTogglerDemo02">

        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
          <li class="nav-item active">
            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
             <Link to="/login" className="nav-link">| Login |</Link>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" href="#">Disabled</a>
          </li>
        </ul>
        <button type="button" id="navbutton" class="btn btn-primary navbar-btn">
            +
        </button>

        <form class="form-inline my-2 my-lg-0">
          <input class="form-control mr-sm-2" type="search" placeholder="Search">
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
    </nav>
    )
  }
}
const mapStateToProps = state => ({
  loggedIn: state.loggedIn
})

export default connect(mapStateToProps)(Header)
