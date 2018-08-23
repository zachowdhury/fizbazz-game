import React,{Component } from 'react';
const dataset = require('../../data/movies.json');

export default class MovieList extends Component{
 
    render(){
        const ourVal = "This is link to movie database";
const database = this.dataset;
        return(
            <div>
                <h2>Tabble of Movies </h2>
              <table >
                <th>Title</th><th>Year</th><th>Director</th>
                {this.printMovieList(dataset)}
              </table>
            </div>
        );
    }
 
    printMovieList ( data ){        
        
      const myX = data.map((e,i,arr) => {
            
      return (
      <tr>
              <td>{e.title} </td>
              <td>{e.year} </td>
              <td>{e.director} </td>
              </tr>
              );
            });
      return myX;
    }
}


