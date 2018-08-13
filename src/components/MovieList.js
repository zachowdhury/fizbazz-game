import React,{Component } from 'react';
const dataset = require('../../data/movies.json');

export default class MovieList extends Component{

    constructor( props ){
        super(props);
        this.myAlert  = this.myAlert.bind(this);
    }

    componentDidMount(){

    }

    render(){
        return(
            <div>
                <p>Dam didi dum</p>
                    <p>{this.myAlert}</p> 
            </div>
        );
    }
    
    myAlert(){
        return 
        <div> 
            dataset.forEach(element => {
                <li>element</li>
            })
        </div>;
    }
}
(MovieList);

