export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const ADD_SELECT_TODO = 'ADD_SELECT_TODO';
export const REMOVE_SELECT_TODO = 'REMOVE_SELECT_TODO';

export const addTodo = (todoItem) => ({
    type: ADD_TODO,
    todoItem
});

export const removeTodo = (todoItems) => ({
    type: REMOVE_TODO,
    todoItems
})

export const addSelectTodo = (selectedItem) => { 
    return {
        type: ADD_SELECT_TODO,
        selectedItem
    }
}

export const removeSelectTodo = (selectedItem) => { 
    return {
        type: REMOVE_SELECT_TODO,
        selectedItem
    }
}