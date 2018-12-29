export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';

export const addTodo = (todoItem) => ({
    type: ADD_TODO,
    todoItem
});

export const removeTodo = (todoItem) => ({
    type: REMOVE_TODO,
    todoItem
})