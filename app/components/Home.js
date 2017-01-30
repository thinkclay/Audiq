// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as tomeModel from '../models/tomeModel';
import TableOfContents from './TableOfContents';

class Home extends Component {
  props: {
    tome: tomeModel.schema
  }

  render() {
    return (
      <div className="page">
        <aside className="toc">
          <header>
            <span className="label">SEARCH:</span>
            <input className="search" type="text" />
          </header>
          <TableOfContents />
        </aside>

        <section className={'content'}>
          <button className="browse button">Browse Similar Tracks</button>
          <h3>Now Playing</h3>
          <h1>The Journey of Sound</h1>
          <p>
            Being the savages bowsman, that is,
            the person who pulled the bow-oar in his boat
            (the second one from forward), it was my cheerful duty
            to attend upon him while taking that hard-scrabble
            scramble upon the dead whales back.
            You have seen Italian organ-boys holding a dancing-ape by a long cord.
            Just so, from the ships steep side, did I hold Queequeg
            down there in the sea, by what is technically called in the fishery
            a monkey-rope, attached to a strong strip of canvas belted round his waist.
           </p>
        </section>

        <aside className="meta">
          <h3>Tags</h3>
          <ul>
            <li><a>Piano</a></li>
            <li><a>Piano</a></li>
            <li><a>Piano</a></li>
          </ul>
        </aside>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  tome: state.tome
});

export default connect(mapStateToProps)(Home);
