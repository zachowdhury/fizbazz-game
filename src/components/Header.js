import React,{Component} from 'react';
import {Link} from 'react-router-dom';


export default class Header extends Component{

    render (){
        return (

            <div>
                <h1>Data Analysis Model</h1>
                    <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/movie">Movies</Link></li>
                        <li><Link to="/analysis">Statistic</Link></li>
                        <li><Link to="/about">About</Link></li>
                    </ul> 
                    </nav>

            </div>
            

        );
    }
}