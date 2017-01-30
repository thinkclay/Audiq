// @flow
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import shortid from 'shortid';
import * as tomeActions from '../actions/tomeActions';
import * as tomeModel from '../models/tomeModel';

class TableOfContents extends Component {
  componentDidMount() {
    this.props.topicSelect(0, 0);
  }

  props: {
    topicSelect: (index: number, chapter: number) => void,
    tome: tomeModel.schema
  }

  renderChapters = (chapters) => chapters.map((chapter, index) => (
    <dl key={shortid.generate()}>
      <dt>{chapter.title}</dt>
      <dd>
        {this.renderTopics(chapter.topics, index)}
      </dd>
    </dl>
  ));

  renderTopics = (topics, chapter) => topics.map((topic, index) => (
    <button key={shortid.generate()} className={topic.selected ? 'selected' : ''} onClick={() => this.props.topicSelect(index, chapter)}>
      <strong>{topic.title}</strong>
      <span>{topic.description}</span>
    </button>
  ));

  render() {
    return (
      <nav className="articles list">
        <div className="chapters">
          {this.props.tome ? this.renderChapters(this.props.tome.all) : null}
        </div>
      </nav>
    );
  }
}


function mapStateToProps(state) {
  return {
    tome: state.tome
  };
}

const mapDispatchToProps = (dispatch) => bindActionCreators(tomeActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TableOfContents);
