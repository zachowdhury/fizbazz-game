import React, {Component} from 'react';
import ReactDOM from "react-dom";
import MovieList from './components/MovieList';

const Index = () => {   
    return( <div>
        <p>World of Tables </p>
        <MovieList />
    </div>);
};

ReactDOM.render (<Index />, 
    document.getElementById('index')
);