import React, {Component } from 'react';
import  {Switch, Route, Redirect, Link } from 'react-router-dom'; 
import  Home  from '../containers/Home';
import Login from '../components/Login';
import About from '../containers/About';




export default class Routing extends Component{
    
render(){
    return (
                <Switch>
                    <Route exact path='/' component={Home} />
                    {/* <Route path = '/movie' component={Movie} /> */}
                    {/* <Route path = '/analysis' component= {Analaysis} /> */}
                    <Route path = '/about' component= {About} />

                    <Redirect from='*' to ='/' />
                </Switch>
            
        );
}

}

