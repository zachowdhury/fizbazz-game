import React,{Component} from 'react';

export default class TitleList extends Component{
    render (){
    return (
        <div>
            <h1>Data Analysis Model</h1>
            <nav>
            <ul>
                <li><a href="./Home">Home</a></li>
                <li><a href="./Movie">Movies</a></li>
                <li><a href="#contact">Statistic</a></li>
                <li><a href="#about">About</a></li>
            </ul> 
        </nav>
        </div>
    );
    }
}