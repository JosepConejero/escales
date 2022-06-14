import actionTypes from "../actions/actionTypes/actionTypes";

const modusReducer = (modus = "", action = {}) => {
  let newModusState;
  switch (action.type) {
    case actionTypes.setModusToKeyboard:
      newModusState = "keyboard";
      break;
    case actionTypes.setModusToSequence:
      newModusState = "sequence";
      break;
    case actionTypes.setModusToList:
      newModusState = "list";
      break;
    default:
      newModusState = "sequence";
  }
  return newModusState;
};

export default modusReducer;
