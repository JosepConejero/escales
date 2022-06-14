import actionTypes from "../actionTypes/actionTypes";

export const updateSequenceAction = (sequence) => ({
  type: actionTypes.updateSequence,
  sequence,
});

export const updateArpeggioAction = (arpeggio) => ({
  type: actionTypes.updateArpeggio,
  arpeggio,
});

export const setModusToKeyboardAction = (modus) => ({
  type: actionTypes.setModusToKeyboard,
  modus,
});

export const setModusToSequenceAction = (modus) => ({
  type: actionTypes.setModusToSequence,
  modus,
});

export const setModusToListAction = (modus) => ({
  type: actionTypes.setModusToList,
  modus,
});
