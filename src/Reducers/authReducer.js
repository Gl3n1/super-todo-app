import { SELECT_REG_TYPE } from '../Actions/authActions';

const initialState = {
  registrationType: '',
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_REG_TYPE:
      return {
        ...state,
        registrationType: action.regType,
      };
    default:
      return state;
  }
};
