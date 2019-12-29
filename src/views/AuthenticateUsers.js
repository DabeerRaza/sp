import React, { Component } from 'react'
import { HashRouter as Router , Route, Switch } from 'react-router-dom'

import NavBar from '../components/NavBar';
import SideBar from '../components/SideBar';

import BlogDashboard from '../components/BlogDashboard/BlogDashboard'
import BlogPosts from '../components/BlogPosts/BlogPosts'
import AddNewPost from '../components/AddNewPost/AddNewPost'
import FormsAndComponents from '../components/FormsAndComponents/FormsAndComponents'
import Tables from '../components/Tables/Tables'
import UserProfile from '../components/UserProfile/UserProfile'
import Errors from '../components/Errors/Errors'
import Footer from '../components/Footer';

import Logout from './Logout';

class AuthenticateUsers extends Component {

  constructor(props) {
    super(props)
 
    this.state = {
       loggedIn: false,
       token: localStorage.getItem('token')
    }
  }

  componentDidMount = () => {
    if(this.state.token === null){
      this.setState({ loggedIn: true })
    }
  }

  componentDidUpdate = () => {
    if(this.state.loggedIn){
      return this.props.history.push("/sp/login")
    }
  }

  render(){
    return (
        <Router>
          <div className="container-fluid">
            <SideBar />
            <NavBar loggedIn={this.state.loggedIn} token={this.state.token}/>
            <div className="row">
              <div className="col-lg-2 col-md-3 col-12"></div>
              <main className="main col-lg-10 col-md-9 col-12">
                <Switch>
                  <Route exact path="/sp/auth-users/blog-dashboard" component={BlogDashboard} />   
                  <Route path="/sp/auth-users/blog-posts" component={BlogPosts}/>              
                  <Route path="/sp/auth-users/add-new-post" component={AddNewPost}/>              
                  <Route path="/sp/auth-users/forms-and-components" component={FormsAndComponents}/>              
                  <Route path="/sp/auth-users/tables" component={Tables}/>              
                  <Route path="/sp/auth-users/user-profile" component={UserProfile}/>            
                  <Route path="/sp/auth-users/errors" component={Errors}/>
                  <Route path="/sp/auth-users/logout" component={Logout} />  
                </Switch> 
              </main>
            </div>
            <div className="row">
              <div className="col-lg-2 col-md-3"></div>
              <footer className="col-lg-10 col-md-9">
                <Footer />
              </footer>
            </div>    
          </div>
        </Router>
    )
  }
}

export default AuthenticateUsers
