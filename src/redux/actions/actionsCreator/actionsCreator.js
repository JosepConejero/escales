import actionTypes from "../actionTypes/actionTypes";

export const loadSequenceAction = (sequence) => ({
  type: actionTypes.loadSequence,
  sequence,
});

export const updateSequenceAction = (sequence) => ({
  type: actionTypes.updateSequence,
  sequence,
});
