import React, {Component} from 'react';
import ReactDOM from "react-dom";
import Home from './containers/Home';

const Index = () => {   
    return(
        <div>
            <Home text = " WELCOME to homepage"/>
        </div>
        );
};

ReactDOM.render (<Index />, 
    document.getElementById('index')
);