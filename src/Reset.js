import React,{Component} from 'react';

class Reset extends Component{
	rs = () =>{
this.props.ons();
	}
  render(){
    return(
      <button type="button" className="btn btn-primary" onClick={this.rs}>Reset</button>
          );
  }
}
export default Reset;
