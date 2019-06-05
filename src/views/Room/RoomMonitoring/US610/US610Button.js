import React, {Component} from 'react';
import { Button} from 'reactstrap';
import US610GetTemperature from "./US610GetTemperature";


class US610Button extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isHidden: true,
      item:{},
      roomID:this.props.roomID,
      day:this.props.day
    }
  }


  toggleHidden = ()=>this.setState((prevState)=>({isHidden: !prevState.isHidden}))

  render(){
    return(
      <div>
        <Button style={{backgroundColor: '#e4e5e6', marginBottom: '1rem'}} onClick={this.toggleHidden}>Get the Maximum temperature in the day {this.props.day} in the room {this.props.roomID}</Button>
        {!this.state.isHidden && <US610GetTemperature day={this.props.day} roomID={this.props.roomID}/>}
      </div>
    )
  }
}

export default US610Button;
