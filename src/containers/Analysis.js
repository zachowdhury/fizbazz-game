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
        this.clickMovieData = this.clickMovieData.bind (this);
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
    clickMovieData(e){
        alert ( 'This is clicked'+this.state);
    }
    render (){
        

        return (
            <div>
                <button 
                className= "button" 
                onClick={this.clickMovieData}> 
                Fetch moviedata
                </button>
  
            <h2>Analysis for movie data </h2>
            <Login/>
            {console.log ( 'Reder in state---:',this.store)}
            {this.change('zahid@gmail.com')}
            </div>
        );    
    }// render end 
}



