import { RECEIVE_THEME } from '../actionTypes';

const initialState = {
  isThemeChanged: true,
  
}

const themeChangeReducer = (state = initialState, action) => {
  // copy state
  const newState = { ...state }

  // Deicide how the state is to be modified
  // depending on the action type
    switch (action.type) {
      case RECEIVE_THEME:
        newState.isThemeChanged =  !newState.isThemeChanged//!action.payload.isThemeChanged
        break;

      default:
        break;

    }
  
  return newState;

}

export default themeChangeReducer;