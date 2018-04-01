import React, { Component } from 'react';
import {
  Container, Divider, Dropdown, Grid, Header, Icon, Image, List, Menu, Segment, Visibility,
} from 'semantic-ui-react'
import Tos from './Tos'
class HomePage extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
<Segment

   style={{ margin: '3em 0em 0em', padding: '5em 0em' }}
   vertical
 >
      <Container text textAlign='center'>
        <Segment>

          <p>This is an online community for students to learn, share their knowledge, and build their careers. Anyone aspiring to suceed in college can use this site to study problems other students have already encountered and were willing to share, you will be able to develop your skills, and enhance your GPA. </p>
          <Divider />
          <p>Our goal is to help students learn and understand, any topic by engaging and practicing with the top study material, and we want to enable students by making our products and services focused on real test questions, labs, and assignments.  </p>

        </Segment>
        <Tos />
  </Container>
</Segment>
    )
  }
}

export default HomePage;
