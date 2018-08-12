import React from 'react';
import ReactDOM from "react-dom";
import TableBody from './components/movieListComp';

const Index = () => {
    return <div>
        <TableBody />
    <p>Test Article Genereted for me </p>
    </div>;
};

ReactDOM.render (<Index />, 
    document.getElementById('index')
);