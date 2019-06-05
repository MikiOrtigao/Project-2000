import React from 'react';
import 'react-day-picker/lib/style.css';
import {Button} from "reactstrap";
import {fetchRoomGrid} from "./Actions";
import {connect} from 'react-redux';

class RoomCreator extends React.Component {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      name: '...',
      grid:'...'
    };

    this.handleInputChange = attribute => event => {
      this.setState({
        [attribute]: event.target.value
      });
    };
  }

  handleSubmit(){
    this.props.onFetchRoomGrid(this.state);
  }


  render() {
    const {name, grid} = this.state;
    return (
      <>
        <input value={this.state.name} type="text" name="name" onChange={this.handleInputChange('name')}/>
        <input value={this.state.grid} type="text" name="grid" onChange={this.handleInputChange('grid')}/>
        <p>The room has the following details: {name + grid}</p>
        <Button onClick={this.handleSubmit}>Save new room configuration</Button>
      </>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchRoomGrid: ({name, grid}) => {
      dispatch(fetchRoomGrid({name, grid}))
    }
  }
};

export default connect(null,mapDispatchToProps)(RoomCreator);

