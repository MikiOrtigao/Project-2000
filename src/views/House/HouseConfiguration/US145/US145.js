import React, {Component} from 'react';
import {Collapse, Button, CardBody, Card, Form, FormGroup, Label, Input} from 'reactstrap';
import US145Select from "./US145Select";
import US145Button from "./US145Button";


class US145 extends Component {


  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      item: [],
      showResults: false,
      isLoaded: false,
    }
  }

  toggle() {
    this.setState(state => ({collapse: !state.collapse}));
  }


  handleClick() {
    this.setState({showResults: true});
  }


  render() {
    var {id, item} = this.state;
    return (
      <div>
        <Button onClick={this.toggle} style={{backgroundColor: '#FFFFFF', marginBottom: '1rem'}}> I want to have a list
          of existing rooms attached to a house grid, so that I can attach/detach rooms from it. (US145)</Button>
        <Collapse isOpen={this.state.collapse}>
          <Card>
            <CardBody>
              <US145Select/>
            </CardBody>
          </Card>
        </Collapse>
      </div>
    );
  }

}

export default US145;
