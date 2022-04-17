import { createAction, createReducer } from '@reduxjs/toolkit';
import { createStore } from 'redux';

const addTodo = createAction('ADD');
const deleteTodo = createAction('DELETE');

const initialState = [];

const reducer = createReducer(initialState, (action) => {
  action
    .addCase(addTodo, (state, action) => {
      state.push({ text: action.payload, id: Date.now() });
    })
    .addCase(deleteTodo, (state, action) => {
      return state.filter((todo) => todo.id !== action.payload);
    });
});

const store = createStore(reducer);

export const actionCreators = {
  addTodo,
  deleteTodo,
};

export default store;
