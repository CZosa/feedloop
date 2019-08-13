import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';

import App from './components/App';
import reducers from './reducers';

//development only, axios helpers
import axios from 'axios';
window.axios = axios;

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//createStore will house a dummy reducer for now, initial state(server-side rendering), middleware
const store = createStore(reducers, {}, composeEnhancers(applyMiddleware(reduxThunk)));

//Provider is a react component that knows how to read changes from store anytime
//the store gets some new state produced inside of it. then updates components with new state.
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
)