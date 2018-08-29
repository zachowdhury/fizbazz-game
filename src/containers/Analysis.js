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
<<<<<<< HEAD
            <Login/>
            {console.log ( 'Reder in state---:',this.store)}
=======
            {console.log ( 'Reder in state---:')}
>>>>>>> 22603ca402d692346cd7f826a9f3bd34a329d88b
            {this.change('zahid@gmail.com')}
            </div>
        );    
    }// render end 
}



