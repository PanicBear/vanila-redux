import { createStore } from 'redux';

const add = document.getElementById('add');
const minus = document.getElementById('minus');
const number = document.querySelector('span');

const countModifier = (count = 0, action) => {
  switch (action.type) {
    case 'ADD':
      count++;
      break;
    case 'MINUS':
      count--;
      break;
    default:
      count = 0;
      break;
  }
  return count;
};

const countStore = createStore(countModifier);

countStore.dispatch({ type: 'ADD' });
countStore.dispatch({ type: 'ADD' });
countStore.dispatch({ type: 'ADD' });
countStore.dispatch({ type: 'ADD' });
countStore.dispatch({ type: 'ADD' });
countStore.dispatch({ type: 'ADD' });

console.log(countStore.getState());
