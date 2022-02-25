export default function userReducer(state = [], action) {
  switch (action.type) {
    case 'FETCH_USER':
      return [...state, action.payload];
    default:
      return state;
  }
}
