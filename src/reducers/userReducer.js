export default (state = {}, action) => {
    switch (action.type) {
    case 'GET_USER':
      const { email, username } = action;
      let newState = Object.assign({}, state, {
        [id]: {
          email: email,
          username: username,
        }
      });
      return newState;
    default:
      return state;
    }
  };