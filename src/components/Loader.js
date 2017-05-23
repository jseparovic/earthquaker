import React, { Component } from 'react';
import { connect } from 'react-redux';

import store from '../store';

const mapStateToProps = (state, params) => {
  return {
    isFetching: store.getState().data.isFetching
  };
};

class Loader extends Component {
  render() {
    const { isFetching } = this.props;
    if (!isFetching) {
      return null;
    }
    return (
      <div>
        <div id="loader"
          className="modal fade in u-flex u-items-center"
          data-backdrop="static"
          data-keyboard="false"
        >
          <div className="loader">
          </div>
        </div>
        <div className="modal-backdrop fade in"></div>
      </div>
    );
  }
}

const ConnectLoader = connect(mapStateToProps)(Loader);
export default ConnectLoader;