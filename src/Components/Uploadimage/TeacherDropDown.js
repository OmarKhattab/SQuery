import React, {Component} from "react";
import {Dropdown, Grid, Segment, Input, Icon} from "semantic-ui-react";
import CourseDropDown from "../Uploadimage/CourseDropDown";

export default class TeacherDropDown extends Component {
  handleChange = (e, {value}) => {
    this.props.setTeacher(value);
    this.props.increment();
    console.log(this.props);
  };

  render() {
    const options =
      this.props.school === "Diablo Valley College"
        ? [
            {key: 1, text: "Asa Scherer", value: "Asa Scherer"},
            {key: 2, text: "Andreas Mueller", value: "Andreas Mueller"}
          ]
        : this.props.school === "Las Positas College"
          ? [
              {key: 1, text: "Stuart McElderry", value: "Stuart McElderry"},
              {key: 2, text: "Tim Heisler", value: "Tim Heisler"}
            ]
          : this.props.school === "Ohlone College"
            ? [
                {key: 1, text: "Abramson Joel", value: "Abramson Joel"},
                {key: 2, text: "Ahntholz Brenda", value: "Ahntholz Brenda"},
                {key: 3, text: "Babu Priya", value: "Babu Priya"},
                {key: 4, text: "Bardell Darren", value: "Bardell Darren"},
                {key: 5, text: "Barnby Mark", value: "Barnby Mark"},
                {key: 6, text: "Bitzer Steve", value: "Bitzer Steve"},
                {key: 7, text: "Bloom Andy", value: "Bloom Andy"},
                {key: 8, text: "Bollman, Joshua", value: "Bollman, Joshua"},
                {key: 9, text: "Bradshaw, Bob", value: "Bradshaw, Bob"},
                {
                  key: 10,
                  text: "Brandt, Teresa (Tess)",
                  value: "Brandt, Teresa (Tess)"
                }
              ]
            : null;

    return (
      <div>
        <Grid columns={2}>
          <Grid.Column>
            <Input
              placeholder="Instructor Name"
              icon
              onChange={this.handleChange}
            >
              <input />
              <Icon name="user outline" />
            </Input>
          </Grid.Column>
          <Grid.Column>
            <Segment secondary>
              <pre>Current Instructor: {this.props.teacher}</pre>
            </Segment>
          </Grid.Column>
        </Grid>
        <CourseDropDown
          course={this.props.course}
          increment={this.props.increment}
          setCourse={this.props.setCourse}
        />
      </div>
    );
  }
}

/*
  {this.props.teacher ? <CourseDropDown course={this.props.course} increment={this.props.increment} setCourse={this.props.setCourse}/> : null}

*/
