// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as overlayActions from '../actions/overlayActions';

class Overlay extends Component {
  props: {
    hide: () => void
  }

  render() {
    const { hide } = this.props;

    return (
      <div className="overlay">
        <div className="content">
          <header>
            <h1>Go Tutorials</h1>
            <button className="close icon" onClick={hide}>
              <i className="fa fa-close" />
            </button>
          </header>
          <section>
            <ul>
              <li>
                <h2><a href="#foo">Introduction to Go</a></h2>
                <p>
                  In this tutorial series you will learn the basics of Go pragramming.
                  No former programming experience or computer
                  science degree is required to learn this course.
                </p>
              </li>
              <li>
                <h2><a href="#foo">Introduction to Go</a></h2>
                <p>
                  In this tutorial series you will learn the basics of Go pragramming.
                  No former programming experience or computer
                  science degree is required to learn this course.
                </p>
              </li>
              <li>
                <h2><a href="#foo">Introduction to Go</a></h2>
                <p>
                  In this tutorial series you will learn the basics of Go pragramming.
                  No former programming experience or computer
                  science degree is required to learn this course.
                </p>
              </li>
              <li>
                <h2><a href="#foo">Introduction to Go</a></h2>
                <p>
                  In this tutorial series you will learn the basics of Go pragramming.
                  No former programming experience or computer
                  science degree is required to learn this course.
                </p>
              </li>
              <li>
                <h2><a href="#foo">Introduction to Go</a></h2>
                <p>
                  In this tutorial series you will learn the basics of Go pragramming.
                  No former programming experience or computer
                  science degree is required to learn this course.
                </p>
              </li>
              <li>
                <h2><a href="#foo">Introduction to Go</a></h2>
                <p>
                  In this tutorial series you will learn the basics of Go pragramming.
                  No former programming experience or computer
                  science degree is required to learn this course.
                </p>
              </li>
            </ul>
          </section>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators(overlayActions, dispatch);

export default connect(null, mapDispatchToProps)(Overlay);
