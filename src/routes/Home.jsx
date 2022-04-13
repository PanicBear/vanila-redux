import React, { useState } from 'react';
import { connect } from 'react-redux';

function Home(props) {
  console.log(props);
  const [text, setText] = useState('');

  function onChange(e) {
    setText(e.target.value);
  }

  function onSubmit(e) {
    e.preventDefault();
    console.log(text);
  }

  return (
    <>
      <h1>Todo</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>Add</button>
      </form>
      <ul></ul>
    </>
  );
}

function mapStateToProps(state, ownProps) {
  console.log(state, ownProps);
  return { todos: state };
}

export default connect(mapStateToProps)(Home);
