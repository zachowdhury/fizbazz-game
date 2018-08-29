import React, {Component, PropertyTypes } from 'react';
import MovieList from '../components/MovieList';
import Authenticate from '../middleware/Authenticate';
import Login from '../components/Login';

export default class Analysis extends Component {

    constructor (){
        super()
        this.state ={
            title:'',
        }
    }

    componentDidMount(){
        console.log ( 'componentDidMount---:',this.state);
    }
 
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
            <Login/>
            {console.log ( 'Reder in state---:',this.store)}
            {this.change('zahid@gmail.com')}
            </div>
        );    
    }// render end 
}



