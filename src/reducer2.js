const init = {
  username: 'sjhgdhfuck u',
  password: 'Iamjuhan'
}

export const Reducerx = (state = init, action = {}) => {
  switch (action.type) {
    case 'CHANGE_PASS':
      return {
        ...state,
        password: action.payload,
      }
    default:
      return state;
  }
}