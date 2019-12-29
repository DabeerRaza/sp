import React, { Component } from 'react'

class Login extends Component {

  constructor(props) {
    super(props)
 
    this.state = {
       email: 'dabeerofficial@gmail.com',
       password: 'password',
       loggedIn: false,
       token: localStorage.getItem('token')
    }
  }

  componentDidMount = () => {
    if(this.state.token){
      this.setState({ loggedIn: true })
    }
  }

  componentDidUpdate = () => {
    if(this.state.loggedIn){
      return this.props.history.push("/sp/auth-users/blog-dashboard")
    }
  }

  submitHandler = e => {
    e.preventDefault()

    if(this.state.email === 'dabeerofficial@gmail.com' && this.state.password ==='password'){
      localStorage.setItem('token', 'hdsakfjhksajdhfj')
      this.setState({ loggedIn: true })
      this.props.history.push("/sp/auth-users/blog-dashboard")
    }
  }
  
  render(){
  
    return (
      <div className="container-fluid login">
        <div className="row pt-5">
        <div className="white-box m-auto">
          <div className="border-bottom p-3">
            <h5>Enter Login Details</h5>
          </div>
          <form className="p-4" onSubmit={this.submitHandler}>
            <div className="row">
              <div className="col mr-1">
              <label htmlFor="inputEmail">Email</label>
                <input 
                  type="email"
                  className="form-control pl-2"
                  name="email"
                  id="inputEmail"
                  placeholder="Email"
                  defaultValue={this.state.email}
                />
              </div>
              <div className="col ml-1">
                <label htmlFor="inputPassword">Password</label>
                <input 
                  type="password"
                  className="form-control pl-2"
                  name="password"
                  id="inputPassword"
                  placeholder="Password"
                  defaultValue={this.state.password}                  
                />
              </div>
              <div className="col-lg-12">
                <button type="submit" className="btn btn-primary mt-3 p-2 pl-3 pr-3">Login</button>
              </div>
            </div>
          </form>
        </div>
        </div>
      </div>
    )
  }  
}

export default Login