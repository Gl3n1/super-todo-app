import {
    ADD_TODO , 
    REMOVE_TODO, 
    ADD_SELECT_TODO, 
    REMOVE_SELECT_TODO,
    SAVE_TODO_PENDING,
    SAVE_TODO_SUCCESS,
    SAVE_TODO_ERROR
} from '../Actions/actions';

const initialState = {
  todoList:  [],
  checked: []
};

const todoReducer = (state = initialState,  action) => {
    switch(action.type) {
        case ADD_TODO:
            return {
                ...state,
                todoList: [...state.todoList,action.todoItem]
            };
            //Todo: add remove item action here
        case REMOVE_TODO:
            return {
                ...state,
                todoList: state.todoList.filter(item=>!state.checked.includes(item))
            }
        case ADD_SELECT_TODO:
            return {
                ...state,
                checked: [...state.checked, action.selectedItem]
            }
        case REMOVE_SELECT_TODO:
            return {
                ...state,
                checked: state.checked.filter(item=>item !== action.selectedItem)
            }
        case SAVE_TODO_PENDING:
            return {
                ...state,
                saveTodoPending: true
            }
        case SAVE_TODO_SUCCESS:
            return {
                ...state,
                saveTodoPending: false,
                saveTodoSuccess: true
            }
        case SAVE_TODO_ERROR:
            return {
                ...state,
                saveTodoPending: false,
                saveTodoError: true
            }
        default:
            return state
    }
};

export default todoReducer;
