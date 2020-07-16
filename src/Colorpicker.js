import React,{Component} from 'react';


class Colorpicker extends Component{
  render(){
    return(

      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <div className="panel panel-primary">
          <div className="panel-heading">
            <h3 className="panel-title">Color Picker</h3>
          </div>
          
          <div className="panel-body">
            <button type="button" className="btn btn-danger"></button>
            <button type="button" className="btn btn-primary"></button>
            <button type="button" className="btn btn-warning"></button>
            <button type="button" className="btn btn-success"></button>
            <button type="button" className="btn btn-info"></button>
            <button type="button" className="btn btn-link"></button>
        </div>
        </div>
        </div>
          );

  }
}
export default Colorpicker;