const { createStore } = require('redux');

const store = createStore(reducer);

const form = document.querySelector('form');
const input = document.querySelector('input');
const ul = document.querySelector('ul');

function reducer(state = [], action) {
  switch (action.type) {
    case 'ADD':
      const newStateObject = { text: action.text, id: Date.now() };
      return [newStateObject, ...state];
    case 'DELETE':
      const newFilteredState = state.filter(({ id }) => id !== action.id);
      return newFilteredState;
    default:
      return state;
  }
}

const addTodo = (text) => {
  return {
    type: 'ADD',
    text,
  };
};
const deleteTodo = (id) => {
  return {
    type: 'DELETE',
    id,
  };
};

const dispatchAddTodo = (todo) => store.dispatch(addTodo(todo));

const dispatchDeleteTodo = (e) => {
  const id = parseInt(e.target.parentElement.id);
  store.dispatch(deleteTodo(id));
};

const paintTodos = () => {
  const todos = store.getState();
  ul.innerHTML = '';
  todos.forEach(({ id, text }) => {
    const li = document.createElement('li');
    const btn = document.createElement('button');
    btn.addEventListener('click', dispatchDeleteTodo);
    btn.innerText = 'DEL';
    li.id = id;
    li.innerText = text;
    li.appendChild(btn);
    ul.appendChild(li);
  });
};

function onSubmit(e) {
  e.preventDefault();
  const todo = input.value;
  input.value = '';
  dispatchAddTodo(todo);
}

form.addEventListener('submit', onSubmit);
store.subscribe(paintTodos);
