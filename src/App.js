import React from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import './App.scss';
import { Provider } from 'react-redux';
import  { store }  from './Helpers/store'
import { Login }  from './Component/Login';
import { Dashboard } from './Component/Dashboard';
import { Home }  from './Component/Home';
import { history } from "./Helpers/history"
import {Register} from "./Component/Register";

function App() {
  return (
      <div className="App">
        <Provider store={store}>
        <BrowserRouter history={history}>
            {/*<div className="header">*/}
            {/*  <NavLink exact activeClassName="active" to="/">Home</NavLink>*/}
            {/*  <NavLink activeClassName="active" to="/login">Login</NavLink><small>(Access without token only)</small>*/}
            {/*  <NavLink activeClassName="active" to="/dashboard">Dashboard</NavLink><small>(Access with token only)</small>*/}
            {/*</div>*/}
            <div className="content">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/login" component={Login} />
                  <Route path="/register" component={Register} />
                <Route path="/dashboard" component={Dashboard} />
              </Switch>
            </div>
        </BrowserRouter>
        </Provider>
      </div>
  );
}

export default App;