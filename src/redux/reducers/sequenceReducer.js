import actionTypes from "../actions/actionTypes/actionTypes";

const sequenceReducer = (sequence = [], action = {}) => {
  let newSequenceState;
  switch (action.type) {
    case actionTypes.loadSequence:
      // newSequenceState = [...action.sequence];
      //newSequenceState = [0, 2, 2, 1, 2, 2, 2, 1, 34];
      newSequenceState = [3, 3, 3, 3];
      break;
    case actionTypes.updateSequence:
      /* newSequenceState = sequence.map((question) =>
        question.id === action.question.id
          ? {
              ...action.question,
            }
          : { ...question }
      ); */
      //console.log("sequence dentro del reducer es: ", sequence);
      console.log(
        "sequence dentro del reducer (action.sequence) es: ",
        action.sequence
      );
      //newSequenceState = [...sequence];
      newSequenceState = [...action.sequence];
      break;
    default:
      // newSequenceState = [...sequence];
      //console.log("sequence dentro del reducer DEFAULT es: ", sequence);
      //newSequenceState = ["0", "2", "2", "1", "2", "2", "2", "1"];
      newSequenceState = [0, 2, 2, 1, 2, 2, 2, 1];
  }
  //newSequenceState = [0, 2, 2, 1, 2, 2, 2, 1];
  return newSequenceState;
};

export default sequenceReducer;
