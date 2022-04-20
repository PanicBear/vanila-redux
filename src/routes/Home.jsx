import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Todo from '../component/Todo';
import { add } from '../store';

function Home() {
  const [text, setText] = useState('');
  const todos = useSelector((state) => state);
  const dispatch = useDispatch();

  function onChange(e) {
    setText(e.target.value);
  }

  function onSubmit(e) {
    e.preventDefault();
    dispatch(add(text));
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

export default Home;
