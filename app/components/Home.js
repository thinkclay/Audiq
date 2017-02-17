// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as tomeModel from '../models/tomeModel';
import Tree from './Tree';
import logo from '../assets/images/Logo.svg';

class Home extends Component {
  state = {
    search: ''
  }

  props: {
    tome: tomeModel.schema
  }

  handleSearch = (e) => {
    e.preventDefault();

    this.setState({ search: e.target.value });
  }

  render() {
    return (
      <div className="page">
        <aside className="toc">
          <a href="#about" className="logo" onClick={(e) => { e.preventDefault(); }}>
            <img src={logo} alt="audiq" />
          </a>

          <Tree />
        </aside>

        <section className="content">
          <div className="search">
            <i className="fa fa-search" />
            <input type="text" name="search" value={this.state.search} onChange={this.handleSearch} />
          </div>

          <div className="options" />

          <div className="inner">
            <ul className="results">
              <li>
                <img src="http://placehold.it/150x150" />
                <span className="title">AUD+DOG Fill 1.wav</span>
                <span className="meta">Audentity.Future.EDM\(SCENE\)-DISCOVER/_Fills_Loops/AUD+DOG</span>
                <span className="tags">
                  <span className="tag">Drums</span>
                  <span className="tag">Short</span>
                  <span className="tag">Ethnic</span>
                </span>
              </li>
              <li className="selected">
                <img src="http://placehold.it/150x150" />
                <span className="title">AUD+DOG Fill 1.wav</span>
                <span className="meta">Audentity.Future.EDM\(SCENE\)-DISCOVER/_Fills_Loops/AUD+DOG</span>
                <span className="tags">
                  <span className="tag">Drums</span>
                  <span className="tag">Short</span>
                  <span className="tag">Ethnic</span>
                </span>
              </li>
              <li>
                <img src="http://placehold.it/150x150" />
                <span className="title">AUD+DOG Fill 1.wav</span>
                <span className="meta">Audentity.Future.EDM\(SCENE\)-DISCOVER/_Fills_Loops/AUD+DOG</span>
                <span className="tags">
                  <span className="tag">Drums</span>
                  <span className="tag">Short</span>
                  <span className="tag">Ethnic</span>
                </span>
              </li>
              <li>
                <img src="http://placehold.it/150x150" />
                <span className="title">AUD+DOG Fill 1.wav</span>
                <span className="meta">Audentity.Future.EDM\(SCENE\)-DISCOVER/_Fills_Loops/AUD+DOG</span>
                <span className="tags">
                  <span className="tag">Drums</span>
                  <span className="tag">Short</span>
                  <span className="tag">Ethnic</span>
                </span>
              </li>
              <li>
                <img src="http://placehold.it/150x150" />
                <span className="title">AUD+DOG Fill 1.wav</span>
                <span className="meta">Audentity.Future.EDM\(SCENE\)-DISCOVER/_Fills_Loops/AUD+DOG</span>
                <span className="tags">
                  <span className="tag">Drums</span>
                  <span className="tag">Short</span>
                  <span className="tag">Ethnic</span>
                </span>
              </li>
            </ul>
          </div>
        </section>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  tome: state.tome
});

export default connect(mapStateToProps)(Home);
