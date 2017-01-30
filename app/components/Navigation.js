// @flow
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as menuActions from '../actions/menuActions';
import logo from '../assets/images/Logo.svg';

class Navigation extends Component {
  props: {
    changeChapter: () => void
  }

  render() {
    const { changeChapter } = this.props;

    return (
      <header className="title-bar">
        <a href="#about" onClick={(e) => { e.preventDefault(); changeChapter(); }}>
          <img src={logo} alt="audiq" />
        </a>
      </header>
    );
  }
}


function mapStateToProps(state) {
  return {
    overlay: state.overlay
  };
}

const mapDispatchToProps = (dispatch) => bindActionCreators(menuActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
