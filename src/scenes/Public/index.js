import React, { Component } from "react";
import TopMenu from "components/TopMenu";
import { database } from "config/firebase";
import marked from "marked";
import LoadingScreen from "components/LoadingScreen";
import { Link } from "react-router-dom";
import * as routes from "constants/routes";

import "./styles.css";

export class Public extends Component {
  state = { note: null, isLoading: true };
  componentDidMount() {
    const { match } = this.props;
    database
      .ref(`/public/${match.params.noteId}`)
      .once("value")
      .then(snapshot => {
        this.setState({
          note: snapshot.val(),
          isLoading: false
        }, () => {
          document.title = `MDNotes - ${this.state.note.title}`;
        });
      });
  }
  getHTMLNoteContent = note => {
    return { __html: marked(note.content) };
  };
  render() {
    const { note, isLoading } = this.state;
    if (isLoading) return <LoadingScreen />;
    return (
      <div className="public-wrapper">
        <TopMenu />
        <div className="ui grid main">
          {note ? (
            <div
              className="rendered-content"
              dangerouslySetInnerHTML={this.getHTMLNoteContent(note)}
            />
          ) : (
            <div className="rendered-content no-content">
              <h1>This note doesn't exist</h1>
              <Link to={routes.HOME}>
                You can create your own notes in here
              </Link>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Public;
