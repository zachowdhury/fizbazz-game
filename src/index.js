import React, {Component} from 'react';
import ReactDOM from "react-dom";
import MovieList from './components/MovieList';

const Index = () => {   
    return <div>
    
    <MovieList />
    <p>Test Article Genereted for me </p>
    </div>;
};

ReactDOM.render (<Index />, 
    document.getElementById('index')
);