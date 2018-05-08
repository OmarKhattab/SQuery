import React, {Component} from "react";
import {Dropdown, Grid, Segment, Input, Icon} from "semantic-ui-react";

export default class CourseDropDown extends Component {
  state = {};

  handleChange = (e, data) => {
    console.log(data);
    this.props.setCourse(data.value);
    this.props.increment();
  };

  render() {
    const options = [
      {key: 1, text: "Calculus I", value: "Calculus I"},
      {key: 2, text: "Calculus II", value: "Calculus II"},
      {key: 3, text: "Calculus III", value: "Calculus III"}
    ];

    return (
      <Grid columns={2}>
        <Grid.Column>
          <Input placeholder="Course Name" icon onChange={this.handleChange}>
            <input />
            <Icon name="tag" />
          </Input>
        </Grid.Column>
        <Grid.Column>
          <Segment secondary>
            <pre>Current course: {this.props.course}</pre>
          </Segment>
        </Grid.Column>
      </Grid>
    );
  }
}

/*
const e ={ target:{value:....}}`
 and
 `this.state={value:....}

*/

/*
<Dropdown
  onChange={this.handleChange}
  options={options}
  placeholder='Choose a course'
  selection
  value={this.props.course}
/>
*/
