import React,{Component } from 'react';
const dataset = require('../../data/movies.json');

export default class MovieList extends Component{


    componentDidMount(){
    }
    
    render(){
        var movieData = JSON.stringify ( dataset);
        return(
            <div>
                <p>MovieList</p>
             <p>message is : { this.printList(dataset) }</p>
            </div>
        );
    }
    printList ( data ){
        return(
            data.forEach(e => {
                console.log (e);
            })
        );
    }
}

(MovieList);

