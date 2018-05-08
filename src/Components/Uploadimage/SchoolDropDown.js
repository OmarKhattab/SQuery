import React, {Component} from "react";
import {Dropdown, Grid, Segment, Input, Icon, Divider} from "semantic-ui-react";
import TeacherDropDown from "../Uploadimage/TeacherDropDown";
import {Schools} from "../../Schools";

export default class SchoolDropDown extends Component {
  handleChange = (e, {value}) => {
    this.props.setSchool(value);
    this.props.increment();
  };

  render() {
    const temp = Schools.filter(item =>
      item.value.toLowerCase().includes(this.props.school.toLowerCase())
    );
    console.log(temp);
    return (
      <div>
        <Grid columns={2}>
          <Grid.Column>
            <Input
              icon="university"
              iconPosition="right"
              value={this.props.school}
              onChange={this.handleChange}
              list="schools"
              placeholder="School Name"
            />
            <datalist id="schools">
              {temp.length < 50 &&
                temp.map(item => <option value={item.value} />)}
            </datalist>
          </Grid.Column>
          <Grid.Column>
            <Segment secondary>
              <pre>Current school: {this.props.school}</pre>
            </Segment>
          </Grid.Column>
        </Grid>
        <TeacherDropDown
          course={this.props.course}
          increment={this.props.increment}
          teacher={this.props.teacher}
          setTeacher={this.props.setTeacher}
          setCourse={this.props.setCourse}
          school={this.props.school}
        />
      </div>
    );
  }
}
/*
  {this.props.school ? <TeacherDropDown course={this.props.course} increment={this.props.increment} teacher={this.props.teacher} setTeacher={this.props.setTeacher} setCourse={this.props.setCourse} school={this.props.school}/> : null}
*/
