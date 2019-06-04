import React, {Component} from 'react';


class US605GetCurrentTemperature extends Component {

  constructor(props) {
    super(props);
    this.state = {
      item: [],
      roomID: ''
    }
  }

  componentDidMount() {
    fetch('http://localhost:9898/roomMonitoring/currentRoomTemperature/' + this.props.roomID)
      .then(res => res.json())
      .then((json) => {
        this.setState({
          item: json,
        })
      })
      .catch(console.log)
  }

  render() {
    var {item} = this.state;
    return (
      <div>
        {item.toString()}
      </div>
    );
  }

}

export default US605GetCurrentTemperature;
