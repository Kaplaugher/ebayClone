
// To make a rootReducer:
// 1. use combineREducers method (redux)
// 2. pass it an Object
// 3. each key will be a peice of application state
// 4. each value will be a single reducer


import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers/index'
import reduxPromise from 'redux-promise';

import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import Home from './containers/home';
import Login from './containers/login';
import Register from './containers/register';
import Search from './containers/search';






const theStoreWithMiddleware = applyMiddleware(reduxPromise)(createStore)(reducers);



ReactDOM.render(
  <Provider store={theStoreWithMiddleware} >
    <Router history={browserHistory}>
  		<Route path="/" component={App} >
    		<IndexRoute component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/search" component={Search} />
      </Route>
  	</Router>
  </Provider>,
  document.getElementById('root')
);
