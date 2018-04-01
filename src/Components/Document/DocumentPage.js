import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import {
  Container, Divider, Dropdown, Grid, Header, Icon, Image, List, Menu, Segment, Visibility, Modal, Button
} from 'semantic-ui-react'
class DocumentPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open:false,
      openedImageSrc:''
    }
  }

  componentWillMount() {
   this.props.open(this.props.match.params.id)
}

  show = (src) => {
    this.setState({ openedImageSrc: src, open:true })
  }

  close = () => this.setState({ open: false })

  render() {
    const { data , openedDocument } = this.props;
    const { open, openedImageSrc } = this.state;
    const document = data.filter(item => item.id === openedDocument);
    const images = document.map((item) => item.documents.map(img => <Image onClick={() => this.show(img)} spaced label={" "}  wrapped centered size='medium' src={img} />));
    const page = document.map(item => <div key={item.id}>  <Container  textAlign='center'  style={{ marginTop: '7em' }}>
        <Header as='h1'>
          {item.teacher}
          <Header.Subheader>
            {item.school}
          </Header.Subheader>
          <Header.Subheader>
            {item.course}
          </Header.Subheader>
          <Header.Subheader>
            {item.description}
          </Header.Subheader>
          <Header.Subheader>
            {item.score}
          </Header.Subheader>
        </Header>
        {images}
        <Divider />
        <Grid columns={2} >
             <Grid.Row>

             <Grid.Column>
               <Header  as='h4' content="Why Donate?" />
               <p>Please donate to keep this site up and running. We have expenses for keeping
               lots of data on our website and this is all for one cause which is to provide
               everyone acess to test material for no charge. Without generous donations
               this site will not be able to keep running we rely on our users to keep us funded.
               </p>
             </Grid.Column>

             <Grid.Column>
               <Header  as='h4' content='Donate' />
               <List link>
                 <List.Item as='a'>Bitcoin : 34mTEPB8hnomRfv192hpf5Jr6tstDsqgB8</List.Item>
                 <List.Item as='a'>Ethereum : 0xDBcAC624d9450C2BfAdA5714fDbA4a0f55AD98cb</List.Item>
                 <List.Item as='a'>Litecoin : MKp2DB2jtMA8sQqYeW1mTN9PcERe79ErCx</List.Item>
                 <List.Item as='a'>XRP: rE8Ac6T6n53cTxneQzyrAiFE2fDLZ17qPL</List.Item>
               </List>
             </Grid.Column>


             </Grid.Row>
           </Grid>
           </Container>
      </div>
    )
    const mod =  <Container  textAlign='center'  style={{ marginTop: '7em' }}>
    <Modal size='medium'  open={open} onClose={this.close}>
          <Modal.Header>
            Enlarged Image
          </Modal.Header>
          <Modal.Content image>
            <Image size='big' centered src={openedImageSrc} />
          </Modal.Content>
          <Modal.Actions>
            <Button onClick={this.close} icon='window close' labelPosition='right' content='Close' />
          </Modal.Actions>
        </Modal>
              </Container>
    return (
     <div>
        {page}
        {mod}
      </div>
    )
  }
}

export default withRouter(DocumentPage);
