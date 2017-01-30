// @flow
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Home from '../components/Home';
import * as menuActions from '../actions/menuActions';

function mapStateToProps(state) {
  return {
    overlay: state.overlay
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(menuActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
