import React, {Component} from 'react';
import ReactDOM from "react-dom";
import Home from './containers/Home';
import { BrowserRouter , Route, Link } from "react-router-dom";
import Routing from './Routes/Routing'
import Header from './components/Header';
import Footer from './components/Footer';

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
    <BrowserRouter>
        <Index /> 
    </BrowserRouter>
),document.getElementById('index')
);