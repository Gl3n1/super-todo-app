import {ADD_TODO , REMOVE_TODO, ADD_SELECT_TODO, REMOVE_SELECT_TODO} from '../Actions/actions';

const initialState = {
  todoList:  ['eat','sleep','drink'],
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
        default:
            return state
    }
};

export default todoReducer;
