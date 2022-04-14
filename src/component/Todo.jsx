import React from 'react';
import { connect } from 'react-redux';
import { actionCreators } from '../store';

function Todo({ text, onClick }) {
  return (
    <li>
      {text}
      <button onClick={onClick}>DEL</button>
    </li>
  );
}

function mapDispatcherToProps(dispatch, ownProps) {
  return {
    onClick: () => {
      return dispatch(actionCreators.deleteTodo(ownProps.id));
    },
  };
}

export default connect(null, mapDispatcherToProps)(Todo);
