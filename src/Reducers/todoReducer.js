const todoReducer = (state = [],  action) => {
    switch(action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                {
                    todoList: action
                }
            ];
        default:
            return state
    }
};

export default todoReducer;
