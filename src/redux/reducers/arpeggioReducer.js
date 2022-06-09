import actionTypes from "../actions/actionTypes/actionTypes";

const arpeggioReducer = (arpeggio = [], action = {}) => {
  let newArpeggioState;
  switch (action.type) {
    case actionTypes.updateArpeggio:
      /* const stringSequence = [...action.sequence]; //recibo un array de strings
      newSequenceState = stringSequence.map((e) => JSON.parse(e)); //convierte a array de números */
      newArpeggioState = [...action.arpeggio].map((char) => +char);
      break;
    default:
      //newSequenceState = [0, 2, 2, 1, 2, 2, 2, 1];
      newArpeggioState = [0, 2, 4, 5, 7, 9, 11, 12, 11, 9, 7, 5, 4, 2];
  }
  return newArpeggioState;
};

export default arpeggioReducer;
