import React, {Component} from "react";
import {
  Input,
  Button,
  Image,
  Grid,
  Header,
  Divider,
  Segment,
  Container,
  Item,
  Label,
  Icon,
  Loader
} from "semantic-ui-react";
import "../../App.css";
import {Link} from "react-router-dom";
class DocumentsHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Loading: false
    };
  }

  render() {
    const {setSearchTerm, searchTerm, data} = this.props;
    const filteredDocs = data.filter(
      item =>
        item.course.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.teacher.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.school.toLowerCase().includes(searchTerm.toLowerCase())
    );
    console.log(filteredDocs);
    console.log(this.props);
    const dat = !searchTerm.length ? data : filteredDocs;
    if (!this.props.data.length)
      return (
        <Container style={{marginTop: "20em"}}>
          {" "}
          <Loader active inline="centered" /> >{" "}
        </Container>
      );
    console.log(dat.map(item => item.documents[0]));
    return (
      <Container style={{marginTop: "7em"}}>
        <Input
          onChange={e => setSearchTerm(e.target.value)}
          fluid
          icon="search"
          placeholder="Search..."
        />
        <Item.Group divided>
          {dat.map(item => {
            return (
              <Item>
                <Item.Image size="small" src={item.documents[0]} />
                <Item.Content>
                  <Item.Header as="a">{item.course} </Item.Header>

                  <Item.Meta>
                    <Icon name="university" />
                    <span>{item.school} </span>
                    <Icon name="user outline" />
                    <span>{item.teacher} </span>
                    <Icon name="bar graph" />
                    <span>{item.score}</span>
                  </Item.Meta>
                  <Item.Description>{item.description}</Item.Description>
                  <Item.Extra>
                    <Link to={`/documents/${item.id}`}>
                      <Button
                        onClick={() => this.props.openedDocument(item.id)}
                        compact
                        animated
                      >
                        <Button.Content visible>View Documents</Button.Content>
                        <Button.Content hidden>
                          <Icon name="right arrow" />
                        </Button.Content>
                      </Button>
                    </Link>
                  </Item.Extra>
                </Item.Content>
              </Item>
            );
          })}
        </Item.Group>
      </Container>
    );
  }
}

export default DocumentsHome;
/*
<Grid>
  <Grid.Column width={4}>
  <Header textAlign='center' as='h1'>
    {item.professor}
    <br/>
    <Header.Content as='h2'>
     {item.course}
    </Header.Content>
    <Header.Subheader>
    {item.description}
   </Header.Subheader>
  </Header>
    <Image src={item.documents[0]} />
  </Grid.Column>
</Grid>
*/

/*
<Container>
  <Item.Group>
    {data.map(item =>
      <div>
         <Item>
          <Item.Image size='small' src={item.documents[0]} />
           <Item.Content>
             <Item.Header as='a'>{item.professor}</Item.Header>
             <Item.Description>{item.description}</Item.Description>
             <Item.Extra>
               <Label>{item.course}</Label>
             </Item.Extra>
           </Item.Content>
          </Item>
      </div>
    )}
   </Item.Group>
 </Container>
*/
