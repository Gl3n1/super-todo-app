import {ADD_TODO} from '../Actions/actions';

const initialState = {
  todoList:  []
};

const todoReducer = (state = initialState,  action) => {
    switch(action.type) {
        case ADD_TODO:
            return {
                ...state,
                todoList: [...state.todoList,action.todoItem]
            };
            //Todo: add remove item action here
        default:
            return state
    }
};

export default todoReducer;
