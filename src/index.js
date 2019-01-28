import React from 'react';
import ReactDOM from 'react-dom';
import './Styles/index.css';
import App from './Components/App/index';
import Auth from './Components/Auth/Auth';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import todoReducer from './Reducers/todoReducer';
import thunk from 'redux-thunk';
import Header from './Components/Header';
import { BrowserRouter as Router, Route } from "react-router-dom";

const store = createStore(todoReducer, composeWithDevTools(
    applyMiddleware(thunk)
));

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <React.Fragment>
                <Header />
                <Route exact path="/" component={Auth} />
                <Route exact path="/App" component={App} />
            </React.Fragment>
        </Router>
    </Provider>
, 
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();