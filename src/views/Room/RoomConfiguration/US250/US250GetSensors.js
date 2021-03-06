import React, { Component } from 'react';


class US250GetSensors extends Component {

  constructor(props) {
    super(props);
    this.state = {
      item: [],
      sensors:false,
    }
  }

  componentDidMount() {
    fetch('http://localhost:9898/roomConfiguration/rooms/'+this.props.roomID+'/sensors')
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
          <ul>
            {item.map(item => (
              <li key={item.name}>
                ID: {item.id} | Name: {item.name} | Type: {item.type}
              </li>
            ))}
          </ul>

      </div>
    );
  }

}

export default US250GetSensors;
