import React, {Component} from 'react';
import ReactDOM from "react-dom";
import Home from './containers/Home';

const Index = () => {   
    return(
    <div>
        <p>World of Tables </p>  
        <Home />
    </div>
    );
};

ReactDOM.render (<Index />, 
    document.getElementById('index')
);