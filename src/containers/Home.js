import React,{Component } from 'react';
import MovieList from '../components/MovieList';
import TitleList from '../components/TitleList';
import Login from '../components/Login';


export default class Home extends Component {
    constructor(props){
        super ( props);
        this.greetText = this.greetText.bind( this);
    
    }
 componentDidMount(){
     this.greetText();
 }
    
    render(){
        return ( 
            <div>
                <TitleList />
                {this.greetText}
                <p>this is Home, {this.props.text}</p>
                {/* <Login /> */}
                <MovieList />
            </div>
        );
    }
    greetText (){
          console.log ('yahoo okkkk');
          return <p>all is done yahoo.</p>;
    }    
} 
