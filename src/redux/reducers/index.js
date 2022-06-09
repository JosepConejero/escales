import { combineReducers } from "redux";
import sequenceReducer from "./sequenceReducer";
import arpeggioReducer from "./arpeggioReducer";

const rootReducer = combineReducers({
  sequenceData: sequenceReducer,
  arpeggioData: arpeggioReducer,
});

export default rootReducer;
