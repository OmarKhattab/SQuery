import React, {Component} from "react";
import {
  Popup,
  Modal,
  Icon,
  Segment,
  Divider,
  Progress,
  Form,
  TextArea,
  Dropdown,
  Menu,
  Container,
  Message,
  Accordion,
  Label,
  Button,
  Input,
  Image,
  Header
} from "semantic-ui-react";
import SchoolDropDown from "../Uploadimage/SchoolDropDown";
import {withRouter} from "react-router-dom";
import Tos from "../../Components/Home/Tos";
class Uploadimage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      documents: [],
      teacher: "",
      school: "",
      course: "",
      description: "",
      score: "",
      percent: 0,
      modal: false,
      currentDocument: ""
    };
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleSubmit(e) {
    e.preventDefault();
    this.props.pushData(this.createDoc());
    this.increment();
    this.setState({modal: true});
  }

  viewSubmission = () => {
    this.props.history.push(`/documents/${this.state.currentDocument.id}`);
  };

  viewHome = () => {
    this.props.history.push(`/documents`);
  };

  createDoc = () => {
    const uuidv4 = require("uuid/v4");
    const document = {
      teacher: this.state.teacher,
      school: this.state.school,
      course: this.state.course,
      documents: this.state.documents,
      description: this.state.description,
      score: this.state.score,
      id: uuidv4()
    };
    this.setState({currentDocument: document});
    return document;
  };

  setTeacher = teacher => {
    this.setState({teacher: teacher});
    console.log(this.state.teacher, "set teacher");
  };

  setSchool = school => {
    this.setState({school: school});
    console.log(this.state.school, "set school");
  };

  setCourse = course => {
    this.setState({course: course});
    console.log(this.state.course, "set course");
  };

  setDescription = e => {
    this.setState({description: e.target.value});
  };

  setScore = e => {
    this.setState({score: e.target.value});
  };

  increment = () =>
    this.setState({
      percent: this.state.percent > 100 ? 0 : this.state.percent + 25
    });

  close = () => this.setState({modal: false});

  setDocuments = e => {
    e.preventDefault();
    this.setState({documents: []});
    const imageFiles = e.target.files; // document.getElementById("image"); // You may want to avoid querying the dom yourself, try and rely on react as much as possible
    const filesLength = imageFiles.length; // imageFiles.files.length;
    for (var i = 0; i < filesLength; i++) {
      let reader = new FileReader();
      let file = imageFiles[i];
      reader.onloadend = () => {
        console.log(reader.result);
        this.setState({documents: this.state.documents.concat(reader.result)});
      };
      reader.readAsDataURL(file);
    }
  };

  render() {
    let {documents} = this.state;
    let reader = new FileReader();
    const {course, modal} = this.state;
    const sizeEnum = Object.freeze({
      big: "large",
      medium: "medium",
      small: "small"
    });
    console.log(this.state.currentDocument.id, "this.state.currentdocumen");

    return (
      <div>
        <Container textAlign="center" style={{marginTop: "7em"}}>
          <Divider />
          <Segment>
            <SchoolDropDown
              teacher={this.state.teacher}
              school={this.state.school}
              course={this.state.course}
              setTeacher={this.setTeacher}
              setSchool={this.setSchool}
              setCourse={this.setCourse}
              setDescription={this.setDescription}
              increment={this.increment}
            />
          </Segment>
          <Divider />
          <Segment>
            <UploadForm
              setScore={this.setScore}
              documents={documents}
              setDescription={this.setDescription}
              setDocuments={this.setDocuments}
            />
          </Segment>
          <Divider />
          <SubmissionModal
            school={this.state.school}
            viewHome={this.viewHome}
            viewSubmission={this.viewSubmission}
            close={this.close}
            modal={this.state.modal}
            documents={document}
            _handleSubmit={this._handleSubmit}
            teacher={this.state.teacher}
            school={this.state.school}
            course={this.state.course}
            description={this.state.description}
            score={this.state.score}
          />
        {/*   <Button icon="upload" onClick={this._handleSubmit}>
            Submit
          </Button> */ }
          <Tos />
        </Container>
      </div>
    );
  }
}

export default withRouter(Uploadimage);

const UploadForm = props => (
  <div>
    <Header as="h3">
      Upload Files
      <Header.Subheader>
        Files should contain no personal information, and must be readable.
      </Header.Subheader>
    </Header>
    <Input
      id="image"
      icon="upload"
      type="file"
      multiple
      onChange={props.setDocuments}
    />
    <Divider hidden />
    <Popup
      trigger={
        <Input
          autoHeight
          label={{icon: "info circle"}}
          labelPosition="right corner"
          placeholder="Chapter 2 Test Solutions..."
          onChange={props.setDescription}
        />
      }
      content="Add a brief description about the files."
      basic
    />

    <Divider hidden />
    <Popup
      trigger={
        <Input
          onChange={props.setScore}
          label={{icon: "bar graph"}}
          labelPosition="right corner"
          placeholder="44/50"
        />
      }
      content="Enter the score you recieved."
      basic
    />

    <FilePreview documents={props.documents} />
  </div>
);

const FilePreview = props => {
  return (
    <div>
      {props.documents.length > 0 && (
        <Header as="h2" textAlign="center">
          <Icon name="image" />
          File Preivew
        </Header>
      )}

      <Segment.Group horizontal>
        {props.documents.map((item, index) => (
          <Segment>
            {" "}
            <Image size="small" src={item} />{" "}
          </Segment>
        ))}
      </Segment.Group>
    </div>
  );
};

const SubmissionSection = props => {
  const disabled =
    props.documents.length < 1 ||
    !props.course ||
    !props.teacher ||
    !props.score ||
    !props.description ||
    !props.school;
  return (
    <Segment>
      <p>
        {" "}
        Please make sure you have included the correct files, school, teacher,
        course, description, and score.{" "}
      </p>
      <Button icon="upload" disabled={disabled} onClick={props._handleSubmit}>
        Submit
      </Button>
    </Segment>
  );
};

const SubmissionModal = props => (
  <Modal
    centered
    open={props.modal}
    trigger={
      <SubmissionSection
        school={props.school}
        course={props.course}
        teacher={props.teacher}
        score={props.score}
        description={props.description}
        _handleSubmit={props._handleSubmit}
        documents={props.documents}
      />
    }
    basic
    size="small"
  >
    <Header icon="trophy" content="Thank You For Your Submission!" />
    <Modal.Content>
      <p>
        {" "}
        We appreciate your contribution, please consider donating if this
        website has helped you.{" "}
      </p>
    </Modal.Content>
    <Modal.Actions>
      <Button onClick={props.viewHome} basic color="black" inverted>
        <Icon name="file" /> View All Documents
      </Button>
      <Button onClick={props.viewSubmission} color="black" inverted>
        <Icon name="checkmark" /> View Submission
      </Button>
    </Modal.Actions>
  </Modal>
);
