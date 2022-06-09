import actionTypes from "../actions/actionTypes/actionTypes";

const sequenceReducer = (sequence = [], action = {}) => {
  let newSequenceState;
  switch (action.type) {
    case actionTypes.updateSequence:
      /* const stringSequence = [...action.sequence]; //recibo un array de strings
      newSequenceState = stringSequence.map((e) => JSON.parse(e)); //convierte a array de números */
      newSequenceState = [...action.sequence].map((char) => +char);
      break;
    default:
      newSequenceState = [0, 2, 2, 1, 2, 2, 2, 1];
    //newSequenceState = [0, 2, 4, 5, 7, 9, 11, 12, 11, 9, 7, 5, 4, 2];
  }
  return newSequenceState;
};

export default sequenceReducer;
