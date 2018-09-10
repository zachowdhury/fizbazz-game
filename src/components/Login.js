import React, {Component} from 'react';
import { 
    Button, 
    FormGroup, 
    FormControl, 
    ControlLabel 
    } 
from 'react-bootstrap';




export default class Login extends  Component{

    constructor(props, context) {
        super(props, context);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
          value: ''
        };
      }
    
    //   getValidationState() {
    //     const length = this.state.value.length;
    //     if (length > 10) return 'success';
    //     else if (length > 5) return 'warning';
    //     else if (length > 0) return 'error';
    //     return null;
    //   }
    
      handleChange(e) {
        this.setState({ value: e.target.value });
        console.log ('game stat',this.state.value);
      }
    
    render(){
        return(
            <div>
                    <form>
                        <FormGroup
                        controlId="loginEmail"
                        //validationState={this.getValidationState()}
                        >
                        <ControlLabel>Enter number / numbers to play the game</ControlLabel>
                        <FormControl
                            type="text"
                            value={this.state.value}
                            placeholder="Enter number to pla"
                            // onChange={this.handleChange}
                        />
                        
                       {/* // <HelpBlock>Validation is based on string length.</HelpBlock> */}
                        </FormGroup>
                        <button onClick={this.handleChange}>Play game</button>
                    </form>
                </div>
        );
    }
    // actionMovieList(){
        handleState(e){
            e.preventDefault();
            console.log('buttonClicked and state:', this.store);
        }

    // }

}
