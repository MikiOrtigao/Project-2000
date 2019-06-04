import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchTotalRainfallDay} from './Actions';
import {Button, Card, CardBody, Collapse} from "reactstrap";
import DatePickerOneDay620 from "./DatePickerOneDay620.js";

class US620 extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      collapse: false,
      selectedDay: undefined
    };
  }

  componentDidMount() {
    this.props.onFetchTotalRainfall(this.state.selectedDay);
  }

  handleDayPicker = (selectedDay) => {

    console.log("handleDayPicker:"+ JSON.stringify(selectedDay))
    if (selectedDay !== undefined) {
      const initialDay = selectedDay.toISOString().substring(0, 10);
      this.setState({selectedDay: selectedDay});
      this.props.onFetchTotalRainfall(initialDay)

    }
  }

  toggle() {
    this.setState(state => ({collapse: !state.collapse}));
  }

  render() {
    const numberOfMonths = 1;
    const {loading} = this.props;
    if (loading === true) {
      return (<h1>Loading ....</h1>);
    }
    else {
      const{totalRainfall} = this.props;
      return (
        <div>
          <Button onClick={this.toggle} style={{backgroundColor: '#FFFFFF', marginBottom: '1rem'}}>Get the total rainfall
            in the house area for a given day. (US620)</Button>
          <Collapse isOpen={this.state.collapse}>
          <Card>
              <CardBody>
                <DatePickerOneDay620 getDays={this.handleDayPicker} numberOfMonths={numberOfMonths}/>
                <h5 key={totalRainfall}>The coldest day was {totalRainfall} </h5>
                </CardBody>
            </Card>
          </Collapse>
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.Reducers620.loading,
    totalRainfall: state.Reducers620.totalRainfall,
    error: state.Reducers620.error
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchTotalRainfall: (selectedDay) => {
      dispatch(fetchTotalRainfallDay({selectedDay}))
    }

  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(US620);
