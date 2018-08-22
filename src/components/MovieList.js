import React,{Component } from 'react';
const dataset = require('../../data/movies.json');

export default class MovieList extends Component{


    componentDidMount(){
    }
    
    render(){
        var _data =  dataset;
        return(
            <div>
                <p>MovieList</p>
                {this.printList(_data)}
            </div>
        );
    }
    printList ( data ){        
        
            data.forEach((e) => {
                // console.log (e.title);
              return   <p>Title : { e.title }</p>;
            })
        
    }
}


