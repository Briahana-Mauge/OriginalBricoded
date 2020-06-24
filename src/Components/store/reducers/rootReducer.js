import { combineReducers } from 'redux'

import themeReducer from './themeReducers'

const rootReducer = combineReducers({
  themeState: themeReducer,
})

export default rootReducer;