import React, {Component, PropertyTypes } from 'react';
import MovieList from '../components/MovieList';
import Authenticate from '../middleware/Authenticate';

export default class Analysis extends Component {

    change(value){
        
        return (
            Authenticate(value) 
        ? <MovieList/>
        : <p>moive list needs Authenticate</p>
        );
    } 
    
    render (){
        return (
            <div>
            <h2>This is Analysis </h2>
            {this.change('zahid@gmail.com')}
            </div>
        );    
    }// render end 
}



