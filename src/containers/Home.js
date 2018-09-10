import React,{Component } from 'react';
import Login from '../components/Login';
import { connect }from 'react-redux';
import axios from 'axios';

export default class Home extends Component {
    constructor(props){
        super ( props);

        this.fetchFlueData = this.fetchFlueData.bind(this);
        this.greetText = this.greetText.bind( this);
        this.clearRead =  this.clearRead.bind(this);
        this.login= false;
        this.state = {users:[]};
    
    }
    componentDidMount(){

        console.log ('HomePage props on didMoount',this.props);
    }
    
    render(){
        if ( this.state.hasErrored) return <p>Some error has occured</p>;    
        if (this.state.isLoading) return <p>....Loadiing</p>;
        
        return ( 
            <div>
                {this.greetText()}
                <p>{this.props.text}</p>
                <Login />
            </div>
        );
    }

    // mapStateToProps(state){
    //     return{
        
    //         title: state.title
    //     };
    // }
    
    fetchFlueData(e){
        // const URL = 'http://localhost:3030/project-drivers-list/60';
        const URL= 'https://jsonplaceholder.typicode.com/users';
        e.preventDefault();
        axios.get (URL)
        .then( response=> this.setState ({    
                users : {
                    data : response.data,
                    status: response.status,
                    text: response.statusText
                    } 
            }));
    }
    clearRead(obj){
        obj.map ((e,i)=>{

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