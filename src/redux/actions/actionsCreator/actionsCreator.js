import actionTypes from "../actionTypes/actionTypes";

export const updateSequenceAction = (sequence) => ({
  type: actionTypes.updateSequence,
  sequence,
});

export const updateArpeggioAction = (arpeggio) => ({
  type: actionTypes.updateArpeggio,
  arpeggio,
});
