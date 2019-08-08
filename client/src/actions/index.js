import axios from 'axios';
import { FETCH_USER } from './types';

export const fetchUser = () => async dispatch => {
  // 1. were returning a function
  // 2. were waiting for a response
  const res = await axios.get('/api/current_user');
  // 3. after we get response, we dispatch an action to our reducer
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const handleToken = (token) => async dispatch => {
  const res = await axios.post('/api/stripe', token);

  dispatch({ type: FETCH_USER, payload: res.data });
}