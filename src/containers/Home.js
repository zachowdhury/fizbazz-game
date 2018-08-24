import React,{Component } from 'react';
import MovieList from '../components/MovieList';
import TitleList from '../components/TitleList';
import Login from '../components/Login';
import Movie from '../containers/Movie'

export default class Home extends Component {
    constructor(props){
        super ( props);
        this.greetText = this.greetText.bind( this);
        this.login= true;
    
    }
 componentDidMount(){
    //  this.greetText();
 }
    
    render(){
        return ( 
            <div>
                <TitleList />
                {this.greetText()}
                <p>{this.props.text}</p>
                <Movie /> 
                <MovieList />
            </div>
        );
    }
    greetText (){
        if (  true ){
            return <p>you are loged in as USer.</p>;
        }else{
            return <p> you are logged in as Guest</p>;
        }
    }    
} 
