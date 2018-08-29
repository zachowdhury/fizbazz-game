import React,{Component } from 'react';
import MovieList from '../components/MovieList';
import TitleList from '../components/Header';
import Login from '../components/Login';
import {bindActionCreators} from 'redux';
import { connect }from 'react-redux';
import axios from 'axios';

export default class Home extends Component {
    constructor(props){
        super ( props);

        this.fetchFlueData = this.fetchFlueData.bind(this);
        this.greetText = this.greetText.bind( this);
        
        this.login= false;
        this.state = {users:[]};
    
    }
    componentDidMount(){

        console.log ('Home Page,state:',this.state);
    }
    
    render(){
        if ( this.state.hasErrored) return <p>Some error has occured</p>;    
        if (this.state.isLoading) return <p>....Loadiing</p>;
        
        return ( 
            <div>
                {this.greetText()}
                <p>{this.props.text}</p>
                <button onClick ={this.fetchFlueData}> Fetch Flue data </button>
                <Login/>
            </div>
        );
    }

    mapStateToProps(state){
        return{
            title: state.title
        };
    }
    fetchFlueData(e){
        e.preventDefault();
        axios.get ('http://localhost:3030/project-drivers-list/60')
        .then( response=> console.log (response));
    }
    greetText (){
        return(
            this.login 
                ? <p>you are loged in as USer.</p>
                : <p> you are logged in as Guest</p>
            );
        }
        
} 

connect((state)=>{
data:state.name
},
(dispatch)=>{

})(Home);