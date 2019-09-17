import axios from 'axios';
import { SIGN_UP, SIGNING_UP } from './types';

export const register = (user) => dispatch => {
  dispatch({
    type: SIGNING_UP
  })
  axios.post('https://my-quick-credit.herokuapp.com/api/v1/auth/signup', user)
    .then(res => {
      console.log('Created user response', res);
      dispatch({
        type: SIGN_UP,
        payload: res.data.data
      })
    });
}