import React from 'react';
import { HashRouter as Router , Route, Switch, Redirect} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Provider } from 'react-redux'
import './utils/Styles/App.css';

import store from './redux/store'

import Login from './views/Login';
import AuthenticateUsers from './views/AuthenticateUsers'

const App = () => {

  return (
    <Provider store={store}>
      <Router>
        <div className="container-fluid">
          <Switch>
            <Route exact path="/">
              <Redirect to="/sp/login" />
            </Route>
            <Route exact path="/sp/login" component={Login}/>
            <Route path="/sp/auth-users" component={AuthenticateUsers} />
            <Route path="*" component={() => "404, page not found"} />            
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
