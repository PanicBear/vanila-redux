import React, { useState } from 'react';
import { connect } from 'react-redux';
import Todo from '../component/Todo';
import { actionCreators } from '../store';

function Home({ todos, addTodo, deleteTodo }) {
  const [text, setText] = useState('');

  function onChange(e) {
    setText(e.target.value);
  }

  function onSubmit(e) {
    e.preventDefault();
    addTodo(text);
    setText('');
  }

  return (
    <>
      <h1>Todo</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>Add</button>
      </form>
      <ul>
        {todos.map((todo) => {
          return <Todo {...todo} key={todo.id} />;
        })}
      </ul>
    </>
  );
}

function mapStateToProps(state, ownProps) {
  return { todos: state };
}

function mapDispatchToProps(dispatch) {
  return {
    addTodo: (text) => dispatch(actionCreators.addTodo(text)),
    deleteTodo: (id) => dispatch(actionCreators.deleteTodo(id)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
