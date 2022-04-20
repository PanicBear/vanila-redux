import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';

function Detail() {
  const todos = useSelector((state) => state);
  const { id } = useParams();
  const { text } = todos.find((todo) => todo.id === parseInt(id));
  return (
    <>
      <h1>Detail</h1>
      <h5>Created at: {text}</h5>
    </>
  );
}

export default Detail;
