import React,{Component } from 'react';
import Login from '../components/Login';
import { connect }from 'react-redux';
import axios from 'axios';

export default class Home extends Component {
    constructor(props){
        super ( props);
        
        this.handleSubmit = this.handleSubmit.bind(this);
        this.fetchGameResult = this.fetchGameResult.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.greetText = this.greetText.bind( this);
       
        this.login= false;
        this.state = { 
            hasErrored :false,
            isLoading: false,
            gameData: '',
            gameResult: []
        };
    
    }
    componentDidMount(){
        console.log ( '---->',this.state.gameData);

    }
    
    render(){
        if ( this.state.hasErrored) return <p>Some error has occured</p>;    
        if (this.state.isLoading) return <p>....Loadiing</p>;
        
        return ( 
            <div className="row">
            <div className ="col-sm-6">
                {this.greetText()}
                <p>{this.props.text}</p>
            </div>

            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Geme pane
                        <input type = "text" 
                            value={this.state.gameData} 
                            onChange= {this.handleChange} />
                    </label>
                    <input type ="submit" 
                    value="Click to play game"></input>
                </form>
            </div>
            
            <div className ="col-sm-6">
                <p> Game results</p>
                {/* {this.state.gameResult} */}
            </div>
            </div>
        );
    }

    // mapStateToProps(state){
    //     return{
        
    //         title: state.title
    //     };
    // }
    handleChange(e){
        this.setState ({ gameData: e.target.value });
        console.log (this.state.gameData);
    }
    
    handleSubmit (e ){
        e.preventDefault();
        console.log( 'state val -- ',this.state.gameData);
         this.fetchGameResult( {gameData : this.state.gameData});


    }

    fetchGameResult( payload ){
        const URL = 'http://localhost:3030/game';
        
        axios.post (URL, payload)
        .then( function (response) {
            console.log ('====>',response.data);
            this.setState (  {gameResult: response.data });

        }).then( function(response){
                console.log( 'game server response-->',response.data);
            }).catch(function(e){
                console.log  ('Err on fetching data',e);
            });
    }














    greetText (){
        return(
            this.login 
                ? <p>you are loged in as USer.</p>
                : <p> you are logged in as Guest</p>
            );
        }           
} 

function mapStateToProps(state) {
return {
    users:state.users.data
};
}

function mapActionToDispatch(dispatch){
    return{

    };
}
connect(mapStateToProps, 
    null)(Home);