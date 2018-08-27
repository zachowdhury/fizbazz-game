import React, {Component} from 'react';
import ReactDOM from "react-dom";
import Home from './containers/Home';
import { BrowserRouter , Route, Link } from "react-router-dom";
import Routing from './routes/Routing'
import Header from './components/Header';
import Footer from './components/Footer';

import {createStore} from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers'


const store = createStore( rootReducer);
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