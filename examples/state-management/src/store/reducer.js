import {
  INCREMENT,
  SET_INTERVAL,
  INCREASE_COUNT,
  DECREASE_COUNT,
  RESTART,
} from './types'

const initialState = {
  count: 0,
  countInterval: 1,
  increment: false,
}

function reducer(state = initialState, action){
  switch(action.type){
    case INCREMENT:
      return {
        ...state,
        increment: action.increment
       }
    case SET_INTERVAL:
      return {
          ...state,
          countInterval: parseInt(action.countInterval)
        }
    case INCREASE_COUNT:
      return {
          ...state,
          count: state.count + state.countInterval
        }
    case DECREASE_COUNT:
      return {
          ...state,
          count: state.count - state.countInterval
        }
    case RESTART:
      return initialState;
    default:
      return state;
  }
}

export default reducer
