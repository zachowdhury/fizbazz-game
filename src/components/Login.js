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
        this.handleClick = this.handleClick.bind(this);
        this.printGameResult  =this.printGameResult.bind(this);
        this.state = { value: "" };
      }
    
    //   getValidationState() {
    //     const length = this.state.value.length;
    //     if (length > 10) return 'success';
    //     else if (length > 5) return 'warning';
    //     else if (length > 0) return 'error';
    //     return null;
    //   }
    
    render(){
        return(
            <div>
                    <form>
                        <FormGroup
                        controlId="loginEmail"
                        //validationState={this.getValidationState()}
                        >
                        <ControlLabel><b>Enter number / numbers to play the game</b></ControlLabel>
                        {/* <FormControl
                            type="text"
                            value={this.state.value}
                            placeholder="Enter number to pla"
                            // onChange={this.handleChange}
                            /> */}
                        
                       {/* // <HelpBlock>Validation is based on string length.</HelpBlock> */}
                        </FormGroup>
                        
                        <input type="text" ref="gameParams" />

                        <input
                        type="button"
                        value="Play Game"
                        
                        onClick={this.handleClick}>
                        </input>
                    </form>
                </div>
        );
    }
    
    
      handleClick() {
            
        if (this.refs.gameParams !==null){
        
            var input = this.refs.gameParams;
            var inputVal = input.value;
            this.setState ( {value: inputVal});
            console.log ('game stat',this.state.value);
        }
        //this.setState({ value: e.target.value });
      }

      printGameResult(result) {
          return (
              <div>this is : {result}</div>
          );

      }
    
}
