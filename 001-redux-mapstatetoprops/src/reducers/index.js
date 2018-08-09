import * as ActionTypes from '../actions'
import { combineReducers } from 'redux'

const INITIAL_STATE = {
  name: "Welcome to React",
  intro: "This is intro.",
}

const app = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.UPDATE_APP_NAME:
      return {
        ...state,
        name: action.text
      }
    case ActionTypes.UPDATE_APP_INTRO:
      return {
        ...state,
        intro: action.text
      }
    default:
      return state
  }
}

const rootReducer = combineReducers({
  app,
})

export default rootReducer
