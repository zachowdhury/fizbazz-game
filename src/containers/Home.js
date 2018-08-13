import React,{Component } from 'react';
import MovieList from '../components/MovieList';
import TitleList from '../components/TitleList';


export default class Home extends Component {
    
    constructor(props){
    
        super(props);
        // this.welCome = this.welCome.bind(this);
    }
    
    render(){
        return ( 
        <div>

         <p>this is Home{this.welCome.bind(this)}</p>;
            <MovieList />
            <TitleList />
        </div>
    );
}
    
    welCome (){
        return 'function welcome!!!';
    }
} 