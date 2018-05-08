import React, {Component} from "react";
import {Link} from "react-router-dom";
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility,
  Dropdown
} from "semantic-ui-react";
class Nav extends Component {
  render() {
    return (
      <Menu icon fixed="top" inverted>
        <Container>
          <Menu.Item as="a" header>
            <Icon name="student" />
          </Menu.Item>
          <Link to="/">
            {" "}
            <Menu.Item as="a">Home</Menu.Item>{" "}
          </Link>
          <Link to="/documents">
            {" "}
            <Menu.Item as="a">Documents</Menu.Item>{" "}
          </Link>
          <Link to="/uploadfiles">
            {" "}
            <Menu.Item as="a">Upload</Menu.Item>{" "}
          </Link>
        </Container>
      </Menu>
    );
  }
}

export default Nav;

/* <Menu fixed='top' inverted>
        <Container>
          <Menu.Item as='a' header>
            <Image
              size='mini'
              src='https://instagram.fsnc1-1.fna.fbcdn.net/vp/bc04086557d89f8e428ed9f388c20564/5B004DAA/t51.2885-15/e35/26872277_183222535761269_7518135742485233664_n.jpg'
              style={{ marginRight: '1.5em' }}
            />
            JUCO
          </Menu.Item>
          <Menu.Item as='a'>Home</Menu.Item>
          <Dropdown item simple text='Dropdown'>
            <Dropdown.Menu>

            </Dropdown.Menu>
          </Dropdown>
        </Container>
      </Menu>*/
