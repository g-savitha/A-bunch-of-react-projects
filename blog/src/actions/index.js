import jsonPlaceholder from '../apis/jsonPlaceholder';
import _ from 'lodash';

export const fetchPosts = () => async (dispatch) => {
  const res = await jsonPlaceholder.get('/posts');
  dispatch({ type: 'FETCH_POSTS', payload: res.data });
};

export const fetchUser = (id) => async (dispatch) => {
  const res = await jsonPlaceholder.get(`/users/${id}`);
  dispatch({ type: 'FETCH_USER', payload: res.data });
};

// ***************** CALLING ACTION CREATOR INSIDE OF AN ACTION CREATOR ************************* //
// ************* ALTERNATE SOLUTION TO MEMOIZATION FOR OVERFETCHING NETWORK REQUESTS *************** //
export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  // whenever we call an action creator inside of another action creator
  //we need to make sure that we dispatch the result of calling an action creator
  await dispatch(fetchPosts());
  const userIds = _.uniq(_.map(getState().posts, 'userId'));
  userIds.forEach((id) => dispatch(fetchUser(id)));

  // ******************** REFACTOR WITH CHAIN METHOD ************************* //
  // _.chain(getState().posts)
  //   .map('userId') // takes the first arg of chain and returns an arr of user ids
  //   .uniq() // takes the output of map function
  //   .forEach((id) => dispatch(fetchUser(id))) // takes the output of uniq and calls fetchUser on each id
  //   .value(); // chain function wont work if we wont call value() at the end of it. Lets say we can execute entire chain using value function
};

// **************** MEMOIZED WAY **************** //

// export const fetchUser = (id) => (dispatch) => {
//   _fetchUser(id, dispatch);
// };

// // Downside of memoization is you can call each user only one time inside this app. If you want to refetch again you cant do it
// const _fetchUser = _.memoize(async (id, dispatch) => {
//   const res = await jsonPlaceholder.get(`/users/${id}`);
//   dispatch({ type: 'FETCH_USER', payload: res.data });
// });
