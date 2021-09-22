const init = {
  username: 'Juhan',
  password: 'Iamjuhan'
}

export const Reducer = (state = init, action = {}) => {
  switch (action.type) {
    case 'CHANGE_USERNAME':
      return {
        ...state,
        username: "Jubayer Juhan",
      }
    default:
      return state;
  }
}