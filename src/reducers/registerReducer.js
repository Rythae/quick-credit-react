import { SIGN_UP, SIGNING_UP } from '../actions/types';

const initialState = {
    user: {},
    signingUp: false,
}

export default (state = initialState, action) => {
    switch(action.type) {
      case SIGNING_UP: 
        return {
          ...state,
          signingUp: true,
        }
      case SIGN_UP: 
        return {
          ...state,
          user: action.payload 
        }
      default:
        return state;
    }
}