import React, {Component} from 'react';
import {Collapse, Button, CardBody, Card, CardHeader, Form, FormGroup, Label, Input, CardFooter} from 'reactstrap';
import RoomCreator from "./US147Redux/RoomCreator";

class US147 extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {collapse: false};
  }

  toggle() {
    this.setState(state => ({collapse: !state.collapse}));
  }

  render() {
    return (
      <div>
        <Button onClick={this.toggle} style={{backgroundColor: '#FFFFFF', marginBottom: '1rem'}}>Attach a room to a
          house grid. (US147)</Button>
        <Collapse isOpen={this.state.collapse}>
          <Card>
            <CardHeader>
              <strong>US 147</strong>
            </CardHeader>
            <CardBody>
              <RoomCreator/>
            </CardBody>
            <CardFooter>
              <Button type="submit" size="sm" color="primary"><i className="fa fa-dot-circle-o"></i> Submit</Button>
              <Button type="reset" size="sm" color="danger"><i className="fa fa-ban"></i> Reset</Button>
            </CardFooter>
          </Card>
        </Collapse>
      </div>
    );
  }
}

export default US147;
