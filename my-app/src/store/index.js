import { createStore } from 'redux';
import todosReducer from 'reducers/todos.js';

const store = createStore(todosReducer, state={
    list: [
        {
            id: 1,
            task: 'Create todo list',
            isDone: false,
          },
          {
            id: 2,
            task: 'Update todo list',
            isDone: false,
          },
          {
            id: 3,
            task: 'follow todo list',
            isDone: false,
          },
    ]
});

export default store;
