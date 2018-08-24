import React,{Component } from 'react';
import MovieList from '../components/MovieList';
import TitleList from '../components/Header';
import Login from '../components/Login';

export default class Home extends Component {
    constructor(props){
        super ( props);
        this.greetText = this.greetText.bind( this);
        this.login= false;
    
    }
 componentDidMount(){
    //  this.greetText();
 }
    
    render(){
        return ( 
            <div>
                {this.greetText()}
                <p>{this.props.text}</p>
                <Login/>
            </div>
        );
    }
    greetText (){
        return(
            this.login 
                ? <p>you are loged in as USer.</p>
                : <p> you are logged in as Guest</p>
            );
        }
        
} 
