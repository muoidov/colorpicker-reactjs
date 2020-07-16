import React,{Component} from 'react';

class Result extends Component{
  setStyle(){
    return{
      borderStyle:'solid',
      borderColor:this.props.color,
      color:this.props.color,
      fontSize :this.props.fontSize
    };
  }
  render(){
    return(

     <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <br/>
            <p>Color: {this.props.color}-fontSize:{this.props.fontSize}</p>
          <div className="cont" style={this.setStyle()}>
            Content
        </div>
        </div>
          );

  }
}
export default Result;