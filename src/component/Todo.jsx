import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { remove } from '../store';

function Todo({ text, onClick, id }) {
  return (
    <li>
      <Link to={`/${id}`}>{text}</Link>
      <button onClick={onClick}>DEL</button>
    </li>
  );
}

function mapDispatcherToProps(dispatch, ownProps) {
  return {
    onClick: () => {
      return dispatch(remove(ownProps.id));
    },
  };
}

export default connect(null, mapDispatcherToProps)(Todo);
