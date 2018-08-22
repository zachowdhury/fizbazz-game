import React,{Component } from 'react';
const dataset = require('../../data/movies.json');

export default class MovieList extends Component{


    componentDidMount(){
    }
    
    render(){
        var {title , year} = JSON.stringify ( dataset);
        return(
            <div>
                <p>MovieList</p>
             <p>message is : { this.email }</p>
            </div>
        );
    }
    printList ( data ){
        
        return(
            data.forEach((e) => {
                return e;
            })
        );
    }
}

(MovieList);

