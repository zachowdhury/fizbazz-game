import React ,{Component, PropTypes } from 'react';
import { compose } from 'redux';
import {Table, TableBody} from 'react-bootstrap';

export default class List extends Component {


    render(){

        return (
           <div>
               <Table borderless="true"  small="true" hover="true">
                <tbody>
                    {this.clearRead(this.props.results)}
                </tbody>
               </Table>
           </div>
            );
    }

    clearRead ( data ){        
        // this could be anotehr component data passed to by properties 
        // user here redux as we are moving towards update, and patch
      const listTable = data.map((e,i,arr) => {
            
      return (<tr>
                 <td>{e} </td> 
              </tr>);
            
        });
      return listTable;
    }
        



}