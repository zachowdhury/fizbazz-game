import React, {Component} from 'react';
import ReactDOM from "react-dom";
import Home from './containers/Home';
import { BrowserRouter , Route, Link } from "react-router-dom";
import Routing from './routes/Routing'
import Header from './components/Header';
import Footer from './components/Footer';

import {createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers'
import logger from 'redux-logger'
import '../public/style.css';

const store = createStore( rootReducer, applyMiddleware(logger));
// this  function Index = App module 
const Index = () => {   
    return(
        <div>
            <Header/>
            <Routing />
            <Footer />
        </div>
        );
};

ReactDOM.render (
    (
<Provider store= {store}>

    <BrowserRouter>
        <Index /> 
    </BrowserRouter>
</Provider>
),document.getElementById('index')
);