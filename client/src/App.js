
// #-----------------------------------------------------------------------
// # app.js
// # Author: Olivia Zhang, Zoë Barnswell, Lyra Katzman 
// #-----------------------------------------------------------------------

import React from 'react'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import { connect } from 'react-redux'
import LoginContainer from 'components/Login/LoginContainer'
import LogoutContainer from 'components/Logout/LogoutContainer'
import ProtectedContainer from 'components/Protected/ProtectedContainer'
import UserContainer from 'components/UserContainer'
import PageContainer from 'components/PageContainer'
import GroupContainer from 'components/GroupContainer'
import HomeContainer from 'components/Home/HomeContainer'
import Header from 'components/Header'
import ArticleAdd from 'components/ArticleAdd'
import Article from 'components/Article'
import LoadingView from 'components/LoadingView'
import { loadMe } from 'actions/appActions'
import 'App.css'

class App extends React.Component {
  componentDidMount() {
    this.props.loadUser()
  }

  render() {
    const { loadingAuth } = this.props

    return (
      <Router>

        <div>
        <div class="loader"></div>
          {!loadingAuth && (
            <div>
              <Header/>
              <Route exact path="/" component={LoginContainer} />
              <Route path="/login" component={LoginContainer} />
              <Route path="/mypage" component={PageContainer} />
              <Route path="/quickadd" component={ArticleAdd} />
              <Route path="/groups" component={GroupContainer} />
              <Route path="/users" component={UserContainer} />
          
              <Route path="/logout" component={LogoutContainer} />
              <Route path="/protected" component={ProtectedContainer} />
            </div>
          )}
          <LoadingView currentlySending={loadingAuth} />
        </div>
      </Router>
    )
  }
}

const mapStateToProps = state => ({
  loadingAuth: state.loadingAuth
})

const mapDispatchToProps = dispatch => ({
  loadUser: () => dispatch(loadMe())
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
