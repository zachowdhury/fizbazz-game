import React,{Component } from 'react';
import axios from 'axios';
import List from '../components/List';

export default class Home extends Component {
    constructor(props){
        super ( props);
        
        this.handleSubmit = this.handleSubmit.bind(this);
        this.fetchGameResult = this.fetchGameResult.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.greetText = this.greetText.bind( this);
       
        this.login= false;
        this.state = { 
            isEmpty:false,
            hasErrored :false,
            isLoading: false,
            gameData: '',
            gameResult: [],
            apiError:[]
        };
    
    }
    componentDidMount(){
        console.log ( '---->',this.state.gameData);

    }
    
    render(){
        if ( this.state.hasErrored) return <p>Some error has occured</p>;    
        if (this.state.isLoading) return <p>....Loadiing</p>;
        
        return ( 
            <div className="container">
                <div className ="row">
                    {this.greetText()}
                    <p>{this.props.text}</p>
                </div>
                {/* Game pane */}
            <div className="row">

                <div className="col-4">
                <p><b>Game pane</b>  </p> 
                    <form onSubmit={this.handleSubmit}>
                        <label>First enter number or 
                            numbers sepereted by comma inside 
                            input box
                            <input type = "text" 
                                value={this.state.gameData} 
                                onChange= {this.handleChange} />
                        </label>
                        <input type ="submit" 
                        value="Click to play game"></input>
                    </form>
                </div>
                
                <div className ="col-4">
                    <p> <b>Game results :</b></p>
                    {this.inputError()}
                    <List 
                        results={this.state.gameResult} />
                </div>
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
        // check number is entered
        if ( this.state.gameData == '' 
        || this.state.gameData == '0') {
            this.setState({isEmpty:true})
        }else{
            this.setState({isEmpty:false})
        }
        console.log( 'state val -- ',this.state.gameData);
         this.fetchGameResult( {gameData : this.state.gameData});


    }

    fetchGameResult( payload ){
        const URL = 'http://localhost:3030/game';
        
        axios.post (URL, payload)
        .then((res) => this.setState ( {gameResult: res.data }))
        .catch(function(e){// this sshould be arrow to resolve
                console.log  ('Err on fetching data',e);
                this.printAPIerror('Error api'+e).bind(this);
            });
    }

    printAPIerror(msg){
        return <p>msg</p>;
    }
    inputError(){
        if (this.state.isEmpty){
            return <p>no zero allowed or provide numbers </p>;
        }else{
            return null;
        }

    }
    greetText (){
        return(
            this.login 
                ? <p>you are loged in as USer.</p>
                : <p> you are logged in as Guest</p>
            );
        }           
} 
