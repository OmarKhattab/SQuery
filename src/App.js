import React, {Component} from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import {
  Dropdown,
  Menu,
  Container,
  Message,
  Accordion,
  Label
} from "semantic-ui-react";
import Uploadimage from "./Components/Uploadimage/Uploadimage";
import DocumentsHome from "./Components/Document/DocumentsHome";
import DocumentPage from "./Components/Document/DocumentPage";
import HomePage from "./Components/Home/HomePage";
import Nav from "./Components/Nav/Nav";
import {base} from "./Rebase/Base";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      openedDocument: "",
      searchTerm: ""
    };
  }

  componentDidMount() {
    console.log(base);
    base.syncState(`data`, {
      context: this,
      state: "data",
      asArray: true
    });
  }

  pushData = data => {
    let temp;
    temp = this.state.data.slice();
    temp.unshift(data);
    this.setState({data: temp});
    console.log(this.state.data, "DATA PUSHED");
  };

  openedDocument = id => {
    this.setState({openedDocument: id});
  };

  setSearchTerm = term => {
    console.log(term);
    this.setState({searchTerm: term});
  };

  render() {
    const { data } = this.state;
    console.log(data);
    return (
      <Router>
        <div>
          <Nav />
          <Route
            exact
            path={"/documents"}
            render={() => (
              <DocumentsHome
                searchTerm={this.state.searchTerm}
                setSearchTerm={this.setSearchTerm}
                openedDocument={this.openedDocument}
                data={this.state.data}
              />
            )}
          />
          <Route
            exact
            path={"/uploadfiles"}
            render={() => (
              <Uploadimage pushData={this.pushData} data={this.state.data} />
            )}
          />
          <Route
            exact
            path={"/documents/:id"}
            render={() => (
              <DocumentPage
                open={this.openedDocument}
                openedDocument={this.state.openedDocument}
                data={this.state.data}
              />
            )}
          />
          <Route exact path={"/"} render={() => <HomePage />} />
        </div>
      </Router>
    );
  }
}

export default App;
