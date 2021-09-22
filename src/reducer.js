const init = {
  username: 'Juhan',
  password: 'Iamjuhan'
}

export const Reducer = (state = init, action = {}) => {
  switch (action.type) {
    case 'CHANGE_USERNAME':
      return {
        ...state,
        username: "jubayeruhan",
        password: "iamjhan"
      }
    default:
      return state;
  }
}