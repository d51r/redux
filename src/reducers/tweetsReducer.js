import { tweets } from '../data'

const tweetsReducer = (state = tweets, action) => {
  switch (action.type) {
    case 'ADD_TWEET': {
      return [
        ...state,
        {
          id: Date.now(),
          text: action.text
        }
      ];
    }
    case 'DELETE_TWEET': {
      return state.filter(value => value.id !== action.id)
    }
    default:
      return state
  }
}

export default tweetsReducer