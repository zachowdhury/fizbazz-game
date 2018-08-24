import React from 'react';
import  {BrowserRouter as Router,Switch, Route, Link } from 'react-router-dom'; 
import { Home } from '../containers/Home';
import {Login} from '../components/Login';

const ReactRouter = ()=>{
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path = '/login' component={Login}/>
    </Switch>
}
export default ReactRouter;