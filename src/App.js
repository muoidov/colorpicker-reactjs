import React,{Component} from 'react';
import Reset  from './Reset.js';
import Result from './Result.js';
import Cp  from './Cp.js';
import Sizesetting  from './Sizesetting.js';
class App extends Component{
  constructor(props){
    super(props);
    this.state={color:'red',fontSize:15}
    this.onset=this.onset.bind(this); 
    this.onc=this.onc.bind(this); 
    this.ons=this.ons.bind(this); 
  }
  onset(para){
    this.setState({color :para});
  }
  onc(va){
this.setState({fontSize:this.state.fontSize+va});
  }
  ons(){
this.setState({color:'red',fontSize:15});
  }

  render(){
    return(
      <div className="container" style={{marginTop:'50px'}}>
      <div className="row">
        <Cp color={this.state.color} onRe={this.onset}/>
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
              <Sizesetting  fontSize={this.state.fontSize} onc={this.onc}/>
                 <Reset ons={this.ons}/>
            </div>
            <Result color={this.state.color} fontSize={this.state.fontSize} />
          </div>

        </div>
          );
  }
}
export default App;
