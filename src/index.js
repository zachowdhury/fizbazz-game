import React, {Component} from '../../../.cache/typescript/2.9/node_modules/@types/react';
import ReactDOM from "../../../.cache/typescript/2.9/node_modules/@types/react-dom";
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