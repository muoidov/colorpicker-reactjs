import React,{Component} from 'react';


class Sizesetting extends Component{
  
  tang(va){
    return this.props.onc(va);
  }
  giam(va){
    return this.props.onc(va);
  }
  render(){
    return(
        <div className="panel panel-default">
          <div className="panel-body" >
            Size:{this.props.fontSize}
            <div className="row">
            <br/>
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <button type="button" className="btn btn-success" onClick={()=>this.tang(+1)}>Tang</button>
            <button type="button" className="btn btn-success" onClick={()=>this.giam(-1)}>Giam</button>
            <br/>
            <br/>
           </div>
        </div>
        </div>
        </div>
          );

  }
}
export default Sizesetting;