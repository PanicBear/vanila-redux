import React from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router';

function Detail({ todos }) {
  const { id } = useParams();
  const { text } = todos.find((todo) => todo.id === parseInt(id));
  return (
    <>
      <h1>Detail</h1>
      <h5>Created at: {text}</h5>
    </>
  );
}

function mapStateToProps(state, ownProps) {
  return { todos: state };
}

export default connect(mapStateToProps)(Detail);
