import axios from '../services/todoServices';

export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const ADD_SELECT_TODO = 'ADD_SELECT_TODO';
export const REMOVE_SELECT_TODO = 'REMOVE_SELECT_TODO';
export const SAVE_TODO_PENDING = 'SAVE_TODO_PENDING';
export const SAVE_TODO_SUCCESS = 'SAVE_TODO_SUCCESS';
export const SAVE_TODO_ERROR = 'SAVE_TODO_ERROR';
export const GET_TODO_PENDING = 'GET_TODO_PENDING';
export const GET_TODO_SUCCESS = 'GET_TODO_SUCCESS';
export const GET_TODO_ERROR = 'GET_TODO_ERROR';
export const REMOVE_TODO_PENDING = 'REMOVE_TODO_PENDING';
export const REMOVE_TODO_SUCCESS = 'REMOVE_TODO_SUCCESS';
export const REMOVE_TODO_ERROR = 'REMOVE_TODO_ERROR';

export const getTodoPending = () => ({
    type: GET_TODO_PENDING
})

export const getTodoSuccess = (todoList) => ({
    type: GET_TODO_SUCCESS,
    todoList
})

export const getTodoError = () => ({
    type: GET_TODO_ERROR
})

//discuss about local state and when in post. should you have 2 seperate actions for 1 action?

export const addTodo = (todoItem) => ({
    type: ADD_TODO,
    todoItem
});

export const getTodo = () => {
    return dispatch => {
        dispatch(getTodoPending());
        axios.get('/todolist.json')
        .then(function (response) {
            dispatch(getTodoSuccess(response.data.todoList))
        })
        .catch(function (error) {
            dispatch(getTodoError())
        });
    }
}

export const saveTodo = (todoItem) => {
    return (dispatch, getState) => {
        dispatch(saveTodoPending())
        const getTodoList = getState().todoList;
        axios.put('/todolist.json', {
            //problem here. need state from reducer to send list of todos arrays to firebase.
            //Can i dispatch actions from reducer?
            //YESSS, getstate para from redux thunk allows you get the state from the store directly!
            todoList: getTodoList
        })
        .then(function (response) {
            dispatch(saveTodoSuccess())
            // console.log(response);
        })
        .catch(function (error) {
            dispatch(saveTodoError())
            // console.log(error);
        });
    };
}

export const removeTodo = (todoItems) => ({
    type: REMOVE_TODO,
    todoItems
})

export const removeSaveTodo = () => {
    return (dispatch, getState) => {
        dispatch(removeTodoPending())
        const getTodoList = getState().todoList;
        axios.put('/todolist.json', {
            todoList: getTodoList
        })
        .then(function (response) {
            dispatch(removeTodoSuccess())
        })
        .catch(function (error) {
            dispatch(removeTodoError())
        });
    }
}

const removeTodoPending = () => ({
    type: REMOVE_TODO_PENDING
})

const removeTodoSuccess = () => ({
    type: REMOVE_TODO_SUCCESS
})

const removeTodoError = () => ({
    type: REMOVE_TODO_ERROR
})

const saveTodoPending = () => ({
    type: SAVE_TODO_PENDING
})

const saveTodoSuccess= () => ({
    type: SAVE_TODO_SUCCESS
})

const saveTodoError = () => ({
    type: SAVE_TODO_ERROR
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