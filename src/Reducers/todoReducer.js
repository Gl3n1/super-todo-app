import {
  ADD_TODO,
  REMOVE_TODO,
  ADD_SELECT_TODO,
  REMOVE_SELECT_TODO,
  SAVE_TODO_PENDING,
  SAVE_TODO_SUCCESS,
  SAVE_TODO_ERROR,
  GET_TODO_SUCCESS,
  REMOVE_TODO_PENDING,
  REMOVE_TODO_SUCCESS,
  REMOVE_TODO_ERROR,
} from '../Actions/todoActions';

import '../utils/objectUtilities';

const initialState = {
  todoList: {},
  checked: [],
  numberofTodos: 0,
  saveTodoPending: false,
  removeTodoPending: false,
};

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TODO_SUCCESS:
      return {
        ...state,
        todoList: action.todoList,
        numberofTodos: action.todoList.length,
      };
    case ADD_TODO:
      return {
        ...state,
        todoList: {
          ...state.todoList,
          [state.numberofTodos]: action.todoItem,
        },
        numberofTodos: state.numberofTodos + 1,
      };
    case REMOVE_TODO:
      return {
        ...state,
        todoList: Object.filter(
          state.todoList,
          item => !state.checked.includes(item)
        ),
        checked: [],
        numberofTodos: state.numberofTodos - state.checked.length,
      };
    case ADD_SELECT_TODO:
      return {
        ...state,
        checked: [...state.checked, action.selectedItem],
      };
    case REMOVE_SELECT_TODO:
      return {
        ...state,
        checked: state.checked.filter(item => item !== action.selectedItem),
      };
    case SAVE_TODO_PENDING:
      return {
        ...state,
        saveTodoPending: true,
      };
    case SAVE_TODO_SUCCESS:
      return {
        ...state,
        saveTodoPending: false,
        saveTodoSuccess: true,
      };
    case SAVE_TODO_ERROR:
      return {
        ...state,
        saveTodoPending: false,
        saveTodoError: true,
      };
    case REMOVE_TODO_PENDING:
      return {
        ...state,
        removeTodoPending: true,
      };
    case REMOVE_TODO_SUCCESS:
      return {
        ...state,
        removeTodoPending: false,
        saveTodoSuccess: true,
      };
    case REMOVE_TODO_ERROR:
      return {
        ...state,
        saveTodoSuccess: false,
      };
    default:
      return state;
  }
};
