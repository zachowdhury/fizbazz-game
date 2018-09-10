import React,{Component} from 'react';
import {Link} from 'react-router-dom';


export default class Header extends Component{

    render (){
        return (

            <div>
                <h1>Fiz buzz Generator</h1>
                    <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>

                        <li><Link to="/about">Game Rules</Link></li>
                    </ul> 
                    </nav>

            </div>
            

        );
    }
}